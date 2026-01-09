import Image from 'next/image';
import { Feature } from '@/types';
import { getStrapiImageUrl } from '@/lib/strapi/config';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const imageUrl = feature.image ? getStrapiImageUrl(feature.image, 'medium') : '';

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105">
      <div className="relative aspect-square">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={feature.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-200">
            <p className="text-gray-400">Image placeholder</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
        <p className="mt-2 text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
}

