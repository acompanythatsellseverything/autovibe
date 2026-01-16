'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BrandCarousel() {
  // Всего 16 логотипов, показываем по 8 за раз
  const totalLogos = 16;
  const logosPerPage = 8;
  const totalPages = Math.ceil(totalLogos / logosPerPage);
  
  const [currentPage, setCurrentPage] = useState(0);

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getVisibleLogos = () => {
    const start = currentPage * logosPerPage;
    const end = start + logosPerPage;
    const logos = [];
    for (let i = start + 1; i <= Math.min(end, totalLogos); i++) {
      logos.push(i);
    }
    return logos;
  };

  const visibleLogos = getVisibleLogos();
  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  return (
    <div className="relative w-full">
      {/* Desktop: Show original image */}
      <div className="hidden md:block relative w-full">
        <Image
          src="/icons/carlogos.png"
          alt="Car brand logos"
          width={1920}
          height={200}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Mobile: Show carousel */}
      <div className="md:hidden bg-[#DFDBC8] pt-5 pb-2 sm:pt-8 sm:pb-4 md:pt-10 md:pb-4">
        <div className="relative flex items-center justify-center px-2 sm:px-4">
          {/* Logos - 8 логотипов в один ряд */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4.5">
            {visibleLogos.map((logoNum) => (
              <div
                key={logoNum}
                className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={`/brand_img/${logoNum}.svg`}
                  alt={`Brand logo ${logoNum}`}
                  width={40}
                  height={40}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow - всегда справа, меняет направление в зависимости от страницы */}
          <button
            onClick={canGoNext ? goToNext : goToPrev}
            className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center ml-0.5 sm:ml-1"
            aria-label={canGoNext ? "Next logos" : "Previous logos"}
          >
            <Image
              src={canGoNext ? "/icons/arrow-right-dark.svg" : "/icons/arrow-left-dark.svg"}
              alt={canGoNext ? "Next" : "Previous"}
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
