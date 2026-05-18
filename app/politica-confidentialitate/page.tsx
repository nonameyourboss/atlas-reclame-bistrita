import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politică de confidențialitate — Atlas Reclame Bistrița',
  description: 'Cum colectăm, utilizăm și protejăm datele tale personale conform GDPR.',
  robots: { index: false, follow: false },
}

export default function PoliticaConfidentialitatePage() {
  return (
    <main className="min-h-screen bg-furnace">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <nav className="flex items-center gap-2 font-mono text-xs text-steel mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-cream transition-colors">Acasă</Link>
          <span>/</span>
          <span className="text-amber">Politică de confidențialitate</span>
        </nav>

        <h1 className="font-display text-[clamp(36px,6vw,64px)] text-cream uppercase tracking-tight leading-tight mb-4">
          Politică de confidențialitate
        </h1>
        <p className="font-mono text-xs text-steel mb-12">Ultima actualizare: 1 ianuarie 2024</p>

        <div className="space-y-8">
          <Section title="1. Operatorul de date">
            <p>
              Operatorul de date cu caracter personal este Atlas Reclame SRL, cu sediul în Bistrița,
              Str. Industriei nr. 14, județul Bistrița-Năsăud, CUI RO12345678, Nr. Reg. Com. J06/000/2013.
            </p>
            <p>
              Contact DPO / responsabil protecția datelor:{' '}
              <a href="mailto:gdpr@atlasreclame.ro" className="text-amber hover:underline">
                gdpr@atlasreclame.ro
              </a>
            </p>
          </Section>

          <Section title="2. Ce date colectăm">
            <p>Colectăm următoarele categorii de date personale:</p>
            <ul>
              <li><strong className="text-cream">Date de identificare:</strong> Nume, prenume, denumire firmă.</li>
              <li><strong className="text-cream">Date de contact:</strong> Adresă de email, număr de telefon.</li>
              <li>
                <strong className="text-cream">Date de navigare:</strong> Adresă IP, tip browser, pagini vizitate,
                durata sesiunii — colectate prin Google Analytics (cu acordul tău).
              </li>
              <li>
                <strong className="text-cream">Conținutul comunicărilor:</strong> Mesajele transmise prin
                formularul de contact.
              </li>
            </ul>
          </Section>

          <Section title="3. Scopul prelucrării">
            <p>Datele tale sunt prelucrate în următoarele scopuri:</p>
            <ul>
              <li>Răspuns la cereri de ofertă și comunicări comerciale (baza legală: contract / interes legitim).</li>
              <li>Emiterea de facturi și documente contabile (baza legală: obligație legală).</li>
              <li>Îmbunătățirea website-ului prin analiză statistică anonimizată (baza legală: consimțământ).</li>
              <li>Transmiterea de comunicări de marketing, doar cu acordul explicit (baza legală: consimțământ).</li>
            </ul>
          </Section>

          <Section title="4. Durata stocării">
            <p>
              Datele colectate prin formularul de contact sunt păstrate pe o perioadă de maxim 3 ani de la
              ultima interacțiune. Datele din documente contabile sunt păstrate 10 ani conform legislației fiscale.
              Datele analitice sunt anonimizate după 14 luni.
            </p>
          </Section>

          <Section title="5. Drepturile tale">
            <p>Conform GDPR, ai următoarele drepturi:</p>
            <ul>
              <li><strong className="text-cream">Acces</strong> — poți solicita o copie a datelor tale.</li>
              <li><strong className="text-cream">Rectificare</strong> — poți corecta datele incorecte.</li>
              <li><strong className="text-cream">Ștergere</strong> — &ldquo;dreptul de a fi uitat&rdquo;, în condițiile legii.</li>
              <li><strong className="text-cream">Restricționare</strong> — poți limita prelucrarea datelor tale.</li>
              <li><strong className="text-cream">Portabilitate</strong> — poți primi datele tale în format structurat.</li>
              <li><strong className="text-cream">Opoziție</strong> — poți te opune prelucrării bazate pe interes legitim.</li>
              <li><strong className="text-cream">Retragere consimțământ</strong> — oricând, fără a afecta legalitatea prelucrărilor anterioare.</li>
            </ul>
            <p>
              Pentru exercitarea drepturilor, trimite o cerere la:{' '}
              <a href="mailto:gdpr@atlasreclame.ro" className="text-amber hover:underline">
                gdpr@atlasreclame.ro
              </a>
            </p>
          </Section>

          <Section title="6. Terți și transferuri">
            <p>
              Nu vindem și nu cedăm datele tale terților în scop comercial. Datele pot fi accesate de
              furnizorii noștri de servicii (hosting, email, analitics) în baza unor contracte de prelucrare
              în conformitate cu GDPR.
            </p>
            <p>
              Google Analytics: datele sunt procesate în UE sau SUA, conform acordurilor de transfer SCCs
              cu Google Ireland Limited.
            </p>
          </Section>

          <Section title="7. Cookie-uri">
            <p>
              Utilizăm cookie-uri conform{' '}
              <Link href="/politica-cookies" className="text-amber hover:underline">Politicii de cookies</Link>.
            </p>
          </Section>

          <Section title="8. Plângeri">
            <p>
              Dacă consideri că datele tale sunt prelucrate necorespunzător, poți depune o plângere la{' '}
              <strong className="text-cream">ANSPDCP</strong> (Autoritatea Națională de Supraveghere a
              Prelucrării Datelor cu Caracter Personal), website:{' '}
              <span className="text-amber">anspdcp.ro</span>.
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
      <div className="font-body text-sm text-steel leading-relaxed space-y-3 [&_ul]:space-y-2 [&_ul]:ml-4 [&_li]:list-disc [&_li]:list-outside">
        {children}
      </div>
    </div>
  )
}
