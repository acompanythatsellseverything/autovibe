import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ElClubContent from '@/components/ElClubContent';

export default function ElClubPage() {
  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      {/* Hero image on El Club page - fills entire space including header */}
      <div className="relative h-[700px] w-full overflow-hidden bg-[#DFDBC8]">
        <Image
          src="/img/elcub.jpg"
          alt="El Club"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Header overlaid on top of image */}
        <div className="absolute inset-0 z-10">
          <Header />
        </div>
      </div>
      <main className="pb-0">
        <ElClubContent />
      </main>
      <Footer />
    </div>
  );
}
