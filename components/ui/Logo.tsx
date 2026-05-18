import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'mark' | 'mono'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { mark: 28, wordmark: { atlas: 16, reclame: 10 } },
  md: { mark: 36, wordmark: { atlas: 22, reclame: 13 } },
  lg: { mark: 56, wordmark: { atlas: 36, reclame: 22 } },
}

export function Logo({ className, variant = 'full', size = 'md' }: LogoProps) {
  const s = sizes[size]

  if (variant === 'mark') {
    return (
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('flex-shrink-0', className)}
        aria-label="Atlas Reclame mark"
      >
        <rect x="1" y="1" width="42" height="42" stroke="#F5F0E8" strokeWidth="1.5" />
        {/* A form: two 72° diagonals meeting at apex */}
        <line x1="10" y1="38" x2="22" y2="8" stroke="#F0A500" strokeWidth="3.5" strokeLinecap="square" />
        <line x1="22" y1="8" x2="34" y2="38" stroke="#F0A500" strokeWidth="3.5" strokeLinecap="square" />
        {/* Crossbar at 2/3 height */}
        <line x1="14" y1="27" x2="30" y2="27" stroke="#F0A500" strokeWidth="3" strokeLinecap="square" />
        {/* LED bar terminals */}
        <rect x="9.5" y="35" width="5" height="3" fill="#F0A500" opacity="0.35" />
        <rect x="29.5" y="35" width="5" height="3" fill="#F0A500" opacity="0.35" />
      </svg>
    )
  }

  if (variant === 'mono') {
    return (
      <svg
        width={variant === 'mono' ? 200 : 240}
        height={s.mark}
        viewBox="0 0 240 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('flex-shrink-0', className)}
        aria-label="Atlas Reclame"
      >
        {/* A mark */}
        <line x1="4" y1="40" x2="18" y2="6" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="square" />
        <line x1="18" y1="6" x2="32" y2="40" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="square" />
        <line x1="8.5" y1="28" x2="27.5" y2="28" stroke="#F5F0E8" strokeWidth="2.5" strokeLinecap="square" />
        {/* ATLAS */}
        <text x="46" y="33" fontFamily="var(--font-bebas, 'Bebas Neue')" fontSize="30" fill="#F5F0E8" letterSpacing="2">ATLAS</text>
        {/* Rule */}
        <rect x="46" y="36" width="192" height="1" fill="#F5F0E8" opacity="0.25" />
        {/* RECLAME */}
        <text x="46" y="44" fontFamily="var(--font-bebas, 'Bebas Neue')" fontSize="16" fill="#999" letterSpacing="5">RECLAME</text>
      </svg>
    )
  }

  // variant === 'full' (default) — amber A-mark + cream wordmark
  return (
    <svg
      width={size === 'sm' ? 180 : size === 'lg' ? 260 : 220}
      height={size === 'sm' ? 36 : size === 'lg' ? 60 : 48}
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('flex-shrink-0', className)}
      aria-label="Atlas Reclame"
    >
      {/* A mark: two diagonal bars at 72°, crossbar at 2/3 */}
      <line x1="4" y1="44" x2="22" y2="6" stroke="#F0A500" strokeWidth="4" strokeLinecap="square" />
      <line x1="22" y1="6" x2="40" y2="44" stroke="#F0A500" strokeWidth="4" strokeLinecap="square" />
      <line x1="9" y1="30" x2="35" y2="30" stroke="#F0A500" strokeWidth="3.5" strokeLinecap="square" />
      {/* LED bar terminals */}
      <rect x="3" y="41" width="6" height="3" fill="#F0A500" opacity="0.35" />
      <rect x="31" y="41" width="9" height="3" fill="#F0A500" opacity="0.35" />
      {/* ATLAS */}
      <text x="56" y="37" fontFamily="var(--font-bebas, 'Bebas Neue')" fontSize="36" fill="#F5F0E8" letterSpacing="2">ATLAS</text>
      {/* Separator rule */}
      <rect x="56" y="40" width="162" height="1" fill="#F0A500" opacity="0.3" />
      {/* RECLAME */}
      <text x="56" y="48" fontFamily="var(--font-bebas, 'Bebas Neue')" fontSize="21" fill="#888888" letterSpacing="5">RECLAME</text>
    </svg>
  )
}
