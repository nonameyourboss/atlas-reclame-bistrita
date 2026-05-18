'use client'

import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '@/lib/gsap'

const NEON_SHADOW = [
  '0 0 4px rgba(240,165,0,0.6)',
  '0 0 12px rgba(240,165,0,0.4)',
  '0 0 32px rgba(240,165,0,0.25)',
  '0 0 60px rgba(240,165,0,0.15)',
].join(', ')

// When each word animation begins, in seconds
const WORD_DELAYS = [0.2, 0.5, 0.85, 1.1, 1.3, 1.55, 1.7, 1.85]

function buildFlickerTimeline(
  el: HTMLElement,
  wordIndex: number,
  isLast: boolean,
): gsap.core.Timeline {
  const tl = gsap.timeline()
  const flickerCount = isLast ? 4 : 2 + (wordIndex % 3)

  for (let f = 0; f < flickerCount; f++) {
    const progress = (f + 1) / flickerCount
    const peakOpacity = 0.2 + progress * 0.75
    const onDur = isLast ? 0.065 + f * 0.008 : 0.04 + f * 0.01
    tl.to(el, { opacity: peakOpacity, duration: onDur, ease: 'none' })
    if (f < flickerCount - 1) {
      tl.to(el, { opacity: 0.04, duration: 0.025, ease: 'none' })
    }
  }

  // Settle
  tl.to(el, { opacity: 1, duration: 0.06, ease: 'none' })

  // Neon glow ramp
  tl.to(el, { textShadow: NEON_SHADOW, duration: 0.22, ease: 'power1.out' })

  return tl
}

interface NeonHeadlineProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export function NeonHeadline({ text, className = '', style }: NeonHeadlineProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const accentRef = useRef<SVGLineElement>(null)
  const microTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!h1Ref.current) return
    const el = h1Ref.current
    const reduced = prefersReducedMotion()

    if (reduced) {
      gsap.set(el, { opacity: 0 })
      gsap.to(el, { opacity: 1, duration: 0.4, delay: 0.2 })
      if (accentRef.current) {
        gsap.set(accentRef.current, { opacity: 0 })
        gsap.to(accentRef.current, { opacity: 1, duration: 0.3, delay: 0.7 })
      }
      return
    }

    const split = new SplitType(el, { types: 'words' })
    const words = (split.words ?? []) as HTMLElement[]

    if (!words.length) return

    gsap.set(words, { opacity: 0, textShadow: 'none' })

    const master = gsap.timeline()

    words.forEach((word, i) => {
      const delay = WORD_DELAYS[i] ?? WORD_DELAYS[WORD_DELAYS.length - 1] + (i - WORD_DELAYS.length + 1) * 0.16
      const isLast = i === words.length - 1
      master.add(buildFlickerTimeline(word, i, isLast), delay)
    })

    // Accent line stroke-dasharray reveal at T=2.4s
    if (accentRef.current) {
      const line = accentRef.current
      gsap.set(line, { attr: { 'stroke-dashoffset': 600 } })
      master.to(line, { attr: { 'stroke-dashoffset': 0 }, duration: 0.6, ease: 'power2.out' }, 2.4)
    }

    // Periodic micro-flicker (simulates real neon imperfection)
    function scheduleMicro() {
      const delay = 8000 + Math.random() * 7000
      microTimer.current = setTimeout(() => {
        if (!el) return
        const allWords = el.querySelectorAll<HTMLElement>('.word')
        const rw = allWords[Math.floor(Math.random() * allWords.length)]
        if (rw) {
          gsap.to(rw, {
            opacity: 0.82,
            duration: 0.025,
            ease: 'none',
            yoyo: true,
            repeat: 1,
            onComplete: scheduleMicro,
          })
        } else {
          scheduleMicro()
        }
      }, delay)
    }

    const stableAt = (WORD_DELAYS[WORD_DELAYS.length - 1] + 0.8) * 1000
    const startTimer = setTimeout(scheduleMicro, stableAt)

    return () => {
      clearTimeout(startTimer)
      if (microTimer.current) clearTimeout(microTimer.current)
      master.kill()
      split.revert()
    }
  }, [text])

  return (
    <div className="relative" data-amber-glow="true">
      <h1
        ref={h1Ref}
        className={`font-display text-cream uppercase tracking-tight ${className}`}
        style={style}
        aria-label={text}
      >
        {text}
      </h1>
      {/* Accent line revealed at T=2400ms */}
      <svg
        viewBox="0 0 600 2"
        width="60%"
        height="2"
        className="block mt-4"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <line
          ref={accentRef}
          x1="0" y1="1" x2="600" y2="1"
          stroke="#F0A500"
          strokeWidth="2"
          strokeDasharray="600"
          strokeDashoffset="600"
        />
      </svg>
    </div>
  )
}
