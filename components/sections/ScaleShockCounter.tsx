'use client'

import { useEffect, useRef, useState } from 'react'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

function formatRO(n: number): string {
  const rounded = Math.round(n)
  if (rounded < 1000) return rounded.toString()
  return Math.floor(rounded / 1000) + '.' + (rounded % 1000).toString().padStart(3, '0')
}

export function ScaleShockCounter() {
  const numberRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const topLeftRef = useRef<HTMLDivElement>(null)
  const bottomRightRef = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    registerGSAP()
    const reduced = prefersReducedMotion()

    if (reduced) {
      setDisplay('1.247')
      if (labelRef.current) labelRef.current.style.opacity = '0.7'
      if (topLeftRef.current) topLeftRef.current.style.opacity = '1'
      if (bottomRightRef.current) bottomRightRef.current.style.opacity = '1'
      return
    }

    const elements = [labelRef.current, topLeftRef.current, bottomRightRef.current].filter(Boolean)
    gsap.set(elements, { opacity: 0 })

    const counter = { value: 0 }

    ScrollTrigger.create({
      trigger: numberRef.current,
      start: 'top 55%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: 1247,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => setDisplay(formatRO(counter.value)),
          onComplete: () => {
            setDisplay('1.247')
            // Micro-shake after counter lands
            if (numberRef.current) {
              gsap.to(numberRef.current, {
                x: 0.5,
                duration: 0.05,
                ease: 'none',
                yoyo: true,
                repeat: 1,
              })
            }
            // Reveal laterals
            gsap.to(elements, { opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.4 })
          },
        })
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section
      id="counter"
      className="relative"
      style={{ background: 'var(--color-furnace)', minHeight: '70vh' }}
      aria-label="Statistici Atlas Reclame"
    >
      <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-8 md:px-12 py-20">
        {/* Top-left context */}
        <div
          ref={topLeftRef}
          className="absolute top-8 left-8 md:top-12 md:left-12"
          aria-hidden="true"
        >
          <span className="font-mono text-[11px] text-cream/50 uppercase tracking-[0.2em]">
            + 89 doar în 2025
          </span>
        </div>

        {/* Main number */}
        <div
          ref={numberRef}
          className="font-display text-amber tabular-nums text-center select-none"
          style={{ fontSize: 'clamp(72px, 20vw, 320px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
          aria-label="1247 proiecte livrate"
        >
          {display}
        </div>

        {/* Label */}
        <p
          ref={labelRef}
          className="font-mono text-cream/70 uppercase tracking-[0.2em] mt-6 text-center"
          style={{ fontSize: 'clamp(11px, 1.2vw, 14px)' }}
        >
          Proiecte livrate din 2014
        </p>

        {/* Bottom-right context */}
        <div
          ref={bottomRightRef}
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
          aria-hidden="true"
        >
          <span className="font-mono text-[11px] text-cream/50 uppercase tracking-[0.2em]">
            = ~125 / an
          </span>
        </div>
      </div>
    </section>
  )
}
