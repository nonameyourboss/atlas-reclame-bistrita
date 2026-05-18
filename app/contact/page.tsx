import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Atlas Reclame Bistrița',
  description:
    'Cere o ofertă pentru producție publicitară în Bistrița. Reclame luminoase, inscripționări, panouri stradale. Răspundem în 24 de ore.',
  openGraph: {
    title: 'Contact — Atlas Reclame Bistrița',
    description:
      'Cere o ofertă pentru producție publicitară în Bistrița. Reclame luminoase, inscripționări, panouri stradale. Răspundem în 24 de ore.',
    url: 'https://atlasreclame.ro/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-furnace overflow-x-hidden">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Contactează-ne" />
          <h1 className="font-display text-[clamp(56px,8vw,96px)] leading-[0.9] text-cream mt-6 uppercase tracking-tight">
            Hai să vorbim
            <br />
            despre proiectul tău.
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact info */}
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <SectionLabel label="Atelier și birou" />
              <address className="mt-6 not-italic space-y-2 font-body text-sm text-cream/70 leading-relaxed">
                <p className="font-body text-base text-cream">Atlas Reclame Bistrița</p>
                <p>Str. Industriei nr. 14</p>
                <p>Bistrița, BN 420000</p>
                <p>România</p>
              </address>
            </div>

            <div>
              <SectionLabel label="Date contact" />
              <div className="mt-6 space-y-4">
                <div>
                  <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">Telefon</span>
                  <a
                    href="tel:+40263000000"
                    className="font-body text-cream hover:text-amber transition-colors"
                  >
                    0263 000 000
                  </a>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">Mobil</span>
                  <a
                    href="tel:+40740000000"
                    className="font-body text-cream hover:text-amber transition-colors"
                  >
                    0740 000 000
                  </a>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">Email</span>
                  <a
                    href="mailto:office@atlasreclame.ro"
                    className="font-body text-cream hover:text-amber transition-colors"
                  >
                    office@atlasreclame.ro
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel label="Program" />
              <div className="mt-6 space-y-2 font-body text-sm text-cream/70">
                <div className="flex justify-between">
                  <span>Luni – Vineri</span>
                  <span className="text-cream">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sâmbătă</span>
                  <span className="text-cream">09:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Duminică</span>
                  <span className="text-steel">Închis</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="font-mono text-xs text-steel leading-relaxed">
                CUI: RO12345678
                <br />
                Nr. Reg. Com.: J06/000/2013
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <SectionLabel label="Cerere de ofertă" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-t border-border">
        <div className="w-full h-64 bg-graphite flex items-center justify-center">
          <span className="font-mono text-sm text-steel">[hartă Google Maps — Str. Industriei nr. 14, Bistrița]</span>
        </div>
      </section>
    </main>
  )
}
