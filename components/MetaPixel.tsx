'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initMetaPixel, fbq } from '@/lib/analytics/meta-pixel';
import { isAnalyticsAllowed } from '@/lib/cookies/consent';

function MetaPixelInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize pixel on first mount — only if user accepted non-essential cookies
  useEffect(() => {
    if (isAnalyticsAllowed()) {
      initMetaPixel();
    }
  }, []);

  // Track PageView on route changes (fbq no-ops if pixel not loaded)
  useEffect(() => {
    fbq('track', 'PageView');
  }, [pathname, searchParams]);

  return null;
}

/**
 * Meta Pixel component wrapped in Suspense (required for useSearchParams).
 * Only initializes the pixel if user has accepted analytics cookies.
 */
export default function MetaPixel() {
  return (
    <Suspense fallback={null}>
      <MetaPixelInner />
    </Suspense>
  );
}
