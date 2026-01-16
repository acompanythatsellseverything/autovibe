import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmpresasPageContent from '@/components/EmpresasPageContent';
import { getCars } from '@/lib/strapi/queries';

export const revalidate = 60;

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

