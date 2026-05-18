'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function registerGSAP() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const EASE_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)'
export const DURATION_BASE = 0.7
export const DURATION_FAST = 0.4
export const STAGGER_GRID = 0.07

export { gsap, ScrollTrigger }
