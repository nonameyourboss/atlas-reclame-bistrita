'use client'

import { useEffect, useRef, useState } from 'react'

type CursorState = 'default' | 'link' | 'portfolio'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<CursorState>('default')
  const pos = useRef({ x: -100, y: -100 })
  const lerped = useRef({ x: -100, y: -100 })
  const rafId = useRef<number>(0)
  const isDesktop = useRef(false)

  useEffect(() => {
    isDesktop.current = window.matchMedia('(min-width: 1024px)').matches
    if (!isDesktop.current) return

    document.body.classList.add('cursor-custom-active')

    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY }

      const target = e.target as HTMLElement
      const closest = target.closest('a, button, [role="button"], [data-cursor]')
      if (!closest) {
        setState('default')
      } else if ((closest as HTMLElement).dataset.cursor === 'portfolio') {
        setState('portfolio')
      } else {
        setState('link')
      }
    }

    function loop() {
      lerped.current.x += (pos.current.x - lerped.current.x) * 0.15
      lerped.current.y += (pos.current.y - lerped.current.y) * 0.15

      const x = lerped.current.x
      const y = lerped.current.y

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x - 12}px, ${y - 12}px)`
      }
      if (pillRef.current) {
        pillRef.current.style.transform = `translate(${x - 40}px, ${y - 14}px)`
      }

      rafId.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    rafId.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
      document.body.classList.remove('cursor-custom-active')
    }
  }, [])

  if (typeof window !== 'undefined' && !window.matchMedia('(min-width: 1024px)').matches) {
    return null
  }

  return (
    <>
      {/* Default: small cream dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-cream transition-opacity duration-200"
        style={{ opacity: state === 'default' ? 1 : 0, willChange: 'transform' }}
      />

      {/* Link: amber ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full border border-amber transition-opacity duration-200"
        style={{ opacity: state === 'link' ? 1 : 0, willChange: 'transform' }}
      />

      {/* Portfolio: "VEZI →" pill */}
      <div
        ref={pillRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-20 h-7 flex items-center justify-center bg-amber transition-opacity duration-200"
        style={{ opacity: state === 'portfolio' ? 1 : 0, willChange: 'transform' }}
      >
        <span className="font-mono text-[9px] text-graphite uppercase tracking-widest font-bold">
          VEZI →
        </span>
      </div>
    </>
  )
}
