'use client'

import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface ServiceCardProps {
  number: string
  name: string
  description: string
  tag?: string
  featured?: boolean
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
  role?: string
}

export function ServiceCard({
  number,
  name,
  description,
  tag,
  featured = false,
  children,
  className,
  style,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'bento-cell group relative flex flex-col justify-between',
        'p-6 overflow-hidden',
        'transition-[border-color] duration-150 ease-in-out',
        featured ? 'bento-cell-featured' : '',
        className
      )}
      style={style}
    >
      {/* Background gradient for featured cells */}
      {featured && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 80% 20%, rgba(240,165,0,0.04) 0%, transparent 70%)',
          }}
        />
      )}

      <div className="relative z-10">
        {/* Number */}
        <div
          className="font-mono text-[11px] tracking-[0.15em] mb-3"
          style={{ color: 'rgba(240, 165, 0, 0.4)' }}
        >
          {number}
        </div>

        {/* Service name */}
        <h3
          className={cn(
            'font-display leading-tight text-cream',
            featured ? 'text-[22px] md:text-[26px]' : 'text-[16px] md:text-[18px]'
          )}
          style={{ letterSpacing: '0.04em' }}
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className={cn(
            'font-body mt-2 leading-relaxed',
            featured ? 'text-[13px] text-[#888]' : 'text-[11px] text-[#666]'
          )}
        >
          {description}
        </p>

        {/* Optional children (image placeholder etc.) */}
        {children}
      </div>

      {/* Footer row */}
      <div className="relative z-10 flex items-end justify-between mt-4">
        {tag && (
          <span
            className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-1"
            style={{
              color: 'var(--color-steel)',
              border: '1px solid var(--color-border)',
            }}
          >
            {tag}
          </span>
        )}
        <span
          className="font-mono text-[14px] ml-auto"
          style={{
            color: 'var(--color-amber)',
            transform: 'translateY(0)',
            transition: 'transform 0.2s ease',
          }}
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </div>
  )
}
