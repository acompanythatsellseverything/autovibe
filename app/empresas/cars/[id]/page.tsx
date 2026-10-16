import type { Metadata } from 'next';
import { currentLocale, pageMetadata, carJsonLd, localizedPath, SITE_URL } from '@/lib/seo';
import { getCarCoverImage, getStrapiFullImageUrl } from '@/lib/strapi/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCarById } from '@/lib/strapi/queries';
import EnterpriseCarDetailContent from '@/components/EnterpriseCarDetailContent';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const [locale, car] = await Promise.all([currentLocale(), getCarById(id)]);
  if (!car) return { title: 'AutoVibe', robots: { index: false } };
  const cover = getCarCoverImage(car, 'empresas');
  const image = cover ? getStrapiFullImageUrl(cover) : undefined;
  return pageMetadata({
    path: '/empresas/cars/' + car.id,
    locale,
    title: `${car.name} | AutoVibe`,
    description: (car.description || `${car.brand} ${car.model}`).slice(0, 160),
    image: image && image.startsWith('http') ? image : undefined,
  });
}

export default async function EmpresasCarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car || car.availableForEmpresas === false) {
    return (
      <div className="min-h-screen bg-[#DFDBC8]">
        <Header />
        <main className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900">
              {!car ? 'Coche no encontrado' : 'Esta opción no está disponible para este coche'}
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: carJsonLd(car, 'empresas', SITE_URL + localizedPath('/empresas/cars/' + car.id, await currentLocale()), (() => { const c = getCarCoverImage(car, 'empresas'); const u = c ? getStrapiFullImageUrl(c) : ''; return u.startsWith('http') ? u : undefined; })()) }}
      />
      <Header />
      <EnterpriseCarDetailContent car={car} />
      <Footer />
    </div>
  );
}
