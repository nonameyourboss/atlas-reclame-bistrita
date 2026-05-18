import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, getAllProjectSlugs, portfolioProjects } from '@/lib/portfolio-data'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Proiect negăsit — Atlas Reclame' }

  return {
    title: `${project.title} — Atlas Reclame Bistrița`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Atlas Reclame Bistrița`,
      description: project.shortDescription,
      url: `https://atlasreclame.ro/portofoliu/${project.slug}`,
    },
  }
}

export default function ProiectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const currentIndex = portfolioProjects.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null
  const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-furnace overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="pt-28 pb-0 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto pb-6">
          <nav className="flex items-center gap-2 font-mono text-xs text-steel" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream transition-colors">Acasă</Link>
            <span>/</span>
            <Link href="/portofoliu" className="hover:text-cream transition-colors">Portofoliu</Link>
            <span>/</span>
            <span className="text-amber truncate max-w-[200px]">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div
        className="w-full h-[50vh] md:h-[60vh] relative flex items-center justify-center"
        style={{ backgroundColor: project.placeholderColor }}
      >
        <span className="font-mono text-sm text-white/30 text-center px-4">
          [{project.title} — imagine principală]
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-furnace" />

        {/* Project number */}
        <span className="absolute top-8 right-8 font-display text-6xl text-white/10">
          {project.number}
        </span>
      </div>

      {/* Title block */}
      <section className="py-12 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <SectionLabel label={project.category} />
            <h1 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.9] text-cream uppercase tracking-tight mt-4 mb-6">
              {project.title}
            </h1>
            <p className="font-body text-xl text-cream/80 leading-relaxed">{project.leadParagraph}</p>
          </div>

          {/* Meta */}
          <aside className="lg:col-span-4">
            <div className="border border-border divide-y divide-border">
              <div className="p-5">
                <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">Client</span>
                <span className="font-body text-sm text-cream">{project.client}</span>
              </div>
              <div className="p-5">
                <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">Locație</span>
                <span className="font-body text-sm text-cream">{project.location}</span>
              </div>
              <div className="p-5">
                <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">An</span>
                <span className="font-body text-sm text-cream">{project.year}</span>
              </div>
              {project.dimensions && (
                <div className="p-5">
                  <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">Dimensiuni</span>
                  <span className="font-body text-sm text-cream">{project.dimensions}</span>
                </div>
              )}
              <div className="p-5">
                <span className="block font-mono text-[10px] text-steel uppercase tracking-widest mb-1">Durată execuție</span>
                <span className="font-body text-sm text-cream">{project.duration}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Project narrative */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          <div className="bg-graphite p-8">
            <h2 className="font-mono text-xs text-amber uppercase tracking-widest mb-4">Provocarea</h2>
            <p className="font-body text-sm text-steel leading-relaxed">{project.challenge}</p>
          </div>
          <div className="bg-graphite p-8">
            <h2 className="font-mono text-xs text-amber uppercase tracking-widest mb-4">Soluția</h2>
            <p className="font-body text-sm text-steel leading-relaxed">{project.solution}</p>
          </div>
          <div className="bg-graphite p-8">
            <h2 className="font-mono text-xs text-amber uppercase tracking-widest mb-4">Rezultatul</h2>
            <p className="font-body text-sm text-steel leading-relaxed">{project.result}</p>
          </div>
        </div>
      </section>

      {/* Materials and tags */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionLabel label="Materiale folosite" />
            <ul className="mt-6 space-y-3">
              {project.materials.map((mat) => (
                <li key={mat} className="flex items-start gap-3 font-body text-sm text-cream/70">
                  <span className="mt-1.5 w-1 h-1 bg-amber flex-shrink-0" />
                  {mat}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel label="Categorii" />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-amber uppercase tracking-widest px-3 py-1.5 border border-amber/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="Galerie" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] bg-graphite flex items-center justify-center"
                style={{ backgroundColor: n % 2 === 0 ? project.placeholderColor : '#1C1C1E' }}
              >
                <span className="font-mono text-[10px] text-white/20">[imagine {n}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Navigation */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
            <div>
              <h2 className="font-display text-[clamp(28px,4vw,48px)] text-cream uppercase tracking-tight leading-tight">
                Vrei un proiect similar?
              </h2>
              <p className="text-steel font-body mt-2">Contactează-ne pentru o ofertă personalizată.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-amber text-graphite font-display text-base uppercase tracking-wide px-6 py-4 hover:bg-amber/90 transition-colors duration-200"
            >
              Cere ofertă
            </Link>
          </div>

          {/* Prev / Next */}
          <div className="grid grid-cols-2 gap-px bg-border">
            {prevProject ? (
              <Link href={`/portofoliu/${prevProject.slug}`} className="bg-graphite p-6 hover:bg-[#222224] transition-colors group">
                <span className="block font-mono text-xs text-steel mb-2">← Proiect anterior</span>
                <span className="font-display text-lg text-cream uppercase group-hover:text-amber transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="bg-graphite p-6" />
            )}
            {nextProject ? (
              <Link href={`/portofoliu/${nextProject.slug}`} className="bg-graphite p-6 hover:bg-[#222224] transition-colors group text-right">
                <span className="block font-mono text-xs text-steel mb-2">Proiect următor →</span>
                <span className="font-display text-lg text-cream uppercase group-hover:text-amber transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div className="bg-graphite p-6" />
            )}
          </div>

          <div className="mt-6 text-center">
            <Link href="/portofoliu" className="inline-flex items-center gap-2 font-mono text-xs text-steel hover:text-amber transition-colors uppercase tracking-widest">
              ← Înapoi la portofoliu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
