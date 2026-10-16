import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'YandexBot', 'Bingbot'];
const DISALLOW = ['/api/', '/studio', '/success', '/es/success', '/en/success', '/uk/success', '/ru/success'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      { userAgent: AI_BOTS, allow: '/', disallow: DISALLOW },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
