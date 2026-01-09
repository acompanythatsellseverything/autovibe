'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';
import { RedTick } from '@/components/icons/RedTick';

export default function ElClubContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Section - Like HomeHero */}
      <section className="bg-[#DFDBC8] py-8 sm:py-12 lg:py-16 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-3 sm:mb-4 text-[28px] sm:text-[32px] lg:text-[40px] font-medium leading-[100%] tracking-[0%] text-[#000000]">
            {t('pages.elClub.hero.title')}
          </h1>
          <p className="mb-12 sm:mb-16 lg:mb-20 text-[20px] sm:text-[24px] lg:text-[30px] font-extralight leading-[100%] tracking-[0%] text-[#000000]">
            {t('pages.elClub.hero.subtitle')}
          </p>
          <Link
            href="/cars"
            className="inline-block rounded-3xl bg-[#603361] px-6 sm:px-8 py-2.5 sm:py-3 text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#4D2850]"
          >
            {t('pages.elClub.hero.button')}
          </Link>
        </div>
      </section>

      {/* Two-column block: Left image, Right text with list */}
      <section className="bg-[#DFDBC8]">
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/img/Workshop.jpg"
                alt="Workshop"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            {/* Right: Text with list */}
            <div className="flex flex-col justify-center bg-[#DFDBC8] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-12 lg:py-16 xl:py-24">
              <h2 className="mb-6 sm:mb-8 lg:mb-10 text-left text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-bold leading-[140%] text-[#000000] pl-6 sm:pl-8 lg:pl-[36px]">
                {t('pages.elClub.returns.title')}
              </h2>
              <ul className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item1')}
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item2')}
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item3')}
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item4')}
                  </p>
                </li>
              </ul>
              <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 text-center">
                <Link
                  href="/cars"
                  className="inline-block rounded-3xl bg-[#603361] px-6 sm:px-8 py-2.5 sm:py-3 text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#4D2850]"
                >
                  {t('pages.elClub.hero.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column block: Right image, Left text with list (reversed) */}
      <section className="bg-[#DFDBC8] pb-0">
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Text with list */}
            <div className="order-2 flex flex-col justify-center bg-[#DFDBC8] px-4 sm:px-6 md:px-8 lg:order-1 lg:px-16 xl:px-32 py-8 sm:py-12 lg:py-16 xl:py-24">
              <h2 className="mb-6 sm:mb-8 lg:mb-10 text-left text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-bold leading-[140%] text-[#000000] pl-6 sm:pl-8 lg:pl-[36px]">
                {t('pages.elClub.benefits.title')}
              </h2>
              <ul className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.benefits.items.item1')}
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.benefits.items.item2')}
                  </p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.benefits.items.item3')}
                  </p>
                </li>
              </ul>
              <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 text-center">
                <Link
                  href="/cars"
                  className="inline-block rounded-3xl bg-[#603361] px-6 sm:px-8 py-2.5 sm:py-3 text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#4D2850]"
                >
                  {t('pages.elClub.hero.button')}
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 aspect-square w-full overflow-hidden lg:order-2">
              <Image
                src="/img/Presentation.jpg"
                alt="Presentation"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

