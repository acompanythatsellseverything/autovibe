'use client';

import { Car } from '@/types';
import { getStrapiImageUrl } from '@/lib/strapi/config';
import Link from 'next/link';

interface CarDisplayCardProps {
  car: Car;
}

/**
 * Простой универсальный компонент карточки машины
 */
export default function CarDisplayCard({ car }: CarDisplayCardProps) {
  if (!car) return null;

  const imageUrl = car.image ? getStrapiImageUrl(car.image, 'large') : '';
  const carName = car.name || 'Car';
  const carDescription = car.description || '';
  const carId = car.id || car._id || '';

  return (
    <Link href={`/cars/${carId}`} className="flex flex-col w-full h-full cursor-pointer">
      {/* Картинка машины - квадратная, полностью видна */}
      <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden flex-shrink-0">
        {imageUrl ? (
          <div className="w-full h-full p-2 box-border flex items-center justify-center">
            <img
              src={imageUrl}
              alt={carName}
              className="object-contain w-full h-full"
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
