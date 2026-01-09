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
    <section className="bg-[#DFDBC8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-24 text-center text-[40px] font-medium leading-[100%] tracking-[0%] text-[#000000]">
          {t('comparison.title')}
        </h2>
        <div className="relative flex justify-center">
          {/* White rounded rectangle container - increased width */}
          <div className="relative h-[640px] w-full max-w-[1800px] rounded-[30px] bg-white shadow-lg overflow-hidden">
            {/* Red background rectangle for Suscripción AutoVibe column - overlapping effect */}
            <div className="absolute right-0 top-0 h-[640px] w-[320px] rounded-[30px] bg-[#FB3B55]" />
            
            <div className="relative flex h-full flex-col px-12 py-8">
              {/* Separator line between Leasing and Alquiler - with top and bottom margins */}
              {/* Position: after 2fr (40%) + 1fr (20%) = 60% of container width */}
              <div 
                className="absolute w-[2px] bg-[#C4C4C4] z-20"
                style={{
                  left: '60%',
                  top: '60px',
                  bottom: '60px',
                  height: 'calc(100% - 120px)',
                  backgroundColor: '#C4C4C4',
                  border: 'none',
                  outline: 'none',
                }}
              />
              
              {/* Table Header */}
              <div className="mb-2 grid grid-cols-[2fr_1fr_1fr_1fr] relative z-10 items-center">
                <div className="text-left pl-8">
                  <h3 className="text-[18px] font-medium leading-[1.3] tracking-[0%] text-[#000000]">
                    {t('comparison.caracteristicas')}
                  </h3>
                </div>
                <div className="relative text-center flex items-center justify-center">
                  <h3 className="text-[18px] font-medium leading-[1.3] tracking-[0%] text-[#000000]">
                    {t('comparison.leasing')}
                  </h3>
                </div>
                <div className="text-center flex items-center justify-center">
                  <h3 className="text-[18px] font-medium leading-[1.3] tracking-[0%] text-[#000000]">
                    {t('comparison.alquiler')}
                  </h3>
                </div>
                <div className="relative text-center pr-8 flex items-center justify-center">
                  <h3 className="relative z-10 text-[18px] font-medium leading-[1.3] tracking-[0%] text-white">
                    {t('comparison.suscripcion')}<br />{t('comparison.autovibe')}
                  </h3>
                </div>
              </div>

              {/* Features List */}
              <div className="relative flex-1 flex flex-col justify-between z-10">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-[2fr_1fr_1fr_1fr] flex-1 items-center">
                    <div className="flex items-center text-left pl-8">
                      <p className="text-[18px] font-light leading-[1.3] tracking-[0%] text-[#0C0C0C] whitespace-nowrap">
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
                          className="h-8 w-8"
                          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                        />
                      ) : (
                        <Image
                          src="/icons/Xtbl.svg"
                          alt="Cross"
                          width={24}
                          height={24}
                          className="h-6 w-6"
                          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
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
                          className="h-8 w-8"
                          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                        />
                      ) : (
                        <Image
                          src="/icons/Xtbl.svg"
                          alt="Cross"
                          width={24}
                          height={24}
                          className="h-6 w-6"
                          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                        />
                      )}
                    </div>
                    <div className="relative flex items-center justify-center pr-8">
                      <div className="relative z-10">
                        {feature.autovibe ? (
                          <Image
                            src="/icons/Check.svg"
                            alt="Check"
                            width={32}
                            height={32}
                            className="h-8 w-8 brightness-0 invert"
                            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                          />
                        ) : (
                          <Image
                            src="/icons/Xtbl.svg"
                            alt="Cross"
                            width={24}
                            height={24}
                            className="h-6 w-6 brightness-0 invert"
                            style={{ width: '24px', height: '24px', objectFit: 'contain' }}
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

