import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Geist_Mono, Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { LanguageProvider } from '@/i18n';
import './globals.css';

const ChatBot = dynamic(() => import('@/components/chat/ChatBot').then((mod) => mod.ChatBot));

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://luis-guzman-cv.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Luis Guzm\u00e1n | Senior Technical Consultant',
  description:
    'Luis Eudoro Guzm\u00e1n S\u00e1nchez. Senior technical consultant with 27+ years of experience in aluminum can manufacturing, diagnostics, maintenance, and technical support across Latin America.',
  keywords: [
    'Luis Guzm\u00e1n',
    'Senior Technical Consultant',
    'Metal Packaging',
    'Aluminum Can Manufacturing',
    'Industrial Maintenance',
    'Technical Assistance',
    'Zermatt Tools',
    'EUBALL Panam\u00e1',
    'Crown Colombiana',
  ],
  authors: [{ name: 'Luis Eudoro Guzm\u00e1n S\u00e1nchez' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Luis Guzm\u00e1n | Senior Technical Consultant',
    description:
      'Technical consulting, diagnostics, plant support, and precision tooling supervision for the metal packaging industry in LATAM.',
    type: 'website',
    locale: 'es_PA',
    siteName: 'Luis Guzm\u00e1n Portfolio',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Guzm\u00e1n | Senior Technical Consultant',
    description:
      '27+ years in aluminum can manufacturing, maintenance, diagnostics, and technical support across LATAM.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Luis Eudoro Guzm\u00e1n S\u00e1nchez',
      jobTitle: 'Senior Technical Consultant | Metal Packaging Industry',
      url: siteUrl,
      email: 'luiseudoro@gmail.com',
      telephone: '+50769389715',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PA',
        addressLocality: 'Ciudad de Panam\u00e1',
      },
      knowsAbout: [
        'Aluminum can manufacturing',
        'Industrial maintenance',
        'Failure analysis',
        'Mechanical diagnostics',
        'SAP',
        'MP9',
        'Precision tooling',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'Luis Guzm\u00e1n Technical Portfolio',
      url: siteUrl,
      description:
        'Professional portfolio of Luis Eudoro Guzm\u00e1n S\u00e1nchez focused on technical consulting for the metal packaging industry.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${geistMono.variable} bg-[#0a0f15] antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <Navbar />
          <main id="main-content" className="min-h-[100dvh] bg-transparent">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
