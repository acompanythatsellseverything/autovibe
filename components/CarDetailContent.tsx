'use client';

import Image from 'next/image';
import { Car } from '@/types';
import { getStrapiImageUrl, getStrapiFullImageUrl } from '@/lib/strapi/config';
import SubscriptionConfig from './SubscriptionConfig';
import { useI18n } from '@/lib/i18n/context';
import HowItWorks from './HowItWorks';
import ComparisonTable from './ComparisonTable';
import { ReactNode } from 'react';

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
    // Add text before the match
    if (match.index > lastIndex) {
      const beforeText = text.substring(lastIndex, match.index);
      if (beforeText) {
        parts.push(beforeText);
      }
    }
    
    // Add bold text
    parts.push(
      <strong key={`bold-${keyIndex++}`} className="font-bold">
        {match[1]}
      </strong>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text after last match
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(remainingText);
    }
  }
  
  // If no matches found, return original text
  if (parts.length === 0) {
    return [text];
  }
  
  return parts;
}

// Function to parse formatted text
// Supports:
// **text** for bold
// ##text## for large/heading (must be on its own line)
// - item or * item for bullet lists
function parseFormattedText(text: string): ReactNode[] {
  if (!text) return [];
  
  const lines = text.split('\n');
  const result: ReactNode[] = [];
  let currentList: string[] = [];
  let keyCounter = 0;
  
  lines.forEach((line, lineIndex) => {
    const trimmedLine = line.trim();
    
    // Check if it's a heading (##text##) - must be on its own line
    if (trimmedLine.startsWith('##') && trimmedLine.endsWith('##') && trimmedLine.length > 4) {
      // Flush any accumulated list items first
      if (currentList.length > 0) {
        result.push(
          <ul key={`list-${keyCounter++}`} className="list-disc list-inside mb-3 space-y-1 text-lg leading-relaxed text-gray-700">
            {currentList.map((item, itemIndex) => (
              <li key={itemIndex}>{parseInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
      
      // Render heading
      const headingText = trimmedLine.slice(2, -2).trim();
      result.push(
        <h3 key={`heading-${keyCounter++}`} className="text-[21px] font-normal text-gray-900 mb-2 mt-4">
          {parseInlineFormatting(headingText)}
        </h3>
      );
    }
    // Check if it's a list item
    else if (trimmedLine.match(/^[-*]\s+/)) {
      const listItemText = trimmedLine.replace(/^[-*]\s+/, '');
      currentList.push(listItemText);
    }
    // Regular line
    else {
      // Flush accumulated list items if we encounter a non-list line
      if (currentList.length > 0) {
        result.push(
          <ul key={`list-${keyCounter++}`} className="list-disc list-inside mb-3 space-y-1 text-lg leading-relaxed text-gray-700">
            {currentList.map((item, itemIndex) => (
              <li key={itemIndex}>{parseInlineFormatting(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
      
      // Render paragraph if line is not empty
      if (trimmedLine) {
        result.push(
          <p key={`para-${keyCounter++}`} className="text-lg leading-relaxed text-gray-700 mb-2">
            {parseInlineFormatting(trimmedLine)}
          </p>
        );
      } else if (result.length > 0) {
        // Add spacing for empty lines
        result.push(<br key={`br-${keyCounter++}`} />);
      }
    }
  });
  
  // Handle any remaining list items at the end
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

  // Use only additionalImages (no mainImage)
  const additionalImages = car.additionalImages || [];
  
  // Large image: first additionalImages (index 0)
  const largeImage = additionalImages.length > 0 ? additionalImages[0] : null;
  
  // Thumbnails: next 3 additionalImages (indices 1, 2, 3)
  const thumbnailImages = additionalImages.slice(1, 4).filter(Boolean);

  console.log('[CarDetailContent] Image data:', {
    additionalImagesCount: additionalImages.length,
    thumbnailImagesCount: thumbnailImages.length,
    largeImage: !!largeImage,
  });
  
  console.log('[CarDetailContent] Subscription data:', {
    permanenceOptions: car.permanenceOptions,
    mileageOptions: car.mileageOptions,
    minPermanence: car.minPermanence,
  });

  // Large image URL (always first additionalImages)
  const currentImageUrl = largeImage ? getStrapiFullImageUrl(largeImage) : '';

  const minPermanence = car.minPermanence || 12;
  const displayPrice = car.pricePerMonth;
  const originalPrice = car.originalPrice;

  return (
    <main className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title and Price Section */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.55fr_1fr] items-start">
          <h1 className="text-4xl font-normal text-gray-900" style={{ fontFamily: 'Inter', paddingTop: '0.5rem' }}>
            {car.name}
          </h1>
          
          {/* Right block with permanence and price - aligned with Configura tu suscripción */}
          <div className="flex items-start gap-2">
            {/* Left part: permanence */}
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">
                {minPermanence} {t('carPage.meses')}
              </div>
              <div className="text-sm font-normal text-gray-700 whitespace-nowrap">
                permanencia mínima
              </div>
            </div>
            
            {/* Vertical divider */}
            <div className="w-[2px] h-12 bg-[#B4B4B4] mx-2" />
            
            {/* Invisible spacer to align with Configura tu suscripción */}
            <div className="w-4" />
            
            {/* Right part: price */}
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                {t('carPage.cuotaMensualDe')} {originalPrice && originalPrice > displayPrice ? (
                  <>
                    <span className="line-through" style={{ color: '#E10000' }}>{originalPrice}€</span> <span>{displayPrice}€</span>
                  </>
                ) : (
                  <span>{displayPrice}€</span>
                )}
              </div>
              <div className="text-sm font-normal text-gray-700 whitespace-nowrap text-right">
                {t('carPage.ivaIncl')}
              </div>
            </div>
            
            {/* Button */}
            <button className="bg-[#FB3B55] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#E02A44] transition-colors ml-4">
              {t('carPage.continuar')}
            </button>
          </div>
        </div>
      </div>

      {/* Divider - full width */}
      <div className="mb-8 h-[2px] bg-[#B4B4B4] w-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Images and Configuration Section */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.55fr_1fr]">
          {/* Left: Main Image and Gallery */}
          <div className="h-full flex flex-col">
            {/* Main Image */}
            <div className="relative mb-4 flex-1 overflow-hidden rounded-2xl bg-gray-100 min-h-[400px]">
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

            {/* Thumbnail Gallery - show next 3 additionalImages (not clickable) */}
            {thumbnailImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {thumbnailImages.map((image, thumbIndex) => {
                  const imageUrl = image ? getStrapiImageUrl(image, 'medium') : '';
                  
                  return (
                    <div
                      key={thumbIndex}
                      className="relative aspect-[16/9] overflow-visible rounded-lg"
                    >
                      {imageUrl ? (
                        <div className="relative h-full w-full rounded-lg" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                          src={imageUrl}
                            alt={`${car.name} ${thumbIndex + 2}`}
                          fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 1024px) 33vw, 22vw"
                        />
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-200 rounded-lg" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)' }}>
                          <p className="text-xs text-gray-400">{thumbIndex + 2}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right: Subscription Configuration */}
          <div className="h-full flex">
            <SubscriptionConfig car={car} />
          </div>
        </div>

        {/* Detailed Description */}
        {car.detailedDescription && (
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              {car.model || car.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              {parseFormattedText(car.detailedDescription)}
            </div>
          </div>
        )}
      </div>
        <HowItWorks />
        <ComparisonTable />
    </main>
  );
}

