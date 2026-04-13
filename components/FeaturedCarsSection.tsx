'use client';

import { useState, useRef, useEffect } from 'react';
import Link from '@/components/LocalizedLink';
import Image from 'next/image';
import CarDisplayCard from '@/components/CarDisplayCard';
import { useI18n } from '@/lib/i18n/context';

type HomeSectionKey = 'featuredCars' | 'carsForSale' | 'shortTermRental';

interface FeaturedCarsSectionProps {
  cars: any[];
  /** Section for title/verMas and link. Default: long-term (suscripcion). */
  sectionKey?: HomeSectionKey;
  /** Base path for cards and "ver más" link. Determines which cover image is shown (image / image_compra / image_empresas). */
  basePath?: string;
}

const SECTION_DEFAULTS: Record<HomeSectionKey, string> = {
  featuredCars: '/suscripcion',
  carsForSale: '/compra',
  shortTermRental: '/empresas',
};

/**
 * Галерея машин на главной: долгосрочная (suscripcion), покупка (compra) или короткосрочная аренда (empresas).
 * Для каждой секции показывается своя обложка (image / image_compra / image_empresas).
 */
export default function FeaturedCarsSection({
  cars,
  sectionKey = 'featuredCars',
  basePath = SECTION_DEFAULTS[sectionKey],
}: FeaturedCarsSectionProps) {
  const { t } = useI18n();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Константы для галереи
  const CARD_WIDTH = 350;
  const GAP = 18; // Уменьшено на 20% (было 22)

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [cars]);

  if (!cars || !Array.isArray(cars) || cars.length === 0) {
    return null;
  }

  // Скролл влево/вправо
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = CARD_WIDTH + GAP;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Обновление индекса при скролле
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / (CARD_WIDTH + GAP));
    setCurrentIndex(Math.min(Math.max(0, newIndex), cars.length - 1));
  };

  // Переход к конкретной карточке
  const goToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: index * (CARD_WIDTH + GAP),
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#DFDBC8] pt-8 sm:pt-10 md:pt-12 pb-16">
      {/* Заголовок - в контейнере с ограничением ширины */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 lg:mb-8">
        <div className="flex items-end justify-between">
          <h2 className="text-[25px] font-bold text-gray-900" style={{ fontFamily: 'Inter', fontWeight: 700, lineHeight: '100%', letterSpacing: '0%' }}>
            {t(`home.${sectionKey}.title`)}
          </h2>
          <Link
            href={basePath}
            className="text-[#FB3B55] hover:text-[#FB3B55]/80 no-underline md:underline text-lg md:text-[20px] font-normal whitespace-nowrap"
            style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}
          >
            {t(`home.${sectionKey}.verMas`)}
          </Link>
        </div>
      </div>

      {/* Галерея - растягивается до правого края страницы */}
      <div className="relative w-full overflow-x-hidden">
        {/* Обертка для выравнивания начала карусели с заголовком */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Контейнер карусели - начинается от того же места что и заголовок, но уходит до правого края */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              gap: `${GAP}px`,
              WebkitOverflowScrolling: 'touch',
              marginLeft: '-8px',
              marginRight: 'calc(-100vw + 100%)',
              paddingRight: 'calc(100vw - 100%)',
            }}
          >
            {cars.map((car: any) => (
              <div
                key={car.id || car._id}
                style={{
                  scrollSnapAlign: 'start',
                  width: `${CARD_WIDTH}px`,
                  flexShrink: 0,
                }}
              >
                <CarDisplayCard car={car} basePath={basePath} />
              </div>
            ))}
          </div>
        </div>

        {/* Навигация: кнопки и точки - в контейнере с ограничением ширины */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex items-center gap-4">
            {/* Кнопки влево/вправо */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={currentIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded bg-[#FB3B55] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ borderRadius: '5px' }}
              >
                <Image src="/icons/leftarr.svg" alt="Previous" width={24} height={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={currentIndex >= cars.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded bg-[#FB3B55] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ borderRadius: '5px' }}
              >
                <Image src="/icons/rightarr.svg" alt="Next" width={24} height={24} />
              </button>
            </div>

            {/* Точки пагинации */}
            <div className="flex gap-2">
              {cars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#FB3B55] scale-110' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to car ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
