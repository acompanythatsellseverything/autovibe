import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

// Create axios instance for Strapi API
export const strapiClient = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
  },
});

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
          return `${baseUrl}${formats[size].url}`;
        }

        // Fallback to original image
        if (imageData.attributes.url) {
          return `${baseUrl}${imageData.attributes.url}`;
        }
      }
      
      // Handle case where data is direct object without attributes wrapper
      if (imageData && imageData.url) {
        return imageData.url.startsWith('http') ? imageData.url : `${STRAPI_URL}${imageData.url}`;
      }
    }

    // Handle direct attributes format (Strapi v5 sometimes)
    if (image.attributes) {
      const formats = image.attributes.formats;
      const baseUrl = STRAPI_URL;

      if (formats && formats[size]) {
        return `${baseUrl}${formats[size].url}`;
      }

      if (image.attributes.url) {
        return `${baseUrl}${image.attributes.url}`;
      }
    }

    // Handle direct URL string
    if (typeof image === 'string') {
      return image.startsWith('http') ? image : `${STRAPI_URL}${image}`;
    }

    // Handle case where image is already a URL object
    if (image.url) {
      return image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
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
          console.log('[getStrapiFullImageUrl] Returning URL from data.attributes:', url);
          return url;
        }
      }
      
      // Try direct url in imageData
      if (imageData?.url) {
        const url = imageData.url.startsWith('http') ? imageData.url : `${STRAPI_URL}${imageData.url}`;
        console.log('[getStrapiFullImageUrl] Returning URL from data.url:', url);
        return url;
      }
    }

    // Handle direct attributes format
    if (image.attributes) {
      console.log('[getStrapiFullImageUrl] Found image.attributes');
      const baseUrl = STRAPI_URL;
      if (image.attributes.url) {
        const url = `${baseUrl}${image.attributes.url}`;
        console.log('[getStrapiFullImageUrl] Returning URL from attributes:', url);
        return url;
      }
    }

    // Handle direct URL string
    if (typeof image === 'string') {
      const url = image.startsWith('http') ? image : `${STRAPI_URL}${image}`;
      console.log('[getStrapiFullImageUrl] Returning URL from string:', url);
      return url;
    }

    // Handle direct url property
    if (image.url) {
      const url = image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
      console.log('[getStrapiFullImageUrl] Returning URL from url property:', url);
      return url;
    }

    console.warn('[getStrapiFullImageUrl] No URL found in image structure');
    return '';
  } catch (error) {
    console.error('[getStrapiFullImageUrl] Error getting Strapi full image URL:', error, image);
    return '';
  }
}

