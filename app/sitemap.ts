import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/translations';
import { getCars } from '@/lib/strapi/queries';
import { SITE_URL, localizedPath } from '@/lib/seo';

export const revalidate = 3600;

const STATIC: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/suscripcion', priority: 0.9, changeFrequency: 'daily' },
  { path: '/compra', priority: 0.9, changeFrequency: 'daily' },
  { path: '/empresas', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/cars', priority: 0.8, changeFrequency: 'daily' },
  { path: '/el-club', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.2, changeFrequency: 'yearly' },
];

function entries(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], lastModified?: Date): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = SITE_URL + localizedPath(path, l);
  return locales.map((l) => ({
    url: SITE_URL + localizedPath(path, l),
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const out: MetadataRoute.Sitemap = STATIC.flatMap((s) => entries(s.path, s.priority, s.changeFrequency));
  let cars: Awaited<ReturnType<typeof getCars>> = [];
  try {
    cars = await getCars();
  } catch {
    cars = [];
  }
  for (const car of cars) {
    for (const prefix of ['/suscripcion/cars/', '/compra/cars/', '/empresas/cars/']) {
      out.push(...entries(prefix + car.id, 0.7, 'weekly'));
    }
  }
  return out;
}
