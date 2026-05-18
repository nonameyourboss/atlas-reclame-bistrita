import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Despre noi — Atlas Reclame Bistrița',
  description:
    'Peste 10 ani de producție publicitară în Bistrița. Atelier propriu, echipament modern, echipă specializată în reclame luminoase, inscripționări și structuri publicitare.',
  openGraph: {
    title: 'Despre noi — Atlas Reclame Bistrița',
    description:
      'Peste 10 ani de producție publicitară în Bistrița. Atelier propriu, echipament modern, echipă specializată în reclame luminoase, inscripționări și structuri publicitare.',
    url: 'https://atlasreclame.ro/despre',
  },
}

const values = [
  {
    number: '01',
    title: 'Producție proprie',
    description:
      'Totul se fabrică în atelierul nostru din Bistrița. Nu externalizăm producția — controlăm fiecare etapă, de la tăierea materialelor la finisajul final.',
  },
  {
    number: '02',
    title: 'Materiale certificate',
    description:
      'Folosim exclusiv materiale cu specificații tehnice dovedite: film 3M, LED-uri cu garanție de fabricant, oțel certificat, acrilice Plexiglas și ALUCOBOND.',
  },
  {
    number: '03',
    title: 'Termene respectate',
    description:
      'Un deadline asumat este un angajament. Dacă am spus că livrăm marți, livrăm marți. Planificăm producția cu marjă de siguranță pentru a absorbi incidentele.',
  },
  {
    number: '04',
    title: 'Documentație completă',
    description:
      'Proiectele care necesită autorizare vin cu documentație tehnică completă. Am gestionat zeci de dosare DRDP, primărie și protecția patrimoniului.',
  },
]

const timeline = [
  { year: '2013', event: 'Fondare Atlas Reclame — primul atelier de producție publicitară din zona Bistrița' },
  { year: '2015', event: 'Investiție în prima mașină de tăiere CNC — capacitate de precizie la 0.1mm' },
  { year: '2017', event: 'Extinderea atelierului la 400mp + achiziție plotter de tăiere pentru film vinyl' },
  { year: '2019', event: 'Certificare pentru lucrări la înălțime — echipa proprie de montaj cu autorizație ISCIR' },
  { year: '2021', event: 'Achiziție imprimantă UV wide-format Mimaki — print pe orice suprafață rigidă' },
  { year: '2023', event: 'Lansare serviciu de wrap auto complet — studio dedicat pentru vehicule până la 13.6m' },
  { year: '2024', event: 'Deschidere showroom și birou de proiectare în centrul Bistriței' },
]

const equipment = [
  { name: 'CNC Router', spec: 'Working area 2500×1300mm, precizie ±0.1mm' },
  { name: 'Plotter tăiere', spec: 'Graphtec FC9000-160, lățime max 1600mm' },
  { name: 'Imprimantă UV flatbed', spec: 'Mimaki JFX200-2513, 2500×1300mm, 8 culori' },
  { name: 'Imprimantă roll-to-roll', spec: 'Epson SureColor SC-S80600, lățime max 1640mm' },
  { name: 'Imprimantă fine art', spec: 'Epson SC-P9000, 12 culori pigment, lățime 1118mm' },
  { name: 'Mașini sudură', spec: 'MIG/TIG certificat pentru oțel, inox și aluminiu' },
  { name: 'Platformă elevatoare', spec: 'JLG 1250AJP, înălțime de lucru 12.5m' },
  { name: 'Auto-macara', spec: 'Capacitate 5 tone, disponibil pentru montaj structuri grele' },
]

