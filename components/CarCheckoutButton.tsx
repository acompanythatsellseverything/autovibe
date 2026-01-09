'use client';

import { useState } from 'react';
import { Car } from '@/types';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

interface CarCheckoutButtonProps {
  car: Car;
}

export default function CarCheckoutButton({ car }: CarCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!car.stripePriceId) {
      alert('Este coche no está disponible para suscripción en este momento.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: car.stripePriceId,
          carId: car._id,
          carName: car.name,
        }),
      });

      const { sessionId } = await response.json();

      if (sessionId) {
        const stripe = await stripePromise;
        if (stripe) {
          await stripe.redirectToCheckout({ sessionId });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al procesar el pago. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || !car.stripePriceId}
      className="w-full rounded-lg bg-purple-600 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? 'Procesando...' : 'Suscribirse ahora'}
    </button>
  );
}

