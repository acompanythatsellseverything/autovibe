import Image from 'next/image';
import { Testimonial } from '@/types';
import { getStrapiImageUrl } from '@/lib/strapi/config';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const imageUrl = testimonial.image ? getStrapiImageUrl(testimonial.image, 'small') : '';

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center space-x-4">
        {imageUrl ? (
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image
              src={imageUrl}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-16 w-16 rounded-full bg-gray-200" />
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-3 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700">{testimonial.comment}</p>
    </div>
  );
}

