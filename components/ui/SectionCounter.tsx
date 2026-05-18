'use client'

import { useEffect, useState } from 'react'

// Only major content sections — scale-shock breaks are excluded
const SECTION_IDS = ['hero', 'servicii', 'atelier', 'portofoliu', 'contact']
const TOTAL = SECTION_IDS.length

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`
}

export function SectionCounter() {
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id, i) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCurrent(i + 1)
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-8 right-8 z-50 hidden lg:flex flex-col items-end gap-1 select-none"
    >
      <span className="font-mono text-[10px] text-amber tracking-widest">
        {pad(current)}
      </span>
      <span className="font-mono text-[10px] text-steel/40 tracking-widest">
        / {pad(TOTAL)}
      </span>
    </div>
  )
}
