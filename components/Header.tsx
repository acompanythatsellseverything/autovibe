'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { Locale } from '@/lib/i18n/translations';
import CallbackRequestForm from '@/components/CallbackRequestForm';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isElClubPage = pathname === '/el-club';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callbackFormOpen, setCallbackFormOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const isTransparentHeader = isHomePage || isElClubPage;

  return (
    <>
    {/* Mobile burger menu - fixed on mobile for transparent pages */}
    {isTransparentHeader && (
      <button
        className={`lg:hidden fixed top-4 left-[18px] sm:left-6 z-50 ${
          isTransparentHeader 
            ? 'text-white' 
            : 'text-gray-900'
        } ${
          isTransparentHeader
            ? 'p-1.5 rounded-lg backdrop-blur-lg bg-white/15 border border-white/30 shadow-xl hover:bg-white/20 transition-all'
            : ''
        }`}
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
    )}
    
    <header
      className={`${
        isTransparentHeader
          ? 'transparent-header lg:backdrop-blur-none lg:bg-transparent lg:border-none hidden lg:block'
          : 'bg-[#DFDBC8] shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
      } ${isTransparentHeader ? 'lg:absolute lg:inset-x-0 lg:top-0 lg:z-10' : 'fixed top-0 left-0 right-0 z-50 lg:sticky lg:top-0 lg:z-10'}`}
      style={{ 
        margin: 0,
        marginTop: 0, 
        marginBottom: 0,
        padding: 0,
        paddingTop: 0,
        paddingBottom: 0,
        top: 0,
        left: 0,
        right: 0
      }}
    >
      {/* Content */}
      <nav className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ margin: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}>
        <div className="relative flex h-20 sm:h-24 md:h-28 items-start" style={{ margin: 0, marginTop: 0, marginBottom: 0, padding: 0, paddingTop: 0, paddingBottom: 0 }}>
          {/* Mobile menu button - Left, before logo - only for non-transparent pages */}
          {!isTransparentHeader && (
            <button
              className="lg:hidden mr-3 text-gray-900 p-1.5 rounded-lg backdrop-blur-lg bg-white/15 border border-gray-900/20 shadow-xl hover:bg-white/20 transition-all self-center"
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
          )}

          {/* Desktop Layout - для правильного центрирования */}
          <div className="hidden lg:flex w-full items-center h-full relative">
            {/* Left Section - Logo */}
            <div className="flex items-start justify-start flex-shrink-0" style={{ marginTop: 0, paddingTop: 0, lineHeight: 0, alignSelf: 'flex-start' }}>
              <Link href="/" className="flex items-start" style={{ top: 0, marginTop: 0, paddingTop: 0, lineHeight: 0 }}>
                <Image
                  src="/AutoVibeLogo.png"
                  alt="AutoVibe Logo"
                  width={250}
                  height={110}
                  className="h-[75px] sm:h-[90px] md:h-[105px] w-auto object-contain"
                  style={{ marginTop: 0, paddingTop: 0, display: 'block', verticalAlign: 'top', lineHeight: 0, transform: 'translateY(0)' }}
                  priority
                />
              </Link>
            </div>

            {/* Center Section - Navigation Links and Buttons - абсолютно центрировано */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 sm:gap-3 md:gap-4 xl:gap-6">
              {/* Navigation Links */}
              <Link
                href="/suscripcion"
                className={`text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap ${
                  isTransparentHeader
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-900 hover:text-purple-600'
                }`}
              >
                {t('header.suscripcion')}
              </Link>
              <Link
                href="/compra"
                className={`text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap ${
                  isTransparentHeader
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-900 hover:text-purple-600'
                }`}
              >
                {t('header.compra')}
              </Link>
              <Link
                href="/empresas"
                className={`text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap ${
                  isTransparentHeader
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-900 hover:text-purple-600'
                }`}
              >
                {t('header.empresas')}
              </Link>
              <Link
                href="/el-club"
                className={`text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[100%] tracking-[0%] transition-colors whitespace-nowrap ${
                  isTransparentHeader
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-900 hover:text-purple-600'
                }`}
              >
                {t('header.elClub')}
              </Link>

              {/* Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2 xl:gap-3">
                <button
                  type="button"
                  onClick={() => setCallbackFormOpen(true)}
                  className={`flex items-center gap-1 sm:gap-1.5 xl:gap-2 rounded-xl sm:rounded-2xl bg-[#F4A709] px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 font-normal leading-[100%] tracking-[0%] text-white transition-colors hover:bg-[#E59808] whitespace-nowrap ${locale === 'ru' ? 'text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px]' : 'text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px]'}`}
                >
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
                {/* WhatsApp Icon - круглое лого справа от Mi Cuenta */}
                <a
                  href="https://api.whatsapp.com/send?phone=34643729918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 rounded-full bg-[#25D366] hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl"
                  title="Contactar por WhatsApp"
                >
                  <svg
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 xl:h-4 xl:w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                {/* Номер телефона справа от WhatsApp — только на ПК */}
                <a
                  href="tel:+34613295610"
                  className={`hidden md:inline text-[14px] md:text-[16px] xl:text-[18px] font-normal whitespace-nowrap hover:opacity-90 transition-opacity ml-1 ${
                    isTransparentHeader ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  +34 613 29 56 10
                </a>
              </div>
            </div>

            {/* Right Section - Language Selector */}
            <div className="flex items-center gap-1.5 sm:gap-2 justify-end ml-auto flex-shrink-0">
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

          {/* Mobile Layout - для мобильных устройств */}
          <div className="lg:hidden flex items-center w-full">
            {/* Logo - Left - hidden on mobile for transparent pages */}
            <Link href="/" className={`flex items-start flex-shrink-0 ${isTransparentHeader ? 'hidden' : ''}`} style={{ top: 0, marginTop: 0, paddingTop: 0, lineHeight: 0 }}>
                <Image
                  src="/AutoVibeLogo.png"
                  alt="AutoVibe Logo"
                  width={250}
                  height={110}
                  className="h-[75px] sm:h-[90px] md:h-[105px] w-auto object-contain"
                  style={{ marginTop: 0, paddingTop: 0, display: 'block', verticalAlign: 'top', lineHeight: 0 }}
                  priority
                />
            </Link>
          </div>

        </div>
      </nav>
    </header>
    
    {/* Mobile menu drawer - slides from left - outside header for proper z-index */}
    <div
      className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={() => setMobileMenuOpen(false)}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)} 
      />
      
      {/* Drawer content */}
      <div
        className={`absolute inset-0 w-full h-full bg-[#DFDBC8] shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
          {/* Header inside drawer */}
          <div className="sticky top-0 bg-[#DFDBC8] z-10">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Close button - Left */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-900 p-1.5 rounded-lg backdrop-blur-lg bg-white/15 border border-gray-900/20 shadow-xl hover:bg-white/20 transition-all"
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
              {/* Llama me!, Mi Cuenta и WhatsApp - на одной линии */}
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => { setCallbackFormOpen(true); setMobileMenuOpen(false); }}
                  className={`flex items-center justify-center gap-1.5 rounded-3xl bg-[#F4A709] px-3 sm:px-4 py-2 font-normal text-white transition-colors hover:bg-[#E59808] whitespace-nowrap flex-1 ${locale === 'ru' ? 'text-sm' : 'text-base'}`}
                >
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
                {/* WhatsApp Icon - справа от Mi Cuenta */}
                <a
                  href="https://api.whatsapp.com/send?phone=34643729918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#25D366] hover:bg-[#20BA5A] transition-colors shadow-lg hover:shadow-xl flex-shrink-0"
                  title="Contactar por WhatsApp"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
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
                  <Link
                    href="/empresas"
                    className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('header.empresas')}
                  </Link>
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
      <CallbackRequestForm isOpen={callbackFormOpen} onClose={() => setCallbackFormOpen(false)} />
    </>
  );
}
