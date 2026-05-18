'use client'

import { useState, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SplitHeadline } from '@/components/motion/SplitHeadline'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Substrate } from '@/components/textures/Substrate'

interface FormState {
  name: string
  phone: string
  message: string
}

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+40 741 244 494',
    href: 'tel:+40741244494',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'office@atlasreclame.ro',
    href: 'mailto:office@atlasreclame.ro',
  },
  {
    icon: MapPin,
    label: 'Adresă',
    value: 'Str. Dornei nr. 8, Bistrița, jud. BN',
    href: 'https://maps.google.com/?q=Str.+Dornei+nr+8+Bistrita',
  },
]

const inputClass = cn(
  'w-full font-body text-[14px] text-cream',
  'bg-transparent',
  'px-0 py-4',
  'border-0 border-b outline-none',
  'rounded-none',
  'transition-colors duration-150',
  'placeholder:text-[#444]'
)

export function ContactCTA() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', message: '' })
  const [focused, setFocused] = useState<keyof FormState | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Phase 3: wire to Resend or Formspree
    setSubmitted(true)
  }

  const borderStyle = (field: keyof FormState) => ({
    borderColor: focused === field ? 'var(--color-amber)' : 'var(--color-border)',
  })

  return (
    <section
      id="contact"
      className="relative py-[80px] md:py-[128px]"
      style={{
        background: 'var(--color-furnace)',
        borderTop: '1px solid var(--color-border)',
      }}
      aria-label="Contact"
    >
      <Substrate material="matte-paper" />
      <div className="relative max-w-container mx-auto px-8 md:px-12">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <SectionLabel>Contact</SectionLabel>
          <ScrollReveal>
            <SplitHeadline
              text="GATA SĂ ÎNCEPEM?"
              tag="h2"
              delay={100}
              stagger={80}
              className="font-display text-cream"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '0.03em', lineHeight: '0.92' } as React.CSSProperties}
            />
          </ScrollReveal>
          <ScrollReveal delay={200} className="mt-5">
            <p className="font-body text-[15px] max-w-[400px] leading-relaxed" style={{ color: 'var(--color-steel)' }}>
              Spune-ne ce ai nevoie. Răspundem în 24h și oferim o primă consultație fără costuri.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-col: contact info + form */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">

          {/* Left: contact info */}
          <ScrollReveal delay={100}>
            <div className="space-y-10">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <div
                    className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2 flex items-center gap-2"
                    style={{ color: 'var(--color-amber)', opacity: 0.7 }}
                  >
                    <Icon size={10} />
                    {label}
                  </div>
                  <a
                    href={href}
                    className="font-body text-[16px] text-cream hover:text-amber transition-colors duration-150"
                    target={label === 'Adresă' ? '_blank' : undefined}
                    rel={label === 'Adresă' ? 'noopener noreferrer' : undefined}
                  >
                    {value}
                  </a>
                </div>
              ))}

              {/* Business hours */}
              <div className="pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <div
                  className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: 'var(--color-steel)' }}
                >
                  Program
                </div>
                <div className="font-mono text-[11px] leading-8" style={{ color: '#666' }}>
                  <div>Lun–Vin: 08:00 – 17:00</div>
                  <div>Sâmbătă: 09:00 – 13:00</div>
                  <div style={{ color: '#444' }}>Duminică: închis</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={200}>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full min-h-[300px]">
                <span
                  className="block h-px w-12 mb-6"
                  style={{ background: 'var(--color-amber)' }}
                />
                <h3
                  className="font-display text-cream mb-4"
                  style={{ fontSize: '36px', letterSpacing: '0.04em' }}
                >
                  MESAJ TRIMIS
                </h3>
                <p className="font-body text-[14px] leading-relaxed" style={{ color: 'var(--color-steel)' }}>
                  Mulțumim! Revenim în maxim 24h cu o propunere.
                </p>
                <button
                  className="mt-8 font-body text-[12px] font-semibold tracking-[0.15em] uppercase text-amber border-b border-amber pb-0.5"
                  onClick={() => setSubmitted(false)}
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-1"
                    style={{ color: 'var(--color-steel)' }}
                  >
                    Nume complet
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Ion Ionescu"
                    className={inputClass}
                    style={borderStyle('name')}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-1"
                    style={{ color: 'var(--color-steel)' }}
                  >
                    Telefon
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                    placeholder="+40 7XX XXX XXX"
                    className={inputClass}
                    style={borderStyle('phone')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-1"
                    style={{ color: 'var(--color-steel)' }}
                  >
                    Mesaj / Descriere proiect
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Ce ai nevoie? Dimensiuni, materiale, termen..."
                    className={cn(inputClass, 'resize-none')}
                    style={borderStyle('message')}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={!form.name || !form.phone || !form.message}
                  >
                    Trimite cererea
                  </Button>
                  <p className="mt-4 font-mono text-[10px] tracking-[0.1em]" style={{ color: '#444' }}>
                    Răspundem în maxim 24 de ore. Date procesate conform GDPR.
                  </p>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
