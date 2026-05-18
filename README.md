# Atlas Reclame Bistrița — Website

Redesign complet pentru Atlas Reclame Bistrița, agenție de producție publicitară
din Bistrița, România. Construit cu Next.js 14 App Router.

## Stack & versiuni

| Tehnologie | Versiune | Scop |
|---|---|---|
| Next.js | 14.2.5 | Framework (App Router) |
| React | 18.3.1 | UI |
| TypeScript | 5.5.4 | Type safety |
| Tailwind CSS | 3.4.6 | Stilizare |
| GSAP | 3.12.5 | ScrollTrigger animations |
| @gsap/react | 2.1.1 | GSAP hooks pentru React |
| Framer Motion | 11.3.28 | Mobile drawer + micro-interactions |
| react-hook-form | 7.75.0 | Form management |
| @hookform/resolvers | 5.2.2 | Zod resolver |
| zod | 4.4.3 | Validare scheme form |
| vanilla-cookieconsent | 3.1.0 | GDPR cookie banner |
| lucide-react | 0.414.0 | Iconuri |
| clsx + tailwind-merge | 2.x | className utilities |

## Cum rulezi local

```bash
# 1. Copiaza .env.example
cp .env.example .env.local
# Completează NEXT_PUBLIC_GA_ID cu Measurement ID din Google Analytics

# 2. Instalează dependențele
npm install

# 3. Pornește dev server
npm run dev

# 4. Deschide în browser
open http://localhost:3000
```

## Structura proiectului

```
atlas-reclame/
├── app/
│   ├── layout.tsx                  Root layout — fonts + metadata + analytics
│   ├── page.tsx                    Homepage — JSON-LD + toate secțiunile
│   ├── not-found.tsx               404 custom
│   ├── loading.tsx                 Loading skeleton
│   ├── sitemap.ts                  Sitemap dinamic (toate rutele)
│   ├── robots.ts                   robots.txt
│   ├── globals.css                 CSS variables brand + Tailwind layers
│   ├── fonts.ts                    next/font (Bebas Neue, Instrument Sans, IBM Plex Mono)
│   ├── servicii/
│   │   ├── page.tsx                Listing toate serviciile
│   │   └── [slug]/page.tsx         Pagina individuală serviciu (generateStaticParams)
│   ├── portofoliu/
│   │   ├── page.tsx                Grid filtrat după categorie (client component)
│   │   └── [slug]/page.tsx         Studiu de caz proiect (generateStaticParams)
│   ├── despre/page.tsx             Povestea firmei, echipament, cronologie
│   ├── contact/page.tsx            Formular extins + info contact
│   ├── termeni-si-conditii/        Termeni legali
│   ├── politica-confidentialitate/ GDPR / politică date
│   └── politica-cookies/           Politică cookies cu tabel
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              Sticky nav + active state + Framer Motion drawer
│   │   └── Footer.tsx              4 coloane — brand, servicii (×2), contact + ANPC
│   ├── sections/                   (Homepage sections — Phase 2)
│   ├── forms/
│   │   └── ContactForm.tsx         react-hook-form + zod, 7 câmpuri, honeypot
│   ├── analytics/
│   │   ├── GoogleAnalytics.tsx     next/script afterInteractive, gtag consent
│   │   └── CookieBanner.tsx        vanilla-cookieconsent v3, română, 3 categorii
│   ├── ui/                         Button, ServiceCard, Logo, SectionLabel
│   └── motion/                     SplitHeadline, ScrollReveal, PinnedNumber
│
├── lib/
│   ├── services-data.ts            15 servicii complete (Service interface + SERVICES[])
│   ├── portfolio-data.ts           8 proiecte (PortfolioProject interface + portfolioProjects[])
│   ├── gsap.ts                     registerPlugin + helpers
│   └── utils.ts                    cn()
│
├── public/
│   └── images/placeholders/        SVG placeholders până la fotografii reale
│
├── .env.example                    Template variabile de mediu
└── docs/brand-system.md            Documentație sistem vizual
```

## Sistem vizual

Direcție: **Atelier Industrial**

| Token | Valoare |
|---|---|
| Background primar | `#1C1C1E` graphite |
| Background secundar | `#141414` furnace |
| Text principal | `#F5F0E8` cream |
| Accent | `#F0A500` amber |
| Text secundar | `#555555` steel |
| Borduri | `#2A2A2C` |
| Font display | Bebas Neue |
| Font body | Instrument Sans |
| Font mono | IBM Plex Mono |
| Border radius | `0` — sharp pe toate componentele |

---

## TODO — PHASE 4

### Conținut real (blocat de client)
- [ ] Fotografii reale de la client: atelier, lucrări finalizate, echipă
- [ ] Înlocuiește toate placeholder-urile cu `next/image` + fotografii optimizate
- [ ] Texte definitive per serviciu (detalii tehnice, materiale, prețuri orientative)
- [ ] Date de contact reale (telefon, adresă exactă, CUI real, Nr. Reg. Com.)
- [ ] Fotografii portofoliu pentru cele 8 proiecte (6 imagini / proiect)

### Integrări backend
- [ ] Form contact wired la **Resend** cu Server Action
  ```ts
  // app/actions/contact.ts
  // Dezcommentează și completează cu RESEND_API_KEY din .env.local
  ```
- [ ] Validare server-side suplimentară (rate limiting, sanitizare)
- [ ] Confirmare email automat pentru client la trimitere formular

### SEO & performance
- [ ] Open Graph images per pagină cu `next/og` (ImageResponse)
- [ ] Lighthouse score target: >95 Performance, >98 Accessibility
- [ ] Core Web Vitals: LCP <2.5s, CLS <0.1, FID <100ms
- [ ] Optimizare fonturi (subset characters pentru Bebas Neue)
- [ ] lazy loading imagini cu `next/image` blur placeholder

### Analytics
- [ ] Completează `NEXT_PUBLIC_GA_ID` în `.env.local` cu Measurement ID real din GA4
- [ ] Verifică că event-urile de conversie (formular trimis) sunt înregistrate

### DevOps
- [ ] Deploy pe **Vercel**: `vercel --prod`
  ```bash
  # Setează variabilele de mediu în Vercel Dashboard:
  # NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
  # RESEND_API_KEY = re_xxxx
  # CONTACT_EMAIL = office@atlasreclame.ro
  ```
- [ ] Domeniu custom: atlasreclame.ro → Vercel DNS
- [ ] CI/CD cu GitHub Actions (lint + type-check la PR)

---

*Generat în PHASE 3 — Atlas Reclame Bistrița Website Redesign*
