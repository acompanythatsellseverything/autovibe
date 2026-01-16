'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';

export default function ComparisonTable() {
  const { t } = useI18n();
  const features = [
    { name: t('comparison.features.eligeTiempo'), leasing: false, rental: false, autovibe: true },
    { name: t('comparison.features.ajustaKm'), leasing: false, rental: false, autovibe: true },
    { name: t('comparison.features.llevamosCasa'), leasing: false, rental: false, autovibe: true },
    { name: t('comparison.features.todoOnline'), leasing: false, rental: false, autovibe: true },
    { name: t('comparison.features.ayudamosAccidente'), leasing: false, rental: false, autovibe: true },
    { name: t('comparison.features.cocheSustitucion'), leasing: false, rental: false, autovibe: true },
    { name: t('comparison.features.sinEntrada'), leasing: false, rental: true, autovibe: true },
    { name: t('comparison.features.mantenimiento'), leasing: false, rental: true, autovibe: true },
    { name: t('comparison.features.seguro'), leasing: true, rental: true, autovibe: true },
  ];

  return (
    <section className="bg-[#DFDBC8] py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <h2 className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-center text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-medium leading-[100%] tracking-[0%] text-[#000000]">
          {t('comparison.title')}
        </h2>
        <div className="relative flex justify-center overflow-x-hidden">
          {/* White rounded rectangle container - increased width */}
          <div className="relative h-auto min-h-[400px] sm:min-h-[500px] md:h-[560px] lg:h-[640px] w-full max-w-[1800px] rounded-[12px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] bg-white shadow-lg overflow-hidden">
            <div className="relative flex h-full flex-col px-2 sm:px-4 md:px-6 lg:px-10 xl:px-12 py-3 sm:py-5 md:py-6 lg:py-8">
              {/* Red background rectangle for Suscripción AutoVibe column - spans entire height */}
              {/* Mobile: simplified positioning based on grid proportions */}
              <style dangerouslySetInnerHTML={{__html: `
                .comparison-red-block {
                  /* Mobile: grid-cols-[1.8fr_0.9fr_0.9fr_1fr] = total 4.6fr
                     Last column starts at: (1.8+0.9+0.9)/4.6 = 78.26%
                     Last column width: 1/4.6 = 21.74% */
                  left: 78.26%;
                  width: 21.74%;
                  right: -8px;
                }
                @media (min-width: 640px) {
                  .comparison-red-block {
                    /* sm: grid-cols-[1.9fr_1fr_1fr_1.1fr] = total 5fr
                       Last column starts at: (1.9+1+1)/5 = 78%
                       Last column width: 1.1/5 = 22% */
                    left: 78%;
                    width: 22%;
                    right: -16px;
                  }
                }
                @media (min-width: 768px) {
                  .comparison-red-block {
                    /* md: grid-cols-[2fr_1fr_1fr_1fr] = total 5fr
                       Last column starts at: (2+1+1)/5 = 80%
                       Last column width: 1/5 = 20% */
                    left: 80%;
                    width: 20%;
                    right: -24px;
                  }
                }
                @media (min-width: 1024px) {
                  .comparison-red-block {
                    right: -40px;
                  }
                }
                @media (min-width: 1280px) {
                  .comparison-red-block {
                    left: auto;
                    width: 320px;
                    right: -48px;
                  }
                }
                /* Hide separator on mobile */
                .comparison-separator {
                  display: none;
                }
                @media (min-width: 640px) {
                  .comparison-separator {
                    display: block;
                    left: 58%;
                  }
                }
                @media (min-width: 768px) {
                  .comparison-separator {
                    left: 60%;
                  }
                }
              `}} />
              <div 
                className="absolute top-0 h-full bg-[#FB3B55] rounded-[12px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] z-0 comparison-red-block"
                style={{
                  left: '78.26%',
                  width: '21.74%',
                  right: '-8px',
                }}
              />
              
              {/* Separator line between Leasing and Alquiler - hidden on mobile */}
              <div 
                className="hidden sm:block absolute w-[1px] sm:w-[1.5px] md:w-[2px] bg-[#C4C4C4] z-20 comparison-separator"
                style={{
                  top: 'clamp(25px, 7vw, 60px)',
                  bottom: 'clamp(25px, 7vw, 60px)',
                }}
              />
              
              {/* Table Header */}
              <div className="mb-1 sm:mb-2 grid grid-cols-[1.8fr_0.9fr_0.9fr_1fr] sm:grid-cols-[1.9fr_1fr_1fr_1.1fr] md:grid-cols-[2fr_1fr_1fr_1fr] relative z-10 items-center gap-0.5 sm:gap-1.5 md:gap-2.5 lg:gap-3 xl:gap-4">
                <div className="text-left pl-1 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-8">
                  <h3 className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[18px] font-medium leading-[1.2] sm:leading-[1.3] tracking-[-0.01em] sm:tracking-[0%] text-[#000000]">
                    {t('comparison.caracteristicas')}
                  </h3>
                </div>
                <div className="relative text-center flex items-center justify-center">
                  <h3 className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[18px] font-medium leading-[1.2] sm:leading-[1.3] tracking-[-0.01em] sm:tracking-[0%] text-[#000000]">
                    {t('comparison.leasing')}
                  </h3>
                </div>
                <div className="text-center flex items-center justify-center">
                  <h3 className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[18px] font-medium leading-[1.2] sm:leading-[1.3] tracking-[-0.01em] sm:tracking-[0%] text-[#000000]">
                    {t('comparison.alquiler')}
                  </h3>
                </div>
                <div className="relative flex flex-col sm:block items-center justify-center w-full" style={{ padding: 0, margin: 0 }}>
                  <h3 className="relative z-10 text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[18px] font-medium leading-[1.1] sm:leading-[1.2] md:leading-[1.3] tracking-[-0.01em] sm:tracking-[0%] text-white text-center w-full">
                    <span className="block sm:inline">{t('comparison.suscripcion')}</span>
                    <br className="hidden sm:block" />
                    <span className="block sm:inline">{t('comparison.autovibe')}</span>
                  </h3>
                </div>
              </div>

              {/* Features List */}
              <div className="relative flex-1 flex flex-col justify-between z-10 gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-[1.8fr_0.9fr_0.9fr_1fr] sm:grid-cols-[1.9fr_1fr_1fr_1.1fr] md:grid-cols-[2fr_1fr_1fr_1fr] flex-1 items-center gap-0.5 sm:gap-1.5 md:gap-2.5 lg:gap-3 xl:gap-4">
                    <div className="flex items-center text-left pl-1 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-8 min-w-0">
                      <p className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[18px] font-light leading-[1.2] sm:leading-[1.3] tracking-[-0.01em] sm:tracking-[0%] text-[#0C0C0C] whitespace-nowrap overflow-hidden text-ellipsis">
                        {feature.name}
                      </p>
                    </div>
                    <div className="relative flex items-center justify-center">
                      {feature.leasing ? (
                        <Image
                          src="/icons/Check.svg"
                          alt="Check"
                          width={32}
                          height={32}
                          className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8"
                          style={{ objectFit: 'contain' }}
                        />
                      ) : (
                        <Image
                          src="/icons/Xtbl.svg"
                          alt="Cross"
                          width={24}
                          height={24}
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                          style={{ objectFit: 'contain' }}
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-center">
                      {feature.rental ? (
                        <Image
                          src="/icons/Check.svg"
                          alt="Check"
                          width={32}
                          height={32}
                          className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8"
                          style={{ objectFit: 'contain' }}
                        />
                      ) : (
                        <Image
                          src="/icons/Xtbl.svg"
                          alt="Cross"
                          width={24}
                          height={24}
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                          style={{ objectFit: 'contain' }}
                        />
                      )}
                    </div>
                    <div className="relative flex items-center justify-center w-full" style={{ padding: 0 }}>
                      <div className="relative z-10 flex items-center justify-center w-full mx-auto">
                        {feature.autovibe ? (
                          <Image
                            src="/icons/Check.svg"
                            alt="Check"
                            width={32}
                            height={32}
                            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 brightness-0 invert mx-auto"
                            style={{ objectFit: 'contain' }}
                          />
                        ) : (
                          <Image
                            src="/icons/Xtbl.svg"
                            alt="Cross"
                            width={24}
                            height={24}
                            className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 brightness-0 invert mx-auto"
                            style={{ objectFit: 'contain' }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

