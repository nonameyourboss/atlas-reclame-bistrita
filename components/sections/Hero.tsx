'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { registerGSAP, gsap, prefersReducedMotion } from '@/lib/gsap'
import { NeonHeadline } from '@/components/motion/NeonHeadline'
import { Substrate } from '@/components/textures/Substrate'

/* ── SVG ART CELLS ── */

function NeonSignArt() {
  return (
    <svg viewBox="0 0 220 180" aria-hidden="true" className="absolute inset-0 w-full h-full">
      <rect width="220" height="180" fill="#070708" />
      <rect x="18" y="22" width="184" height="148" fill="#0E0E10" stroke="#191919" strokeWidth="0.5" />
      <line x1="18" y1="78" x2="202" y2="78" stroke="#191919" strokeWidth="0.5" />
      <line x1="18" y1="118" x2="202" y2="118" stroke="#191919" strokeWidth="0.5" />
      <rect x="28" y="33" width="24" height="17" fill="#090909" />
      <rect x="60" y="33" width="24" height="17" fill="#12100A" />
      <rect x="28" y="58" width="24" height="17" fill="#12100A" />
      <rect x="60" y="58" width="24" height="17" fill="#090909" />
      <rect x="28" y="87" width="24" height="17" fill="#090909" />
      <rect x="60" y="87" width="24" height="17" fill="#12100A" />
      <rect x="84" y="125" width="20" height="45" fill="#060606" />
      <rect x="115" y="38" width="1.5" height="10" fill="#252527" />
      <rect x="196" y="38" width="1.5" height="10" fill="#252527" />
      <rect x="113" y="46" width="86" height="40" fill="#040405" stroke="#F0A500" strokeWidth="1.5" />
      <rect x="115" y="48" width="82" height="36" fill="rgba(240,165,0,0.06)" />
      <text x="156" y="68" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="14" fontWeight="700" letterSpacing="3" fill="#F0A500" className="neon-glow">ATLAS</text>
      <text x="156" y="80" textAnchor="middle" fontFamily="'Courier New',monospace" fontSize="7.5" fontWeight="400" letterSpacing="5" fill="#F0A500" opacity="0.65">RECLAME</text>
      <rect x="0" y="168" width="220" height="12" fill="#050506" />
    </svg>
  )
}

function WrapAutoArt() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background: '#0C0C0E',
          backgroundImage: 'repeating-linear-gradient(45deg, transparent 0, transparent 11px, rgba(240,165,0,0.05) 11px, rgba(240,165,0,0.05) 12px)',
        }}
      />
      <svg viewBox="0 0 260 160" aria-hidden="true" className="absolute inset-0 w-full h-full" style={{ padding: '8% 6%' }}>
        <rect x="8" y="50" width="178" height="72" fill="#1A1A1C" rx="2" />
        <path d="M186 50 L228 74 L228 122 L186 122 Z" fill="#161618" />
        <path d="M188 55 L218 76 L218 88 L188 70 Z" fill="#080C14" opacity="0.9" />
        <rect x="8" y="50" width="118" height="72" fill="#F0A500" opacity="0.9" />
        <rect x="8" y="50" width="118" height="72" fill="url(#wrapLines)" />
        <text x="62" y="90" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#141414" letterSpacing="2.5">BN LOGISTIC</text>
        <rect x="130" y="58" width="42" height="28" fill="#080808" opacity="0.6" />
        <circle cx="56" cy="124" r="17" fill="#101012" stroke="#2A2A2C" strokeWidth="2" />
        <circle cx="56" cy="124" r="9" fill="#080808" />
        <circle cx="56" cy="124" r="3.5" fill="#161618" />
        <circle cx="168" cy="124" r="17" fill="#101012" stroke="#2A2A2C" strokeWidth="2" />
        <circle cx="168" cy="124" r="9" fill="#080808" />
        <circle cx="168" cy="124" r="3.5" fill="#161618" />
        <path d="M36 122 Q56 106 76 122" fill="#0C0C0E" />
        <path d="M148 122 Q168 106 188 122" fill="#0C0C0E" />
        <defs>
          <pattern id="wrapLines" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="12" x2="12" y2="0" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          </pattern>
        </defs>
      </svg>
    </div>
  )
}

