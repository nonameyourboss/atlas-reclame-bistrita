'use client'

import { useState } from 'react'
import Link from 'next/link'
import { portfolioProjects, portfolioCategories } from '@/lib/portfolio-data'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function PortofoliuPage() {
  const [activeCategory, setActiveCategory] = useState('toate')

  const filtered =
    activeCategory === 'toate'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.categorySlug === activeCategory)

  return (
    <main className="min-h-screen bg-furnace overflow-x-hidden">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Lucrări realizate" />
          <h1 className="font-display text-[clamp(56px,8vw,96px)] leading-[0.9] text-cream mt-6 mb-8 uppercase tracking-tight">
            Portofoliu
          </h1>
          <p className="text-steel font-body text-lg max-w-2xl leading-relaxed">
            Proiecte finalizate în Bistrița și județul Bistrița-Năsăud. De la reclame luminoase
            la flote de vehicule înscripționate — fiecare lucrare iese din același atelier.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[64px] z-20 bg-furnace border-b border-border px-6 md:px-12 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-0 py-0 min-w-max">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-4 font-mono text-xs uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors duration-200 ${
                activeCategory === cat.slug
                  ? 'border-amber text-amber'
                  : 'border-transparent text-steel hover:text-cream'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-steel font-body py-24 text-center">Niciun proiect în această categorie.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portofoliu/${project.slug}`}
                  className="group bg-graphite overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div
                    className="w-full aspect-[4/3] relative overflow-hidden"
                    style={{ backgroundColor: project.placeholderColor }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-white/30 text-center px-4">
                        [{project.title}]
                      </span>
                    </div>
                    {/* Amber overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    {/* Number */}
                    <span className="absolute top-4 left-4 font-mono text-xs text-white/40">
                      {project.number}
                    </span>
                    {project.featured && (
                      <span className="absolute top-4 right-4 font-mono text-[10px] text-amber uppercase tracking-widest px-2 py-1 bg-graphite/80">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="font-mono text-[10px] text-amber uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] text-steel">{project.year}</span>
                    </div>
                    <h2 className="font-display text-xl text-cream uppercase tracking-tight leading-tight group-hover:text-amber transition-colors duration-300 mb-2">
                      {project.title}
                    </h2>
                    <p className="font-body text-sm text-steel leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] text-cream uppercase tracking-tight leading-tight">
              Vrei un proiect similar?
            </h2>
            <p className="text-steel font-body mt-2">
              Spune-ne ce ai nevoie — îți facem o ofertă în 24 de ore.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-amber text-graphite font-display text-lg uppercase tracking-wide px-8 py-4 hover:bg-amber/90 transition-colors duration-200"
          >
            Cere ofertă
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
              <path d="M0 5H18M13 1L18 5L13 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
