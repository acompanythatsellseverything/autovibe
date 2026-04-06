'use client';

import { Car } from '@/types';
import { getStrapiImageUrl, getCarCoverImage, type CarImageMode } from '@/lib/strapi/config';
import Link from 'next/link';

interface CarDisplayCardProps {
  car: Car;
  basePath?: string; // e.g., '/empresas', '/suscripcion', '/compra', '/cars'
}

function basePathToMode(basePath: string): CarImageMode {
  if (basePath === '/compra') return 'compra';
  if (basePath === '/empresas') return 'empresas';
  return 'suscripcion';
}

/**
 * Простой универсальный компонент карточки машины.
 * Показывает обложку в зависимости от раздела: suscripcion / compra / empresas.
 */
export default function CarDisplayCard({ car, basePath = '/cars' }: CarDisplayCardProps) {
  if (!car) return null;

  const coverImage = getCarCoverImage(car, basePathToMode(basePath));
  const imageUrl = coverImage ? getStrapiImageUrl(coverImage, 'large') : '';
  const carName = car.name || 'Car';
  const carDescription = car.description || '';
  const carId = car.id || car._id || '';

  return (
    <Link href={`${basePath}/cars/${carId}`} className="flex flex-col w-full h-full cursor-pointer">
      {/* Картинка машины - квадратная, полностью видна */}
      <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden flex-shrink-0">
        {imageUrl ? (
          <div className="w-full h-full p-2 box-border flex items-center justify-center rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              alt={carName}
              className="object-contain w-full h-full rounded-xl img-skeleton"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <p className="text-gray-400">No image</p>
          </div>
        )}
      </div>

      {/* Текст под картинкой - фиксированная высота для одинакового размера */}
      <div className="pl-2 flex-1 flex flex-col">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 flex-shrink-0" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
          {carName}
        </h3>
        <p className="text-lg text-gray-900 flex-1" style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
          {carDescription}
        </p>
      </div>
    </Link>
  );
}
