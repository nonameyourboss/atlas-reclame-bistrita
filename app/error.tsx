'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to console for debugging — no analytics in error boundary
    // eslint-disable-next-line no-console
    console.error('[Atlas] Error boundary caught:', error)
  }, [error])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-8"
      style={{ background: 'var(--color-furnace)' }}
    >
      <div className="max-w-md w-full">
        {/* Error mark */}
        <div className="mb-8">
          <span className="font-display text-amber" style={{ fontSize: 'clamp(80px, 12vw, 140px)', lineHeight: 1 }}>
            !
          </span>
        </div>

        <h1 className="font-display text-cream uppercase tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
          Ceva nu a mers.
        </h1>

        <p className="font-mono text-[12px] text-steel uppercase tracking-[0.15em] leading-relaxed mb-8">
          A apărut o eroare neașteptată. Încearcă din nou sau revino mai târziu.
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={reset}
            className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase bg-amber text-graphite px-6 py-3 transition-colors duration-150 hover:bg-amber/90"
            style={{ borderRadius: 0 }}
          >
            Încearcă din nou
          </button>
          <a
            href="/"
            className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-steel hover:text-cream transition-colors duration-150"
          >
            Înapoi acasă →
          </a>
        </div>

        {error.digest && (
          <p className="mt-8 font-mono text-[9px] text-border uppercase tracking-[0.2em]">
            {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
