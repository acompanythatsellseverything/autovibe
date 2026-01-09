import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EmpresasPage() {
  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            Soluciones para Empresas
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600">
              Gestiona la flota de tu empresa de manera sencilla y eficiente
              con AutoVibe.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

