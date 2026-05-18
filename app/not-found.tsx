import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Pagina nu a fost găsită — Atlas Reclame Bistrița',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-furnace flex flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-[clamp(120px,20vw,240px)] text-graphite leading-none select-none">
        404
      </span>
      <div className="w-16 h-0.5 bg-amber my-8" />
      <h1 className="font-display text-[clamp(24px,4vw,40px)] text-cream uppercase tracking-tight mb-4">
        Pagina nu a fost găsită.
      </h1>
      <p className="font-body text-base text-steel max-w-sm mb-10 leading-relaxed">
        Adresa pe care ai accesat-o nu există sau a fost mutată.
        Verifică URL-ul sau întoarce-te acasă.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-3 bg-amber text-graphite font-display text-base uppercase tracking-wide px-8 py-4 hover:bg-amber/90 transition-colors duration-200"
        >
          Pagina principală
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 border border-cream/30 text-cream font-display text-base uppercase tracking-wide px-8 py-4 hover:border-cream/60 transition-colors duration-200"
        >
          Contactează-ne
        </Link>
      </div>
    </main>
  )
}
