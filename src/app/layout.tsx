import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://qualifyias.com'),
  title: 'QUALIFY IAS - Office Inauguration Invitation',
  description:
    'You are cordially invited to the inauguration of our new office on 16th October (Friday), 2026 at Ashok Nagar, Hyderabad. Chief Guest: Jeenu Jaswanth Chandra (AIR 23, UPSC CSE 2025). Founder: Ramareddipeta Rajinikanth.',
  openGraph: {
    title: 'QUALIFY IAS - Office Inauguration Invitation',
    description:
      'You are cordially invited to the inauguration of our new office on 16th October (Friday), 2026 at Ashok Nagar, Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'QUALIFY IAS',
    images: [
      {
        url: '/qualify_ias_logo.png',
        width: 650,
        height: 319,
        alt: 'QUALIFY IAS Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUALIFY IAS - Office Inauguration Invitation',
    description:
      'You are cordially invited to the inauguration of our new office on 16th October (Friday), 2026 at Ashok Nagar, Hyderabad.',
    images: ['/qualify_ias_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        {/* Preload LCP critical hero image and logo for instant rendering */}
        <link rel="preload" href="/hero_office.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        <link rel="preload" href="/qualify_ias_logo.png" as="image" type="image/png" fetchPriority="high" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
