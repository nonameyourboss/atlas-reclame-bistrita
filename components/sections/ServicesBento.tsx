'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { Substrate } from '@/components/textures/Substrate'

/* ── CSS ART BACKGROUNDS ── */

function NeonBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex items-center justify-center overflow-hidden', className)}>
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(240,165,0,0.1) 0%, transparent 70%)' }} />
      {/* OPEN neon sign */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="px-6 py-3 border border-amber/70 relative"
          style={{ boxShadow: '0 0 30px rgba(240,165,0,0.2), inset 0 0 20px rgba(240,165,0,0.05)' }}
        >
          <span
            className="font-display text-amber text-3xl tracking-[0.3em] neon-flicker"
            style={{ textShadow: '0 0 10px #F0A500, 0 0 20px rgba(240,165,0,0.5)' }}
          >
            OPEN
          </span>
        </div>
        <div className="w-px h-6 bg-amber/20" />
        <div className="w-2 h-2 rounded-full bg-amber/40 neon-glow" />
      </div>
    </div>
  )
}

function LiteraBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex items-center justify-center overflow-hidden', className)}>
      <svg viewBox="0 0 120 120" className="w-3/4 h-3/4 opacity-90" aria-hidden="true">
        <ellipse cx="60" cy="108" rx="36" ry="5" fill="#F0A500" opacity="0.2" />
        <path d="M60 14 L78 100 L68 100 L60 68 L52 68 L44 100 L34 100 L50 14 Z" fill="#1C1C1E" stroke="#F0A500" strokeWidth="1.5" />
        <rect x="52" y="68" width="16" height="10" fill="#1C1C1E" stroke="#F0A500" strokeWidth="0.75" />
        <path d="M78 100 L86 106 L76 106 L68 100 Z" fill="#F0A500" opacity="0.3" />
        <path d="M60 14 L78 14 L78 22 L66 22 Z" fill="#F0A500" opacity="0.2" />
      </svg>
    </div>
  )
}

function WrapBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {/* 3M folie diagonal stripes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(240,165,0,0.06) 14px, rgba(240,165,0,0.06) 15px)',
        }}
      />
      {/* Car silhouette hint */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 160 80" className="w-4/5 opacity-60" aria-hidden="true">
          <rect x="8" y="22" width="110" height="44" fill="#141416" rx="2" />
          <path d="M118 22 L148 38 L148 66 L118 66 Z" fill="#111113" />
          <rect x="8" y="22" width="72" height="44" fill="#F0A500" opacity="0.75" />
          <circle cx="36" cy="68" r="12" fill="#0A0A0C" stroke="#252527" strokeWidth="1.5" />
          <circle cx="100" cy="68" r="12" fill="#0A0A0C" stroke="#252527" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  )
}

function PrintBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex items-end justify-center overflow-hidden pb-4', className)}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
      <svg viewBox="0 0 200 250" className="h-[85%] relative z-10" aria-hidden="true">
        <rect x="30" y="4" width="140" height="238" fill="#0E0E10" stroke="#2A2A2C" strokeWidth="1.5" />
        <rect x="30" y="4" width="140" height="5" fill="#F0A500" />
        <circle cx="44" cy="16" r="5" fill="#1A1A1C" stroke="#3A3A3C" strokeWidth="1.5" />
        <circle cx="156" cy="16" r="5" fill="#1A1A1C" stroke="#3A3A3C" strokeWidth="1.5" />
        <rect x="42" y="30" width="116" height="1" fill="#F0A500" opacity="0.4" />
        <text x="100" y="90" textAnchor="middle" fontFamily="Georgia,serif" fontSize="32" fontWeight="700" fill="#F5F0E8" letterSpacing="4">OUTDOOR</text>
        <text x="100" y="120" textAnchor="middle" fontFamily="Georgia,serif" fontSize="16" fill="#888" letterSpacing="8">PRINT</text>
        <text x="100" y="165" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#333335" letterSpacing="4">3 × 2 M</text>
      </svg>
    </div>
  )
}

function BannerBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex items-center justify-center overflow-hidden', className)}>
      <svg viewBox="0 0 160 110" className="w-4/5 animate-sway" style={{ transformOrigin: 'top center' }} aria-hidden="true">
        {/* Hanging rope */}
        <line x1="80" y1="0" x2="80" y2="12" stroke="#2A2A2C" strokeWidth="1" />
        <circle cx="80" cy="12" r="3" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.8" />
        <rect x="8" y="12" width="144" height="90" fill="#0F0F11" stroke="#222224" strokeWidth="1.5" />
        <rect x="8" y="12" width="144" height="5" fill="#F0A500" />
        <text x="80" y="68" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#F5F0E8" letterSpacing="3">BANNER</text>
        <text x="80" y="86" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#444" letterSpacing="5">MESH / FRONTLIT</text>
      </svg>
    </div>
  )
}

function TotemBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex items-end justify-center overflow-hidden pb-2', className)}>
      <svg viewBox="0 0 100 180" className="h-[90%]" aria-hidden="true">
        {/* Pole */}
        <rect x="46" y="80" width="8" height="96" fill="#1A1A1C" stroke="#222" strokeWidth="0.5" />
        {/* Totem box */}
        <rect x="15" y="10" width="70" height="80" fill="#0D0D0F" stroke="#2A2A2C" strokeWidth="1.5" />
        <rect x="15" y="10" width="70" height="4" fill="#F0A500" />
        {/* Light row */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={22 + i * 14} cy="22" r="3" fill="#F0A500" opacity={i % 2 === 0 ? 0.9 : 0.3} className="neon-glow" />
        ))}
        {/* Separator */}
        <rect x="22" y="32" width="56" height="0.5" fill="#2A2A2C" />
        {/* Content area */}
        <text x="50" y="60" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#F5F0E8" letterSpacing="2">TOTEM</text>
        <text x="50" y="74" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#555" letterSpacing="3">5.5 M</text>
        {/* Base */}
        <rect x="30" y="172" width="40" height="6" fill="#111113" />
      </svg>
    </div>
  )
}

/* ── FEATURED SERVICES DATA ── */

const FEATURED = [
  {
    number: '01',
    name: 'Reclame Luminoase',
    description: 'Casete LED și neon cu bandă 12V. Producție completă și montaj inclus.',
    tag: 'PRODUS EMBLEMATIC',
    colSpan: 2,
    slug: 'reclame-luminoase',
    Visual: NeonBackground,
    bg: '#0A0A0B',
  },
  {
    number: '02',
    name: 'Litere Volumetrice',
    description: 'Aluminiu și plexiglas. Iluminate frontal sau halo.',
    tag: '3D',
    colSpan: 1,
    slug: 'litere-volumetrice',
    Visual: LiteraBackground,
    bg: '#0C0C0D',
  },
  {
    number: '03',
    name: 'Inscripționări Auto',
    description: 'Folie 3M și Oracal. Wrap complet sau parțial. Flotă și vehicule individuale.',
    tag: 'Vehicule',
    colSpan: 1,
    slug: 'inscriptionari-auto',
    Visual: WrapBackground,
    bg: '#0D0D0F',
  },
  {
    number: '07',
    name: 'Print Mari Dimensiuni',
    description: 'Banner mesh, frontlit, PVC backlit. Până la 5m lățime.',
    tag: 'Large format',
    colSpan: 2,
    slug: 'print-mari-dimensiuni',
    Visual: PrintBackground,
    bg: '#090909',
  },
  {
    number: '11',
    name: 'Bannere & Printuri',
    description: 'Roll-up, mesh outdoor, X-banner și bannere personalizate.',
    tag: 'Bannere',
    colSpan: 1,
    slug: 'bannere-printuri',
    Visual: BannerBackground,
    bg: '#0B0B0D',
  },
  {
    number: '15',
    name: 'Structuri Publicitare',
    description: 'Proiectare, producție și montaj de structuri metalice pentru reclame.',
    tag: 'Montaj',
    colSpan: 1,
    slug: 'structuri-publicitare',
    Visual: TotemBackground,
    bg: '#080808',
  },
]

/* ── COMPACT SERVICES ── */

const COMPACT = [
  { number: '03', name: 'Inscripționări Vitrine', desc: 'Grafică pe sticlă, folii frosted și decorative.', slug: 'inscriptionari-vitrine' },
  { number: '04', name: 'Tablouri Personalizate', desc: 'Print canvas, aluminiu, forex — orice dimensiune.', slug: 'tablouri-personalizate' },
  { number: '06', name: 'Cărți de Vizită', desc: 'Offset și digital. Laminare, soft-touch, UV.', slug: 'carti-de-vizita' },
  { number: '08', name: 'Panouri Stradale', desc: 'Structuri și fețe de panou outdoor cu montaj.', slug: 'panouri-stradale' },
  { number: '09', name: 'Colantări Auto', desc: 'Folii auto full-color. Protecție și branding simultan.', slug: 'colantari-auto' },
  { number: '10', name: 'Print Textile', desc: 'DTF, serigrafie, broderie — echipe și evenimente.', slug: 'print-textile' },
  { number: '12', name: 'Print Canvas', desc: 'Reproduceri foto și artă pe pânză cu șasiu.', slug: 'print-canvas' },
  { number: '13', name: 'Print Digital', desc: 'Tipar digital rapid pentru cantități mici.', slug: 'print-digital' },
  { number: '14', name: 'Tricouri Personalizate', desc: 'Print DTF full-color pe orice articol textil.', slug: 'tricouri-personalizate' },
]

/* ── COMPONENT ── */

