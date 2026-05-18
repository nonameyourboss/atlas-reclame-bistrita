import type { Metadata, Viewport } from 'next'
import { bebasNeue, instrumentSans, ibmPlexMono } from '@/app/fonts'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { CookieBanner } from '@/components/analytics/CookieBanner'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import '@/app/globals.css'

const ANTI_FOUC = `(function(){try{var t=localStorage.getItem('atlas-theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`

export const metadata: Metadata = {
  title: 'Atlas Reclame Bistrița — Producție Publicitară',
  description:
    'Reclame luminoase, litere volumetrice, inscripționări auto și print de mari dimensiuni. 10+ ani de producție publicitară în Bistrița, județul Bistrița-Năsăud.',
  keywords: [
    'reclame bistrița',
    'reclame luminoase bistrița',
    'inscripționări auto bistrița',
    'litere volumetrice',
    'print mari dimensiuni bistrița',
    'panouri publicitare bistrița-năsăud',
    'producție publicitară bistrița',
  ],
  authors: [{ name: 'Atlas Reclame Bistrița' }],
  creator: 'Atlas Reclame Bistrița',
  publisher: 'Atlas Reclame Bistrița',
  metadataBase: new URL('https://atlasreclame.ro'),
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://atlasreclame.ro',
    siteName: 'Atlas Reclame Bistrița',
    title: 'Atlas Reclame Bistrița — Producție Publicitară',
    description:
      'Reclame luminoase, inscripționări auto, litere volumetrice și print de mari dimensiuni. Producție proprie, 10+ ani experiență.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Reclame Bistrița',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Reclame Bistrița',
    description: 'Producție publicitară din Bistrița. 10+ ani experiență.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1C1C1E',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ro"
      className={[
        bebasNeue.variable,
        instrumentSans.variable,
        ibmPlexMono.variable,
      ].join(' ')}
    >
      <head>
        {/* Anti-FOUC: apply saved theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <ThemeProvider>
          <GoogleAnalytics />
          <CookieBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
