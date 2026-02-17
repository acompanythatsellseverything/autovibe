import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

// Create axios instance for Strapi API
export const strapiClient = axios.create({
  baseURL: `${STRAPI_URL}/api`,
});

// Helper function to convert Strapi URL to proxy URL if needed
// This fixes SSL protocol errors when Vercel (HTTPS) tries to load images from HTTP Strapi
function getProxiedImageUrl(strapiUrl: string): string {
  // Check if Strapi URL is HTTP (not HTTPS)
  const isHttpStrapi = strapiUrl.startsWith('http://');
  
  // In production (Vercel), we're always on HTTPS, so we need to proxy HTTP images
  // In development, we can use direct URLs
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isHttpStrapi && isProduction) {
    // Extract the path from the Strapi URL
    // e.g., "http://example.com/uploads/image.jpg" -> "uploads/image.jpg"
    try {
      const url = new URL(strapiUrl);
      let path = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;
      
      // Preserve query parameters if they exist (though Strapi images typically don't have them)
      if (url.search) {
        path += url.search;
      }
      
      // Use the proxy route
      return `/api/strapi-image/${path}`;
    } catch (e) {
      // If URL parsing fails, try to extract path manually
      const pathMatch = strapiUrl.match(/https?:\/\/[^\/]+(.*?)(?:\?|$)/);
      if (pathMatch) {
        let path = pathMatch[1].startsWith('/') ? pathMatch[1].slice(1) : pathMatch[1];
        // Preserve query string if present
        const queryMatch = strapiUrl.match(/\?(.*)$/);
        if (queryMatch) {
          path += '?' + queryMatch[1];
        }
        return `/api/strapi-image/${path}`;
      }
    }
  }
  
  // Return original URL if no proxy needed
  return strapiUrl;
}

