'use client';

import Image from 'next/image';
import Link from '@/components/LocalizedLink';
import { useI18n } from '@/lib/i18n/context';

const CARD_LINKS = ['/suscripcion', '/compra', '/el-club'] as const;

export default function FeatureCards() {
  const { t } = useI18n();
  const features = [
    { image: '/img/BMWX5M1.png', titleKey: 'home.featureCardsMain.card1.title', descKey: 'home.featureCardsMain.card1.description' },
    { image: '/img/Volvo.png', titleKey: 'home.featureCardsMain.card2.title', descKey: 'home.featureCardsMain.card2.description' },
    { image: '/img/Club.png', titleKey: 'home.featureCardsMain.card3.title', descKey: 'home.featureCardsMain.card3.description' },
  ];

  return (
    <section className="bg-[#DFDBC8] pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={CARD_LINKS[index]}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transition-transform hover:scale-105 block"
            >
              <div className="relative aspect-square">
                <Image
                  src={feature.image}
                  alt={t(feature.titleKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 sm:p-5 md:p-6">
                  <h3 className="mb-1.5 sm:mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-semibold leading-[100%] tracking-[0%] text-white">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] font-light leading-[110%] sm:leading-[100%] tracking-[0%] text-white">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
