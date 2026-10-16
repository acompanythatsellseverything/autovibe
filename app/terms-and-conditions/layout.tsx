import type { Metadata } from 'next';
import { currentLocale, pageMetadata, tr } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  return pageMetadata({
    path: '/terms-and-conditions',
    locale,
    title: `${tr(locale, 'termsConditions.title')} | AutoVibe`,
    description: `${tr(locale, 'termsConditions.title')} · AUTOVIBESPAIN S.L.`,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
