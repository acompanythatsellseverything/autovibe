import type { Metadata } from 'next';
import { currentLocale, pageMetadata, tr } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmpresasPageContent from '@/components/EmpresasPageContent';
import { getCars } from '@/lib/strapi/queries';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  return pageMetadata({
    path: '/empresas',
    locale,
    title: `${tr(locale, 'pages.empresas.title')} | AutoVibe`,
    description: tr(locale, 'pages.empresas.subtitle'),
  });
}

export default async function EmpresasPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <Header />
      <EmpresasPageContent cars={cars} />
      <Footer />
    </div>
  );
}

