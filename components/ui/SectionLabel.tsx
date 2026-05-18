import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children?: string
  label?: string
  className?: string
}

export function SectionLabel({ children, label, className }: SectionLabelProps) {
  const text = label ?? children ?? ''
  return (
    <div className={cn('flex items-center gap-3 mb-8', className)}>
      <span className="block w-6 h-px bg-amber" />
      <span
        className="font-mono text-[10px] font-medium tracking-[0.3em] uppercase"
        style={{ color: 'var(--color-steel)' }}
      >
        {text}
      </span>
    </div>
  )
}
