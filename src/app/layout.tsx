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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://luisguzman.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Luis Guzman | Senior Technical Consultant',
  description:
    'Luis Eudoro Guzman Sanchez. Senior technical consultant with 27+ years of experience in aluminum can manufacturing, diagnostics, maintenance, and technical support across Latin America.',
  keywords: [
    'Luis Guzman',
    'Senior Technical Consultant',
    'Metal Packaging',
    'Aluminum Can Manufacturing',
    'Industrial Maintenance',
    'Technical Assistance',
    'Zermatt Tools',
    'EUBALL Panama',
    'Crown Colombiana',
  ],
  authors: [{ name: 'Luis Eudoro Guzman Sanchez' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Luis Guzman | Senior Technical Consultant',
    description:
      'Technical consulting, diagnostics, plant support, and precision tooling supervision for the metal packaging industry in LATAM.',
    type: 'website',
    locale: 'es_PA',
    siteName: 'Luis Guzman Portfolio',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Guzman | Senior Technical Consultant',
    description:
      '27+ years in aluminum can manufacturing, maintenance, diagnostics, and technical support across LATAM.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Luis Eudoro Guzman Sanchez',
      jobTitle: 'Senior Technical Consultant | Metal Packaging Industry',
      url: siteUrl,
      email: 'luiseudoro@gmail.com',
      telephone: '+50769389715',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PA',
        addressLocality: 'Panama City',
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
      name: 'Luis Guzman Technical Portfolio',
      url: siteUrl,
      description:
        'Professional portfolio of Luis Eudoro Guzman Sanchez focused on technical consulting for the metal packaging industry.',
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
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${geistMono.variable} bg-black antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <Navbar />
          <main id="main-content" className="min-h-[100dvh] bg-black">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
