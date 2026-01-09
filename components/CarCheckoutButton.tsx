'use client';

import { Car } from '@/types';

interface CarCheckoutButtonProps {
  car: Car;
}

export default function CarCheckoutButton({ car }: CarCheckoutButtonProps) {
  return (
    <button
      disabled
      className="w-full rounded-lg bg-purple-600 px-6 py-4 text-lg font-semibold text-white transition-colors cursor-not-allowed opacity-50"
    >
      Suscribirse ahora
    </button>
  );
}

