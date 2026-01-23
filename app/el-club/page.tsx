import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import ElClubContent from '@/components/ElClubContent';

export default function ElClubPage() {
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
        {/* Hero image on El Club page - fills entire space with header overlaid */}
        {/* Высота уменьшается с увеличением ширины экрана, всегда доходит до верха и краев */}
        <div className="relative h-[500px] sm:h-[580px] hero-image-container w-full overflow-hidden bg-[#DFDBC8]">
          {/* Mobile hero image */}
          <Image
            src="/img/elclub_mobile.png"
            alt="El Club"
            fill
            className="object-cover object-bottom lg:hidden"
            priority
            sizes="100vw"
          />
          {/* Desktop hero image - нижняя часть всегда видна, обрезаем только сверху, всегда доходит до верха и краев */}
          <Image
            src="/img/elcub.jpg"
            alt="El Club"
            fill
            className="hidden object-cover object-bottom lg:block"
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
      <main className="pb-0">
        <ElClubContent />
      </main>
      <Footer />
    </div>
  );
}
