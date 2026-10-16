import type { Metadata } from 'next';
import { currentLocale, pageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  return pageMetadata({
    path: '/success',
    locale,
    title: 'AutoVibe',
    description: 'AutoVibe',
    noindex: true,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
