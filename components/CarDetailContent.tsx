'use client';

import Image from 'next/image';
import { Car } from '@/types';
import { getStrapiImageUrl, getStrapiFullImageUrl } from '@/lib/strapi/config';
import SubscriptionConfig from './SubscriptionConfig';
import ImageGallery from './ImageGallery';
import { useI18n } from '@/lib/i18n/context';
import HowItWorks from './HowItWorks';
import ComparisonTable from './ComparisonTable';
import { ReactNode, useEffect, useState, useMemo } from 'react';
import { trackViewContent } from '@/lib/analytics/events';

interface CarDetailContentProps {
  car: Car;
}

// Function to parse inline formatting (**bold**)
function parseInlineFormatting(text: string): ReactNode[] {
  if (!text) return [];
  
  const parts: ReactNode[] = [];
  const boldRegex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;
  let keyIndex = 0;
  
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const beforeText = text.substring(lastIndex, match.index);
      if (beforeText) {
        parts.push(beforeText);
      }
    }
    
    parts.push(
      <strong key={`bold-${keyIndex++}`} className="font-bold">
        {match[1]}
      </strong>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(remainingText);
    }
  }
  
  if (parts.length === 0) {
    return [text];
  }
  
  return parts;
}

// Function to parse formatted text
function parseFormattedText(text: string): ReactNode[] {
  if (!text) return [];
  
  const lines = text.split('\n');
  const result: ReactNode[] = [];
  let currentList: string[] = [];
  let keyCounter = 0;
  
  lines.forEach((line, lineIndex) => {
    const trimmedLine = line.trim();
    
    if (trimmedLine.startsWith('##') && trimmedLine.endsWith('##') && trimmedLine.length > 4) {
      if (currentList.length > 0) {
        result.push(
          <ul key={`list-${keyCounter++}`} className="list-disc list-inside mb-3 space-y-1 text-base sm:text-lg leading-relaxed text-gray-700">
            {currentList.map((item, itemIndex) => (
              <li key={itemIndex}>{parseInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
      
      const headingText = trimmedLine.slice(2, -2).trim();
      result.push(
        <h3 key={`heading-${keyCounter++}`} className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] font-normal text-gray-900 mb-2 mt-4">
          {parseInlineFormatting(headingText)}
        </h3>
      );
    }
    else if (trimmedLine.match(/^[-*]\s+/)) {
      const listItemText = trimmedLine.replace(/^[-*]\s+/, '');
      currentList.push(listItemText);
    }
    else {
      if (currentList.length > 0) {
        result.push(
          <ul key={`list-${keyCounter++}`} className="list-disc list-inside mb-3 space-y-1 text-base sm:text-lg leading-relaxed text-gray-700">
            {currentList.map((item, itemIndex) => (
              <li key={itemIndex}>{parseInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
      
      if (trimmedLine) {
        result.push(
          <p key={`para-${keyCounter++}`} className="text-base sm:text-lg leading-relaxed text-gray-700 mb-2">
            {parseInlineFormatting(trimmedLine)}
          </p>
        );
      } else if (result.length > 0) {
        result.push(<br key={`br-${keyCounter++}`} />);
      }
    }
  });
  
  if (currentList.length > 0) {
    result.push(
      <ul key={`list-${keyCounter++}`} className="list-disc list-inside mb-3 space-y-1 text-lg leading-relaxed text-gray-700">
        {currentList.map((item, itemIndex) => (
          <li key={itemIndex}>{parseInlineFormatting(item)}</li>
        ))}
      </ul>
    );
  }
  
  return result;
}

export default function CarDetailContent({ car }: CarDetailContentProps) {
  const { t } = useI18n();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    trackViewContent({
      content_name: car.name,
      content_category: 'suscripcion',
      content_type: 'vehicle',
      content_ids: [car.id || car._id || ''],
      value: car.pricePerMonthSuscripcion || car.pricePerMonth,
      currency: 'EUR',
    });
  }, [car.id, car._id]);

  // Only additional images in gallery (no cover image on detail page)
  const additionalImages = car.additionalImages || [];
  const largeImage = additionalImages.length > 0 ? additionalImages[0] : null;
  const thumbnailImages = additionalImages.slice(1, 4).filter(Boolean);

  // All image URLs for the gallery carousel
  const allImageUrls = useMemo(() => {
    return additionalImages
      .map((img) => (img ? getStrapiFullImageUrl(img) : ''))
      .filter(Boolean);
  }, [additionalImages]);

  const currentImageUrl = largeImage ? getStrapiFullImageUrl(largeImage) : '';

  const minPermanence = car.minPermanence || 12;
  // Strapi: pricePerMonthSuscripcion = price with discount for 12+, priceOriginalSuscripcion = original (full) price for 12+
  const originalPrice12 = car.priceOriginalSuscripcion ?? car.pricePerMonth ?? 0;
  const discountedPrice12 = car.pricePerMonthSuscripcion ?? originalPrice12;
  const hasDiscount = typeof car.pricePerMonthSuscripcion === 'number' && car.pricePerMonthSuscripcion < originalPrice12;

  return (
    <main className="py-6 mt-[84px] md:mt-0 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title and Price Section */}
        <div className="mb-6 sm:mb-8 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1.55fr_1fr] items-start">
          <h1 className="hidden lg:block text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900" style={{ fontFamily: 'Inter',  }}>
            {car.name}
          </h1>
          
          <div className="flex flex-nowrap items-center gap-0.5 sm:gap-2">
            <div className="text-right flex-shrink-0">
              <div className="text-xs sm:text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap">
                {minPermanence} {minPermanence === 1 ? t('carPage.mes') : t('carPage.meses')}
              </div>
              <div className="text-[9px] sm:text-xs md:text-sm font-normal text-gray-700 whitespace-nowrap">
                {t('carPage.permanenciaMinimaLabel')}
              </div>
            </div>
            
            <div className="w-[1px] sm:w-[2px] h-10 sm:h-10 md:h-12 bg-[#B4B4B4] mx-0.5 sm:mx-1 md:mx-2 flex-shrink-0" />
            
            <div className="w-0.5 sm:w-2 md:w-4 flex-shrink-0" />
            
            <div className="text-left flex-shrink-0 ml-1 sm:ml-0">
              <div className="text-xs sm:text-base md:text-lg font-semibold whitespace-nowrap">
                <span className="lg:hidden">{t('carPage.cuotaMensualDeShort')}</span>
                <span className="hidden lg:inline">{t('carPage.cuotaMensualDe')}</span>{' '}
                {hasDiscount ? (
                  <>
                    <span className="hidden lg:inline text-gray-900">
                      <span className="line-through" style={{ color: '#E10000' }}>{originalPrice12}€</span>
                      <span className="ml-1">{discountedPrice12}€</span>
                    </span>
                    <span className="lg:hidden" style={{ color: '#E10000' }}>{discountedPrice12}€</span>
                  </>
                ) : (
                  <span className="text-gray-900">{discountedPrice12}€</span>
                )}
              </div>
              <div className="text-[9px] sm:text-xs md:text-sm font-normal text-gray-700 whitespace-nowrap text-right">
                {t('carPage.ivaIncl')}
              </div>
            </div>
            
            <div className="flex-1" />
            
            <button 
              onClick={() => {
                const formElement = document.getElementById('subscription-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-[#FB3B55] text-white px-2.5 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-2.5 lg:py-3 rounded-md sm:rounded-lg font-semibold text-[11px] sm:text-sm md:text-base lg:text-lg hover:bg-[#E02A44] transition-colors flex-shrink-0"
            >
              {t('carPage.continuar')}
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8 h-[2px] bg-[#B4B4B4] w-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="lg:hidden text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 mb-4" style={{ fontFamily: 'Inter' }}>
          {car.name}
        </h1>

        {/* Main content grid with aligned form and images */}
        <div className="mb-8 sm:mb-10 md:mb-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1.55fr_1fr] items-stretch">
          {/* Image section — locked to 720px on desktop */}
          <div className="md:h-[720px] h-[300px] flex flex-col">
            {/* Main Image */}
            <div
              className="relative flex-[4] overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 cursor-pointer"
              onClick={() => { setGalleryIndex(0); setGalleryOpen(true); }}
            >
              {currentImageUrl ? (
                <Image
                  src={currentImageUrl}
                  alt={car.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-gray-400">No image</p>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {thumbnailImages.length > 0 && (
              <div className="mt-3 grid grid-cols-3 gap-2 flex-[1]">
                {thumbnailImages.map((image, thumbIndex) => {
                  const imageUrl = image ? getStrapiImageUrl(image, 'medium') : '';

                  return (
                    <div
                      key={thumbIndex}
                      className="relative overflow-hidden rounded-lg cursor-pointer"
                      style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)' }}
                      onClick={() => { setGalleryIndex(thumbIndex + 1); setGalleryOpen(true); }}
                    >
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={`${car.name} ${thumbIndex + 2}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 33vw, 22vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-200">
                          <p className="text-xs text-gray-400">{thumbIndex + 2}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Form section - properly aligned */}
          <div className="h-full flex lg:self-stretch">
            <SubscriptionConfig car={car} />
          </div>
        </div>

        {/* Detailed Description */}
        {car.detailedDescription && (
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-2.5xl md:text-3xl font-semibold text-gray-900">
              {car.model || car.name}
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none">
              {parseFormattedText(car.detailedDescription)}
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 sm:mt-0">
        <HowItWorks />
      </div>
      <ComparisonTable />
      <ImageGallery
        images={allImageUrls}
        alt={car.name}
        initialIndex={galleryIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </main>
  );
}