import { strapiClient } from './config';
import { normalizeCar, normalizeTestimonial, normalizeFAQ, normalizeFeature } from './utils';
import { Car } from '@/types';

// Fetch all cars
export async function getCars(featured?: boolean) {
  try {
    // 5️⃣ Use publicationState=live to get only published content
    const params: any = {
      'filters[available][$eq]': true,
      'publicationState': 'live', // 5️⃣ Only published content
      sort: 'createdAt:asc', // Первая добавленная - первая, последняя - последняя
    };

    // Try both populate syntaxes for compatibility
    // Strapi v5: populate[image]=*
    // Strapi v4: populate=image
    params['populate[image]'] = '*';
    params['populate'] = 'image'; // Fallback for v4

    if (featured) {
      params['filters[featured][$eq]'] = true;
      // Убрано ограничение pagination[limit] чтобы показывать все featured машины
    }

    const response = await strapiClient.get('/cars', { params });

    // 1️⃣ Protection: Ensure data is an array
    const carsData = response.data?.data;
    if (!Array.isArray(carsData)) {
      console.warn('Strapi returned non-array data for cars:', carsData);
      return [];
    }

    // 1️⃣ Protection: Filter out null/undefined and normalize
    const cars = carsData
      .filter((car: any) => car !== null && car !== undefined)
      .map(normalizeCar)
      .filter((car: Car) => {
        // Strict validation - only return cars with all required fields
        return car && 
               car.id && 
               typeof car.name === 'string' && 
               car.name.length > 0 &&
               typeof car.pricePerMonth === 'number';
      });

    return cars;
  } catch (error: any) {
    // If Content Type doesn't exist (404), return empty array silently
    if (error?.response?.status === 404) {
      return [];
    }
    // Handle connection errors (e.g., during build when Strapi is not available)
    if (error?.code === 'ECONNREFUSED' || error?.code === 'ENOTFOUND' || error?.message?.includes('ECONNREFUSED')) {
      console.warn('Strapi connection refused (likely during build). Returning empty array.');
      return [];
    }
    // Handle AggregateError
    if (error instanceof AggregateError) {
      const firstError = error.errors?.[0];
      if (firstError?.code === 'ECONNREFUSED' || firstError?.code === 'ENOTFOUND') {
        console.warn('Strapi connection refused in AggregateError (likely during build). Returning empty array.');
        return [];
      }
    }
    console.error('Error fetching cars:', error);
    return [];
  }
}

// Fetch featured cars
export async function getFeaturedCars() {
  return getCars(true);
}

