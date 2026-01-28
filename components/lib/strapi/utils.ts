import { Car, Testimonial, FAQ, Feature } from '@/types';

// Helper to sanitize text content from Strapi - STRICT version
// Removes ALL HTML, styles, scripts, and anything that could affect layout
function sanitizeText(text: any): string {
  if (!text) return '';
  const str = String(text);
  
  // Remove ALL HTML tags (including script, style, etc.)
  let cleaned = str.replace(/<[^>]*>/g, '');
  
  // Remove any style attributes that might have been in HTML
  cleaned = cleaned.replace(/style\s*=\s*["'][^"']*["']/gi, '');
  
  // Remove script tags content
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Decode basic HTML entities
  cleaned = cleaned
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
  
  // Remove any remaining special characters that could affect CSS
  cleaned = cleaned.replace(/[{}[\]]/g, '');
  
  return cleaned.trim();
}

// Helper to normalize Strapi data structure
// Returns ONLY clean data - no styles, no HTML, just primitives and image object
export function normalizeCar(car: any): Car {
  try {
    console.log('[normalizeCar] Starting normalization:', {
      hasCar: !!car,
      carId: car?.id,
      hasAttributes: !!car?.attributes,
      carKeys: car ? Object.keys(car) : [],
    });
    
    // 1️⃣ Protection: Check if car exists
    if (!car || (car === null || car === undefined)) {
      console.error('[normalizeCar] Car data is null or undefined');
      throw new Error('Car data is null or undefined');
    }

    // Extract raw data from Strapi format
    // 7️⃣ Protection: Handle both attributes format and direct format
    const rawData = car.attributes || car;
    
    console.log('[normalizeCar] Raw data extracted:', {
      hasRawData: !!rawData,
      rawDataKeys: rawData ? Object.keys(rawData) : [],
      hasName: !!rawData?.name,
      hasPrice: !!rawData?.pricePerMonth,
    });
    
    // 1️⃣ Protection: Ensure we have valid data
    if (!rawData || (rawData === null || rawData === undefined)) {
      console.error('[normalizeCar] Car rawData is null or undefined');
      throw new Error('Car rawData is null or undefined');
    }
    
    // Return ONLY clean, normalized data - no styles, no HTML, just primitives
    const normalizedCar: Car = {
      id: car.id?.toString() || car._id?.toString() || '',
      _id: car.id?.toString() || car._id?.toString() || '',
      // Only plain text strings - sanitized (1️⃣ Protection: null/undefined handling)
      name: sanitizeText(rawData.name || ''),
      brand: sanitizeText(rawData.brand || ''),
      model: sanitizeText(rawData.model || ''),
      description: sanitizeText(rawData.description || ''),
      // Pricing configuration - parse from single JSON field
      pricingConfig: (() => {
        // Try to get pricingConfig from rawData
        if (rawData.pricingConfig && typeof rawData.pricingConfig === 'object') {
          return rawData.pricingConfig;
        }
        // If not found, try to construct from individual fields (backward compatibility)
        const config: any = {};
        if (typeof rawData.pricePerMonthSuscripcion === 'number') config.pricePerMonthSuscripcion = rawData.pricePerMonthSuscripcion;
        if (typeof rawData.priceOriginalSuscripcion === 'number') config.priceOriginalSuscripcion = rawData.priceOriginalSuscripcion;
        if (typeof rawData.pricePerMonthEmpresas === 'number') config.pricePerMonthEmpresas = rawData.pricePerMonthEmpresas;
        if (typeof rawData.priceOriginalEmpresas === 'number') config.priceOriginalEmpresas = rawData.priceOriginalEmpresas;
        if (typeof rawData.purchasePrice === 'number') config.purchasePrice = rawData.purchasePrice;
        if (Array.isArray(rawData.installmentOptions)) config.installmentOptions = rawData.installmentOptions;
        return Object.keys(config).length > 0 ? config : undefined;
      })(),
      // Extract individual fields from pricingConfig for easy access
      pricePerMonthSuscripcion: (() => {
        if (rawData.pricingConfig?.pricePerMonthSuscripcion !== undefined) {
          return typeof rawData.pricingConfig.pricePerMonthSuscripcion === 'number' ? rawData.pricingConfig.pricePerMonthSuscripcion : undefined;
        }
        return typeof rawData.pricePerMonthSuscripcion === 'number' && !isNaN(rawData.pricePerMonthSuscripcion)
          ? rawData.pricePerMonthSuscripcion
          : undefined;
      })(),
      priceOriginalSuscripcion: (() => {
        if (rawData.pricingConfig?.priceOriginalSuscripcion !== undefined) {
          return typeof rawData.pricingConfig.priceOriginalSuscripcion === 'number' ? rawData.pricingConfig.priceOriginalSuscripcion : undefined;
        }
        return typeof rawData.priceOriginalSuscripcion === 'number' && !isNaN(rawData.priceOriginalSuscripcion)
          ? rawData.priceOriginalSuscripcion
          : undefined;
      })(),
      pricePerMonthEmpresas: (() => {
        if (rawData.pricingConfig?.pricePerMonthEmpresas !== undefined) {
          return typeof rawData.pricingConfig.pricePerMonthEmpresas === 'number' ? rawData.pricingConfig.pricePerMonthEmpresas : undefined;
        }
        return typeof rawData.pricePerMonthEmpresas === 'number' && !isNaN(rawData.pricePerMonthEmpresas)
          ? rawData.pricePerMonthEmpresas
          : undefined;
      })(),
      priceOriginalEmpresas: (() => {
        if (rawData.pricingConfig?.priceOriginalEmpresas !== undefined) {
          return typeof rawData.pricingConfig.priceOriginalEmpresas === 'number' ? rawData.pricingConfig.priceOriginalEmpresas : undefined;
        }
        return typeof rawData.priceOriginalEmpresas === 'number' && !isNaN(rawData.priceOriginalEmpresas)
          ? rawData.priceOriginalEmpresas
          : undefined;
      })(),
      purchasePrice: (() => {
        if (rawData.pricingConfig?.purchasePrice !== undefined) {
          return typeof rawData.pricingConfig.purchasePrice === 'number' ? rawData.pricingConfig.purchasePrice : undefined;
        }
        return typeof rawData.purchasePrice === 'number' && !isNaN(rawData.purchasePrice)
          ? rawData.purchasePrice
          : undefined;
      })(),
      installmentOptions: (() => {
        if (rawData.pricingConfig?.installmentOptions !== undefined) {
          if (Array.isArray(rawData.pricingConfig.installmentOptions)) {
            return rawData.pricingConfig.installmentOptions.map((opt: any) => {
              if (typeof opt === 'object' && opt !== null) {
                return {
                  months: typeof opt.months === 'number' ? opt.months : 0,
                  totalPrice: typeof opt.totalPrice === 'number' ? opt.totalPrice : 0,
                  monthlyPayment: typeof opt.monthlyPayment === 'number' ? opt.monthlyPayment : 0,
                };
              }
              return { months: 0, totalPrice: 0, monthlyPayment: 0 };
            }).filter((opt: any) => opt.months > 0 && opt.totalPrice > 0);
          }
        }
        if (Array.isArray(rawData.installmentOptions)) {
          return rawData.installmentOptions.map((opt: any) => {
            if (typeof opt === 'object' && opt !== null) {
              return {
                months: typeof opt.months === 'number' ? opt.months : 0,
                totalPrice: typeof opt.totalPrice === 'number' ? opt.totalPrice : 0,
                monthlyPayment: typeof opt.monthlyPayment === 'number' ? opt.monthlyPayment : 0,
              };
            }
            return { months: 0, totalPrice: 0, monthlyPayment: 0 };
          }).filter((opt: any) => opt.months > 0 && opt.totalPrice > 0);
        }
        return undefined;
      })(),
      // Legacy fields - computed for backward compatibility
      pricePerMonth: (() => {
        // Use suscripcion price if available
        if (rawData.pricingConfig?.pricePerMonthSuscripcion !== undefined) {
          return typeof rawData.pricingConfig.pricePerMonthSuscripcion === 'number' ? rawData.pricingConfig.pricePerMonthSuscripcion : 0;
        }
        if (typeof rawData.pricePerMonthSuscripcion === 'number' && !isNaN(rawData.pricePerMonthSuscripcion)) {
          return rawData.pricePerMonthSuscripcion;
        }
        return typeof rawData.pricePerMonth === 'number' && !isNaN(rawData.pricePerMonth) 
          ? rawData.pricePerMonth 
          : 0;
      })(),
      originalPrice: (() => {
        // Use suscripcion original price if available
        if (rawData.pricingConfig?.priceOriginalSuscripcion !== undefined) {
          return typeof rawData.pricingConfig.priceOriginalSuscripcion === 'number' ? rawData.pricingConfig.priceOriginalSuscripcion : undefined;
        }
        if (typeof rawData.priceOriginalSuscripcion === 'number' && !isNaN(rawData.priceOriginalSuscripcion)) {
          return rawData.priceOriginalSuscripcion;
        }
        return typeof rawData.originalPrice === 'number' && !isNaN(rawData.originalPrice)
          ? rawData.originalPrice
          : undefined;
      })(),
      // Only plain text strings
      location: sanitizeText(rawData.location || ''),
      // Only image object (no styles) - 1️⃣ Protection: null handling
      image: (() => {
        const img = rawData.image || null;
        console.log('[normalizeCar] Image data:', {
          hasImage: !!img,
          imageType: typeof img,
          imageKeys: img ? Object.keys(img) : [],
          imageValue: JSON.stringify(img, null, 2).substring(0, 300),
        });
        return img;
      })(),
      additionalImages: (() => {
        console.log('[normalizeCar] Additional images:', {
          hasData: !!rawData.additionalImages,
          isArray: Array.isArray(rawData.additionalImages),
          length: Array.isArray(rawData.additionalImages) ? rawData.additionalImages.length : 0,
          value: rawData.additionalImages,
        });
        if (Array.isArray(rawData.additionalImages) && rawData.additionalImages.length > 0) {
          return rawData.additionalImages;
        }
        return undefined;
      })(),
      // Only array of strings (7️⃣ Protection: array handling)
      features: Array.isArray(rawData.features) 
        ? rawData.features
            .filter((f: any) => f !== null && f !== undefined)
            .map((f: any) => sanitizeText(typeof f === 'string' ? f : String(f)))
            .filter((f: string) => f.length > 0) // Remove empty strings
        : [],
      // Only plain text string
      category: sanitizeText(rawData.category || 'suv') as 'suv' | 'sedan' | 'hatchback' | 'convertible' | 'coupe',
      // Only boolean (1️⃣ Protection: boolean conversion)
      available: rawData.available !== undefined && rawData.available !== null 
        ? Boolean(rawData.available) 
        : true,
      featured: rawData.featured !== undefined && rawData.featured !== null
        ? Boolean(rawData.featured)
        : false,
      // Service availability flags - independent of pricing data
      availableForSuscripcion: rawData.availableForSuscripcion !== undefined && rawData.availableForSuscripcion !== null
        ? Boolean(rawData.availableForSuscripcion)
        : true, // Default to true for backward compatibility
      availableForEmpresas: rawData.availableForEmpresas !== undefined && rawData.availableForEmpresas !== null
        ? Boolean(rawData.availableForEmpresas)
        : true, // Default to true for backward compatibility
      availableForCompra: rawData.availableForCompra !== undefined && rawData.availableForCompra !== null
        ? Boolean(rawData.availableForCompra)
        : true, // Default to true for backward compatibility
      // Subscription configuration
      minPermanence: typeof rawData.minPermanence === 'number' && !isNaN(rawData.minPermanence)
        ? rawData.minPermanence
        : undefined,
      permanenceOptions: (() => {
        console.log('[normalizeCar] Permanence options:', {
          hasData: !!rawData.permanenceOptions,
          isArray: Array.isArray(rawData.permanenceOptions),
          value: rawData.permanenceOptions,
        });
        if (Array.isArray(rawData.permanenceOptions)) {
          // Get base price for suscripcion (from pricingConfig or direct field)
          const basePrice = (() => {
            if (rawData.pricingConfig?.pricePerMonthSuscripcion !== undefined) {
              return typeof rawData.pricingConfig.pricePerMonthSuscripcion === 'number' 
                ? rawData.pricingConfig.pricePerMonthSuscripcion 
                : 0;
            }
            if (typeof rawData.pricePerMonthSuscripcion === 'number' && !isNaN(rawData.pricePerMonthSuscripcion)) {
              return rawData.pricePerMonthSuscripcion;
            }
            return typeof rawData.pricePerMonth === 'number' && !isNaN(rawData.pricePerMonth)
              ? rawData.pricePerMonth
              : 0;
          })();
          
          return rawData.permanenceOptions.map((opt: any) => {
            // Handle case when opt is a string or number (from Strapi JSON field)
            if (typeof opt === 'string' || typeof opt === 'number') {
              const months = typeof opt === 'number' ? opt : parseInt(String(opt), 10);
              return {
                months: !isNaN(months) ? months : 0,
                price: basePrice,
                available: true,
              };
            }
            // Handle case when opt is an object
            return {
              months: typeof opt.months === 'number' ? opt.months : (typeof opt === 'number' ? opt : 0),
              price: typeof opt.price === 'number' && opt.price > 0 ? opt.price : basePrice,
              available: Boolean(opt.available !== false),
            };
          });
        }
        return undefined;
      })(),
      mileageOptions: (() => {
        console.log('[normalizeCar] Mileage options:', {
          hasData: !!rawData.mileageOptions,
          isArray: Array.isArray(rawData.mileageOptions),
          value: rawData.mileageOptions,
        });
        if (Array.isArray(rawData.mileageOptions)) {
          return rawData.mileageOptions.map((opt: any, index: number) => {
            // Handle case when opt is a string or number (from Strapi JSON field)
            if (typeof opt === 'string' || typeof opt === 'number') {
              const km = typeof opt === 'number' ? opt : parseInt(String(opt), 10);
              return {
                km: !isNaN(km) ? km : 0,
                included: index === 0, // First option is included by default
                price: undefined,
              };
            }
            // Handle case when opt is an object
            return {
              km: typeof opt.km === 'number' ? opt.km : (typeof opt === 'number' ? opt : 0),
              included: Boolean(opt.included === true),
              price: typeof opt.price === 'number' ? opt.price : undefined,
            };
          });
        }
        return undefined;
      })(),
      // Enterprise rental configuration (empresas)
      rentalMinMonths: typeof rawData.rentalMinMonths === 'number' && !isNaN(rawData.rentalMinMonths)
        ? rawData.rentalMinMonths
        : undefined,
      rentalMaxMonths: typeof rawData.rentalMaxMonths === 'number' && !isNaN(rawData.rentalMaxMonths)
        ? rawData.rentalMaxMonths
        : undefined,
      rentalPrices: (() => {
        if (Array.isArray(rawData.rentalPrices)) {
          return rawData.rentalPrices.map((price: any) => {
            if (typeof price === 'object' && price !== null) {
              return {
                months: typeof price.months === 'number' ? price.months : 0,
                price: typeof price.price === 'number' ? price.price : 0,
              };
            }
            return { months: 0, price: 0 };
          }).filter((p: any) => p.months > 0 && p.price > 0);
        }
        return undefined;
      })(),
      detailedDescription: rawData.detailedDescription ? sanitizeText(rawData.detailedDescription) : undefined,
      // Only strings or undefined
      stripePriceId: rawData.stripePriceId ? String(rawData.stripePriceId) : undefined,
      stripeProductId: rawData.stripeProductId ? String(rawData.stripeProductId) : undefined,
      // DO NOT include attributes - components should use only normalized fields above
    };
    
    console.log('[normalizeCar] Normalization successful:', {
      id: normalizedCar.id,
      name: normalizedCar.name,
      pricePerMonth: normalizedCar.pricePerMonth,
      hasImage: !!normalizedCar.image,
    });
    
    return normalizedCar;
  } catch (error) {
    console.error('Error normalizing car:', error, car);
    // Return safe default with only clean data
    return {
      id: '',
      _id: '',
      name: 'Unknown Car',
      brand: '',
      model: '',
      description: '',
      pricePerMonth: 0,
      location: '',
      image: null,
      features: [],
      category: 'suv',
      available: false,
      featured: false,
      availableForSuscripcion: true,
      availableForEmpresas: true,
      availableForCompra: true,
    };
  }
}

