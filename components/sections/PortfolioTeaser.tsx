'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { Substrate } from '@/components/textures/Substrate'

/* ── PROJECT CSS ART ── */

function NeonCrangArt() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 65% 45%, rgba(240,165,0,0.12) 0%, transparent 70%), #080809' }} />
      <svg viewBox="0 0 320 220" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <rect x="50" y="30" width="220" height="160" fill="#0C0C0E" stroke="#161618" strokeWidth="0.5" />
        <line x1="50" y1="90" x2="270" y2="90" stroke="#141416" strokeWidth="0.5" />
        <line x1="50" y1="130" x2="270" y2="130" stroke="#141416" strokeWidth="0.5" />
        {[0,1,2].map(i => (
          <rect key={i} x={62 + i*36} y={42} width={26} height={18} fill="#0A0A0B" />
        ))}
        {[0,1,2].map(i => (
          <rect key={i} x={62 + i*36} y={68} width={26} height={18} fill={i===1 ? '#130F07' : '#0A0A0B'} />
        ))}
        <rect x="175" y="36" width="1.5" height="10" fill="#222" />
        <rect x="256" y="36" width="1.5" height="10" fill="#222" />
        <rect x="173" y="44" width="86" height="40" fill="#050506" stroke="#F0A500" strokeWidth="1.5" />
        <rect x="175" y="46" width="82" height="36" fill="rgba(240,165,0,0.07)" />
        <text x="216" y="66" textAnchor="middle" fontFamily="monospace" fontSize="15" fontWeight="700" letterSpacing="3" fill="#F0A500" className="neon-glow">CRÂNG</text>
        <text x="216" y="77" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="5" fill="#F0A500" opacity="0.6">RESTAURANT</text>
        <rect x="110" y="145" width="22" height="45" fill="#060607" />
        <rect x="0" y="185" width="320" height="35" fill="#060607" />
      </svg>
    </div>
  )
}

function WrapBNArt() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0" style={{
        background: '#0C0C0E',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(240,165,0,0.05) 14px, rgba(240,165,0,0.05) 15px)',
      }} />
      <svg viewBox="0 0 320 220" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <rect x="20" y="65" width="230" height="88" fill="#181818" rx="2" />
        <path d="M250 65 L302 92 L302 153 L250 153 Z" fill="#141416" />
        <path d="M258 70 L292 92 L292 104 L258 82 Z" fill="#0A0F1A" opacity="0.9" />
        <rect x="20" y="65" width="152" height="88" fill="#F0A500" opacity="0.88" />
        <rect x="20" y="65" width="152" height="88" fill="url(#bnPattern)" />
        <text x="96" y="114" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#141414" letterSpacing="3">BN LOGISTIC</text>
        <rect x="176" y="74" width="58" height="34" fill="#080808" opacity="0.6" />
        <circle cx="74" cy="155" r="20" fill="#101012" stroke="#252527" strokeWidth="2" />
        <circle cx="74" cy="155" r="11" fill="#080808" />
        <circle cx="218" cy="155" r="20" fill="#101012" stroke="#252527" strokeWidth="2" />
        <circle cx="218" cy="155" r="11" fill="#080808" />
        <path d="M50 153 Q74 136 98 153" fill="#0C0C0E" />
        <path d="M194 153 Q218 136 242 153" fill="#0C0C0E" />
        <defs>
          <pattern id="bnPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="12" x2="12" y2="0" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          </pattern>
        </defs>
      </svg>
    </div>
  )
}

