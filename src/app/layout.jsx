import Script from 'next/script'
import { Epilogue, Manrope } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'
import { BRAND, SITE_URL } from '../data/content'
import '../styles/global.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-epilogue',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const SITE_DESCRIPTION =
  'Harborwyn AI - AI-assisted crypto trading made simple. Trade Bitcoin, Ethereum, Solana and more from just $250, automated or manual, around the clock.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Harborwyn AI - Official AI Crypto Trading Platform',
    template: '%s',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Harborwyn AI',
    'Harborwyn AI platform',
    'Harborwyn AI review',
    'AI trading platform',
    'AI crypto trading',
    'automated crypto trading',
    'Bitcoin',
    'Ethereum',
    'Solana',
    'BNB',
    'USDT',
  ],
  robots: { index: true, follow: true },
  verification: { google: 'j_ivGONpLOTHloshVpLkomsV7gGfAu-YRK0lUtr25YY' },
  openGraph: {
    type: 'website',
    siteName: BRAND,
    url: '/',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export const viewport = {
  themeColor: '#0a2540',
  width: 'device-width',
  initialScale: 1,
}

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: BRAND,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      email: 'support@harborwynai.io',
      areaServed: 'Worldwide',
      description: SITE_DESCRIPTION,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BRAND,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${manrope.variable}`}>
      <body>
        {/* Gate reveal animations behind JS so no-JS visitors see everything. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Y583R9TZM"
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-1Y583R9TZM');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <Header />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  )
}
