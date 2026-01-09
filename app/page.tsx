import Header from '@/components/Header';
import Image from 'next/image';
import FeatureCards from '@/components/FeatureCards';
import TestimonialCard from '@/components/TestimonialCard';
import HowItWorks from '@/components/HowItWorks';
import ComparisonTable from '@/components/ComparisonTable';
import ContractOptions from '@/components/ContractOptions';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StrapiNotice from '@/components/StrapiNotice';
import HomeHero from '@/components/HomeHero';
import FeaturedCarsSection from '@/components/FeaturedCarsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import {
  getFeaturedCars,
  getFeatures,
  getTestimonials,
  getFAQs,
} from '@/lib/strapi/queries';

export const revalidate = 60; // Revalidate every 60 seconds

async function getData() {
  try {
    const [cars, features, testimonials, faqs] = await Promise.all([
      getFeaturedCars(),
      getFeatures(),
      getTestimonials(),
      getFAQs(),
    ]);

    return {
      cars: cars || [],
      features: features || [],
      testimonials: testimonials || [],
      faqs: faqs || [],
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      cars: [],
      features: [],
      testimonials: [],
      faqs: [],
    };
  }
}

export default async function Home() {
  const { cars, features, testimonials, faqs } = await getData();
  const isStrapiConfigured = !!process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      {/* Car image on main page - fills entire space with header overlaid */}
      <div className="relative h-[700px] w-full overflow-hidden bg-[#DFDBC8]">
        <Image
          src="/img/Mask group.png"
          alt="Car showcase"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Header overlaid on top of image - transparent, no background */}
        <div className="absolute inset-0 z-10">
          <Header />
        </div>
      </div>
      <main>
        {/* Car Logos Image - Full Width */}
        <div className="relative w-full">
            <Image
            src="/icons/carlogos.png"
            alt="Car brand logos"
            width={1920}
            height={200}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Call to Action Section */}
        <HomeHero />

        {!isStrapiConfigured && <StrapiNotice />}

        {/* Feature Cards Section with Images */}
        <FeatureCards />

        {/* Featured Cars Section */}
        {cars && cars.length > 0 && <FeaturedCarsSection cars={cars} />}

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Strapi Testimonials Section */}
        {testimonials.length > 0 && (
          <section className="bg-[#DFDBC8] py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {testimonials.map((testimonial: any) => (
                  <TestimonialCard
                    key={testimonial._id}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <HowItWorks />
        <ComparisonTable />
        <ContractOptions />

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
