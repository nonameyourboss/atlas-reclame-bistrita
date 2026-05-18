import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politică de cookies — Atlas Reclame Bistrița',
  description: 'Informații despre cookie-urile utilizate pe atlasreclame.ro și cum poți gestiona preferințele tale.',
  robots: { index: false, follow: false },
}

const cookieTable = [
  {
    name: 'cc_cookie',
    provider: 'atlasreclame.ro',
    purpose: 'Salvează preferințele de consimțământ pentru cookie-uri.',
    duration: '6 luni',
    category: 'Necesare',
  },
  {
    name: '_ga, _ga_*',
    provider: 'Google Analytics',
    purpose: 'Distinge utilizatori unici și sesiuni pentru statistici de trafic.',
    duration: '2 ani',
    category: 'Analitice',
  },
  {
    name: '_gid',
    provider: 'Google Analytics',
    purpose: 'Stochează și actualizează o valoare unică pentru fiecare pagină vizitată.',
    duration: '24 ore',
    category: 'Analitice',
  },
  {
    name: '_gcl_au',
    provider: 'Google Ads',
    purpose: 'Stochează și accesează informații de conversie pentru campaniile Google Ads.',
    duration: '3 luni',
    category: 'Marketing',
  },
]

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-furnace">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <nav className="flex items-center gap-2 font-mono text-xs text-steel mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-cream transition-colors">Acasă</Link>
          <span>/</span>
          <span className="text-amber">Politică de cookies</span>
        </nav>

        <h1 className="font-display text-[clamp(36px,6vw,64px)] text-cream uppercase tracking-tight leading-tight mb-4">
          Politică de cookies
        </h1>
        <p className="font-mono text-xs text-steel mb-12">Ultima actualizare: 1 ianuarie 2024</p>

        <div className="space-y-8">
          <Section title="Ce sunt cookie-urile">
            <p>
              Cookie-urile sunt fișiere text mici stocate în browserul tău atunci când vizitezi un website.
              Sunt utilizate pentru a recunoaște vizitatorii repetați, a analiza comportamentul de navigare
              și a personaliza experiența utilizatorului.
            </p>
          </Section>

          <Section title="Cookie-uri utilizate pe atlasreclame.ro">
            <p>Pe acest website utilizăm trei categorii de cookie-uri:</p>

            <div>
              <h3 className="font-display text-base text-amber uppercase tracking-tight mt-4 mb-2">
                Cookie-uri necesare
              </h3>
              <p>
                Strict necesare pentru funcționarea website-ului. Nu pot fi dezactivate. Includ
                cookie-urile care salvează preferințele tale de consimțământ.
              </p>
            </div>

            <div>
              <h3 className="font-display text-base text-amber uppercase tracking-tight mt-4 mb-2">
                Cookie-uri analitice
              </h3>
              <p>
                Ne ajută să înțelegem cum utilizatorii interacționează cu website-ul, ce pagini
                sunt populare și cum ajung la noi. Toate datele sunt anonimizate. Utilizăm Google
                Analytics 4 (GA4).
              </p>
            </div>

            <div>
              <h3 className="font-display text-base text-amber uppercase tracking-tight mt-4 mb-2">
                Cookie-uri de marketing
              </h3>
              <p>
                Utilizate pentru a măsura eficiența campaniilor publicitare și a afișa reclame
                relevante. Sunt activate doar cu consimțământul tău explicit.
              </p>
            </div>
          </Section>

          <Section title="Tabel cookie-uri">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-xs mt-2">
                <thead>
                  <tr className="border-b border-border">
                    <th className="font-mono text-steel text-left py-3 pr-4 uppercase tracking-widest">Nume</th>
                    <th className="font-mono text-steel text-left py-3 pr-4 uppercase tracking-widest">Furnizor</th>
                    <th className="font-mono text-steel text-left py-3 pr-4 uppercase tracking-widest">Scop</th>
                    <th className="font-mono text-steel text-left py-3 pr-4 uppercase tracking-widest">Durată</th>
                    <th className="font-mono text-steel text-left py-3 uppercase tracking-widest">Categorie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cookieTable.map((row) => (
                    <tr key={row.name}>
                      <td className="py-3 pr-4 font-mono text-amber">{row.name}</td>
                      <td className="py-3 pr-4 text-cream/70">{row.provider}</td>
                      <td className="py-3 pr-4 text-steel">{row.purpose}</td>
                      <td className="py-3 pr-4 text-cream/70">{row.duration}</td>
                      <td className="py-3 text-cream/70">{row.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Cum îți gestionezi preferințele">
            <p>
              La prima vizită, vei vedea un banner de consimțământ cookie. Poți accepta sau
              refuza categoriile non-esențiale. Poți reveni oricând la preferințele tale
              accesând butonul &ldquo;Setări cookie&rdquo; din footer-ul website-ului.
            </p>
            <p>
              De asemenea, poți gestiona cookie-urile direct din setările browserului tău:
            </p>
            <ul className="ml-4 space-y-1 list-disc list-outside">
              <li>Chrome: Setări → Confidențialitate și securitate → Cookie-uri</li>
              <li>Firefox: Preferințe → Confidențialitate și securitate</li>
              <li>Safari: Preferințe → Confidențialitate</li>
              <li>Edge: Setări → Cookie-uri și permisiuni site-uri</li>
            </ul>
          </Section>

          <Section title="Contact">
            <p>
              Pentru întrebări despre utilizarea cookie-urilor, contactează-ne la{' '}
              <a href="mailto:gdpr@atlasreclame.ro" className="text-amber hover:underline">
                gdpr@atlasreclame.ro
              </a>
              .
            </p>
            <p>
              Consultă și{' '}
              <Link href="/politica-confidentialitate" className="text-amber hover:underline">
                Politica de confidențialitate
              </Link>{' '}
              pentru detalii complete despre prelucrarea datelor personale.
            </p>
          </Section>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl text-cream uppercase tracking-tight">{title}</h2>
      <div className="font-body text-sm text-steel leading-relaxed space-y-3">{children}</div>
    </div>
  )
}
