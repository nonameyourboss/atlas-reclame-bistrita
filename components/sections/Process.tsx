'use client'

import { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SplitHeadline } from '@/components/motion/SplitHeadline'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

const STEPS = [
  {
    number: '01',
    title: 'Discuție și brief',
    body: 'Ne spui ce vrei să comunici, unde se montează, bugetul. Nu avem formulare complicate.',
    detail: 'Telefon, email sau față în față la atelier.',
  },
  {
    number: '02',
    title: 'Design și aprobare',
    body: 'Creăm macheta vizuală cu dimensiunile reale. Facem modificări până ești mulțumit.',
    detail: 'De obicei 1-2 runde de revizii.',
  },
  {
    number: '03',
    title: 'Producție în atelier',
    body: 'Producem totul intern. Plotter, print UV, neon bending, tăiere laser — același spațiu.',
    detail: 'Timp mediu de producție: 3-7 zile lucrătoare.',
  },
  {
    number: '04',
    title: 'Montaj pe teren',
    body: 'Echipa noastră montează, aliniază și predă lucrarea finalizată la locație.',
    detail: 'Bistrița și zona Bistrița-Năsăud.',
  },
]

export function Process() {
  const progressRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    registerGSAP()
    if (prefersReducedMotion()) return

    stepRefs.current.forEach((step, i) => {
      if (!step) return
      gsap.set(step, { opacity: 0, y: 36 })

      ScrollTrigger.create({
        trigger: step,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(step, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: i * 0.1,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          })
        },
      })
    })
  }, [])

  return (
    <section
      className="py-[80px] md:py-[128px]"
      style={{ background: 'var(--color-furnace)' }}
      aria-label="Cum lucrăm"
    >
      <div className="max-w-container mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <SectionLabel>Cum lucrăm</SectionLabel>
            <ScrollReveal>
              <SplitHeadline
                text="4 PAȘI SIMPLI"
                tag="h2"
                delay={100}
                stagger={80}
                className="font-display text-cream"
                style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '0.04em', lineHeight: '0.95' } as React.CSSProperties}
              />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={150}>
            <p className="font-body text-[13px] max-w-[260px] leading-relaxed" style={{ color: 'var(--color-steel)' }}>
              De la prima discuție până la predarea pe teren — fără complicații.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { if (el) stepRefs.current[i] = el }}
              className="relative"
              style={{ willChange: 'transform' }}
            >
              {/* Connector line (between steps, not after last) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-full w-full h-px z-0"
                  style={{ background: 'var(--color-border)' }}
                  aria-hidden="true"
                />
              )}

              <div
                className="relative z-10 p-6 md:pr-8 border-t-2 md:border-t-0 md:border-l"
                style={{
                  borderColor: i === 0 ? 'var(--color-amber)' : 'var(--color-border)',
                }}
              >
                {/* Step number */}
                <div
                  className="font-mono text-[24px] font-semibold mb-4 flex items-center gap-3"
                  style={{ color: i === 0 ? 'var(--color-amber)' : 'var(--color-border)' }}
                >
                  {step.number}
                  {/* Amber marker dot */}
                  <span
                    className="block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: i === 0 ? 'var(--color-amber)' : 'var(--color-border)' }}
                    aria-hidden="true"
                  />
                </div>

                {/* Step title */}
                <h3 className="font-body text-[16px] font-semibold text-cream mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Step body */}
                <p className="font-body text-[13px] leading-relaxed mb-4" style={{ color: 'var(--color-steel)' }}>
                  {step.body}
                </p>

                {/* Detail note */}
                <div className="font-mono text-[10px] tracking-[0.12em]" style={{ color: '#444' }}>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
