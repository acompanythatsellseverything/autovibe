'use client';

import Link from 'next/link';
import { Car } from '@/types';
import { getStrapiImageUrl } from '@/lib/strapi/config';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  if (!car) {
    return null;
  }

  const imageUrl = car.image ? getStrapiImageUrl(car.image, 'large') : '';
  const carName = car.name || 'Car';
  const carDescription = car.description || '';
  const shortDescription = carDescription.length > 150 
    ? carDescription.substring(0, 150) + '...' 
    : carDescription;
  
  const gradientId = `neonGradient-${car.id || car._id || Math.random()}`;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105">
      {/* Neon Ring Effect */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-red-500 via-blue-500 to-red-500 opacity-20 blur-xl transition-opacity group-hover:opacity-40" />
      
      <div className="relative">
        {/* Car Image with Neon Ring Frame */}
        <div className="relative aspect-[4/3] overflow-hidden">
          
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={carName || 'Car image'}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-200">
              <p className="text-gray-400">Image placeholder</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="pl-2 pt-6 pb-6">
          <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
            {carName}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-3">
            {shortDescription}
          </p>
          
          {/* Price and Location */}
          <div className="mb-4 space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-sm font-medium text-orange-500">desde</span>
              <span className="text-3xl font-bold text-orange-500">
                €{car.pricePerMonthSuscripcion || car.pricePerMonth || 0}/mes
              </span>
            </div>
            <div className="text-lg font-semibold text-blue-500">
              {car.location || ''}
            </div>
          </div>

          <Link
            href={`/suscripcion/cars/${car.id || car._id}`}
            className="block w-full rounded-lg bg-purple-600 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-purple-700"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

