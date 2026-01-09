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
      <section className="bg-[#DFDBC8] py-16 pb-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-[40px] font-medium leading-[100%] tracking-[0%] text-[#000000]">
            {t('pages.elClub.hero.title')}
          </h1>
          <p className="mb-20 text-[30px] font-extralight leading-[100%] tracking-[0%] text-[#000000]">
            {t('pages.elClub.hero.subtitle')}
          </p>
          <Link
            href="/cars"
            className="inline-block rounded-3xl bg-[#603361] px-8 py-3 text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#4D2850]"
          >
            {t('pages.elClub.hero.button')}
          </Link>
        </div>
      </section>

      {/* Two-column block: Left image, Right text with list */}
      <section className="bg-[#DFDBC8]">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
            {/* Left: Image */}
            <div className="relative aspect-square w-full">
              <Image
                src="/img/Workshop.jpg"
                alt="Workshop"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            {/* Right: Text with list */}
            <div className="flex flex-col justify-center bg-[#DFDBC8] px-8 py-12 lg:px-32 lg:py-24">
              <h2 className="mb-10 text-left text-[26px] font-bold leading-[140%] text-[#000000] pl-[36px]">
                {t('pages.elClub.returns.title')}
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[24px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item1')}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[24px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item2')}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[24px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item3')}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[24px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.returns.items.item4')}
                  </p>
                </li>
              </ul>
              <div className="mt-24 text-center">
                <Link
                  href="/cars"
                  className="inline-block rounded-3xl bg-[#603361] px-8 py-3 text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#4D2850]"
                >
                  {t('pages.elClub.hero.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column block: Right image, Left text with list (reversed) */}
      <section className="bg-[#DFDBC8]">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
            {/* Left: Text with list */}
            <div className="order-2 flex flex-col justify-center bg-[#DFDBC8] px-8 py-12 lg:order-1 lg:px-32 lg:py-24">
              <h2 className="mb-10 text-left text-[26px] font-bold leading-[140%] text-[#000000] pl-[36px]">
                {t('pages.elClub.benefits.title')}
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[24px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.benefits.items.item1')}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[24px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.benefits.items.item2')}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <RedTick />
                  </div>
                  <p className="text-[24px] leading-[140%] text-[#000000]">
                    {t('pages.elClub.benefits.items.item3')}
                  </p>
                </li>
              </ul>
              <div className="mt-24 text-center">
                <Link
                  href="/cars"
                  className="inline-block rounded-3xl bg-[#603361] px-8 py-3 text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#4D2850]"
                >
                  {t('pages.elClub.hero.button')}
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 aspect-square w-full lg:order-2">
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

