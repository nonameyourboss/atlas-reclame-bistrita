# Atlas Reclame Bistrița — Brand System v1.0

> Direction: **Atelier Industrial**  
> Status: Approved for development  
> Phase: 1 — Homepage

---

## Visual System Commitment

### Final Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-graphite` | `#1C1C1E` | Primary background, dominant surface |
| `--color-furnace` | `#141414` | Secondary background, alternate sections |
| `--color-cream` | `#F5F0E8` | Primary text, all headlines |
| `--color-amber` | `#F0A500` | Accent, logo mark, CTA primary fill, borders hover |
| `--color-amber-dim` | `rgba(240,165,0,0.15)` | Amber borders at rest |
| `--color-steel` | `#555555` | Secondary text, labels, nav links |
| `--color-border` | `#2A2A2C` | Subtle borders, card edges |

No other colors on the homepage. Grays are derived from the above.

---

### Final Typography

| Role | Font | Weight | Size range |
|---|---|---|---|
| Display / Hero | Bebas Neue | 400 (only weight) | `clamp(80px, 10vw, 132px)` |
| Section headings | Bebas Neue | 400 | `48–56px` |
| Card headings | Bebas Neue | 400 | `20–28px` |
| Body copy | Instrument Sans | 400, 500, 600 | `14–16px` |
| Labels / Nav / Tags | Instrument Sans | 500–600 | `10–12px`, `letter-spacing: 0.2em`, `text-transform: uppercase` |
| Mono accents | IBM Plex Mono | 400, 500 | `10–12px` — used sparingly for technical details |

**Zero tolerance:** Inter, Roboto, Open Sans, Poppins, Montserrat are banned at the component level.

---

### Spacing Scale (Tailwind custom values)

```js
// tailwind.config.ts — extend.spacing
{
  '4': '4px',
  '8': '8px',
  '16': '16px',
  '24': '24px',
  '32': '32px',
  '48': '48px',
  '64': '64px',
  '80': '80px',
  '96': '96px',
  '128': '128px',
}
// Section vertical padding minimum: py-[80px] md:py-[128px]
// Container: max-w-[1440px] px-[48px]
```

---

### Component Treatment

| Component | Border radius | Shadow | Hover |
|---|---|---|---|
| CTA buttons | `0` (sharp) | None | bg-color shift, `transition: 0.15s` |
| Service cards | `0` | None | `border-color: #F0A500` |
| Input fields | `0` | None | `border-color: #F0A500` |
| Portfolio cards | `0` | None | image scale `1.05` inside overflow hidden |
| Nav | `0` | None | Static — no hover effect on logo |
| Badges / tags | `2px` max | None | None |

**Shadow policy:** Zero `box-shadow` decorative. Section separation = background color change between `#1C1C1E` and `#141414`.

---

### Motion Principles

1. **Motion reveals, never decorates.** Every animation either reveals content or communicates structure.
2. **Expo-out as default easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
3. **Duration baseline:** 0.6–0.8s for reveals, 0.15s for hover states
4. **One pinned section** on the entire page ("De ce noi" — left panel)
5. **Stagger rhythm:** 0.07–0.08s between siblings
6. **prefers-reduced-motion:** All GSAP animations disabled, elements rendered at final state
7. **Mobile:** No pinning, no parallax, halved durations, opacity-only reveals for large text
8. **Stability anchors:** Navbar, footer, contact info — never animate

---

### Logo System

**Primary:** Wordmark "ATLAS RECLAME" in Bebas Neue, stacked, with the geometric A-mark (two 72° diagonal bars + crossbar at 2/3 height) echoing LED channel letter construction. The bar terminals suggest the end-caps of illuminated sign bars.

**Monogram:** The A-mark alone in a square frame. Used for favicon, stamps, embossing.

**Single-color version:** Full wordmark without amber fills — all elements in `#F5F0E8`. Works for engraving, vinyl cutting, foil stamping.

**Clear space:** Equal to the cap-height of the A-mark on all sides.

**Never:** Rotate the logo. Apply drop shadows. Use on backgrounds that compromise contrast. Use color variants other than the three approved versions.

---

### Photography Direction

**What to shoot / source:**

1. **Production close-ups:** Neon bending machine with tubes in warm amber light. Vinyl plotter cutting red film.
2. **Night installation:** Illuminated channel letters being mounted on a building facade, golden-hour or blue-hour light.
3. **Vehicle wrap in progress:** Car on a mat outdoors, overcast light, installer applying vinyl film.
4. **Materials macro:** Roll of foil, cut acrylic letters on a workbench, LED strip coils.
5. **End result at night:** Completed illuminated sign on a Bistrița storefront, bokeh background.

**What never to use:** Office stock photography. People smiling at cameras. Laptops. Generic "team meeting" shots. AI-generated people.

**Color grading for all photos:** High contrast, warm amber-to-dark gradient grade. Shadows stay dark. Highlights lean warm. Think: foundry, not studio.

---

## AIDA Section Map

| # | Section | AIDA | Height |
|---|---|---|---|
| 0 | Navbar | — | 64px sticky |
| 1 | Hero | Attention | 100vh |
| 2 | Services Bento | Interest | ~80vh |
| 3 | De ce noi (pinned) | Desire | 1200px scroll |
| 4 | Portofoliu teaser | Desire | ~70vh |
| 5 | Contact CTA | Action | ~50vh |
| 6 | Footer | — | ~200px |

---

## What Comes in Phase 2

- **Interior pages:** Fiecare serviciu primește o pagină proprie cu descriere detaliată, galerie foto, și CTA specific
- **Portfolio gallery:** Grid filtrat după categorie (auto, vitrine, outdoor, textile)
- **Contact form:** Full form cu câmpuri: Serviciu dorit, Descriere proiect, Deadline, Fișiere atașate
- **About page:** Echipa, atelierul, echipamentul (poze reale), istoria celor 10+ ani
- **Blog / Noutăți:** Articles for SEO (reclame bistrița, inscripționări auto bistrița-năsăud etc.)
- **SEO & meta:** Open Graph, sitemap, schema markup pentru LocalBusiness
- **CMS integration:** Sanity.io sau Payload CMS pentru portofoliu și blog
- **Romanian language meta:** hreflang, địa phương keywords
