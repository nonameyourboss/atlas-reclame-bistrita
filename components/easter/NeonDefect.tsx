'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useKonamiCode } from '@/hooks/useKonamiCode'

const SESSION_KEY = 'atlas-konami-level'
const MAX_LEVEL = 3

function getStoredLevel(): number {
  try {
    return parseInt(sessionStorage.getItem(SESSION_KEY) ?? '0', 10) || 0
  } catch {
    return 0
  }
}

function setStoredLevel(n: number) {
  try {
    sessionStorage.setItem(SESSION_KEY, String(n))
  } catch {
    // sessionStorage unavailable
  }
}

function logOverclock(level: number) {
  // eslint-disable-next-line no-console
  console.log(
    '%c● ATLAS RECLAME — ATELIER OVERCLOCKED ',
    'background:#F0A500;color:#1C1C1E;padding:4px 8px;font-family:monospace;font-weight:bold;font-size:13px',
  )
  // eslint-disable-next-line no-console
  console.log(
    `%c  Nivel ${level}/${MAX_LEVEL} activ. Refresh pentru resetare.  `,
    'background:#1C1C1E;color:#F0A500;padding:2px 8px;font-family:monospace;font-size:11px',
  )
}

interface ToastProps {
  level: number
  onDismiss: () => void
}

function OverclockToast({ level, onDismiss }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 6000)
    return () => clearTimeout(t)
  }, [onDismiss])

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[9998] flex flex-col gap-1 border border-amber bg-furnace px-5 py-4"
      style={{ borderRadius: 0, maxWidth: 300 }}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber dot-pulse flex-shrink-0" />
        <span className="font-mono text-[11px] text-amber uppercase tracking-[0.2em]">
          Atelier Overclocked
        </span>
        <span className="font-mono text-[10px] text-steel ml-auto">
          {level}/{MAX_LEVEL}
        </span>
      </div>
      <p className="font-mono text-[10px] text-cream/60 leading-relaxed mt-1">
        Glow setat la maxim. Refresh pentru a reseta.
      </p>
    </div>
  )
}

export function NeonDefect() {
  const { activated } = useKonamiCode()
  const [showToast, setShowToast] = useState(false)
  const animFrameRef = useRef<number>(0)

  const runDefect = useCallback(() => {
    const level = getStoredLevel()
    if (level >= MAX_LEVEL) return

    const nextLevel = level + 1
    setStoredLevel(nextLevel)
    logOverclock(nextLevel)

    const targets = [
      ...Array.from(document.querySelectorAll<HTMLElement>('[data-amber-glow="true"]')),
      ...Array.from(document.querySelectorAll<HTMLElement>('.neon-glow')),
    ]

    if (!targets.length) return

    let elapsed = 0
    const STAGE1_END = 2000
    const STAGE2_END = 3500
    const TOTAL = 5000
    const FPS_INTERVAL = 40

    let lastFrame = performance.now()

    // Store original filters for cleanup
    const origFilters = targets.map((el) => el.style.filter)

    function flicker(now: number) {
      const delta = now - lastFrame
      if (delta < FPS_INTERVAL) {
        animFrameRef.current = requestAnimationFrame(flicker)
        return
      }
      lastFrame = now
      elapsed += delta

      if (elapsed < STAGE1_END) {
        // Stage 1: rapid random flicker
        targets.forEach((el) => {
          const r = Math.random()
          el.style.opacity = r > 0.3 ? '1' : String(0.3 + Math.random() * 0.5)
          el.style.filter = r > 0.5
            ? `drop-shadow(0 0 ${8 + Math.random() * 16}px rgba(240,165,0,0.8))`
            : 'none'
        })
      } else if (elapsed < STAGE2_END) {
        // Stage 2: decreasing frequency
        const progress = (elapsed - STAGE1_END) / (STAGE2_END - STAGE1_END)
        const flickerChance = 0.5 * (1 - progress)
        targets.forEach((el) => {
          if (Math.random() < flickerChance) {
            el.style.opacity = String(0.6 + Math.random() * 0.4)
            el.style.filter = `drop-shadow(0 0 ${6 + Math.random() * 10}px rgba(240,165,0,0.6))`
          }
        })
      } else if (elapsed < TOTAL) {
        // Stage 3: stabilize at higher glow
        targets.forEach((el) => {
          el.style.opacity = '1'
          el.style.filter = `drop-shadow(0 0 ${12 + nextLevel * 4}px rgba(240,165,0,${0.5 + nextLevel * 0.15}))`
        })
      } else {
        // Done
        cancelAnimationFrame(animFrameRef.current)
        setShowToast(true)
        return
      }

      animFrameRef.current = requestAnimationFrame(flicker)
    }

    animFrameRef.current = requestAnimationFrame(flicker)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      targets.forEach((el, i) => { el.style.filter = origFilters[i] })
    }
  }, [])

  useEffect(() => {
    if (!activated) return
    const cleanup = runDefect()
    return () => { cleanup?.() }
  }, [activated, runDefect])

  // Apply persistent overclocked glow on mount if session has level
  useEffect(() => {
    const level = getStoredLevel()
    if (!level) return

    const targets = [
      ...Array.from(document.querySelectorAll<HTMLElement>('[data-amber-glow="true"]')),
      ...Array.from(document.querySelectorAll<HTMLElement>('.neon-glow')),
    ]
    targets.forEach((el) => {
      el.style.filter = `drop-shadow(0 0 ${12 + level * 4}px rgba(240,165,0,${0.5 + level * 0.15}))`
    })
  }, [])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  if (!showToast) return null

  return (
    <OverclockToast
      level={getStoredLevel()}
      onDismiss={() => setShowToast(false)}
    />
  )
}
