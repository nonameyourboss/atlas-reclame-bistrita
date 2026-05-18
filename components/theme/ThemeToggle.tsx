'use client'

import { useTheme } from '@/components/theme/ThemeProvider'
import { neonSwitchTransition } from '@/components/theme/NeonSwitchTransition'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  async function handleToggle() {
    const next = isDark ? 'paper' : 'dark'
    await neonSwitchTransition(next, () => setTheme(next))
  }

  return (
    <button
      onClick={handleToggle}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? 'Comută la Paper Atelier' : 'Comută la Dark Atelier'}
      title={isDark ? 'Paper Atelier' : 'Dark Atelier'}
      className="relative w-9 h-9 flex items-center justify-center text-steel border border-amber/25 transition-all duration-150 hover:border-amber hover:text-cream hover:scale-105 active:scale-95"
      style={{ borderRadius: 0 }}
    >
      {isDark ? (
        // Dark mode icon: neon A-mark with glow
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          {/* Left bar */}
          <polygon points="8,1 10,1 5.5,17 3.5,17" fill="currentColor" />
          {/* Right bar */}
          <polygon points="8,1 10,1 14.5,17 12.5,17" fill="currentColor" />
          {/* Crossbar */}
          <rect x="5.5" y="9.5" width="7" height="1.5" fill="currentColor" />
          {/* Glow dots suggesting neon */}
          <circle cx="3.5" cy="17" r="0.8" fill="currentColor" opacity="0.5" />
          <circle cx="14.5" cy="17" r="0.8" fill="currentColor" opacity="0.5" />
        </svg>
      ) : (
        // Paper mode icon: stamp A-mark with baseline rule
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          {/* Left bar */}
          <polygon points="8,1 10,1 5.5,17 3.5,17" fill="currentColor" />
          {/* Right bar */}
          <polygon points="8,1 10,1 14.5,17 12.5,17" fill="currentColor" />
          {/* Crossbar */}
          <rect x="5.5" y="9.5" width="7" height="1.5" fill="currentColor" />
          {/* Baseline rule — stamp feel */}
          <rect x="1.5" y="15.5" width="15" height="1" fill="currentColor" opacity="0.35" />
        </svg>
      )}
    </button>
  )
}
