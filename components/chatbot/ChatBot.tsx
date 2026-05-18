'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '@/lib/gsap'
import { detectIntent } from '@/lib/chatbot/intent-matcher'
import { extractEntities } from '@/lib/chatbot/entity-extractor'
import { generateResponse } from '@/lib/chatbot/response-generator'
import {
  loadHistory,
  saveHistory,
  clearHistory,
  makeId,
  WELCOME_MESSAGE,
  type ChatMessage,
} from '@/lib/chatbot/chat-state'
import { ChatWindow } from './ChatWindow'

type GtagFn = (...args: unknown[]) => void
declare global {
  interface Window { gtag?: GtagFn }
}

function dispatchGA(eventName: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, { event_category: 'chatbot' })
  }
}

const TYPING_DELAY_MIN = 600
const TYPING_DELAY_MAX = 1200

function getTypingDelay(): number {
  return TYPING_DELAY_MIN + Math.random() * (TYPING_DELAY_MAX - TYPING_DELAY_MIN)
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const bubbleRef = useRef<HTMLButtonElement>(null)
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasOpened = useRef(false)

  // Initialize messages from sessionStorage
  useEffect(() => {
    const history = loadHistory()
    setMessages(history.length > 0 ? history : [WELCOME_MESSAGE])
  }, [])

  // Persist messages
  useEffect(() => {
    if (messages.length > 0) saveHistory(messages)
  }, [messages])

  // Animate bubble in after 1.5s
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  // Escape key closes chat
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        bubbleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  // Focus trap — keep focus inside chat window when open
  useEffect(() => {
    if (!isOpen || !containerRef.current) return
    const el = containerRef.current
    const focusable = el.querySelectorAll<HTMLElement>(
      'button, input, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    el.addEventListener('keydown', trapFocus)
    // Focus textarea on open
    const textarea = el.querySelector<HTMLTextAreaElement>('textarea')
    setTimeout(() => textarea?.focus(), 100)

    return () => el.removeEventListener('keydown', trapFocus)
  }, [isOpen])

  function openChat() {
    setIsOpen(true)
    if (!hasOpened.current) {
      hasOpened.current = true
      // GA4 event — no message content
      dispatchGA('chat_opened')
    }
  }

  const sendMessage = useCallback((text: string) => {
    const userMsg: ChatMessage = {
      id: makeId(),
      role: 'user',
      text,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)

    // GA4 event — no message content (GDPR)
    dispatchGA('chat_message_sent')

    const reduced = prefersReducedMotion()
    const delay = reduced ? 0 : getTypingDelay()

    typingTimer.current = setTimeout(() => {
      const intent = detectIntent(text)
      const entities = extractEntities(text)
      const response = generateResponse(intent, entities)

      const botMsg: ChatMessage = {
        id: makeId(),
        role: 'bot',
        text: response.text,
        action: response.action,
        quickReplies: response.quickReplies,
        timestamp: Date.now(),
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, botMsg])
    }, delay)
  }, [])

  function handleReset() {
    clearHistory()
    setMessages([{ ...WELCOME_MESSAGE, id: makeId(), timestamp: Date.now() }])
  }

  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current)
    }
  }, [])

  const reduced = prefersReducedMotion()

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div
          ref={containerRef}
          className="fixed z-50 bottom-24 right-4 md:right-6 w-[calc(100vw-32px)] md:w-[380px]"
          style={{
            height: 'min(600px, calc(100vh - 140px))',
            display: 'flex',
            flexDirection: 'column',
            animation: reduced ? 'none' : 'chat-window-in 0.25s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          <ChatWindow
            messages={messages}
            isTyping={isTyping}
            onSend={sendMessage}
            onClose={() => setIsOpen(false)}
            onReset={handleReset}
          />
        </div>
      )}

      {/* Bubble trigger */}
      <button
        ref={bubbleRef}
        onClick={isOpen ? () => setIsOpen(false) : openChat}
        aria-label={isOpen ? 'Închide asistentul' : 'Deschide asistentul Atlas Reclame'}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 flex items-center justify-center bg-amber text-graphite transition-all duration-200"
        style={{
          borderRadius: 0,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.9)',
          boxShadow: isOpen ? 'none' : '0 4px 16px rgba(240,165,0,0.35)',
        }}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {/* Chat bubble with A */}
            <path
              d="M3 4C3 2.895 3.895 2 5 2H17C18.105 2 19 2.895 19 4V13C19 14.105 18.105 15 17 15H12.5L8 20V15H5C3.895 15 3 14.105 3 13V4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="none"
            />
            {/* A mark inside bubble */}
            <path d="M9 12L11 7L13 12M9.8 10.5H12.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes chat-window-in {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes chat-window-out {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to   { opacity: 0; transform: scale(0.95) translateY(8px); }
        }
      `}</style>
    </>
  )
}