function LitereleHotelArt() {
  return (
    <div className="absolute inset-0" style={{ background: '#0A0A0B' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 70%, rgba(240,165,0,0.1) 0%, transparent 70%)' }} />
      <svg viewBox="0 0 320 220" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {/* 3D letters H-O-T-E-L spread out */}
        {/* Letter H */}
        <rect x="38" y="50" width="12" height="100" fill="#1A1A1C" stroke="#F0A500" strokeWidth="1" />
        <rect x="62" y="50" width="12" height="100" fill="#1A1A1C" stroke="#F0A500" strokeWidth="1" />
        <rect x="38" y="92" width="36" height="12" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        {/* 3D sides H */}
        <path d="M50 50 L58 44 L58 144 L50 150 Z" fill="#F0A500" opacity="0.2" />
        {/* Letter O */}
        <rect x="90" y="50" width="12" height="100" fill="#1A1A1C" stroke="#F0A500" strokeWidth="1" />
        <rect x="114" y="50" width="12" height="100" fill="#1A1A1C" stroke="#F0A500" strokeWidth="1" />
        <rect x="90" y="50" width="36" height="12" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        <rect x="90" y="138" width="36" height="12" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        {/* Letter T */}
        <rect x="142" y="50" width="44" height="12" fill="#1A1A1C" stroke="#F0A500" strokeWidth="1" />
        <rect x="157" y="62" width="14" height="88" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        {/* Letter E */}
        <rect x="202" y="50" width="12" height="100" fill="#1A1A1C" stroke="#F0A500" strokeWidth="1" />
        <rect x="202" y="50" width="38" height="12" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        <rect x="202" y="92" width="30" height="10" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        <rect x="202" y="138" width="38" height="12" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        {/* Letter L */}
        <rect x="256" y="50" width="12" height="100" fill="#1A1A1C" stroke="#F0A500" strokeWidth="1" />
        <rect x="256" y="138" width="38" height="12" fill="#1A1A1C" stroke="#F0A500" strokeWidth="0.5" />
        {/* Ground shadow */}
        <ellipse cx="160" cy="175" rx="130" ry="8" fill="#F0A500" opacity="0.12" />
      </svg>
    </div>
  )
}

export function PortfolioTeaser() {
  const cardRefs = useRef<HTMLDivElement[]>([])
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const mousePos = useRef({ x: 0, y: 0 })

  const PROJECTS = [
    {
      id: 'p1',
      href: '/portofoliu/reclama-luminoasa-restaurant-crang',
      title: 'Reclamă Luminoasă',
      client: 'Restaurant Crâng, Bistrița',
      category: 'LED / Neon',
      aspect: '3/4' as const,
      Visual: NeonCrangArt,
    },
    {
      id: 'p2',
      href: '/portofoliu/wrap-flota-bn-logistic',
      title: 'Wrap Flotă',
      client: 'BN Logistic Transport',
      category: 'Vehicule',
      aspect: '3/4' as const,
      Visual: WrapBNArt,
    },
    {
      id: 'p3',
      href: '/portofoliu/litere-volumetrice-hotel-coroana',
      title: 'Litere Volumetrice',
      client: 'Hotel Coroana, Bistrița',
      category: '3D · Inox',
      aspect: '4/3' as const,
      Visual: LitereleHotelArt,
    },
  ]

  useEffect(() => {
    registerGSAP()
    if (prefersReducedMotion()) return

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      gsap.set(card, { opacity: 0, y: 48, scale: 0.97 })
      ScrollTrigger.create({
        trigger: card,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1, y: 0, scale: 1,
            duration: 0.75,
            delay: i * 0.12,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            onComplete: () => { card.style.willChange = 'auto' },
          })
        },
      })
    })
  }, [])

  // Amber mouse spotlight per card
  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>, i: number) {
    const rect = e.currentTarget.getBoundingClientRect()
    mousePos.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    }
    const spotlight = e.currentTarget.querySelector<HTMLDivElement>('.card-spotlight')
    if (spotlight) {
      spotlight.style.background = `radial-gradient(circle 120px at ${mousePos.current.x}% ${mousePos.current.y}%, rgba(240,165,0,0.12) 0%, transparent 70%)`
    }
  }

  return (
    <section
      id="portofoliu"
      className="relative py-[80px] md:py-[120px]"
      style={{ background: 'var(--color-graphite)' }}
      aria-label="Portofoliu"
    >
      <Substrate material="vinyl-glossy" />
      <div className="relative max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <SectionLabel label="Lucrări din Bistrița" />
            <h2
              className="font-display text-cream uppercase tracking-tight"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: '0.95' }}
            >
              LUCRĂRI DIN BISTRIȚA
            </h2>
          </div>
          <ScrollReveal delay={200}>
            <Link
              href="/portofoliu"
              className="inline-flex items-center gap-2 border border-cream/20 text-cream font-mono text-[11px] uppercase tracking-widest px-5 py-2.5 hover:border-cream/40 transition-colors"
            >
              Portofoliu complet →
            </Link>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.id}
              href={p.href}
              ref={(el) => { if (el) cardRefs.current[i] = el as unknown as HTMLDivElement }}
              className={cn(
                'group relative overflow-hidden cursor-pointer',
                'transition-all duration-500'
              )}
              style={{ aspectRatio: p.aspect }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              data-cursor="portfolio"
              aria-label={`${p.title} — ${p.client}`}
            >
              {/* CSS art */}
              <p.Visual />

              {/* Mouse spotlight */}
              <div className="card-spotlight absolute inset-0 pointer-events-none transition-opacity duration-300" aria-hidden="true" />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(7,7,8,0.92) 0%, transparent 55%)', opacity: activeCard === i ? 1 : 0.7 }}
                aria-hidden="true"
              />

              {/* Amber border on hover */}
              <div
                className={cn(
                  'absolute inset-0 pointer-events-none transition-opacity duration-300',
                  activeCard === i ? 'opacity-100' : 'opacity-0'
                )}
                style={{ boxShadow: 'inset 0 0 0 1px rgba(240,165,0,0.5)' }}
                aria-hidden="true"
              />

              {/* Top tag */}
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[9px] text-steel/80 uppercase tracking-[0.2em] bg-black/60 border border-border px-2 py-0.5">
                  {p.category}
                </span>
              </div>

              {/* Arrow */}
              <div className={cn('absolute top-4 right-4 transition-opacity duration-200', activeCard === i ? 'opacity-100' : 'opacity-0')}>
                <span className="font-mono text-xl text-amber">↗</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-mono text-[10px] text-steel/70 uppercase tracking-[0.2em] mb-1.5">{p.client}</p>
                <h3
                  className="font-display text-cream group-hover:text-amber transition-colors duration-200"
                  style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', letterSpacing: '0.04em', lineHeight: '1.05' }}
                >
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
