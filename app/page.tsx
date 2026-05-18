import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { ServicesBento } from '@/components/sections/ServicesBento'
import { LiveAtelier } from '@/components/sections/LiveAtelier'
import { Process } from '@/components/sections/Process'
import { PortfolioTeaser } from '@/components/sections/PortfolioTeaser'
import { ContactCTA } from '@/components/sections/ContactCTA'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { SectionCounter } from '@/components/ui/SectionCounter'
import { ScaleShockManifest } from '@/components/sections/ScaleShockManifest'
import { ScaleShockCounter } from '@/components/sections/ScaleShockCounter'
import { ScaleShockInvitation } from '@/components/sections/ScaleShockInvitation'
import { NeonDefect } from '@/components/easter/NeonDefect'

export const metadata: Metadata = {
  title: 'Atlas Reclame Bistrița — Producție Publicitară',
  description:
    'Firmă de producție publicitară din Bistrița cu peste 10 ani experiență. Reclame luminoase, inscripționări auto, litere volumetrice, panouri stradale, bannere și print de mari dimensiuni.',
  openGraph: {
    title: 'Atlas Reclame Bistrița — Producție Publicitară',
    description:
      'Firmă de producție publicitară din Bistrița cu peste 10 ani experiență. Reclame luminoase, inscripționări auto, litere volumetrice, panouri stradale.',
    url: 'https://atlasreclame.ro',
    siteName: 'Atlas Reclame Bistrița',
    locale: 'ro_RO',
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Atlas Reclame Bistrița',
  description:
    'Firmă de producție publicitară din Bistrița cu peste 10 ani experiență. Reclame luminoase, inscripționări auto, litere volumetrice, panouri stradale, bannere și print de mari dimensiuni.',
  url: 'https://atlasreclame.ro',
  telephone: '+40263000000',
  email: 'office@atlasreclame.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Str. Industriei nr. 14',
    addressLocality: 'Bistrița',
    postalCode: '420000',
    addressCountry: 'RO',
    addressRegion: 'BN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.1467,
    longitude: 24.4962,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'RON',
  paymentAccepted: 'Cash, Card, Transfer bancar',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicii de producție publicitară',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reclame luminoase' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inscripționări auto' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Litere volumetrice' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Panouri stradale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bannere și print de mari dimensiuni' } },
    ],
  },
  sameAs: [],
  foundingDate: '2013',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Global WOW layer — fixed elements */}
      <CustomCursor />
      <GrainOverlay />
      <ScrollProgress />
      <SectionCounter />
      <NeonDefect />

      <main className="overflow-x-hidden w-full max-w-full">
        <Navbar />

        {/* ATTENTION */}
        <Hero />

        {/* Marquee ticker between hero and services */}
        <Marquee />

        {/* INTEREST */}
        <ServicesBento />

        {/* DESIRE */}
        <ScaleShockManifest />
        <LiveAtelier />
        <ScaleShockCounter />
        <Process />
        <PortfolioTeaser />
        <ScaleShockInvitation />

        {/* ACTION */}
        <ContactCTA />

        <Footer />
      </main>
    </>
  )
}
