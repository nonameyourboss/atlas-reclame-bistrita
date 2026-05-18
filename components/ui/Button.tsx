import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled,
  href,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center',
    'font-body font-semibold uppercase tracking-[0.2em]',
    'border-0 outline-none cursor-pointer',
    'transition-all duration-150 ease-in-out',
    'rounded-none',   // sharp — zero border-radius
    'focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-graphite',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    {
      // SIZE
      'text-[10px] px-5 py-3': size === 'sm',
      'text-[11px] px-7 py-4': size === 'md',
      'text-[12px] px-9 py-5': size === 'lg',
      // VARIANT — primary
      'bg-amber text-graphite hover:bg-[#d49200]': variant === 'primary',
      // VARIANT — ghost
      'bg-transparent text-cream border border-[#444] hover:border-cream': variant === 'ghost',
      // VARIANT — outline
      'bg-transparent text-amber border border-amber hover:bg-amber hover:text-graphite': variant === 'outline',
    },
    className
  )

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={base} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
