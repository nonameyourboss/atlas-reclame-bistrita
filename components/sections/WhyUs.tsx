'use client'

import { useEffect, useRef } from 'react'
import { PinnedNumber } from '@/components/motion/PinnedNumber'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SplitHeadline } from '@/components/motion/SplitHeadline'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

const REASONS = [
  {
    title: 'Lucrăm cu mâinile. Nu cu template-uri.',
    body: 'Fiecare proiect e produs fizic în atelierul nostru. Avem echipament propriu de plotter, print UV și neon bending — nu trimitem comanda undeva și așteptăm.',
  },
  {
    title: 'Producție fizică, nu doar design.',
    body: 'De la folie 3M la bandă LED, de la aluminiu extrudat la pânză canvas — cunoaștem materialele din producție, nu din catalog.',
  },
  {
    title: 'Bistrița ne știe. De 10 ani.',
    body: 'Operăm din Str. Dornei nr. 8 din 2014. Clienții ne văd, ne găsesc și ne recomandă. Nu suntem un site fără adresă.',
  },
  {
    title: 'De la idee la montaj, totul intern.',
    body: 'Nu externalizăm nicio etapă. Design, producție, montaj — același atelier, aceeași echipă, același preț final. Zero surprize.',
  },
]

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    registerGSAP()
    if (prefersReducedMotion()) return

    // Animate reason cards on scroll
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      gsap.set(card, { opacity: 0, y: 48 })

      ScrollTrigger.create({
        trigger: card,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.08,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            onComplete: () => { card.style.willChange = 'auto' },
          })
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach((t) => {
      if (t.vars.trigger && (t.vars.trigger as Element).closest?.('#despre')) t.kill()
    })
  }, [])

  return (
    <section
      id="despre"
      ref={sectionRef}
      className="py-[80px] md:py-[128px] relative overflow-hidden"
      style={{ background: 'var(--color-graphite)' }}
      aria-label="De ce Atlas Reclame"
    >
      {/* Subtle right-side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 60% at 85% 40%, rgba(240,165,0,0.03) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-container mx-auto px-8 md:px-12 relative z-10">
        <SectionLabel>De ce noi</SectionLabel>

        {/* Split layout: 40% pinned number / 60% scrolling content */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start">

          {/* Left: pinned number block */}
          <div>
            <PinnedNumber
              value="10+"
              label="ANI DE PRODUCȚIE"
              sectionId="despre"
            />

            {/* Supporting stats below number */}
            <div className="mt-10 md:mt-16 space-y-6">
              <ScrollReveal delay={100}>
                <div className="border-l-2 pl-4" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="font-display text-[28px] text-cream" style={{ letterSpacing: '0.04em' }}>Bistrița</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase mt-1" style={{ color: 'var(--color-steel)' }}>Locație atelier</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="border-l-2 pl-4" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="font-display text-[28px] text-cream" style={{ letterSpacing: '0.04em' }}>15</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase mt-1" style={{ color: 'var(--color-steel)' }}>Tipuri de servicii</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="border-l-2 pl-4" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="font-display text-[28px] text-cream" style={{ letterSpacing: '0.04em' }}>100%</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase mt-1" style={{ color: 'var(--color-steel)' }}>Producție internă</div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: reason cards — scroll naturally */}
          <div ref={rightColRef} className="space-y-1 pt-0 md:pt-4">
            <ScrollReveal className="mb-10">
              <SplitHeadline
                text="DE CE ATLAS RECLAME"
                tag="h2"
                delay={100}
                stagger={70}
                className="font-display text-cream"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '0.04em', lineHeight: '0.95' } as React.CSSProperties}
              />
            </ScrollReveal>

            {REASONS.map((reason, i) => (
              <div
                key={i}
                ref={(el) => { if (el) cardRefs.current[i] = el }}
                className="py-8 border-b"
                style={{ borderColor: 'var(--color-border)', willChange: 'transform' }}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="font-mono text-[11px] tracking-[0.1em] flex-shrink-0 mt-1"
                    style={{ color: 'var(--color-amber)', opacity: 0.5, minWidth: '24px' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-body text-[17px] font-semibold text-cream mb-3 leading-snug">
                      {reason.title}
                    </h3>
                    <p className="font-body text-[14px] leading-relaxed" style={{ color: 'var(--color-steel)' }}>
                      {reason.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-body text-[12px] font-semibold tracking-[0.15em] uppercase text-amber hover:gap-5 transition-all duration-200"
              >
                <span className="h-px w-6 bg-amber inline-block" />
                Cere ofertă acum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
