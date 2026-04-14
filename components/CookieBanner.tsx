'use client';

import { useState, useEffect } from 'react';
import Link from '@/components/LocalizedLink';
import { getConsent, setConsent } from '@/lib/cookies/consent';
import { pushDataLayer } from '@/lib/analytics/dataLayer';
import { useI18n } from '@/lib/i18n/context';

export default function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setConsent('all');
    setVisible(false);
    pushDataLayer('consent_granted', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  };

  const handleEssentialOnly = () => {
    setConsent('essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[150]">
      <div className="bg-white rounded-t-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          {/* Single compact row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            {/* Text — compact */}
            <p className="text-xs sm:text-sm text-gray-600 flex-1 leading-snug">
              <span className="font-semibold text-gray-900">{t('cookies.title')}.</span>{' '}
              {t('cookies.description')}{' '}
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="text-[#603361] hover:text-[#4e2a52] font-medium transition-colors underline underline-offset-2"
              >
                {showDetails ? t('cookies.hideDetails') : t('cookies.showDetails')}
              </button>
              <br />
              <Link
                href="/privacy-policy"
                className="text-[#603361] hover:text-[#4e2a52] font-medium transition-colors underline underline-offset-2"
              >
                {t('cookies.privacyLink')}
              </Link>
              {' · '}
              <Link
                href="/terms-and-conditions"
                className="text-[#603361] hover:text-[#4e2a52] font-medium transition-colors underline underline-offset-2"
              >
                {t('cookies.termsLink')}
              </Link>
            </p>

            {/* Buttons — small */}
            <div className="flex gap-2 mt-2 sm:mt-0 flex-shrink-0">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg bg-[#603361] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#4e2a52] transition-colors whitespace-nowrap"
              >
                {t('cookies.acceptAll')}
              </button>
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="rounded-lg border border-gray-300 px-4 py-1.5 text-xs font-semibold text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                {t('cookies.essentialOnly')}
              </button>
            </div>
          </div>

          {/* Details (expandable) */}
          {showDetails && (
            <div className="mt-2.5 flex flex-col sm:flex-row gap-2">
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 flex-1">
                <div>
                  <span className="text-xs font-medium text-gray-900">{t('cookies.essential')}</span>
                  <span className="text-[10px] text-gray-500 ml-1.5">{t('cookies.essentialDesc')}</span>
                </div>
                <div className="w-8 h-4 bg-[#603361] rounded-full flex items-center justify-end px-0.5 opacity-60 cursor-not-allowed ml-2 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full shadow" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 flex-1">
                <div>
                  <span className="text-xs font-medium text-gray-900">{t('cookies.nonEssential')}</span>
                  <span className="text-[10px] text-gray-500 ml-1.5">{t('cookies.nonEssentialDesc')}</span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium ml-2 flex-shrink-0">{t('cookies.optional')}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
