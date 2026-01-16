'use client';

import { useState, useMemo, useEffect } from 'react';
import { Car } from '@/types';
import CarDisplayCard from './CarDisplayCard';
import DoubleRangeSlider from './DoubleRangeSlider';
import Link from 'next/link';
import { RightArr } from './icons/RightArr';
import { useI18n } from '@/lib/i18n/context';

interface CompraPageContentProps {
  cars: Car[];
}

type FilterType = 'compra' | 'suscripcion';
type SuscripcionType = 'larga' | 'corta' | null;
type SortType = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export default function CompraPageContent({ cars }: CompraPageContentProps) {
  const { t } = useI18n();
  const [filterType, setFilterType] = useState<FilterType>('compra');
  const [suscripcionType, setSuscripcionType] = useState<SuscripcionType>(null);
  const maxCarPrice = Math.max(...cars.map(car => car.pricePerMonth || 0), 1000);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortType, setSortType] = useState<SortType>('price-asc');

  useEffect(() => {
    if (maxCarPrice > 0) {
      setMaxPrice(maxCarPrice);
    }
  }, [maxCarPrice]);

  // Filter and sort cars
  const filteredAndSortedCars = useMemo(() => {
    let filtered = [...cars];

    // Filter by price range
    filtered = filtered.filter(car => {
      const price = car.pricePerMonth || 0;
      return price >= minPrice && price <= maxPrice;
    });

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortType) {
        case 'price-asc':
          return (a.pricePerMonth || 0) - (b.pricePerMonth || 0);
        case 'price-desc':
          return (b.pricePerMonth || 0) - (a.pricePerMonth || 0);
        case 'name-asc':
          return (a.name || '').localeCompare(b.name || '');
        case 'name-desc':
          return (b.name || '').localeCompare(a.name || '');
        default:
          return 0;
      }
    });

    return filtered;
  }, [cars, minPrice, maxPrice, sortType]);

  const handlePriceRangeChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <main className="py-8">
      {/* Reviews Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl">★★★★</span>
              <span className="text-gray-300 text-xl">★</span>
            </div>
            <span className="text-sm text-gray-700">{t('pages.compra.reviews')}</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="mb-4 text-2xl md:text-[40px] font-medium text-gray-900" style={{ fontFamily: 'Inter', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}>
            {t('pages.compra.title')}
          </h1>
          <p className="text-base md:text-[30px] text-black" style={{ fontFamily: 'Inter', fontWeight: 200, lineHeight: '100%', letterSpacing: '0%' }}>
            {t('pages.compra.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters Section - Compra/Suscripción */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        {/* Three filter buttons in a row - reordered: Compra first, then Permanencia larga, then Permanencia corta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Comprar coche - First position, selected on Compra page */}
          <Link
            href="/compra"
            className={`relative bg-[#DFDBC8] rounded-[20px] border-[2px] p-4 transition-all ${
              filterType === 'compra'
                ? 'border-[#FB3B55]'
                : 'border-black'
            }`}
          >
            {filterType === 'compra' && (
              <span className="absolute bg-[#FB3B55] text-white text-xs px-2 py-1 rounded-2xl whitespace-nowrap" style={{ top: '-2px', right: '-2px' }}>
                {t('pages.compra.vamos')}
              </span>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/icons/directions_car.svg" alt="Car" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-gray-900 font-medium">{t('pages.compra.comprarCoche')}</div>
                  <div className="text-sm text-gray-900">{t('pages.compra.comprarCocheDesc')}</div>
                </div>
              </div>
              {filterType !== 'compra' && (
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <RightArr />
                </svg>
              )}
            </div>
          </Link>

          {/* Permanencia larga */}
          <Link
            href="/suscripcion?type=larga"
            className={`relative bg-[#DFDBC8] rounded-[20px] border-[2px] p-4 transition-all ${
              filterType === 'suscripcion' && suscripcionType === 'larga'
                ? 'border-[#FB3B55]'
                : 'border-black'
            }`}
          >
            {filterType === 'suscripcion' && suscripcionType === 'larga' && (
              <span className="absolute bg-[#FB3B55] text-white text-xs px-2 py-1 rounded-2xl whitespace-nowrap" style={{ top: '-2px', right: '-2px' }}>
                {t('pages.compra.vamos')}
              </span>
            )}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <img src="/icons/Calendar.svg" alt="Calendar" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-gray-900 font-medium">{t('pages.compra.permanenciaLarga')}</div>
                  <div className="text-sm" style={{ color: '#000000' }}>{t('pages.compra.permanenciaLargaDesc')}</div>
                </div>
              </div>
              {!(filterType === 'suscripcion' && suscripcionType === 'larga') && (
                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <RightArr />
                </svg>
              )}
            </div>
          </Link>

          {/* Permanencia corta - doesn't lead anywhere yet */}
          <div
            className={`relative bg-[#DFDBC8] rounded-[20px] border-[2px] p-4 transition-all border-black cursor-not-allowed`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <img src="/icons/schedule.svg" alt="Schedule" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-gray-900 font-medium">{t('pages.compra.permanenciaCorta')}</div>
                  <div className="text-sm" style={{ color: '#000000' }}>{t('pages.compra.permanenciaCortaDesc')}</div>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <RightArr />
              </svg>
            </div>
          </div>
        </div>

        {/* Price Slider and Sort Filter below */}
        <div className="flex flex-col md:flex-row gap-8 items-end">
          {/* Price Slider - Left - размером с одну колонку машин (ширина одной карточки из сетки 3 колонки) */}
          <div className="w-full md:max-w-[calc((100%-4rem)/3)]">
            <DoubleRangeSlider
              min={0}
              max={maxCarPrice}
              minValue={minPrice}
              maxValue={maxPrice}
              onChange={handlePriceRangeChange}
              label={t('pages.compra.cuotaMensual')}
            />
          </div>

          {/* Sort Filter - Right - заканчивается где заканчивается третья машина */}
          <div className="w-full md:w-auto flex items-center justify-between md:ml-auto">
            <button
              onClick={() => {
                const sortOptions: SortType[] = ['price-asc', 'price-desc', 'name-asc', 'name-desc'];
                const currentIndex = sortOptions.indexOf(sortType);
                setSortType(sortOptions[(currentIndex + 1) % sortOptions.length]);
              }}
              className="text-sm text-gray-900 flex items-center gap-1 no-underline w-full md:w-auto"
            >
              <span className="flex items-center gap-1">
                <span>↓↑</span>
                <span>{t('pages.compra.ordenarPor')}</span>
              </span>
              <span className="font-bold ml-auto md:ml-0">
                {sortType === 'price-asc' || sortType === 'price-desc' ? t('pages.compra.precio') : t('pages.compra.nombre')}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Сетка машин - 3 в ряд, равномерно распределенные */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {filteredAndSortedCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center sm:justify-items-stretch">
            {filteredAndSortedCars.map((car) => (
              <CarDisplayCard key={car.id || car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-16">
            {t('pages.compra.noCoches')}
          </div>
        )}
      </section>
    </main>
  );
}

