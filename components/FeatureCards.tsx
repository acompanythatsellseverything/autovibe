import Image from 'next/image';

export default function FeatureCards() {
  const features = [
    {
      image: '/img/BMWX5M1.png',
      title: 'Tú decides cuánto tiempo',
      description: 'Desde 1 mes hasta 3 años. Sin ataduras, sin rollos.',
    },
    {
      image: '/img/Volvo.png',
      title: 'Tu próximo coche te espera',
      description: 'Nuevos y usados, pocos kilómetros, muchas opciones.',
    },
    {
      image: '/img/Club.png',
      title: 'Súmate a El Club!',
      description: 'Donde conducir sin ataduras es normal.',
    },
  ];

  return (
    <section className="bg-[#DFDBC8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative aspect-square">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                  <h3 className="mb-2 text-[25px] font-semibold leading-[100%] tracking-[0%] text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] font-light leading-[100%] tracking-[0%] text-white">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

