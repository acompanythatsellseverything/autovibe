'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Here you could verify the session with your backend
    if (sessionId) {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#DFDBC8]">
        <Header />
        <main className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">Cargando...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#DFDBC8]">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              ¡Suscripción exitosa!
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Gracias por confiar en AutoVibe. Tu coche estará listo pronto.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#DFDBC8]">
        <Header />
        <main className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">Cargando...</div>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
