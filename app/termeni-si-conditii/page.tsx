import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termeni și condiții — Atlas Reclame Bistrița',
  description: 'Termenii și condițiile de utilizare a website-ului atlasreclame.ro și a serviciilor oferite de Atlas Reclame SRL.',
  robots: { index: false, follow: false },
}

export default function TermeniPage() {
  return (
    <main className="min-h-screen bg-furnace">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <nav className="flex items-center gap-2 font-mono text-xs text-steel mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-cream transition-colors">Acasă</Link>
          <span>/</span>
          <span className="text-amber">Termeni și condiții</span>
        </nav>

        <h1 className="font-display text-[clamp(36px,6vw,64px)] text-cream uppercase tracking-tight leading-tight mb-4">
          Termeni și condiții
        </h1>
        <p className="font-mono text-xs text-steel mb-12">Ultima actualizare: 1 ianuarie 2024</p>

        <div className="prose-custom space-y-8">

          <Section title="1. Informații generale">
            <p>
              Prezentul website, atlasreclame.ro, este operat de Atlas Reclame SRL, cu sediul în Bistrița,
              Str. Industriei nr. 14, județul Bistrița-Năsăud, înregistrată la Registrul Comerțului sub nr.
              J06/000/2013, CUI RO12345678 (denumită în continuare &ldquo;Societatea&rdquo; sau
              &ldquo;Atlas Reclame&rdquo;).
            </p>
          </Section>

          <Section title="2. Acceptarea termenilor">
            <p>
              Prin accesarea și utilizarea acestui website, utilizatorul acceptă în mod necondiționat
              prezenții Termeni și Condiții. Dacă nu ești de acord cu acești termeni, te rugăm să nu
              utilizezi website-ul.
            </p>
          </Section>

          <Section title="3. Servicii oferite">
            <p>
              Atlas Reclame oferă servicii de producție publicitară, inclusiv reclame luminoase,
              inscripționări auto, litere volumetrice, panouri stradale, bannere și materiale de
              print de mari dimensiuni. Detaliile complete ale serviciilor sunt disponibile în
              secțiunea <Link href="/servicii" className="text-amber hover:underline">Servicii</Link>.
            </p>
            <p>
              Ofertele de preț prezentate pe website, dacă există, sunt orientative și pot varia
              în funcție de specificațiile concrete ale fiecărui proiect.
            </p>
          </Section>

          <Section title="4. Proprietate intelectuală">
            <p>
              Toate materialele prezentate pe acest website, inclusiv texte, imagini, grafice,
              logo-uri și orice alte elemente, sunt proprietatea Atlas Reclame SRL sau sunt
              utilizate cu permisiunea deținătorilor de drepturi. Reproducerea, distribuirea sau
              utilizarea oricărui conținut fără acordul scris al Societății este strict interzisă.
            </p>
          </Section>

          <Section title="5. Limitarea răspunderii">
            <p>
              Atlas Reclame nu garantează că website-ul va funcționa fără întreruperi sau erori.
              Societatea nu este răspunzătoare pentru daune directe sau indirecte rezultate din
              utilizarea sau imposibilitatea utilizării website-ului.
            </p>
            <p>
              Informațiile prezentate pe website au caracter informativ și nu constituie o ofertă
              contractuală. Contractele de prestări servicii sunt valabile doar în formă scrisă,
              semnate de ambele părți.
            </p>
          </Section>

          <Section title="6. Protecția datelor">
            <p>
              Colectarea și prelucrarea datelor personale se realizează conform{' '}
              <Link href="/politica-confidentialitate" className="text-amber hover:underline">
                Politicii de confidențialitate
              </Link>{' '}
              și Regulamentului (UE) 2016/679 (GDPR).
            </p>
          </Section>

          <Section title="7. Cookie-uri">
            <p>
              Website-ul utilizează cookie-uri în conformitate cu{' '}
              <Link href="/politica-cookies" className="text-amber hover:underline">
                Politica de cookies
              </Link>
              . Poți gestiona preferințele de cookie-uri din banner-ul afișat la prima vizită.
            </p>
          </Section>

          <Section title="8. Legea aplicabilă">
            <p>
              Prezenții Termeni și Condiții sunt guvernați de legislația română. Orice litigiu
              rezultat din sau în legătură cu utilizarea website-ului va fi supus competenței
              exclusive a instanțelor din Bistrița, România.
            </p>
          </Section>

          <Section title="9. Modificări">
            <p>
              Atlas Reclame își rezervă dreptul de a modifica prezenții Termeni și Condiții
              oricând, fără notificare prealabilă. Versiunea actualizată va fi publicată pe
              această pagină cu data ultimei modificări.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Pentru orice întrebări legate de acești termeni, ne poți contacta la:{' '}
              <a href="mailto:office@atlasreclame.ro" className="text-amber hover:underline">
                office@atlasreclame.ro
              </a>
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
