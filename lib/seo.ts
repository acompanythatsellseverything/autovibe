import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { translations, locales, defaultLocale, type Locale } from '@/lib/i18n/translations';
import type { Car } from '@/types';

export const SITE_URL = 'https://autovibe.es';
export const SITE_NAME = 'AutoVibe';

const OG_LOCALE: Record<Locale, string> = { es: 'es_ES', en: 'en_GB', uk: 'uk_UA', ru: 'ru_RU' };

/** Locale of the current request, set by middleware.ts in the x-locale header. */
export async function currentLocale(): Promise<Locale> {
  const h = await headers();
  const l = h.get('x-locale');
  return l && (locales as readonly string[]).includes(l) ? (l as Locale) : defaultLocale;
}

/** Public URL path for a page in a locale. Spanish home lives at "/", everything else is prefixed. */
export function localizedPath(path: string, locale: Locale): string {
  if (path === '/') return locale === defaultLocale ? '/' : `/${locale}`;
  return `/${locale}${path}`;
}

/** Dotted-key lookup in the translations table, falling back to Spanish. */
export function tr(locale: Locale, key: string): string {
  const lookup = (loc: Locale): string | undefined => {
    let v: unknown = translations[loc];
    for (const k of key.split('.')) {
      if (v && typeof v === 'object' && k in (v as Record<string, unknown>)) v = (v as Record<string, unknown>)[k];
      else return undefined;
    }
    return typeof v === 'string' ? v : undefined;
  };
  return lookup(locale) ?? lookup(defaultLocale) ?? key;
}

function hreflangAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[l] = SITE_URL + localizedPath(path, l);
  out['x-default'] = SITE_URL + localizedPath(path, defaultLocale);
  return out;
}

export function pageMetadata(opts: {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  const url = SITE_URL + localizedPath(opts.path, opts.locale);
  const image = opts.image ?? `${SITE_URL}/AutoVibeLogo.png`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url, languages: hreflangAlternates(opts.path) },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: OG_LOCALE[opts.locale],
      url,
      title: opts.title,
      description: opts.description,
      images: [{ url: image }],
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description, images: [image] },
    ...(opts.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Site-wide Organization + WebSite structured data. */
export const organizationJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'AutoRental'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: 'AUTOVIBESPAIN S.L.',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/AutoVibeLogo.png` },
      description: 'Suscripción de coches sin líos. Coches por suscripción, compra y alquiler flexible para empresas en España.',
      areaServed: [
        { '@type': 'Country', name: 'Spain' },
        { '@type': 'City', name: 'Valencia' },
        { '@type': 'City', name: 'Barcelona' },
        { '@type': 'City', name: 'Madrid' },
      ],
      sameAs: [
        'https://www.instagram.com/auto_vibe_sl/',
        'https://www.tiktok.com/@autovibe_bogdan',
        'https://www.youtube.com/@autovibe-spain',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ['es', 'en', 'uk', 'ru'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
});

export type CarOfferMode = 'suscripcion' | 'compra' | 'empresas';

/** Product structured data for a car detail page. */
export function carJsonLd(car: Car, mode: CarOfferMode, url: string, image?: string): string {
  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    url,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    seller: { '@id': `${SITE_URL}/#organization` },
  };
  if (mode === 'compra' && car.pricingConfig?.purchasePrice) {
    offer.price = car.pricingConfig.purchasePrice;
  } else {
    const monthly = mode === 'empresas' ? car.pricePerMonthEmpresas : car.pricePerMonthSuscripcion;
    if (monthly) {
      offer.price = monthly;
      offer.priceSpecification = {
        '@type': 'UnitPriceSpecification',
        price: monthly,
        priceCurrency: 'EUR',
        unitCode: 'MON',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      };
    }
  }
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['Product', 'Car'],
    name: car.name,
    brand: { '@type': 'Brand', name: car.brand },
    model: car.model,
    description: car.description,
    ...(image ? { image } : {}),
    offers: offer,
  });
}
