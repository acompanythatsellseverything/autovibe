'use client';

import Image from 'next/image';

export default function BrandCarousel() {
  return (
    <div className="relative w-full">
      {/* Mobile: brands_mobile.png */}
      <div className="md:hidden relative w-full pt-4 sm:pt-5">
        <Image
          src="/brand_img/brands_mobile.png"
          alt="Car brand logos"
          width={800}
          height={200}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      {/* Desktop: brands.png */}
      <div className="hidden md:block relative w-full">
        <Image
          src="/brand_img/brands.png"
          alt="Car brand logos"
          width={1920}
          height={200}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
