'use client';

import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ramon Jernandez',
    role: 'CEO @ Ribochat',
    image: '/people/4d929f4fef5cf96803844f4b6f8ca26492d8734c.jpg',
    rating: 5,
    comment: '"Concèntrate en lo tuyo y disfruta" - esa es la idea. Combos que molan, condiciones a tu medida, y una relación de verdad (no el rollo corporativo de siempre). El Club funciona como debe: como un sitio donde conductores encuentran lo que buscan.',
  },
  {
    name: 'Javier Jimenez',
    role: 'CFO @ AF-Bank',
    image: '/people/afd9178ba2fc5327278efc9137bb701e0cabb256.jpg',
    rating: 5,
    comment: 'Lo que más me gusta de AutoVibe es que van de clientes de verdad, no de coches. Hacen lo que haga falta para que estés contento, y trabajar con su equipo es un gusto. Encantado de haberlos descubierto y de usar su suscripción.',
  },
  {
    name: 'Artur Scott',
    role: 'Founder @ AS-Logistics',
    image: '/people/7e4b4c5bd628bd77d7c007e5e10e061e9b6d7e12.jpg',
    rating: 4,
    comment: 'Un servicio increíble, no conozco nada igual en España. Gané un certificado para conducir un fin de semana y al día siguiente de solicitarlo ya tenía el coche en mi puerta. Sin duda, lo recomiendo.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#DFDBC8] pt-8 sm:pt-10 md:pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              {/* Profile Picture and Info */}
              <div className="mb-4 flex items-center space-x-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-5 w-5">
                    {i < testimonial.rating ? (
                      <Image
                        src="/icons/star_filled.svg"
                        alt="Filled star"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z" fill="#D1D5DB"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-900 leading-relaxed">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