function PrintBannerArt() {
  return (
    <svg viewBox="0 0 180 220" aria-hidden="true" className="absolute inset-0 w-full h-full" style={{ padding: '6% 12%' }}>
      <rect x="28" y="8" width="124" height="200" fill="#0F0F11" stroke="#222224" strokeWidth="1.5" />
      <rect x="28" y="8" width="124" height="4.5" fill="#F0A500" />
      <circle cx="42" cy="20" r="5.5" fill="#181818" stroke="#3A3A3C" strokeWidth="1.5" />
      <circle cx="138" cy="20" r="5.5" fill="#181818" stroke="#3A3A3C" strokeWidth="1.5" />
      <circle cx="42" cy="198" r="5.5" fill="#181818" stroke="#3A3A3C" strokeWidth="1.5" />
      <circle cx="138" cy="198" r="5.5" fill="#181818" stroke="#3A3A3C" strokeWidth="1.5" />
      <rect x="38" y="34" width="104" height="1" fill="#F0A500" opacity="0.5" />
      <text x="90" y="82" textAnchor="middle" fontFamily="Georgia,serif" fontSize="26" fontWeight="700" fill="#F5F0E8" letterSpacing="3">FESTIVAL</text>
      <text x="90" y="108" textAnchor="middle" fontFamily="Georgia,serif" fontSize="15" fontWeight="400" fill="#F5F0E8" letterSpacing="6">BISTRIȚA</text>
      <rect x="60" y="122" width="60" height="0.5" fill="#2A2A2C" />
      <text x="90" y="142" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#444446" letterSpacing="5">IULIE 2024</text>
      <rect x="38" y="172" width="104" height="0.5" fill="#222224" />
      <text x="90" y="186" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#2E2E30" letterSpacing="1.5">1000 × 2000 mm</text>
      <ellipse cx="90" cy="208" rx="62" ry="6" fill="#0C0C0E" stroke="#1E1E20" strokeWidth="0.5" />
    </svg>
  )
}

function Litera3DArt() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 w-full h-full" style={{ padding: '8%' }}>
      <ellipse cx="100" cy="175" rx="58" ry="7" fill="#F0A500" opacity="0.15" />
      <ellipse cx="100" cy="168" rx="44" ry="4" fill="#F0A500" opacity="0.25" />
      <path d="M122 26 L138 36 L138 166 L122 156 Z" fill="#F0A500" opacity="0.3" />
      <path d="M115 98 L131 104 L131 118 L115 112 Z" fill="#F0A500" opacity="0.25" />
      <path d="M100 18 L122 26 L116 34 L96 28 Z" fill="#F0A500" opacity="0.2" />
      <path d="M96 26 L122 156 L108 156 L98 112 L84 112 L72 156 L58 156 L82 26 Z" fill="#1C1C1E" stroke="#F0A500" strokeWidth="1.5" />
      <rect x="84" y="98" width="24" height="14" fill="#1C1C1E" stroke="#F0A500" strokeWidth="0.75" />
      <line x1="96" y1="26" x2="122" y2="26" stroke="#F0A500" strokeWidth="0.75" opacity="0.4" />
    </svg>
  )
}

const CELLS = [
  { id: 0, label: 'Casete LED', sublabel: 'Restaurant Crâng', Visual: NeonSignArt, bg: '#070708' },
  { id: 1, label: 'Wrap flotă', sublabel: 'Transport BN', Visual: WrapAutoArt, bg: '#0C0C0E' },
  { id: 2, label: 'Banner outdoor', sublabel: 'Festival Bistrița', Visual: PrintBannerArt, bg: '#0A0A0C' },
  { id: 3, label: 'Litere 3D', sublabel: 'Hotel Coroana', Visual: Litera3DArt, bg: '#090909' },
]

/* ── SCROLL HINT ── */

function ScrollHint() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      ref.current.style.opacity = pct > 0.1 ? '0' : String(Math.max(0, 1 - pct * 10))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none transition-opacity duration-300"
      aria-hidden="true"
    >
      <span
        className="font-mono text-[10px] text-amber/50 uppercase tracking-[0.25em]"
        style={{ animation: 'scroll-hint-bounce 2s ease-in-out infinite' }}
      >
        ↓ Scroll
      </span>
    </div>
  )
}

/* ── HERO ── */