export default function DesprePage() {
  return (
    <main className="min-h-screen bg-furnace overflow-x-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <SectionLabel label="Despre Atlas Reclame" />
            <h1 className="font-display text-[clamp(56px,8vw,96px)] leading-[0.9] text-cream mt-6 uppercase tracking-tight">
              Un atelier.
              <br />
              <span className="text-amber">10+ ani.</span>
              <br />
              Bistrița.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="font-body text-lg text-cream/70 leading-relaxed">
              Nu suntem o agenție de publicitate. Suntem o fabrică de semne — un atelier cu mașini, oameni care
              sudează și tăie, și produse care rezistă pe stradă ani de zile.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div
              className="w-full aspect-[4/5] bg-graphite border border-border flex items-center justify-center"
            >
              <span className="font-mono text-xs text-steel text-center px-4">
                [imagine atelier — producție în desfășurare]
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <SectionLabel label="Povestea noastră" />
            <p className="font-body text-base text-cream/75 leading-loose">
              Atlas Reclame s-a născut în 2013 dintr-o nevoie simplă: Bistrița nu avea o firmă de producție
              publicitară cu atelier propriu, capabilă să execute de la zero o reclamă luminoasă complexă. Cei
              care existau fie subcontractau în Cluj, fie lucrau cu materiale de compromis.
            </p>
            <p className="font-body text-base text-cream/75 leading-loose">
              Am deschis primul atelier cu un CNC router, o mașinărie de sudură și trei angajați. Primul proiect
              mare a fost o fascie luminoasă pentru un centru comercial din centrul orașului. Am livrat-o la termen
              și cu materialele promise. A doua zi, ne-au sunat două firme care văzuseră lucrarea montată.
            </p>
            <p className="font-body text-base text-cream/75 leading-loose">
              Astăzi, atelierul are 400mp, 12 angajați permanenți, echipament de producție modern și o echipă de
              montaj autorizată. Continuăm să producem în Bistrița, pentru clienți din Bistrița și din județ.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Cum lucrăm" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map((v) => (
              <div key={v.number} className="bg-graphite p-8">
                <span className="font-mono text-xs text-amber mb-4 block">{v.number}</span>
                <h3 className="font-display text-2xl text-cream uppercase tracking-tight mb-3">{v.title}</h3>
                <p className="font-body text-sm text-steel leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Cronologie" />
          <div className="mt-10 max-w-3xl space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-[80px_1fr] gap-6 py-6 border-b border-border last:border-b-0">
                <span className="font-mono text-sm text-amber pt-0.5">{item.year}</span>
                <p className="font-body text-sm text-cream/70 leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Echipament" />
          <h2 className="font-display text-[clamp(36px,5vw,64px)] text-cream uppercase tracking-tight mt-4 mb-10 leading-tight">
            Investiția în unelte
            <br />
            se vede în produs.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {equipment.map((eq) => (
              <div key={eq.name} className="bg-graphite p-6 flex items-start gap-4">
                <span className="mt-1 w-1 h-1 bg-amber flex-shrink-0" />
                <div>
                  <span className="font-display text-lg text-cream uppercase tracking-tight block">{eq.name}</span>
                  <span className="font-mono text-xs text-steel mt-1 block">{eq.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Echipa" />
          <p className="font-body text-lg text-cream/70 mt-6 mb-10 max-w-xl leading-relaxed">
            12 oameni care vin în atelier în fiecare dimineață, fiecare cu specializarea lui: proiectanți,
            operatori CNC, tehnicieni LED, montatori autorizați.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {['Producție', 'Proiectare', 'Montaj', 'Relații clienți'].map((dept) => (
              <div key={dept} className="bg-graphite p-6">
                <div className="w-full aspect-square bg-furnace border border-border flex items-center justify-center mb-4">
                  <span className="font-mono text-[10px] text-steel">[foto echipă]</span>
                </div>
                <span className="font-mono text-xs text-amber uppercase tracking-widest">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] text-cream uppercase tracking-tight leading-tight">
              Ai un proiect
              <br />
              în minte?
            </h2>
            <p className="text-steel font-body mt-2">Vino la atelier sau trimite-ne o cerere de ofertă.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-amber text-graphite font-display text-lg uppercase tracking-wide px-8 py-4 hover:bg-amber/90 transition-colors duration-200"
            >
              Cere ofertă
            </Link>
            <Link
              href="/portofoliu"
              className="inline-flex items-center justify-center gap-3 border border-cream/30 text-cream font-display text-lg uppercase tracking-wide px-8 py-4 hover:border-cream/60 transition-colors duration-200"
            >
              Vezi portofoliu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
