import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { services } from '@/lib/services-data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-furnace border-t border-border" id="footer" aria-label="Footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="Atlas Reclame — acasă">
              <Logo size="md" className="mb-6" />
            </Link>
            <p className="font-body text-[13px] text-steel leading-relaxed max-w-[240px]">
              Producție publicitară fizică din Bistrița.
              Reclame, inscripționări, print — livrate în județul Bistrița-Năsăud
              și regiunile limitrofe.
            </p>
            <div className="mt-6 space-y-1">
              <p className="font-mono text-[10px] text-steel">CUI: RO12345678</p>
              <p className="font-mono text-[10px] text-steel">J06/000/2013</p>
            </div>
          </div>

          {/* Col 2 + 3: Services split into 2 cols */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-mono text-[10px] text-steel tracking-[0.3em] uppercase mb-5">
                Servicii
              </h3>
              <ul className="space-y-3" role="list">
                {services.slice(0, 8).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/servicii/${s.slug}`}
                      className="font-body text-[12px] text-steel hover:text-cream transition-colors duration-150"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] text-transparent tracking-[0.3em] uppercase mb-5 select-none" aria-hidden="true">
                —
              </h3>
              <ul className="space-y-3" role="list">
                {services.slice(8).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/servicii/${s.slug}`}
                      className="font-body text-[12px] text-steel hover:text-cream transition-colors duration-150"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="md:col-span-1">
            <h3 className="font-mono text-[10px] text-steel tracking-[0.3em] uppercase mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div>
                <span className="block font-mono text-[10px] text-amber/70 tracking-[0.2em] uppercase mb-1">Telefon</span>
                <a href="tel:+40263000000" className="font-body text-sm text-cream hover:text-amber transition-colors duration-150">
                  0263 000 000
                </a>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-amber/70 tracking-[0.2em] uppercase mb-1">Mobil</span>
                <a href="tel:+40740000000" className="font-body text-sm text-cream hover:text-amber transition-colors duration-150">
                  0740 000 000
                </a>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-amber/70 tracking-[0.2em] uppercase mb-1">Email</span>
                <a href="mailto:office@atlasreclame.ro" className="font-body text-[13px] text-cream hover:text-amber transition-colors duration-150">
                  office@atlasreclame.ro
                </a>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-amber/70 tracking-[0.2em] uppercase mb-1">Adresă</span>
                <p className="font-body text-[13px] text-steel leading-relaxed">
                  Str. Industriei nr. 14<br />
                  Bistrița, jud. BN 420000<br />
                  România
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-steel/50 tracking-[0.08em]">
              © {year} Atlas Reclame Bistrița SRL. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/termeni-si-conditii" className="font-mono text-[10px] text-steel/50 hover:text-steel transition-colors duration-150 tracking-[0.08em]">
                Termeni și condiții
              </Link>
              <Link href="/politica-confidentialitate" className="font-mono text-[10px] text-steel/50 hover:text-steel transition-colors duration-150 tracking-[0.08em]">
                Confidențialitate
              </Link>
              <Link href="/politica-cookies" className="font-mono text-[10px] text-steel/50 hover:text-steel transition-colors duration-150 tracking-[0.08em]">
                Cookies
              </Link>
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-steel/50 hover:text-steel transition-colors duration-150 tracking-[0.08em]"
              >
                ANPC — SAL
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-steel/50 hover:text-steel transition-colors duration-150 tracking-[0.08em]"
              >
                SOL Online
              </a>
            </div>
          </div>
          <p className="mt-3 font-mono text-[9px] text-steel/30 leading-relaxed">
            ANPC — Autoritatea Națională pentru Protecția Consumatorilor. Str. Balcescu nr. 29A, sector 1, București.
            Tel: 021.9551. Litigii online: ec.europa.eu/consumers/odr
          </p>
        </div>
      </div>
    </footer>
  )
}
