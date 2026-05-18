'use client'

import { useEffect, useRef } from 'react'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

const LINES: { text: string; accent?: boolean; accentWord?: string }[] = [
  { text: 'Producem' },
  { text: 'fizic.', accent: true },
  { text: 'În Bistrița.' },
  { text: 'Din 2014.', accentWord: '2014.' },
]

export function ScaleShockManifest() {
  const linesRef = useRef<(HTMLDivElement | null)[]>([])
  const detailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    if (prefersReducedMotion()) {
      linesRef.current.forEach((el) => {
        if (el) { el.style.opacity = '1'; el.style.transform = 'none' }
      })
      if (detailRef.current) { detailRef.current.style.opacity = '0.5' }
      return
    }

    const lines = linesRef.current.filter(Boolean) as HTMLDivElement[]

    gsap.set(lines, { opacity: 0, y: 60 })
    gsap.set(detailRef.current, { opacity: 0 })

    ScrollTrigger.create({
      trigger: lines[0],
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.to(lines, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          onComplete: () => {
            lines.forEach((l) => { l.style.willChange = 'auto' })
            if (detailRef.current) {
              gsap.to(detailRef.current, { opacity: 0.5, duration: 0.5, delay: 0.2 })
            }
          },
        })
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section
      id="manifest"
      className="relative"
      style={{ background: 'var(--color-graphite)', minHeight: '80vh' }}
      aria-label="Manifest Atlas Reclame"
    >
      {/* Centered content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 md:px-12 py-20 text-center">
        {LINES.map((line, i) => (
          <div
            key={i}
            ref={(el) => { linesRef.current[i] = el }}
            className="leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(48px, 12vw, 200px)', letterSpacing: '-0.02em' }}
          >
            {line.accentWord ? (
              <span className="font-display text-cream">
                {line.text.replace(line.accentWord, '')}
                <span style={{ color: 'var(--color-amber)' }}>{line.accentWord}</span>
              </span>
            ) : (
              <span
                className="font-display"
                style={{ color: line.accent ? 'var(--color-amber)' : 'var(--color-cream)' }}
              >
                {line.text}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Bottom-right detail */}
      <div
        ref={detailRef}
        className="absolute bottom-8 right-8 flex items-center gap-2 opacity-0"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber dot-pulse flex-shrink-0" />
        <span className="font-mono text-[10px] text-cream uppercase tracking-[0.2em]">
          Atelier activ · Str. Dornei 8 · Bistrița
        </span>
      </div>
    </section>
  )
}
