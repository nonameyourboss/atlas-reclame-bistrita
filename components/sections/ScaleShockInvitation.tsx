'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

export function ScaleShockInvitation() {
  const layer1Ref = useRef<HTMLDivElement>(null)
  const layer2Ref = useRef<HTMLDivElement>(null)
  const layer3Ref = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    const reduced = prefersReducedMotion()

    const layers = [layer1Ref.current, layer2Ref.current, layer3Ref.current, mapRef.current].filter(Boolean) as HTMLElement[]

    if (reduced) {
      layers.forEach((el) => { el.style.opacity = '1' })
      return
    }

    gsap.set(layers, { opacity: 0, y: 28 })

    ScrollTrigger.create({
      trigger: layer1Ref.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(layers, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'expo.out',
          onComplete: () => layers.forEach((el) => { el.style.willChange = 'auto' }),
        })
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section
      id="invitation"
      className="relative"
      style={{
        background: 'var(--color-graphite)',
        minHeight: '85vh',
      }}
      aria-label="Vino la atelierul Atlas Reclame"
    >
      {/* Amber radial from bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 55% 60% at 90% 100%, rgba(240,165,0,0.1) 0%, transparent 65%)',
        }}
      />

      {/* Bottom-left anchored layout */}
      <div className="relative flex flex-col justify-end min-h-[85vh] px-8 md:px-16 pb-14 md:pb-20 pt-20">
        {/* Layer 1: Small label */}
        <div ref={layer1Ref} className="mb-6 md:mb-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber dot-pulse flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10px] text-amber uppercase tracking-[0.25em]">
              Vino în persoană
            </span>
          </div>
        </div>

        {/* Layer 2: Massive headline */}
        <div ref={layer2Ref} className="mb-8 md:mb-10">
          <div
            className="font-display text-cream uppercase leading-[0.93]"
            style={{ fontSize: 'clamp(36px, 10vw, 160px)', letterSpacing: '-0.02em' }}
          >
            <div>Vino în</div>
            <div>Bistrița să vezi</div>
            <div>
              <span className="text-cream">Atelierul</span>
              <span style={{ color: 'var(--color-amber)' }}>.</span>
            </div>
          </div>
        </div>

        {/* Layer 3 + Map — side by side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0">
          {/* Address block */}
          <div ref={layer3Ref} className="space-y-1.5">
            <p className="font-mono text-[11px] text-cream/70 uppercase tracking-[0.2em]">
              Str. Dornei 8 · Bistrița
            </p>
            <p className="font-mono text-[11px] text-steel uppercase tracking-[0.2em]">
              Lun–Vin 09:00 — 17:00
            </p>
            <p className="font-mono text-[11px] text-steel uppercase tracking-[0.15em]">
              <a
                href="mailto:office@atlasreclame.ro"
                className="hover:text-cream transition-colors duration-150"
              >
                office@atlasreclame.ro
              </a>
              {' · '}
              <a
                href="tel:+40741244494"
                className="hover:text-cream transition-colors duration-150"
              >
                +40 741 244 494
              </a>
            </p>
          </div>

          {/* Map placeholder + CTA */}
          <div ref={mapRef} className="flex flex-col items-start lg:items-end gap-2">
            {/* Minimal coordinate dot map */}
            <div
              className="relative border border-border"
              style={{ width: 64, height: 64, background: '#0D0D0E' }}
              aria-hidden="true"
            >
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(rgba(240,165,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(240,165,0,0.4) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }} />
              {/* Bistrița dot */}
              <div className="absolute w-2 h-2 rounded-full bg-amber dot-pulse" style={{ top: '38%', left: '44%' }} />
              {/* Coordinates label */}
              <div className="absolute bottom-1 left-1 font-mono text-[7px] text-amber/50 leading-none">
                47°N<br />24°E
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Str.+Dornei+8+Bistrita"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-steel hover:text-amber uppercase tracking-[0.2em] transition-colors duration-150"
            >
              → Deschide în Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
