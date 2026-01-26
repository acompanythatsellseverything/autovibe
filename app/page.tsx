import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
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
import BrandCarousel from '@/components/BrandCarousel';
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
      {/* Hero section with image and header */}
      <div className="relative">
        {/* Header - logo only on mobile (not sticky), full header on desktop */}
        <div className="lg:hidden absolute top-0 left-0 right-0 z-10 pointer-events-none">
          <nav className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 pointer-events-auto">
            <div className="relative flex h-20 sm:h-24 md:h-28 items-center">
              {/* Spacer for burger menu */}
              <div className="w-12 sm:w-14 md:w-16 mr-3"></div>
              {/* Logo - same position as in header */}
              <Link href="/" className="flex h-full items-start flex-shrink-0">
                <Image
                  src="/AutoVibeLogo.png"
                  alt="AutoVibe Logo"
                  width={250}
                  height={110}
                  className="h-[85%] sm:h-[90%] md:h-[95%] w-auto object-contain"
                  priority
                />
              </Link>
            </div>
          </nav>
        </div>
        {/* Car image on main page - fills entire space with header overlaid */}
        {/* Высота уменьшается с увеличением ширины экрана, всегда доходит до верха и краев */}
        <div className="relative h-[500px] sm:h-[580px] hero-image-container w-full overflow-hidden bg-[#DFDBC8]">
          {/* Mobile hero image */}
          <Image
            src="/img/hero_mobile.png"
            alt="Car showcase"
            fill
            className="object-cover object-top lg:hidden"
            priority
            sizes="100vw"
          />
          {/* Desktop hero image - пропорциональное обрезание сверху и снизу, всегда доходит до верха и краев */}
          <Image
            src="/img/Mask group.png"
            alt="Car showcase"
            fill
            className="hidden object-cover object-top lg:block"
            priority
            sizes="100vw"
          />
        </div>
        {/* Desktop header overlay - full header on desktop */}
        <div className="hidden lg:block lg:absolute lg:inset-0 lg:z-10 pointer-events-none">
          <div className="lg:absolute lg:inset-x-0 lg:top-0 lg:z-10 pointer-events-auto">
            <Header />
          </div>
        </div>
        {/* Mobile burger menu - fixed, rendered by Header component */}
        <Header />
      </div>
      <main>
        {/* Car Logos - Desktop: Image, Mobile: Carousel */}
        <BrandCarousel />

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
