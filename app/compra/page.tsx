import type { Metadata } from 'next';
import { currentLocale, pageMetadata, tr } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompraPageContent from '@/components/CompraPageContent';
import { getCars } from '@/lib/strapi/queries';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  return pageMetadata({
    path: '/compra',
    locale,
    title: `${tr(locale, 'pages.compra.title')} | AutoVibe`,
    description: tr(locale, 'pages.compra.subtitle'),
  });
}

export default async function CompraPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <Header />
      <CompraPageContent cars={cars} />
      <Footer />
    </div>
  );
}