export function Hero() {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)
  const cellRefs = useRef<(HTMLDivElement | null)[]>([])
  const earlyRef = useRef<HTMLDivElement>(null)
  const lateRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    const reduced = prefersReducedMotion()

    // Early elements (status dot) — appear immediately
    if (earlyRef.current) {
      const earlyEls = earlyRef.current.querySelectorAll<HTMLElement>('.hero-early')
      if (!reduced) {
        gsap.set(earlyEls, { opacity: 0, y: 16 })
        gsap.to(earlyEls, { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: 'cubic-bezier(0.16,1,0.3,1)' })
      } else {
        earlyEls.forEach((el) => { el.style.opacity = '1' })
      }
    }

    // Late elements (sub + CTAs + live) — appear after neon sequence
    if (lateRef.current) {
      const lateEls = lateRef.current.querySelectorAll<HTMLElement>('.hero-late')
      if (!reduced) {
        gsap.set(lateEls, { opacity: 0, y: 20 })
        gsap.to(lateEls, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 2.8,
          ease: 'cubic-bezier(0.16,1,0.3,1)',
          onComplete: () => lateEls.forEach((el) => { el.style.willChange = 'auto' }),
        })
      } else {
        lateEls.forEach((el) => { el.style.opacity = '1' })
      }
    }

    // Showcase cells stagger in from right
    const cells = cellRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!reduced) {
      gsap.set(cells, { opacity: 0, x: 20 })
      gsap.to(cells, {
        opacity: 1,
        x: 0,
        duration: 0.65,
        stagger: 0.12,
        delay: 0.5,
        ease: 'cubic-bezier(0.16,1,0.3,1)',
        onComplete: () => cells.forEach((c) => { c.style.willChange = 'auto' }),
      })
    } else {
      cells.forEach((c) => { c.style.opacity = '1' })
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative bg-graphite overflow-hidden"
      style={{ paddingTop: '80px', minHeight: '100svh' }}
      aria-label="Atlas Reclame Bistrița"
    >
      {/* Aluminum-brushed substrate */}
      <Substrate material="aluminum-brushed" />

      {/* Ambient grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(240,165,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(240,165,0,0.02) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="grid lg:grid-cols-[45fr_55fr] min-h-[calc(100svh-80px)] relative">
        {/* ── LEFT: Text ── */}
        <div
          ref={earlyRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col justify-center px-8 md:px-12 py-14 lg:py-20 relative z-10"
        >
          {/* Status */}
          <div className="hero-early flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber dot-pulse flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10px] text-amber/80 uppercase tracking-[0.25em]">
              Producție activă · Bistrița
            </span>
          </div>

          {/* Neon headline */}
          <NeonHeadline
            text="Facem reclame care se văd de pe stradă."
            className="leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}
          />

          {/* Late elements — wrapper div for GSAP selection */}
          <div ref={lateRef as React.RefObject<HTMLDivElement>}>
            {/* Sub-headline */}
            <p className="hero-late font-body text-[15px] md:text-base text-steel leading-relaxed max-w-[420px] mb-10">
              Reclame luminoase, wrap auto, printuri mari și structuri publicitare.
              Producție și montaj în Bistrița din 2014.
            </p>

            {/* CTAs */}
            <div className="hero-late flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="/portofoliu"
                className="inline-flex items-center gap-3 bg-amber text-graphite font-display text-base uppercase tracking-wide px-7 py-3.5 hover:bg-[#D88E00] active:scale-[0.98] transition-all duration-200 hover:[box-shadow:inset_0_0_20px_rgba(0,0,0,0.2)]"
              >
                Vezi lucrări
                <svg width="18" height="9" viewBox="0 0 18 9" fill="none" aria-hidden="true">
                  <path d="M0 4.5H16M12 1L16 4.5L12 8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-cream/25 text-cream font-display text-base uppercase tracking-wide px-7 py-3.5 hover:border-amber/60 hover:bg-amber/5 transition-all duration-200"
              >
                Cere ofertă
              </Link>
            </div>

            {/* Live indicator */}
            <div className="hero-late flex items-center gap-3">
              <span className="h-px w-6 bg-amber/40 flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] text-steel uppercase tracking-[0.2em]">
                12 proiecte în lucru acum
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Showcase 2×2 ── */}
        <div className="relative lg:border-l border-border overflow-hidden">
          <div className="border-t border-border lg:border-t-0 grid grid-cols-2 h-full min-h-[420px] lg:min-h-0">
            {CELLS.map((cell, i) => (
              <div
                key={cell.id}
                ref={(el) => { cellRefs.current[i] = el }}
                className={cn(
                  'relative overflow-hidden cursor-pointer border-border',
                  i % 2 === 0 ? 'border-r' : '',
                  i < 2 ? 'border-b' : '',
                  'transition-all duration-500'
                )}
                style={{
                  backgroundColor: cell.bg,
                  opacity: hoveredCell !== null && hoveredCell !== i ? 0.4 : 1,
                  transform: hoveredCell === i ? 'scale(1.02)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredCell(i)}
                onMouseLeave={() => setHoveredCell(null)}
                data-cursor="portfolio"
                role="img"
                aria-label={`${cell.label} — ${cell.sublabel}`}
              >
                <cell.Visual />
                <div
                  className={cn(
                    'absolute inset-0 pointer-events-none transition-opacity duration-300',
                    hoveredCell === i ? 'opacity-100' : 'opacity-0'
                  )}
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(240,165,0,0.4)' }}
                  aria-hidden="true"
                />
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 px-4 py-3 transition-all duration-300',
                    'bg-gradient-to-t from-black/80 to-transparent',
                    hoveredCell === i ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-1'
                  )}
                >
                  <p className="font-display text-cream text-sm uppercase tracking-wide leading-tight">{cell.label}</p>
                  <p className="font-mono text-[9px] text-steel/80 mt-0.5 tracking-widest">{cell.sublabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Amber corner accent */}
          <div className="absolute top-0 right-0 w-16 h-0.5 bg-amber/30" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-0.5 h-16 bg-amber/20" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll hint — fades at 10% scroll */}
      <ScrollHint />
    </section>
  )
}
