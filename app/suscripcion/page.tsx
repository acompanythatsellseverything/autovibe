import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscriptionPageContent from '@/components/SubscriptionPageContent';
import { getCars } from '@/lib/strapi/queries';

export const revalidate = 60;

export default async function SuscripcionPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <Header />
      <SubscriptionPageContent cars={cars} />
      <Footer />
    </div>
  );
}
