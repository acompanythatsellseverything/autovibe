'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { Locale } from '@/lib/i18n/translations';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isElClubPage = pathname === '/el-club';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const isTransparentHeader = isHomePage || isElClubPage;

  return (
    <header
      className={`relative ${
        isTransparentHeader
          ? 'bg-transparent'
          : 'bg-[#DFDBC8] shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
      }`}
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      {/* Content */}
      <nav className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="relative flex h-20 sm:h-24 md:h-28 items-center">
          {/* Mobile menu button - Left, before logo */}
          <button
            className={`lg:hidden mr-3 -mt-2 sm:-mt-2.5 md:-mt-3 ${isTransparentHeader ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo - Left */}
          <Link href="/" className="flex h-full items-start flex-shrink-0" style={{ top: 0, marginTop: 0, paddingTop: 0 }}>
            <Image
              src="/AutoVibeLogo.png"
              alt="AutoVibe Logo"
              width={250}
              height={110}
              className="h-[85%] sm:h-[90%] md:h-[95%] w-auto object-contain"
              style={{ marginTop: 0, paddingTop: 0, display: 'block' }}
              priority
            />
          </Link>

          {/* Center Section - Navigation Links and Buttons */}
          <div className="flex-1 flex justify-center items-center gap-2 sm:gap-3 md:gap-4 xl:gap-6">
            {/* Navigation Links */}
            <Link
              href="/suscripcion"
              className={`hidden text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap lg:block ${
                isTransparentHeader
                  ? 'text-white hover:text-yellow-300'
                  : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              {t('header.suscripcion')}
            </Link>
            <Link
              href="/compra"
              className={`hidden text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap lg:block ${
                isTransparentHeader
                  ? 'text-white hover:text-yellow-300'
                  : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              {t('header.compra')}
            </Link>
            <span
              className={`hidden text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] whitespace-nowrap lg:block cursor-default ${
                isTransparentHeader
                  ? 'text-white'
                  : 'text-gray-900'
              }`}
            >
              {t('header.empresas')}
            </span>
            <Link
              href="/el-club"
              className={`hidden text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap lg:block ${
                isTransparentHeader
                  ? 'text-white hover:text-yellow-300'
                  : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              {t('header.elClub')}
            </Link>

            {/* Buttons */}
            <div className="hidden items-center gap-1.5 sm:gap-2 md:gap-2 xl:gap-3 lg:flex">
              <button className="flex items-center gap-1 sm:gap-1.5 xl:gap-2 rounded-xl sm:rounded-2xl bg-[#F4A709] px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#E59808] whitespace-nowrap">
                <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 xl:h-4 xl:w-4 flex-shrink-0" />
                <span>{t('header.llamaMe')}</span>
              </button>
              <span
                className="flex items-center gap-1 sm:gap-1.5 xl:gap-2 rounded-xl sm:rounded-2xl bg-[#603361] px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] text-white whitespace-nowrap cursor-default"
              >
                <Image
                  src="/icons/account_circle.svg"
                  alt="Account"
                  width={20}
                  height={20}
                  className="h-3 w-3 sm:h-4 sm:w-4 xl:h-5 xl:w-5 flex-shrink-0"
                />
                <span>{t('header.miCuenta')}</span>
              </span>
            </div>
          </div>

          {/* Right Section - Language Selector only */}
          <div className="hidden items-center gap-1.5 sm:gap-2 lg:flex flex-shrink-0">
            <button
              onClick={() => setLocale('es')}
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
              title="Español"
            >
              <Image
                src="/icons/spain.png"
                alt="España"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </button>
            <button
              onClick={() => setLocale('en')}
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
              title="English"
            >
              <Image
                src="/icons/united-kingdom.png"
                alt="United Kingdom"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </button>
            <button
              onClick={() => setLocale('uk')}
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
              title="Українська"
            >
              <Image
                src="/icons/ukraine.png"
                alt="Ukraine"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </button>
            <button
              onClick={() => setLocale('ru')}
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
              title="Русский"
            >
              <Image
                src="/icons/russia.png"
                alt="Russia"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile menu drawer - slides from left */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
        
        {/* Drawer content */}
        <div
          className="relative h-full w-full bg-[#DFDBC8] shadow-xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header inside drawer */}
          <div className="sticky top-0 bg-[#DFDBC8] z-10">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Close button - Left */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-900"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Language selector - Right */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setLocale('es')}
                    className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
                  >
                    <Image
                      src="/icons/spain.png"
                      alt="España"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <button
                    onClick={() => setLocale('en')}
                    className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
                  >
                    <Image
                      src="/icons/united-kingdom.png"
                      alt="United Kingdom"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <button
                    onClick={() => setLocale('uk')}
                    className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
                  >
                    <Image
                      src="/icons/ukraine.png"
                      alt="Ukraine"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <button
                    onClick={() => setLocale('ru')}
                    className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
                  >
                    <Image
                      src="/icons/russia.png"
                      alt="Russia"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Divider - от края до края */}
            <div style={{ height: '1px', backgroundColor: '#B4B4B4', marginTop: '8px' }} />
          </div>

          {/* Menu items */}
          <div className="px-6 py-8">
            <div className="flex flex-col space-y-6">
              {/* Llama me! and Mi Cuenta - на одной линии */}
              <div className="flex items-center justify-center gap-2">
                <button className="flex items-center justify-center gap-1.5 rounded-3xl bg-[#F4A709] px-4 py-2 text-base font-normal text-white transition-colors hover:bg-[#E59808] whitespace-nowrap flex-1">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>{t('header.llamaMe')}</span>
                </button>
                <span className="flex items-center justify-center gap-1.5 rounded-3xl bg-[#603361] px-4 py-2 text-base font-normal text-white whitespace-nowrap cursor-default flex-1">
                  <Image
                    src="/icons/account_circle.svg"
                    alt="Account"
                    width={20}
                    height={20}
                    className="h-5 w-5 flex-shrink-0"
                  />
                  <span>{t('header.miCuenta')}</span>
                </span>
              </div>

              <div>
                <div style={{ display: 'inline-block' }}>
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.inicio')}
                  </Link>
                  <div style={{ height: '1px', backgroundColor: '#B4B4B4', marginTop: '8px', padding: 0, lineHeight: 0 }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'inline-block' }}>
                  <Link
                    href="/suscripcion"
                    className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.suscripcion')}
                  </Link>
                  <div style={{ height: '1px', backgroundColor: '#B4B4B4', marginTop: '8px', padding: 0, lineHeight: 0 }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'inline-block' }}>
                  <Link
                    href="/compra"
                    className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.compra')}
                  </Link>
                  <div style={{ height: '1px', backgroundColor: '#B4B4B4', marginTop: '8px', padding: 0, lineHeight: 0 }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'inline-block' }}>
                  <span className="text-lg font-medium text-gray-900 cursor-default block">
                    {t('header.empresas')}
                  </span>
                  <div style={{ height: '1px', backgroundColor: '#B4B4B4', marginTop: '8px', padding: 0, lineHeight: 0 }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'inline-block' }}>
                  <Link
                    href="/el-club"
                    className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.elClub')}
                  </Link>
                  <div style={{ height: '1px', backgroundColor: '#B4B4B4', marginTop: '8px', padding: 0, lineHeight: 0 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
