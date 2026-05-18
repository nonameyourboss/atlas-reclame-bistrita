'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Servicii', href: '/servicii' },
  { label: 'Portofoliu', href: '/portofoliu' },
  { label: 'Despre', href: '/despre' },
  { label: 'Contact', href: '/contact' },
]

const drawerVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'flex items-center justify-between',
          'px-8 md:px-12',
          'transition-all duration-300 ease-in-out',
          scrolled
            ? 'h-[60px] bg-graphite/95 backdrop-blur-sm border-b border-amber/15'
            : 'h-[80px] bg-transparent'
        )}
        aria-label="Navigare principală"
      >
        {/* Logo */}
        <Link href="/" aria-label="Atlas Reclame — acasă" className="flex-shrink-0">
          <Logo size={scrolled ? 'sm' : 'md'} className="transition-all duration-300" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-body text-[11px] font-medium tracking-[0.2em] uppercase',
                    'transition-colors duration-150',
                    'relative pb-0.5',
                    'after:absolute after:bottom-0 after:left-0 after:right-0',
                    'after:h-px after:bg-amber after:transition-transform after:duration-200 after:origin-left',
                    active
                      ? 'text-amber after:scale-x-100'
                      : 'text-steel hover:text-cream after:scale-x-0 hover:after:scale-x-100'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center font-body text-[11px] font-semibold tracking-[0.2em] uppercase bg-amber text-graphite px-6 py-3 transition-colors duration-150 hover:bg-amber/90"
          >
            Cere ofertă
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-cream"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Închide meniu' : 'Deschide meniu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-furnace flex flex-col pt-[72px] px-8 pb-10"
            role="dialog"
            aria-modal="true"
            aria-label="Meniu mobil"
          >
            <ul className="flex flex-col gap-2 flex-1 pt-8" role="list">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href)
                return (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block font-display text-[48px] leading-tight transition-colors duration-150',
                        active ? 'text-amber' : 'text-cream hover:text-amber'
                      )}
                      style={{ letterSpacing: '0.03em' }}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>

            <div className="border-t border-border pt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-steel uppercase tracking-[0.2em]">
                  Temă
                </span>
                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                className="block w-full text-center font-body text-[12px] font-semibold tracking-[0.2em] uppercase bg-amber text-graphite py-4"
              >
                Cere ofertă
              </Link>
              <div className="mt-6 font-mono text-[10px] text-steel leading-7">
                <div>0263 000 000</div>
                <div>office@atlasreclame.ro</div>
                <div>Str. Industriei nr. 14, Bistrița</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
