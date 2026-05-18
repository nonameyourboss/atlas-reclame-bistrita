import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services-data'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Servicii — Atlas Reclame Bistrița',
  description:
    'Producție publicitară completă în Bistrița: reclame luminoase, inscripționări auto, litere volumetrice, panouri stradale, bannere și print de mari dimensiuni.',
  openGraph: {
    title: 'Servicii — Atlas Reclame Bistrița',
    description:
      'Producție publicitară completă în Bistrița: reclame luminoase, inscripționări auto, litere volumetrice, panouri stradale, bannere și print de mari dimensiuni.',
    url: 'https://atlasreclame.ro/servicii',
  },
}

export default function ServiciiPage() {
  return (
    <main className="min-h-screen bg-furnace overflow-x-hidden">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Ce facem" />
          <h1 className="font-display text-[clamp(56px,8vw,96px)] leading-[0.9] text-cream mt-6 mb-8 uppercase tracking-tight">
            Servicii de producție
            <br />
            publicitară
          </h1>
          <p className="text-steel font-body text-lg max-w-2xl leading-relaxed">
            Peste 10 ani fabricăm semne, structuri și materiale publicitare în Bistrița. Fiecare proiect trece
            prin același atelier — de la proiectare la montaj final pe locație.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="group bg-graphite p-8 flex flex-col gap-4 hover:bg-[#222224] transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-steel">{service.number}</span>
                  <span className="font-mono text-[10px] text-amber uppercase tracking-widest px-2 py-1 border border-amber/30">
                    {service.tag}
                  </span>
                </div>
                <h2 className="font-display text-2xl text-cream uppercase tracking-tight leading-tight group-hover:text-amber transition-colors duration-300">
                  {service.name}
                </h2>
                <p className="font-body text-sm text-steel leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-amber font-mono text-xs uppercase tracking-widest mt-auto pt-4 border-t border-border">
                  <span>Vezi detalii</span>
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
                    <path d="M0 4H14M11 1L14 4L11 7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] text-cream uppercase tracking-tight leading-tight">
              Nu găsești ce cauți?
            </h2>
            <p className="text-steel font-body mt-2">
              Sunăm-ne — dacă există o soluție de producție publicitară, o avem.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-amber text-graphite font-display text-lg uppercase tracking-wide px-8 py-4 hover:bg-amber/90 transition-colors duration-200"
          >
            Cere ofertă
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
              <path d="M0 5H18M13 1L18 5L13 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
