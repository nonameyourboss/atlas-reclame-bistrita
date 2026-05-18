import { prefersReducedMotion } from '@/lib/gsap'

function getOrCreateOverlay(): HTMLDivElement {
  let el = document.getElementById('theme-transition-overlay') as HTMLDivElement | null
  if (!el) {
    el = document.createElement('div')
    el.id = 'theme-transition-overlay'
    Object.assign(el.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '9997',
      pointerEvents: 'none',
      opacity: '0',
      willChange: 'opacity',
    })
    document.body.appendChild(el)
  }
  return el
}

export async function neonSwitchTransition(
  nextTheme: 'dark' | 'paper',
  onThemeApply: () => void,
): Promise<void> {
  if (prefersReducedMotion()) {
    onThemeApply()
    return
  }

  const { gsap } = await import('gsap')
  const mainEl = document.querySelector('main') as HTMLElement | null
  const overlay = getOrCreateOverlay()

  overlay.style.background = nextTheme === 'paper' ? '#F5F0E8' : '#141414'
  overlay.style.opacity = '0'

  const tl = gsap.timeline({ defaults: { ease: 'none' } })

  if (mainEl) {
    // Pre-switch flicker — darkness building toward blackout
    tl.to(mainEl, { filter: 'brightness(1.4)', duration: 0.06 })
      .to(mainEl, { filter: 'brightness(0.3)', duration: 0.04 })
      .to(mainEl, { filter: 'brightness(0.9)', duration: 0.05 })
      .to(mainEl, { filter: 'brightness(0.1)', duration: 0.04 })
  }

  // T≈190ms: apply theme + flash overlay to full
  tl.call(onThemeApply)
    .set(overlay, { opacity: 1 })
    // Overlay fades out (T=240→440ms)
    .to(overlay, { opacity: 0, duration: 0.2, ease: 'expo.out' }, '+=0.05')

  if (mainEl) {
    // Post-switch flicker recovery (T≈440→800ms)
    tl.to(mainEl, { filter: 'brightness(1.2)', duration: 0.05 }, '-=0.05')
      .to(mainEl, { filter: 'brightness(0.85)', duration: 0.05 })
      .to(mainEl, { filter: 'brightness(1.1)', duration: 0.05 })
      .to(mainEl, { filter: 'brightness(1.0)', duration: 0.25, ease: 'power1.out' })
  }

  return new Promise((resolve) => {
    tl.call(resolve)
  })
}
