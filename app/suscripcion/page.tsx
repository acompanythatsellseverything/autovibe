import { Suspense } from 'react';
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
      <Suspense fallback={
        <main className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">Cargando...</div>
          </div>
        </main>
      }>
        <SubscriptionPageContent cars={cars} />
      </Suspense>
      <Footer />
    </div>
  );
}
