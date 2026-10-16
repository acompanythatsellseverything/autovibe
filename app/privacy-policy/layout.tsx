import type { Metadata } from 'next';
import { currentLocale, pageMetadata, tr } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  return pageMetadata({
    path: '/privacy-policy',
    locale,
    title: `${tr(locale, 'privacyPolicy.title')} | AutoVibe`,
    description: `${tr(locale, 'privacyPolicy.title')} · AUTOVIBESPAIN S.L.`,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
