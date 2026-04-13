'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { locales, defaultLocale, Locale } from '@/lib/i18n/translations';

function currentLocale(pathname: string): Locale {
  const first = pathname.split('/')[1];
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith('/')) return href;
  if (href.startsWith('//')) return href;
  const first = href.split('/')[1];
  if ((locales as readonly string[]).includes(first)) return href;
  return `/${locale}${href === '/' ? '' : href}`;
}

type Props = Omit<LinkProps, 'href'> & {
  href: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: string;
  rel?: string;
};

export default function LocalizedLink({ href, ...rest }: Props) {
  const pathname = usePathname() || '/';
  const locale = currentLocale(pathname);
  return <Link href={localizeHref(href, locale)} {...rest} />;
}
