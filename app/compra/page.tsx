import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompraPageContent from '@/components/CompraPageContent';
import { getCars } from '@/lib/strapi/queries';

export const revalidate = 60;

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

