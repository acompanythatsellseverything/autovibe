'use client';

import { useI18n } from '@/lib/i18n/context';

export default function HowItWorks() {
  const { t } = useI18n();
  const steps = [
    { number: '1', key: 'step1' as const },
    { number: '2', key: 'step2' as const },
    { number: '3', key: 'step3' as const },
    { number: '4', key: 'step4' as const },
  ];

  return (
    <section className="relative py-12 sm:py-14 md:py-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#A368AC] to-[#E1809F]" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-medium leading-[100%] tracking-[0%] text-[#DFDBC8]">
          {t('howItWorks.title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.key} className="text-left">
              <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-medium leading-[100%] tracking-[0%] text-[#DFDBC8]">
                {step.number}. {t(`howItWorks.${step.key}.title`)}
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[120%] sm:leading-[100%] tracking-[0%] text-[#DFDBC8]">
                {t(`howItWorks.${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