// Fetch single car by ID
export async function getCarById(id: string) {
  try {
    console.log(`[getCarById] Starting fetch for car ID: ${id}`);
    console.log(`[getCarById] Strapi URL: ${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}`);
    console.log(`[getCarById] Has API token: ${!!process.env.STRAPI_API_TOKEN}`);
    
    // Try using filters approach (like getCars) first, then direct ID access
    const attempts = [
      // Approach 1: Use filters with publicationState - populate all images and subscription data
      {
        method: 'filter',
        params: {
          'filters[id][$eq]': id,
          'publicationState': 'live',
          'populate[image]': '*',
          'populate[additionalImages]': '*',
          'populate': 'image,additionalImages',
        },
      },
      // Approach 2: Use filters without publicationState - populate all
      {
        method: 'filter',
        params: {
          'filters[id][$eq]': id,
          'populate[image]': '*',
          'populate[additionalImages]': '*',
          'populate': 'image,additionalImages',
        },
      },
      // Approach 3: Use populate all with filters
      {
        method: 'filter',
        params: {
          'filters[id][$eq]': id,
          'publicationState': 'live',
          'populate': '*',
        },
      },
      // Approach 4: Direct ID access with publicationState - populate all
      {
        method: 'direct',
        params: {
          'populate[image]': '*',
          'populate[additionalImages]': '*',
          'populate': 'image,additionalImages',
          'publicationState': 'live',
        },
      },
      // Approach 5: Direct ID access with populate all
      {
        method: 'direct',
        params: {
          'populate': '*',
          'publicationState': 'live',
        },
      },
      // Approach 6: Direct ID access with populate all (no publicationState)
      {
        method: 'direct',
        params: {
          'populate': '*',
        },
      },
      // Approach 7: Direct ID access minimal
      {
        method: 'direct',
        params: {},
      },
    ];

    for (const attempt of attempts) {
      try {
        console.log(`[getCarById] Attempting ${attempt.method} method with params:`, attempt.params);
        
        let response;
        if (attempt.method === 'filter') {
          response = await strapiClient.get('/cars', { params: attempt.params });
        } else {
          response = await strapiClient.get(`/cars/${id}`, { params: attempt.params });
        }
        
        console.log(`[getCarById] Response received:`, {
          status: response.status,
          method: attempt.method,
          hasData: !!response.data,
          hasDataData: !!response.data?.data,
          dataStructure: response.data ? Object.keys(response.data) : 'no data',
        });
        
        // Handle filter response (array)
        if (attempt.method === 'filter') {
          const carsData = response.data?.data;
          if (Array.isArray(carsData) && carsData.length > 0) {
            const car = carsData[0];
            const rawData = car.attributes || car;
            console.log(`[getCarById] Car found via filter, normalizing...`, {
              id: car.id,
              hasAttributes: !!car.attributes,
              hasImage: !!rawData.image,
              hasAdditionalImages: !!rawData.additionalImages,
              additionalImagesCount: Array.isArray(rawData.additionalImages) ? rawData.additionalImages.length : 0,
              hasPermanenceOptions: !!rawData.permanenceOptions,
              hasMileageOptions: !!rawData.mileageOptions,
            });
            const normalized = normalizeCar(car);
            console.log(`[getCarById] Car normalized successfully:`, {
              id: normalized.id,
              name: normalized.name,
              hasPrice: !!normalized.pricePerMonth,
              additionalImagesCount: normalized.additionalImages?.length || 0,
              permanenceOptionsCount: normalized.permanenceOptions?.length || 0,
              mileageOptionsCount: normalized.mileageOptions?.length || 0,
            });
            return normalized;
          } else if (Array.isArray(carsData) && carsData.length === 0) {
            console.log(`[getCarById] Filter returned empty array, trying next method...`);
            continue;
          }
        }
        
        // Handle direct response
        let car = response.data?.data;
        if (!car && response.data && !response.data.data) {
          car = response.data;
        }
        
        if (car) {
          const rawData = car.attributes || car;
          console.log(`[getCarById] Car found via direct access, normalizing...`, {
            id: car.id,
            hasAttributes: !!car.attributes,
            hasImage: !!rawData.image,
            hasAdditionalImages: !!rawData.additionalImages,
            additionalImagesCount: Array.isArray(rawData.additionalImages) ? rawData.additionalImages.length : 0,
            hasPermanenceOptions: !!rawData.permanenceOptions,
            hasMileageOptions: !!rawData.mileageOptions,
          });
          const normalized = normalizeCar(car);
          console.log(`[getCarById] Car normalized successfully:`, {
            id: normalized.id,
            name: normalized.name,
            hasPrice: !!normalized.pricePerMonth,
            additionalImagesCount: normalized.additionalImages?.length || 0,
            permanenceOptionsCount: normalized.permanenceOptions?.length || 0,
            mileageOptionsCount: normalized.mileageOptions?.length || 0,
          });
          return normalized;
        } else {
          console.warn(`[getCarById] Car data is null or undefined in response`);
        }
      } catch (error: any) {
        // Handle AggregateError - extract the first error
        if (error instanceof AggregateError && error.errors && error.errors.length > 0) {
          console.error(`[getCarById] AggregateError detected, extracting first error:`, error.errors);
          error = error.errors[0];
        }
        
        console.log(`[getCarById] Error caught for ${attempt.method} method:`, {
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          message: error?.message,
          code: error?.code,
        });
        
        // If 404, try next method
        if (error?.response?.status === 404) {
          console.log(`[getCarById] 404 error - trying next method...`);
          continue;
        }
        // If 400, try next method
        if (error?.response?.status === 400) {
          console.log(`[getCarById] 400 error - trying next method...`);
          continue;
        }
        // For other errors, try next method if available
        if (attempt !== attempts[attempts.length - 1]) {
          console.log(`[getCarById] Error occurred but more attempts available, continuing...`);
          continue;
        }
        // Last attempt failed
        console.error(`[getCarById] All attempts failed. Last error:`, {
          id,
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          data: error?.response?.data,
          message: error?.message,
        });
      }
    }

    console.warn(`[getCarById] All attempts failed for car ${id}, returning null`);
    return null;
  } catch (error: any) {
    // Catch any AggregateError or other unexpected errors
    if (error instanceof AggregateError) {
      console.error('AggregateError fetching car:', {
        id,
        errors: error.errors,
        message: error.message,
      });
    } else {
      console.error('Unexpected error fetching car:', {
        id,
        message: error?.message,
        error: error,
      });
    }
    return null;
  }
}