// Helper function to get image URL from Strapi
export function getStrapiImageUrl(image: any, size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string {
  try {
    if (!image) {
      return '';
    }


    // Handle Strapi v5 format (direct data object)
    // 7️⃣ Protection: Handle array vs object
    if (image.data) {
      const imageData = Array.isArray(image.data) ? image.data[0] : image.data;
      
      // 1️⃣ Protection: Check if imageData exists
      if (!imageData) {
        return '';
      }
      
      if (imageData?.attributes) {
        const formats = imageData.attributes.formats;
        const baseUrl = STRAPI_URL;

        // Try to get the requested size, fallback to original
        if (formats && formats[size]) {
          const fullUrl = `${baseUrl}${formats[size].url}`;
          return getProxiedImageUrl(fullUrl);
        }

        // Fallback to original image
        if (imageData.attributes.url) {
          const fullUrl = `${baseUrl}${imageData.attributes.url}`;
          return getProxiedImageUrl(fullUrl);
        }
      }
      
      // Handle case where data is direct object without attributes wrapper
      if (imageData && imageData.url) {
        const fullUrl = imageData.url.startsWith('http') ? imageData.url : `${STRAPI_URL}${imageData.url}`;
        return getProxiedImageUrl(fullUrl);
      }
    }

    // Handle direct attributes format (Strapi v5 sometimes)
    if (image.attributes) {
      const formats = image.attributes.formats;
      const baseUrl = STRAPI_URL;

      if (formats && formats[size]) {
        const fullUrl = `${baseUrl}${formats[size].url}`;
        return getProxiedImageUrl(fullUrl);
      }

      if (image.attributes.url) {
        const fullUrl = `${baseUrl}${image.attributes.url}`;
        return getProxiedImageUrl(fullUrl);
      }
    }

    // Handle direct URL string
    if (typeof image === 'string') {
      const fullUrl = image.startsWith('http') ? image : `${STRAPI_URL}${image}`;
      return getProxiedImageUrl(fullUrl);
    }

    // Handle case where image is already a URL object
    if (image.url) {
      const fullUrl = image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
      return getProxiedImageUrl(fullUrl);
    }

    return '';
  } catch (error) {
    console.error('Error getting Strapi image URL:', error, image);
    return '';
  }
}

// Helper function to get full image URL (original size)
export function getStrapiFullImageUrl(image: any): string {
  try {
    console.log('[getStrapiFullImageUrl] Input:', {
      hasImage: !!image,
      imageType: typeof image,
      imageKeys: image ? Object.keys(image) : [],
      imageValue: JSON.stringify(image, null, 2).substring(0, 300),
    });

    if (!image) {
      console.log('[getStrapiFullImageUrl] No image provided');
      return '';
    }

    // Handle Strapi v5 format (direct data object)
    if (image.data) {
      console.log('[getStrapiFullImageUrl] Found image.data');
      const imageData = Array.isArray(image.data) ? image.data[0] : image.data;
      console.log('[getStrapiFullImageUrl] Image data:', {
        isArray: Array.isArray(image.data),
        hasAttributes: !!imageData?.attributes,
        hasUrl: !!imageData?.attributes?.url,
      });
      
      if (imageData?.attributes) {
        const baseUrl = STRAPI_URL;
        if (imageData.attributes.url) {
          const url = `${baseUrl}${imageData.attributes.url}`;
          const proxiedUrl = getProxiedImageUrl(url);
          console.log('[getStrapiFullImageUrl] Returning URL from data.attributes:', proxiedUrl);
          return proxiedUrl;
        }
      }
      
      // Try direct url in imageData
      if (imageData?.url) {
        const url = imageData.url.startsWith('http') ? imageData.url : `${STRAPI_URL}${imageData.url}`;
        const proxiedUrl = getProxiedImageUrl(url);
        console.log('[getStrapiFullImageUrl] Returning URL from data.url:', proxiedUrl);
        return proxiedUrl;
      }
    }

    // Handle direct attributes format
    if (image.attributes) {
      console.log('[getStrapiFullImageUrl] Found image.attributes');
      const baseUrl = STRAPI_URL;
      if (image.attributes.url) {
        const url = `${baseUrl}${image.attributes.url}`;
        const proxiedUrl = getProxiedImageUrl(url);
        console.log('[getStrapiFullImageUrl] Returning URL from attributes:', proxiedUrl);
        return proxiedUrl;
      }
    }

    // Handle direct URL string
    if (typeof image === 'string') {
      const url = image.startsWith('http') ? image : `${STRAPI_URL}${image}`;
      const proxiedUrl = getProxiedImageUrl(url);
      console.log('[getStrapiFullImageUrl] Returning URL from string:', proxiedUrl);
      return proxiedUrl;
    }

    // Handle direct url property
    if (image.url) {
      const url = image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
      const proxiedUrl = getProxiedImageUrl(url);
      console.log('[getStrapiFullImageUrl] Returning URL from url property:', proxiedUrl);
      return proxiedUrl;
    }

    console.warn('[getStrapiFullImageUrl] No URL found in image structure');
    return '';
  } catch (error) {
    console.error('[getStrapiFullImageUrl] Error getting Strapi full image URL:', error, image);
    return '';
  }
}

/** Section type for car cover images */
export type CarImageMode = 'suscripcion' | 'compra' | 'empresas';/**
 * Returns the cover image for the given section.
 * - suscripcion (long-term): image
 * - compra (purchase): image_compra, fallback image if missing
 * - empresas (short-term): image_empresas, fallback image if missing
 * If image_compra or image_empresas is not set, the main image is used so the car still displays in compra/empresas.
 */
export function getCarCoverImage(car: { image?: any; image_compra?: any; image_empresas?: any } | null, mode: CarImageMode): any {
  if (!car) return null;
  if (mode === 'compra' && car.image_compra) return car.image_compra;
  if (mode === 'empresas' && car.image_empresas) return car.image_empresas;
  return car.image ?? null;
}
