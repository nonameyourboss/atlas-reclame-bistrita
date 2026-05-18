import { cn } from '@/lib/utils'

const ROW1_ITEMS = [
  'Reclame luminoase',
  'Litere volumetrice',
  'Wrap auto',
  'Print mari dimensiuni',
  'Bannere',
  'Tricouri personalizate',
  'Panouri stradale',
  'Colantări',
  'Inscripționări vitrine',
  'Structuri publicitare',
]

const ROW2_ITEMS = [
  'Bistrița',
  'Bistrița-Năsăud',
  'Cluj',
  'Mureș',
  'Dej',
  'Beclean',
  'Năsăud',
  'Sângeorz-Băi',
  'Rodna',
  'Maieru',
  'Salva',
  'Leșu',
  'Ilva Mare',
]

function MarqueeRow({
  items,
  separator,
  textClass,
  reverse,
  className,
}: {
  items: string[]
  separator?: string
  textClass?: string
  reverse?: boolean
  className?: string
}) {
  const sep = separator ?? '·'
  const content = items.map((item) => `${item} ${sep} `).join('')

  return (
    <div className={cn('overflow-hidden relative marquee-pause-hover', className)} aria-hidden="true">
      <div
        className={cn(
          'flex whitespace-nowrap marquee-track',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        )}
        style={{ willChange: 'transform' }}
      >
        {/* Duplicate content for seamless loop */}
        <span className={cn('inline-flex items-baseline', textClass)}>{content}</span>
        <span className={cn('inline-flex items-baseline', textClass)}>{content}</span>
        <span className={cn('inline-flex items-baseline', textClass)}>{content}</span>
        <span className={cn('inline-flex items-baseline', textClass)}>{content}</span>
      </div>
      {/* Edge fade */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--color-furnace), transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--color-furnace), transparent)' }}
      />
    </div>
  )
}

export function Marquee() {
  return (
    <section
      aria-label="Servicii și zone de acoperire"
      className="py-0 overflow-hidden"
      style={{ background: 'var(--color-furnace)' }}
    >
      {/* Row 1: services, left→right, slow */}
      <div className="border-y border-amber/15 py-3">
        <MarqueeRow
          items={ROW1_ITEMS}
          textClass="font-display text-[40px] md:text-[56px] text-cream/25 tracking-tight uppercase leading-none pr-6"
          reverse={false}
        />
      </div>

      {/* Row 2: locations, right→left, faster */}
      <div className="border-b border-amber/10 py-2.5">
        <MarqueeRow
          items={ROW2_ITEMS}
          separator="●"
          textClass="font-display text-[22px] md:text-[28px] text-amber/55 tracking-wide uppercase leading-none pr-8"
          reverse={true}
        />
      </div>
    </section>
  )
}
