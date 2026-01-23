import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/context";
import WhatsAppStickyButton from "@/components/WhatsAppStickyButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AutoVibe - Suscripción de coches sin líos",
  description: "Tu coche, tus reglas. Para ti o tu empresa.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#DFDBC8" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{ backgroundColor: '#DFDBC8' }}
        suppressHydrationWarning
      >
        <I18nProvider>
          {children}
          <WhatsAppStickyButton />
        </I18nProvider>
      </body>
    </html>
  );
}