export function ServicesBento() {
  const featuredRef = useRef<HTMLDivElement>(null)
  const compactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    if (prefersReducedMotion()) return

    // Featured cards stagger
    if (featuredRef.current) {
      const cards = featuredRef.current.querySelectorAll<HTMLDivElement>('.service-card')
      gsap.set(cards, { opacity: 0, y: 36 })
      ScrollTrigger.create({
        trigger: featuredRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1, y: 0, duration: 0.65,
            stagger: { each: 0.08, from: 'start' },
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            onComplete: () => cards.forEach((c) => { c.style.willChange = 'auto' }),
          })
        },
      })
    }

    // Compact list stagger
    if (compactRef.current) {
      const items = compactRef.current.querySelectorAll<HTMLDivElement>('.compact-item')
      gsap.set(items, { opacity: 0, x: -12 })
      ScrollTrigger.create({
        trigger: compactRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1, x: 0, duration: 0.5,
            stagger: 0.05,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          })
        },
      })
    }
  }, [])

  return (
    <section
      id="servicii"
      className="relative py-[80px] md:py-[120px]"
      style={{ background: 'var(--color-furnace)' }}
      aria-label="Servicii de producție"
    >
      <Substrate material="paper-grain" />
      <div className="relative max-w-7xl mx-auto px-8 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <SectionLabel label="Ce producem" />
            <h2
              className="font-display text-cream uppercase tracking-tight"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '0.95' }}
            >
              CE PRODUCEM
            </h2>
          </div>
          <ScrollReveal delay={150}>
            <p className="font-body text-sm text-steel leading-relaxed max-w-[280px]">
              15 tipuri de producție publicitară. De la o carte de vizită la o casetă LED de 6 metri.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured 6 — CSS art grid */}
        <div
          ref={featuredRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-px"
        >
          {FEATURED.map((s) => (
            <Link
              key={s.slug}
              href={`/servicii/${s.slug}`}
              className={cn(
                'service-card group relative overflow-hidden',
                s.colSpan === 2 ? 'col-span-2' : 'col-span-1'
              )}
              style={{
                minHeight: s.colSpan === 2 ? '220px' : '200px',
                backgroundColor: s.bg,
              }}
              data-cursor="portfolio"
            >
              {/* CSS art visual */}
              <s.Visual />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Amber border on hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(240,165,0,0.4)' }}
                aria-hidden="true"
              />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                {s.tag && (
                  <span className="inline-block font-mono text-[9px] text-amber/80 uppercase tracking-[0.2em] border border-amber/25 px-2 py-0.5 mb-2">
                    {s.tag}
                  </span>
                )}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="block font-mono text-[9px] text-steel/60 mb-1">{s.number}</span>
                    <h3 className="font-display text-cream uppercase tracking-tight leading-tight" style={{ fontSize: s.colSpan === 2 ? 'clamp(20px, 2.5vw, 28px)' : '20px' }}>
                      {s.name}
                    </h3>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="flex-shrink-0 text-amber opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1"
                    aria-hidden="true"
                  >
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="font-body text-[12px] text-steel/80 leading-relaxed mt-1.5 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {s.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Compact 9 — editorial list */}
        <div ref={compactRef} className="border border-border border-t-0">
          <div className="px-5 py-3 border-b border-border">
            <span className="font-mono text-[10px] text-steel/60 uppercase tracking-widest">
              Toate serviciile · {COMPACT.length} mai jos
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {COMPACT.map((s, i) => (
              <Link
                key={s.slug}
                href={`/servicii/${s.slug}`}
                className={cn(
                  'compact-item group flex items-start gap-4 p-5 border-border hover:bg-graphite/50 transition-colors duration-150',
                  i % 3 !== 2 ? 'md:border-r' : '',
                  i < 6 ? 'border-b' : ''
                )}
              >
                <span className="font-mono text-[10px] text-amber/40 flex-shrink-0 mt-0.5">{s.number}</span>
                <div className="min-w-0">
                  <h3
                    className="font-display text-cream uppercase tracking-tight leading-none mb-1.5 group-hover:text-amber transition-colors duration-150"
                    style={{ fontSize: '20px' }}
                  >
                    {s.name}
                  </h3>
                  <p className="font-body text-[12px] text-steel leading-relaxed">{s.desc}</p>
                </div>
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="flex-shrink-0 text-amber/0 group-hover:text-amber/60 transition-colors duration-150 mt-1"
                  aria-hidden="true"
                >
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-between">
          <p className="font-mono text-[10px] text-steel/50 uppercase tracking-widest">
            Producție proprie · Montaj inclus · Bistrița-Năsăud
          </p>
          <Link
            href="/servicii"
            className="font-mono text-[10px] text-amber uppercase tracking-widest hover:text-amber/70 transition-colors flex items-center gap-2"
          >
            Toate serviciile →
          </Link>
        </div>
      </div>
    </section>
  )
}
