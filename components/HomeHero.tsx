'use client';

import { useI18n } from '@/lib/i18n/context';

export default function HomeHero() {
  const { t } = useI18n();

  return (
    <section className="bg-[#DFDBC8] py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-3 sm:mb-4 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-medium leading-[100%] tracking-[0%] text-[#000000]">
          {t('home.hero.title')}
        </h1>
        <p className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-extralight leading-[100%] tracking-[0%] text-[#000000]">
          {t('home.hero.subtitle')}
        </p>
        <span
          className="inline-block rounded-2xl sm:rounded-3xl bg-[#603361] px-6 sm:px-8 py-2 sm:py-3 text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#4D2850] cursor-default"
        >
          {t('home.hero.verCoches')}
        </span>
      </div>
    </section>
  );
}

