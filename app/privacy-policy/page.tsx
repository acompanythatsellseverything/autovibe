'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n/context';

export default function PrivacyPolicyPage() {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#DFDBC8' }}>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            {t('privacyPolicy.title')}
          </h1>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">

            {/* 1. Who are we */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section1.title')}
              </h2>
              <p>{t('privacyPolicy.section1.intro')}</p>
              <ul className="list-none space-y-1 mt-3">
                <li><strong>{t('privacyPolicy.section1.addressLabel')}:</strong> Calle Sant Domenec Savio, 69 - Piso 2, Valencia, 46019, Valencia, Spain</li>
                <li><strong>CIF:</strong> B70620471</li>
                <li><strong>{t('privacyPolicy.section1.emailLabel')}:</strong> ceo@autovibe.es</li>
              </ul>
            </section>

            {/* 2. What does this privacy policy do */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section2.title')}
              </h2>
              <p>{t('privacyPolicy.section2.content')}</p>
            </section>

            {/* 3. Obligatory provision of data */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section3.title')}
              </h2>
              <p>{t('privacyPolicy.section3.content')}</p>
            </section>

            {/* 4. Purposes */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section4.title')}
              </h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {t('privacyPolicy.section4.purpose1.title')}
              </h3>
              <p>{t('privacyPolicy.section4.purpose1.content')}</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {t('privacyPolicy.section4.purpose2.title')}
              </h3>
              <p>{t('privacyPolicy.section4.purpose2.content')}</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {t('privacyPolicy.section4.purpose3.title')}
              </h3>
              <p>{t('privacyPolicy.section4.purpose3.content')}</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {t('privacyPolicy.section4.purpose4.title')}
              </h3>
              <p>{t('privacyPolicy.section4.purpose4.content')}</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {t('privacyPolicy.section4.purpose5.title')}
              </h3>
              <p>{t('privacyPolicy.section4.purpose5.content')}</p>
            </section>

            {/* 5. Categories of personal data */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section5.title')}
              </h2>
              <p>{t('privacyPolicy.section5.content')}</p>
            </section>

            {/* 6. Who do we share data with */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section6.title')}
              </h2>
              <p>{t('privacyPolicy.section6.content')}</p>
            </section>

            {/* 7. International data transfers */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section7.title')}
              </h2>
              <p>{t('privacyPolicy.section7.content')}</p>
            </section>

            {/* 8. Data retention */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section8.title')}
              </h2>
              <p>{t('privacyPolicy.section8.content')}</p>
            </section>

            {/* 9. User responsibility */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section9.title')}
              </h2>
              <p>{t('privacyPolicy.section9.content')}</p>
            </section>

            {/* 10. Exercise of rights */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section10.title')}
              </h2>
              <p>{t('privacyPolicy.section10.content')}</p>
            </section>

            {/* 11. Security measures */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section11.title')}
              </h2>
              <p>{t('privacyPolicy.section11.content')}</p>
            </section>

            {/* 12. Changes */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('privacyPolicy.section12.title')}
              </h2>
              <p>{t('privacyPolicy.section12.content')}</p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              {t('privacyPolicy.lastUpdate')}: 07/04/2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
