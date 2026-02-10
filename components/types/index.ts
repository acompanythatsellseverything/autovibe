// Strapi data structure
export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText?: string;
      caption?: string;
      width: number;
      height: number;
      formats?: {
        thumbnail?: { url: string; width: number; height: number };
        small?: { url: string; width: number; height: number };
        medium?: { url: string; width: number; height: number };
        large?: { url: string; width: number; height: number };
      };
      url: string;
    };
  } | Array<{
    id: number;
    attributes: {
      name: string;
      alternativeText?: string;
      caption?: string;
      width: number;
      height: number;
      formats?: {
        thumbnail?: { url: string; width: number; height: number };
        small?: { url: string; width: string; height: number };
        medium?: { url: string; width: number; height: number };
        large?: { url: string; width: number; height: number };
      };
      url: string;
    };
  }>;
}

// Normalized interfaces (what components use)
// Components receive ONLY clean data - no styles, no HTML, just primitives
export interface Car {
  id: string;
  _id?: string; // For backward compatibility
  // Only plain text strings (sanitized, no HTML)
  name: string;
  brand: string;
  model: string;
  description: string;
  // Pricing configuration - all in one JSON field from Strapi
  pricingConfig?: {
    pricePerMonthSuscripcion?: number;
    priceOriginalSuscripcion?: number;
    pricePerMonthEmpresas?: number;
    priceOriginalEmpresas?: number;
    purchasePrice?: number;
    installmentOptions?: Array<{
      months: number;
      totalPrice: number;
      monthlyPayment: number;
    }>;
  };
  // Computed fields for easy access (from pricingConfig)
  pricePerMonthSuscripcion?: number;
  priceOriginalSuscripcion?: number;
  pricePerMonthEmpresas?: number;
  priceOriginalEmpresas?: number;
  purchasePrice?: number;
  installmentOptions?: Array<{
    months: number;
    totalPrice: number;
    monthlyPayment: number;
  }>;
  // Legacy fields - computed for backward compatibility
  pricePerMonth: number;
  originalPrice?: number;
  // Only plain text strings
  location: string;
  // Only image object (no styles)
  image: StrapiImage | any;
  additionalImages?: (StrapiImage | any)[]; // Additional images for gallery
  // Only array of plain text strings
  features: string[];
  // Only plain text string
  category: 'suv' | 'sedan' | 'hatchback' | 'convertible' | 'coupe' | 'city hatchback' | 'furgon' | 'moto';
  // Only boolean
  available: boolean;
  featured?: boolean;
  // Service availability flags - independent of pricing data
  availableForSuscripcion?: boolean; // Enable/disable suscripcion option
  availableForEmpresas?: boolean; // Enable/disable empresas option
  availableForCompra?: boolean; // Enable/disable compra option
  // Subscription configuration (suscripcion)
  minPermanence?: number; // Minimum permanence in months
  permanenceOptions?: Array<{
    months: number;
    price: number;
    available: boolean;
  }>;
  mileageOptions?: Array<{
    km: number;
    included: boolean;
    price?: number;
  }>;
  // Enterprise rental configuration (empresas)
  rentalMinMonths?: number; // Minimum rental months (e.g., 1, 2, 4)
  rentalMaxMonths?: number; // Maximum rental months (e.g., 12)
  rentalPrices?: Array<{
    months: number;
    price: number; // Price per month for this duration
  }>; // Prices for different rental durations
  // Purchase configuration (compra) - use purchasePrice and installmentOptions from pricingConfig or computed fields above
  // Detailed description for car page
  detailedDescription?: string;
  // Only strings or undefined
  stripePriceId?: string;
  stripeProductId?: string;
  // DO NOT use attributes in components - it's only for internal normalization
  // Components should use only the fields above (name, description, pricePerMonth, etc.)
  // @deprecated - Use normalized fields instead
  attributes?: any; // Internal use only - do not use in components
}

export interface Testimonial {
  id: string;
  _id?: string; // For backward compatibility
  name: string;
  role: string;
  image: StrapiImage | any;
  rating: number;
  comment: string;
  attributes?: {
    name: string;
    role: string;
    image: StrapiImage;
    rating: number;
    comment: string;
  };
}

export interface FAQ {
  id: string;
  _id?: string; // For backward compatibility
  question: string;
  answer: string;
  order?: number;
  attributes?: {
    question: string;
    answer: string;
    order?: number;
  };
}

export interface Feature {
  id: string;
  _id?: string; // For backward compatibility
  title: string;
  description: string;
  image: StrapiImage | any;
  order?: number;
  attributes?: {
    title: string;
    description: string;
    image: StrapiImage;
    order?: number;
  };
}

