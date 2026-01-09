'use client';

import { Car } from '@/types';
import { getStrapiImageUrl } from '@/lib/strapi/config';

interface CarCarouselCardProps {
  car: Car;
}

export default function CarCarouselCard({ car }: CarCarouselCardProps) {
  if (!car) {
    return null;
  }

  const imageUrl = car.image ? getStrapiImageUrl(car.image, 'large') : '';
  const carName = car.name || 'Car';
  const carDescription = car.description || '';

  return (
    <div className="flex-shrink-0 w-[350px]">
      {/* Car Image - квадратное, закругленное, полностью видно */}
      <div className="relative aspect-square overflow-hidden mb-4 rounded-2xl">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={carName}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-200 rounded-2xl">
            <p className="text-gray-400">Image placeholder</p>
          </div>
        )}
      </div>

      {/* Content - текст и описание под картинкой */}
      <div>
        <h3 className="mb-2 text-lg text-gray-900" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
          {carName}
        </h3>
        <p className="text-lg text-gray-900" style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>
          {carDescription}
        </p>
      </div>
    </div>
  );
}

