'use client'

import { useEffect, useRef, useState } from 'react'

const SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export function useKonamiCode(): { activated: boolean } {
  const posRef = useRef(0)
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    function onKeyDown(e: KeyboardEvent) {
      const expected = SEQUENCE[posRef.current]
      if (e.key === expected) {
        posRef.current += 1
        if (posRef.current === SEQUENCE.length) {
          posRef.current = 0
          setActivated(true)
          // Reset after a tick so consumers can react to the true edge
          setTimeout(() => setActivated(false), 100)
        }
      } else {
        // Wrong key — reset, but check if the key starts a new sequence
        posRef.current = e.key === SEQUENCE[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return { activated }
}
