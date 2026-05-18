'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface SplitHeadlineProps {
  text: string
  className?: string
  style?: CSSProperties
  tag?: 'h1' | 'h2' | 'h3'
  delay?: number
  stagger?: number
  once?: boolean
}

export function SplitHeadline({
  text,
  className,
  style,
  tag: Tag = 'h1',
  delay = 0,
  stagger = 100,
  once = true,
}: SplitHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const animatedRef = useRef(false)

  const words = text.split(' ')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // Reveal everything immediately
      const spans = containerRef.current?.querySelectorAll<HTMLSpanElement>('.split-word-inner')
      spans?.forEach((s) => {
        s.style.transform = 'translateY(0)'
        s.style.opacity = '1'
      })
      return
    }

    const animate = () => {
      if (animatedRef.current && once) return
      animatedRef.current = true

      const spans = containerRef.current?.querySelectorAll<HTMLSpanElement>('.split-word-inner')
      if (!spans) return

      spans.forEach((span, i) => {
        span.style.transform = 'translateY(60px)'
        span.style.opacity = '0'
        span.style.transition = `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms, opacity 0.6s ease ${delay + i * stagger}ms`

        // Trigger via requestAnimationFrame to ensure transition runs
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            span.style.transform = 'translateY(0)'
            span.style.opacity = '1'
          })
        })
      })
    }

    // Small delay so the page can paint first
    const timeout = setTimeout(animate, 50)
    return () => clearTimeout(timeout)
  }, [delay, stagger, once])

  return (
    <Tag
      ref={containerRef}
      className={cn('overflow-visible', className)}
      style={style}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word"
          style={{ marginRight: i < words.length - 1 ? '0.25em' : 0 }}
          aria-hidden="true"
        >
          <span
            className="split-word-inner"
            style={{
              display: 'inline-block',
              willChange: 'transform',
              transform: 'translateY(60px)',
              opacity: 0,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
