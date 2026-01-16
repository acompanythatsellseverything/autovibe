'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image - User will add this */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
          {/* Placeholder for hero image - Replace with actual image */}
          <div className="flex h-full items-center justify-center text-white opacity-20">
            <p className="text-2xl">Hero Image Placeholder</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">
          Suscripción de coches sin líos.
        </h1>
        <p className="mb-8 text-xl md:text-2xl">
          Tu coche, tus reglas. Para ti o tu empresa.
        </p>
<Link
  href="/empresas"
  style={{ borderRadius: '9999px' }}
  className="inline-flex bg-red-500 px-20 py-20"
>
  Ver coches!
</Link>

      </div>
    </section>
  );
}

