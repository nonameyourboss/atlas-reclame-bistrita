'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Substrate } from '@/components/textures/Substrate'

type JobStatus = 'production' | 'approval' | 'montaj' | 'quote'

interface Job {
  id: string
  status: JobStatus
  statusLabel: string
  type: string
  client: string
  progress: number
  tags: string[]
  estimate: string
}

const JOBS: Job[] = [
  {
    id: 'j01',
    status: 'production',
    statusLabel: 'ÎN PRODUCȚIE',
    type: 'Reclamă Luminoasă',
    client: 'Restaurant · Bistrița Centru',
    progress: 70,
    tags: ['LED', '3.2m × 0.8m', 'Aluminiu'],
    estimate: 'Livrare: 22 mai',
  },
  {
    id: 'j02',
    status: 'approval',
    statusLabel: 'DESIGN ÎN APROBARE',
    type: 'Wrap Flotă',
    client: 'Firmă transport · Bistrița-Năsăud',
    progress: 30,
    tags: ['7 vehicule', 'Folie 3M', 'Full wrap'],
    estimate: 'Producție: 30 mai – 5 iun.',
  },
  {
    id: 'j03',
    status: 'montaj',
    statusLabel: 'LA MONTAJ',
    type: 'Litere Volumetrice',
    client: 'Showroom · Bistrița',
    progress: 95,
    tags: ['Inox 304', 'Backlit', '600mm H'],
    estimate: 'Montaj: 19 mai',
  },
  {
    id: 'j04',
    status: 'production',
    statusLabel: 'ÎN PRODUCȚIE',
    type: 'Bannere Outdoor',
    client: 'Event · jud. Bistrița-Năsăud',
    progress: 55,
    tags: ['120 buc.', 'UV print', 'PVC 400g'],
    estimate: 'Livrare: 25 mai',
  },
]

const STATUS_STYLES: Record<JobStatus, { dot: string; text: string; border: string }> = {
  production: { dot: 'bg-amber dot-pulse', text: 'text-amber', border: 'border-amber/20' },
  approval: { dot: 'bg-cream', text: 'text-cream/70', border: 'border-border' },
  montaj: { dot: 'bg-green-400', text: 'text-green-400/80', border: 'border-green-900/40' },
  quote: { dot: 'bg-steel', text: 'text-steel', border: 'border-border' },
}

function JobCard({ job }: { job: Job }) {
  const s = STATUS_STYLES[job.status]

  return (
    <div className={`bg-graphite border ${s.border} p-5 flex flex-col gap-4`}>
      {/* Status */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`} aria-hidden="true" />
          <span className={`font-mono text-[9px] uppercase tracking-[0.2em] ${s.text}`}>
            {job.statusLabel}
          </span>
        </div>
        <span className="font-mono text-[9px] text-steel/50">{job.estimate}</span>
      </div>

      {/* Type + client */}
      <div>
        <p className="font-display text-cream uppercase tracking-tight text-lg leading-tight">
          {job.type}
        </p>
        <p className="font-body text-[12px] text-steel mt-0.5">{job.client}</p>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono text-[9px] text-steel/50 uppercase tracking-widest">Progres</span>
          <span className="font-mono text-[9px] text-amber">{job.progress}%</span>
        </div>
        <div className="h-0.5 bg-border overflow-hidden">
          <div
            className="h-full bg-amber transition-all duration-1000"
            style={{ width: `${job.progress}%` }}
            role="progressbar"
            aria-valuenow={job.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progres ${job.progress}%`}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {job.tags.map((tag) => (
          <span key={tag} className="font-mono text-[9px] text-steel/60 uppercase tracking-widest border border-border px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function LiveAtelier() {
  return (
    <section
      id="atelier"
      className="relative py-[80px] md:py-[120px]"
      style={{ background: 'var(--color-furnace)' }}
      aria-label="Proiecte active în atelier"
    >
      <Substrate material="concrete-workshop" />
      <div className="relative max-w-7xl mx-auto px-8 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <SectionLabel label="● Live · Mai 2026" />
            <h2
              className="font-display text-cream uppercase tracking-tight leading-[0.9]"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
            >
              ÎN ATELIER<br />ACUM
            </h2>
          </div>
          <ScrollReveal delay={100}>
            <p className="font-body text-sm text-steel leading-relaxed max-w-[280px]">
              Producem zilnic în Bistrița. Acestea sunt câteva din lucrările
              aflate în execuție săptămâna aceasta.
            </p>
          </ScrollReveal>
        </div>

        {/* Jobs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-px">
          {JOBS.map((job, i) => (
            <ScrollReveal key={job.id} delay={i * 60}>
              <JobCard job={job} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA card */}
        <div className="border border-amber/20 bg-amber/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-cream text-xl uppercase tracking-tight">
              + Adăugăm și proiectul tău?
            </p>
            <p className="font-body text-sm text-steel mt-1">
              Trimite-ne dimensiuni și termen. Răspundem în 24 de ore.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-amber text-graphite font-display text-base uppercase tracking-wide px-6 py-3.5 hover:bg-amber/90 transition-colors duration-200"
          >
            Cere ofertă
            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" aria-hidden="true">
              <path d="M0 4.5H16M12 1L16 4.5L12 8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-3 gap-px bg-border">
          {[
            { value: '10+', label: 'Ani producție' },
            { value: '15', label: 'Tipuri de servicii' },
            { value: '100%', label: 'Producție internă' },
          ].map((stat) => (
            <div key={stat.label} className="bg-graphite px-6 py-5 text-center">
              <p className="font-display text-amber text-3xl tracking-tight">{stat.value}</p>
              <p className="font-mono text-[9px] text-steel uppercase tracking-[0.2em] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