export function normalizeTestimonial(testimonial: any): Testimonial {
  if (testimonial.attributes) {
    return {
      id: testimonial.id?.toString() || testimonial._id,
      _id: testimonial.id?.toString() || testimonial._id,
      name: testimonial.attributes.name,
      role: testimonial.attributes.role,
      image: testimonial.attributes.image,
      rating: testimonial.attributes.rating,
      comment: testimonial.attributes.comment,
      attributes: testimonial.attributes,
    };
  }
  return {
    ...testimonial,
    id: testimonial.id || testimonial._id,
    _id: testimonial._id || testimonial.id,
  };
}

export function normalizeFAQ(faq: any): FAQ {
  if (faq.attributes) {
    return {
      id: faq.id?.toString() || faq._id,
      _id: faq.id?.toString() || faq._id,
      question: faq.attributes.question,
      answer: faq.attributes.answer,
      order: faq.attributes.order,
      attributes: faq.attributes,
    };
  }
  return {
    ...faq,
    id: faq.id || faq._id,
    _id: faq._id || faq.id,
  };
}

export function normalizeFeature(feature: any): Feature {
  if (feature.attributes) {
    return {
      id: feature.id?.toString() || feature._id,
      _id: feature.id?.toString() || feature._id,
      title: feature.attributes.title,
      description: feature.attributes.description,
      image: feature.attributes.image,
      order: feature.attributes.order,
      attributes: feature.attributes,
    };
  }
  return {
    ...feature,
    id: feature.id || feature._id,
    _id: feature._id || feature.id,
  };
}

