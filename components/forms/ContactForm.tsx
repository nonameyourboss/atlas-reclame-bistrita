'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const phoneRO = /^(\+4|0)(7[0-9]{8}|2[0-9]{8}|3[0-9]{8})$/

const contactSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere.'),
  email: z.string().email('Adresă de email invalidă.'),
  phone: z
    .string()
    .regex(phoneRO, 'Număr de telefon românesc invalid. Exemplu: 0740 123 456')
    .optional()
    .or(z.literal('')),
  company: z.string().optional(),
  service: z.string().min(1, 'Selectează un serviciu dorit.'),
  budget: z.string().min(1, 'Selectează un buget orientativ.'),
  message: z.string().min(20, 'Mesajul trebuie să aibă cel puțin 20 de caractere.'),
  gdpr: z
    .boolean()
    .refine((v) => v === true, { message: 'Trebuie să accepți prelucrarea datelor personale.' }),
  // Honeypot — should remain empty
  website: z.string().max(0).optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Reclame luminoase',
  'Inscripționări auto',
  'Litere volumetrice',
  'Inscripționări vitrine',
  'Panouri stradale',
  'Bannere și print',
  'Totemuri publicitare',
  'Structuri publicitare',
  'Print canvas / fine art',
  'Steaguri și mesh',
  'Alte servicii',
]

const budgets = [
  'Sub 500 RON',
  '500 – 2.000 RON',
  '2.000 – 5.000 RON',
  '5.000 – 15.000 RON',
  'Peste 15.000 RON',
  'Necunoscut / de discutat',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: '' },
  })

  async function onSubmit(data: ContactFormData) {
    // Honeypot check
    if (data.website) return

    // TODO: Replace with Resend server action
    // await sendContactEmail(data)
    console.log('[ContactForm] Submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone || '—',
      company: data.company || '—',
      service: data.service,
      budget: data.budget,
      message: data.message,
    })

    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 flex flex-col items-start gap-6">
        <div className="w-12 h-0.5 bg-amber" />
        <h3 className="font-display text-3xl text-cream uppercase tracking-tight">
          Mesaj trimis.
        </h3>
        <p className="font-body text-base text-steel leading-relaxed max-w-sm">
          Îți mulțumim. Te contactăm în maxim 24 de ore pe adresa de email indicată.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot field — hidden from users */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      {/* Row: name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Nume și prenume *" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Ion Popescu"
            {...register('name')}
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="ion@company.ro"
            {...register('email')}
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      {/* Row: phone + company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Telefon" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="0740 000 000"
            {...register('phone')}
            className={inputClass(!!errors.phone)}
          />
        </Field>
        <Field label="Companie">
          <input
            type="text"
            autoComplete="organization"
            placeholder="Firma SRL (opțional)"
            {...register('company')}
            className={inputClass(false)}
          />
        </Field>
      </div>

      {/* Row: service + budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Serviciu dorit *" error={errors.service?.message}>
          <select {...register('service')} className={selectClass(!!errors.service)}>
            <option value="">Selectează...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Buget orientativ *" error={errors.budget?.message}>
          <select {...register('budget')} className={selectClass(!!errors.budget)}>
            <option value="">Selectează...</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Descriere proiect *" error={errors.message?.message}>
        <textarea
          rows={5}
          placeholder="Descrie pe scurt ce ai nevoie: dimensiuni, materiale dorite, locație montaj, deadline..."
          {...register('message')}
          className={`${inputClass(!!errors.message)} resize-none`}
        />
      </Field>

      {/* GDPR */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register('gdpr')}
            className="mt-1 w-4 h-4 flex-shrink-0 accent-amber cursor-pointer"
          defaultChecked={false}
          />
          <span className="font-body text-sm text-steel leading-relaxed group-hover:text-cream/80 transition-colors">
            Sunt de acord cu prelucrarea datelor personale conform{' '}
            <a
              href="/politica-confidentialitate"
              className="text-amber underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politicii de confidențialitate
            </a>
            . *
          </span>
        </label>
        {errors.gdpr && (
          <p className="font-mono text-xs text-red-400 pl-7">{errors.gdpr.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-3 bg-amber text-graphite font-display text-lg uppercase tracking-wide px-8 py-4 hover:bg-amber/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Se trimite...' : 'Trimite cererea'}
        {!isSubmitting && (
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
            <path d="M0 5H18M13 1L18 5L13 9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
      </button>

      <p className="font-mono text-[10px] text-steel">
        * Câmpuri obligatorii. Datele tale nu vor fi transmise terților.
      </p>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="block font-mono text-[10px] text-steel uppercase tracking-widest">{label}</label>
      {children}
      {error && <p className="font-mono text-[10px] text-red-400">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return [
    'w-full bg-transparent border-b py-3 px-0 font-body text-sm text-cream placeholder:text-steel/40',
    'focus:outline-none transition-colors duration-200',
    hasError ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-amber',
  ].join(' ')
}

function selectClass(hasError: boolean) {
  return [
    'w-full bg-graphite border-b py-3 px-0 font-body text-sm text-cream',
    'focus:outline-none transition-colors duration-200 cursor-pointer appearance-none',
    hasError ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-amber',
  ].join(' ')
}
