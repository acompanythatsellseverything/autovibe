'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#544A70] to-[#D99300] sm:bg-gradient-to-r" />

      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:px-46">
        {/* Logo and Social Media - Top Row */}
        <div className="mb-6 sm:mb-10 md:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
          {/* Logo - Hidden on mobile, shown on desktop */}
          <div className="hidden sm:block">
            <Image
              src="/icons/LogoFooter.png"
              alt="AutoVibe Logo"
              width={300}
              height={120}
              className="h-8 sm:h-9 md:h-10 w-auto"
              priority
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <a
            href="https://www.youtube.com/@autovibe-spain"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src="/icons/youtube.png"
              alt="YouTube"
              width={64}
              height={64}
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </a>
          <a
            href="https://www.instagram.com/auto_vibe_sl/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={64}
              height={64}
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </a>
          <a
            href="https://www.tiktok.com/@autovibe_bogdan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src="/icons/tiktok.png"
              alt="TikTok"
              width={64}
              height={64}
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </a>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          {/* Legal Links - Hidden on mobile */}
          <div className="hidden sm:block">
            {/* Invisible header to align with other columns */}
            <h3
              className="mb-3 sm:mb-4 font-medium leading-[100%] tracking-[0%] invisible"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: '#DFDBC8',
              }}
            >
              {t('footer.ciudades.title')}
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              <Link
                href="/terms-and-conditions"
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.legal.terminos')}
              </Link>
              <Link
                href="/privacy-policy"
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.legal.privacidad')}
              </Link>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.legal.cookies')}
              </span>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.legal.condiciones')}
              </span>
            </div>
          </div>

          {/* Cities */}
          <div>
            <h3
              className="mb-3 sm:mb-4 font-medium leading-[100%] tracking-[0%]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: '#DFDBC8',
              }}
            >
              {t('footer.ciudades.title')}
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.ciudades.valencia')}
              </span>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.ciudades.barcelona')}
              </span>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.ciudades.madrid')}
              </span>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.ciudades.marbella')}
              </span>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3
              className="mb-3 sm:mb-4 font-medium leading-[100%] tracking-[0%]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: '#DFDBC8',
              }}
            >
              {t('footer.conocenos.title')}
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.conocenos.sitemap')}
              </span>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.conocenos.trabaja')}
              </span>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.conocenos.compramos')}
              </span>
              <span
                className="block font-light leading-[100%] tracking-[0%] transition-opacity hover:opacity-80 cursor-default"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  color: '#DFDBC8',
                }}
              >
                {t('footer.conocenos.opiniones')}
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3
              className="mb-3 sm:mb-4 font-medium leading-[100%] tracking-[0%]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: '#DFDBC8',
              }}
            >
              {t('footer.contactanos.title')}
            </h3>
            <div className="space-y-1.5 sm:space-y-2 font-light leading-[100%] tracking-[0%]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 2.5vw, 20px)',
                color: '#DFDBC8',
              }}
            >
              <p>{t('footer.contactanos.horario')}</p>
              <p>{t('footer.contactanos.atencion')}</p>
              <p>{t('footer.contactanos.nuevos')}</p>
              <p>{t('footer.contactanos.asistencia')}</p>
            </div>
          </div>
        </div>

        {/* Logo and Copyright on mobile - Left aligned */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end gap-4 sm:gap-0">
          {/* Logo on mobile */}
          <div className="sm:hidden">
            <Image
              src="/icons/LogoFooter.png"
              alt="AutoVibe Logo"
              width={300}
              height={120}
              className="h-6 w-auto"
              priority
            />
          </div>

          {/* Copyright */}
          <p
            className="font-light leading-[100%] tracking-[0%] text-black sm:text-[#DFDBC8]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(14px, 2.5vw, 20px)',
            }}
          >
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

