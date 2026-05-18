'use client'

import { useTheme } from '@/components/theme/ThemeProvider'

type Material =
  | 'aluminum-brushed'
  | 'paper-grain'
  | 'concrete-workshop'
  | 'vinyl-glossy'
  | 'matte-paper'

interface SubstrateProps {
  material: Material
  className?: string
}

const TURBULENCE_BASE = (
  freq: string,
  type: 'fractalNoise' | 'turbulence',
  octaves: number,
  opacity: number,
) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='${type}' baseFrequency='${freq}' numOctaves='${octaves}' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='${opacity}'/%3E%3C/svg%3E")`

function getDarkStyle(material: Material): React.CSSProperties {
  switch (material) {
    case 'aluminum-brushed':
      return {
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent 0px, transparent 1.5px, rgba(245,240,232,0.04) 1.5px, rgba(245,240,232,0.04) 2px, transparent 2px, transparent 3.5px, rgba(245,240,232,0.02) 3.5px, rgba(245,240,232,0.02) 4px)',
        backgroundSize: '200px 100%',
        mixBlendMode: 'overlay',
      }
    case 'paper-grain':
      return {
        backgroundImage: TURBULENCE_BASE('0.85', 'fractalNoise', 4, 0.03),
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        mixBlendMode: 'overlay',
      }
    case 'concrete-workshop':
      return {
        backgroundImage: TURBULENCE_BASE('0.55 0.65', 'turbulence', 3, 0.025),
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px',
        mixBlendMode: 'overlay',
      }
    case 'vinyl-glossy':
      return {
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent 0px, transparent 90px, rgba(245,240,232,0.025) 90px, rgba(245,240,232,0.025) 100px, transparent 100px, transparent 200px, rgba(0,0,0,0.02) 200px, rgba(0,0,0,0.02) 210px)',
        backgroundSize: '100% 210px',
        mixBlendMode: 'overlay',
      }
    case 'matte-paper':
      return {
        backgroundImage: TURBULENCE_BASE('0.95', 'fractalNoise', 2, 0.02),
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        mixBlendMode: 'overlay',
      }
  }
}

function getPaperStyle(material: Material): React.CSSProperties {
  switch (material) {
    case 'aluminum-brushed':
      // Laid paper lines — fine horizontal rule texture on warm cream
      return {
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(28,28,30,0.04) 3px, rgba(28,28,30,0.04) 4px)',
        backgroundSize: '100% 4px',
        mixBlendMode: 'multiply',
      }
    case 'paper-grain':
      // Cotton paper — denser, warmer grain (multiply darkens cream slightly)
      return {
        backgroundImage: TURBULENCE_BASE('0.75', 'fractalNoise', 5, 0.04),
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        mixBlendMode: 'multiply',
        opacity: 0.6,
      }
    case 'concrete-workshop':
      // Newsprint — coarse, directional
      return {
        backgroundImage: TURBULENCE_BASE('0.45 0.55', 'turbulence', 4, 0.035),
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px',
        mixBlendMode: 'multiply',
        opacity: 0.5,
      }
    case 'vinyl-glossy':
      // Silk-coated paper — very subtle vertical sheen lines
      return {
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(28,28,30,0.02) 60px, rgba(28,28,30,0.02) 61px)',
        backgroundSize: '61px 100%',
        mixBlendMode: 'multiply',
      }
    case 'matte-paper':
      // Washi paper — delicate micro-grain
      return {
        backgroundImage: TURBULENCE_BASE('1.1', 'fractalNoise', 2, 0.025),
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        mixBlendMode: 'multiply',
        opacity: 0.5,
      }
  }
}

export function Substrate({ material, className = '' }: SubstrateProps) {
  const { theme } = useTheme()

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={theme === 'paper' ? getPaperStyle(material) : getDarkStyle(material)}
    />
  )
}
