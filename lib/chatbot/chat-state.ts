import type { ChatAction } from './knowledge-base'

const SESSION_KEY = 'atlas-chat-history'

export interface ChatMessage {
  id: string
  role: 'user' | 'bot'
  text: string
  action?: ChatAction
  quickReplies?: string[]
  timestamp: number
}

export const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  text: 'Salut! Sunt asistentul Atlas Reclame. Te pot ajuta cu informații despre servicii, prețuri sau contact. Cu ce te pot ajuta?',
  quickReplies: ['Ce servicii oferiți?', 'Cât costă o reclamă LED?', 'Unde sunteți?', 'Vezi portofoliu'],
  timestamp: Date.now(),
}

export function loadHistory(): ChatMessage[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return []
    return JSON.parse(raw) as ChatMessage[]
  } catch {
    return []
  }
}

export function saveHistory(messages: ChatMessage[]): void {
  if (typeof window === 'undefined') return
  try {
    // Keep last 40 messages to avoid sessionStorage bloat
    const trimmed = messages.slice(-40)
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(trimmed))
  } catch {
    // sessionStorage may be unavailable
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return
  try {
    sessionStorage.removeItem(SESSION_KEY)
  } catch {
    // ignore
  }
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}
