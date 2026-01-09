export default function CarBrands() {
  const brands = [
    'Audi',
    'BMW',
    'Volkswagen',
    'Mini',
    'Renault',
    'Nissan',
    'Seat',
    'Kia',
    'Hyundai',
    'Fiat',
    'Citroën',
    'Peugeot',
    'Alpine',
  ];

  return (
    <section className="bg-[#DFDBC8] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-2xl font-semibold text-gray-400 transition-colors hover:text-gray-600"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

