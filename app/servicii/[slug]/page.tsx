import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug, getAllServiceSlugs, SERVICES } from '@/lib/services-data'
import { SectionLabel } from '@/components/ui/SectionLabel'

const services = SERVICES

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'Serviciu negăsit — Atlas Reclame' }

  return {
    title: `${service.name} — Atlas Reclame Bistrița`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} — Atlas Reclame Bistrița`,
      description: service.shortDescription,
      url: `https://atlasreclame.ro/servicii/${service.slug}`,
    },
  }
}

export default function ServiciuPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const currentIndex = services.findIndex((s) => s.slug === service.slug)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-furnace overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="pt-28 pb-0 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto pb-6">
          <nav className="flex items-center gap-2 font-mono text-xs text-steel" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream transition-colors">Acasă</Link>
            <span>/</span>
            <Link href="/servicii" className="hover:text-cream transition-colors">Servicii</Link>
            <span>/</span>
            <span className="text-amber">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <SectionLabel label={service.tag} />
              <span className="font-mono text-xs text-steel">{service.number}</span>
            </div>
            <h1 className="font-display text-[clamp(48px,7vw,88px)] leading-[0.9] text-cream uppercase tracking-tight mb-8">
              {service.name}
            </h1>
            <p className="font-body text-xl text-cream/80 leading-relaxed max-w-2xl">
              {service.leadParagraph}
            </p>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-border p-6 space-y-5">
              <h2 className="font-mono text-xs text-steel uppercase tracking-widest">Materiale folosite</h2>
              <ul className="space-y-2">
                {service.materials.map((mat) => (
                  <li key={mat.name} className="flex items-start gap-3 font-body text-sm text-cream/70">
                    <span className="mt-1.5 w-1 h-1 bg-amber flex-shrink-0" />
                    <span>
                      <span className="text-cream">{mat.name}</span>
                      {mat.description && <span className="text-steel"> — {mat.description}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-border">
                <h2 className="font-mono text-xs text-steel uppercase tracking-widest mb-3">Aplicații frecvente</h2>
                <ul className="space-y-2">
                  {service.applications.map((app) => (
                    <li key={app} className="flex items-start gap-3 font-body text-sm text-cream/70">
                      <span className="mt-1.5 w-1 h-1 bg-amber flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-border">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-3 bg-amber text-graphite font-display text-base uppercase tracking-wide px-6 py-4 hover:bg-amber/90 transition-colors duration-200"
                >
                  {service.ctaText}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Full description */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            {service.fullDescription.map((paragraph, i) => (
              <p key={i} className="font-body text-base text-cream/75 leading-loose">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Visual placeholder */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="w-full aspect-[3/4] bg-graphite border border-border flex items-center justify-center">
              <span className="font-mono text-xs text-steel text-center px-4">
                [{service.name}
                <br />imagine producție]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Întrebări frecvente" />
          <div className="mt-10 space-y-0 divide-y divide-border max-w-3xl">
            {service.faq.map((item, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-body font-medium text-cream group-hover:text-amber transition-colors duration-200">
                    {item.question}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0 text-amber transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </summary>
                <p className="mt-4 font-body text-sm text-steel leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services nav */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Explorează serviciile" />
          <div className="mt-10 grid grid-cols-2 gap-px bg-border">
            {prevService && (
              <Link
                href={`/servicii/${prevService.slug}`}
                className="bg-graphite p-6 hover:bg-[#222224] transition-colors duration-200 group"
              >
                <span className="block font-mono text-xs text-steel mb-2">← Anterior</span>
                <span className="font-display text-xl text-cream uppercase group-hover:text-amber transition-colors duration-200">
                  {prevService.name}
                </span>
              </Link>
            )}
            {nextService && (
              <Link
                href={`/servicii/${nextService.slug}`}
                className={`bg-graphite p-6 hover:bg-[#222224] transition-colors duration-200 group ${!prevService ? 'col-start-2' : ''}`}
              >
                <span className="block font-mono text-xs text-steel mb-2 text-right">Următor →</span>
                <span className="font-display text-xl text-cream uppercase group-hover:text-amber transition-colors duration-200 block text-right">
                  {nextService.name}
                </span>
              </Link>
            )}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/servicii"
              className="inline-flex items-center gap-2 font-mono text-xs text-steel hover:text-amber transition-colors uppercase tracking-widest"
            >
              ← Înapoi la toate serviciile
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
