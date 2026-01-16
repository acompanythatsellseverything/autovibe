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
      {/* Spacer for fixed header on mobile */}
      <div className="h-20 sm:h-24 md:h-28 lg:h-0"></div>
      <CompraPageContent cars={cars} />
      <Footer />
    </div>
  );
}

