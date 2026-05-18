'use client'

import { useEffect, useRef } from 'react'
import { registerGSAP, gsap, ScrollTrigger, prefersReducedMotion, isMobile } from '@/lib/gsap'
import { cn } from '@/lib/utils'

interface PinnedNumberProps {
  value: string
  label: string
  sectionId: string
  className?: string
}

export function PinnedNumber({ value, label, sectionId, className }: PinnedNumberProps) {
  const numberRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    registerGSAP()

    if (prefersReducedMotion() || isMobile()) return

    const section = document.getElementById(sectionId)
    if (!section || !numberRef.current) return

    triggerRef.current = ScrollTrigger.create({
      trigger: section,
      start: 'top 15%',
      end: 'bottom 80%',
      pin: numberRef.current,
      pinSpacing: false,
    })

    return () => {
      triggerRef.current?.kill()
    }
  }, [sectionId])

  return (
    <div
      ref={numberRef}
      className={cn('flex flex-col gap-2 select-none', className)}
    >
      <div
        className="font-display leading-none"
        style={{
          fontSize: 'clamp(120px, 14vw, 220px)',
          letterSpacing: '-0.02em',
          color: 'var(--color-amber)',
          lineHeight: 1,
        }}
        aria-label={`${value} ${label}`}
      >
        {value}
      </div>
      <div
        className="font-display"
        style={{
          fontSize: 'clamp(20px, 2.5vw, 32px)',
          letterSpacing: '0.08em',
          color: 'var(--color-steel)',
        }}
        aria-hidden="true"
      >
        {label}
      </div>
    </div>
  )
}
