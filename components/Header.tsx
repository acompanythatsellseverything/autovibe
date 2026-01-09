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
        <div className="relative flex h-28 items-center">
          {/* Logo - Left */}
          <Link href="/" className="flex h-full items-start flex-shrink-0" style={{ top: 0, marginTop: 0, paddingTop: 0 }}>
            <Image
              src="/AutoVibeLogo.png"
              alt="AutoVibe Logo"
              width={250}
              height={110}
              className="h-[95%] w-auto object-contain"
              style={{ marginTop: 0, paddingTop: 0, display: 'block' }}
              priority
            />
          </Link>

          {/* Center Section - Navigation Links and Buttons */}
          <div className="flex-1 flex justify-center items-center gap-3 xl:gap-6">
            {/* Navigation Links */}
            <Link
              href="/suscripcion"
              className={`hidden text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap lg:block ${
                isTransparentHeader
                  ? 'text-white hover:text-yellow-300'
                  : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              {t('header.suscripcion')}
            </Link>
            <Link
              href="/compra"
              className={`hidden text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap lg:block ${
                isTransparentHeader
                  ? 'text-white hover:text-yellow-300'
                  : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              {t('header.compra')}
            </Link>
            <span
              className={`hidden text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] whitespace-nowrap lg:block cursor-default ${
                isTransparentHeader
                  ? 'text-white'
                  : 'text-gray-900'
              }`}
            >
              {t('header.empresas')}
            </span>
            <Link
              href="/el-club"
              className={`hidden text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap lg:block ${
                isTransparentHeader
                  ? 'text-white hover:text-yellow-300'
                  : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              {t('header.elClub')}
            </Link>

            {/* Buttons */}
            <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
              <button className="flex items-center gap-1.5 xl:gap-2 rounded-2xl bg-[#F4A709] px-3 xl:px-4 py-2 text-[16px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#E59808] whitespace-nowrap">
                <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4 flex-shrink-0" />
                <span>{t('header.llamaMe')}</span>
              </button>
              <span
                className="flex items-center gap-1.5 xl:gap-2 rounded-2xl bg-[#603361] px-3 xl:px-4 py-2 text-[16px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] text-white whitespace-nowrap cursor-default"
              >
                <Image
                  src="/icons/account_circle.svg"
                  alt="Account"
                  width={20}
                  height={20}
                  className="h-4 w-4 xl:h-5 xl:w-5 flex-shrink-0"
                />
                <span>{t('header.miCuenta')}</span>
              </span>
            </div>
          </div>

          {/* Right Section - Language Selector only */}
          <div className="hidden items-center gap-2 lg:flex flex-shrink-0">
            <button
              onClick={() => setLocale('es')}
              className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
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
              className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
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
              className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
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
              className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110"
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

          {/* Mobile menu button */}
          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 lg:hidden ${isTransparentHeader ? 'text-white' : 'text-gray-900'}`}
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
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t py-4 ${
              isTransparentHeader ? 'border-white/20' : 'border-gray-200'
            }`}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/suscripcion"
                className={`text-base font-medium transition-colors ${
                  isTransparentHeader
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-900 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.suscripcion')}
              </Link>
              <Link
                href="/compra"
                className={`text-base font-medium transition-colors ${
                  isTransparentHeader
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-900 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.compra')}
              </Link>
              <span
                className={`text-base font-medium cursor-default ${
                  isTransparentHeader
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                {t('header.empresas')}
              </span>
              <Link
                href="/el-club"
                className={`text-base font-medium transition-colors ${
                  isTransparentHeader
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-900 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.elClub')}
              </Link>
              <button className="flex items-center space-x-2 rounded-2xl bg-[#F4A709] px-4 py-2 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" />
                <span>{t('header.llamaMe')}</span>
              </button>
              <span className="flex items-center space-x-2 rounded-2xl bg-[#603361] px-4 py-2 text-sm font-semibold text-white cursor-default">
                <Image
                  src="/icons/account_circle.svg"
                  alt="Account"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span>{t('header.miCuenta')}</span>
              </span>
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => {
                    setLocale('es');
                    setMobileMenuOpen(false);
                  }}
                  className="h-8 w-8 overflow-hidden rounded-full"
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
                  onClick={() => {
                    setLocale('en');
                    setMobileMenuOpen(false);
                  }}
                  className="h-8 w-8 overflow-hidden rounded-full"
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
                  onClick={() => {
                    setLocale('uk');
                    setMobileMenuOpen(false);
                  }}
                  className="h-8 w-8 overflow-hidden rounded-full"
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
                  onClick={() => {
                    setLocale('ru');
                    setMobileMenuOpen(false);
                  }}
                  className="h-8 w-8 overflow-hidden rounded-full"
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
        )}
      </nav>
    </header>
  );
}