// Fetch testimonials
export async function getTestimonials() {
  try {
    const response = await strapiClient.get('/testimonials', {
      params: {
        populate: 'image',
        sort: 'createdAt:desc',
      },
    });

    const testimonials = response.data.data || [];
    return testimonials.map(normalizeTestimonial);
  } catch (error: any) {
    // If Content Type doesn't exist (404), return empty array silently
    if (error?.response?.status === 404) {
      return [];
    }
    // Handle connection errors (e.g., during build when Strapi is not available)
    if (error?.code === 'ECONNREFUSED' || error?.code === 'ENOTFOUND' || error?.message?.includes('ECONNREFUSED')) {
      console.warn('Strapi connection refused (likely during build). Returning empty array.');
      return [];
    }
    // Handle AggregateError
    if (error instanceof AggregateError) {
      const firstError = error.errors?.[0];
      if (firstError?.code === 'ECONNREFUSED' || firstError?.code === 'ENOTFOUND') {
        console.warn('Strapi connection refused in AggregateError (likely during build). Returning empty array.');
        return [];
      }
    }
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

// Fetch FAQs
export async function getFAQs() {
  try {
    const response = await strapiClient.get('/faqs', {
      params: {
        sort: 'order:asc',
      },
    });

    const faqs = response.data.data || [];
    return faqs.map(normalizeFAQ);
  } catch (error: any) {
    // If Content Type doesn't exist (404), return empty array silently
    if (error?.response?.status === 404) {
      return [];
    }
    // Handle connection errors (e.g., during build when Strapi is not available)
    if (error?.code === 'ECONNREFUSED' || error?.code === 'ENOTFOUND' || error?.message?.includes('ECONNREFUSED')) {
      console.warn('Strapi connection refused (likely during build). Returning empty array.');
      return [];
    }
    // Handle AggregateError
    if (error instanceof AggregateError) {
      const firstError = error.errors?.[0];
      if (firstError?.code === 'ECONNREFUSED' || firstError?.code === 'ENOTFOUND') {
        console.warn('Strapi connection refused in AggregateError (likely during build). Returning empty array.');
        return [];
      }
    }
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

// Fetch features
export async function getFeatures() {
  try {
    const response = await strapiClient.get('/features', {
      params: {
        populate: 'image',
        sort: 'order:asc',
      },
    });

    const features = response.data.data || [];
    return features.map(normalizeFeature);
  } catch (error: any) {
    // If Content Type doesn't exist (404), return empty array silently
    if (error?.response?.status === 404) {
      return [];
    }
    // Handle connection errors (e.g., during build when Strapi is not available)
    if (error?.code === 'ECONNREFUSED' || error?.code === 'ENOTFOUND' || error?.message?.includes('ECONNREFUSED')) {
      console.warn('Strapi connection refused (likely during build). Returning empty array.');
      return [];
    }
    // Handle AggregateError
    if (error instanceof AggregateError) {
      const firstError = error.errors?.[0];
      if (firstError?.code === 'ECONNREFUSED' || firstError?.code === 'ENOTFOUND') {
        console.warn('Strapi connection refused in AggregateError (likely during build). Returning empty array.');
        return [];
      }
    }
    console.error('Error fetching features:', error);
    return [];
  }
}

