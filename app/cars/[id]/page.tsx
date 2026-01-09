import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCarById } from '@/lib/strapi/queries';
import CarDetailContent from '@/components/CarDetailContent';

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car) {
    return (
      <div className="min-h-screen bg-[#DFDBC8]">
        <Header />
        <main className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Coche no encontrado
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <Header />
      <CarDetailContent car={car} />
      <Footer />
    </div>
  );
}
