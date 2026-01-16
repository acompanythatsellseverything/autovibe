import Header from '@/components/Header';
import CarCard from '@/components/CarCard';
import Footer from '@/components/Footer';
import { getCars } from '@/lib/strapi/queries';

export const revalidate = 60;

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <Header />
      {/* Spacer for fixed header on mobile */}
      <div className="h-20 sm:h-24 md:h-28 lg:h-0"></div>
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            Todos nuestros coches
          </h1>
          {cars.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cars.map((car: any) => (
                <CarCard key={car.id || car._id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No hay coches disponibles en este momento.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

