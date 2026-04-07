'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/lib/i18n/context';

export default function TermsAndConditionsPage() {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#DFDBC8' }}>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            {t('termsConditions.title')}
          </h1>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">

            {/* About Us */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.aboutUs.title')}
              </h2>
              <p>{t('termsConditions.aboutUs.intro')}</p>
              <ul className="list-none space-y-1 mt-3">
                <li><strong>{t('termsConditions.aboutUs.addressLabel')}:</strong> Calle Sant Domenec Savio, 69 - Piso 2, Valencia, 46019, Valencia, Spain</li>
                <li><strong>CIF:</strong> B70620471</li>
                <li><strong>{t('termsConditions.aboutUs.emailLabel')}:</strong> ceo@autovibe.es</li>
              </ul>
            </section>

            {/* Overview of Service */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.overview.title')}
              </h2>
              <p>{t('termsConditions.overview.content')}</p>
            </section>

            {/* Structure */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.structure.title')}
              </h2>
              <p>{t('termsConditions.structure.content')}</p>
            </section>

            {/* 1. Glossary */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section1.title')}
              </h2>
              <p>{t('termsConditions.section1.content')}</p>
            </section>

            {/* 2. Contractual Process */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section2.title')}
              </h2>
              <p>{t('termsConditions.section2.content')}</p>
            </section>

            {/* 3. Commencement and Duration */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section3.title')}
              </h2>
              <p>{t('termsConditions.section3.content')}</p>
            </section>

            {/* 4. Territory */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section4.title')}
              </h2>
              <p>{t('termsConditions.section4.content')}</p>
            </section>

            {/* 5. Drivers */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section5.title')}
              </h2>
              <p>{t('termsConditions.section5.content')}</p>
            </section>

            {/* 6. Driving Licences */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section6.title')}
              </h2>
              <p>{t('termsConditions.section6.content')}</p>
            </section>

            {/* 7. Insurance */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section7.title')}
              </h2>
              <p>{t('termsConditions.section7.content')}</p>
            </section>

            {/* 8. Fees and Payments */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section8.title')}
              </h2>
              <p>{t('termsConditions.section8.content')}</p>
            </section>

            {/* 9. Vehicle Details */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section9.title')}
              </h2>
              <p>{t('termsConditions.section9.content')}</p>
            </section>

            {/* 10. Delivery */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section10.title')}
              </h2>
              <p>{t('termsConditions.section10.content')}</p>
            </section>

            {/* 11. User Restrictions */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section11.title')}
              </h2>
              <p>{t('termsConditions.section11.content')}</p>
            </section>

            {/* 12. Incidents */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section12.title')}
              </h2>
              <p>{t('termsConditions.section12.content')}</p>
            </section>

            {/* 13. General Provisions */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('termsConditions.section13.title')}
              </h2>
              <p>{t('termsConditions.section13.content')}</p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              {t('termsConditions.lastUpdate')}: 07/04/2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
