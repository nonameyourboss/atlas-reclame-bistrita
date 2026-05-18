'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { ChatMessage as ChatMessageType } from '@/lib/chatbot/chat-state'

interface ChatMessageProps {
  message: ChatMessageType
  isNew?: boolean
}

function formatTime(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })
}

function renderText(text: string) {
  return text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < text.split('\n').length - 1 && <br />}
    </span>
  ))
}

export function ChatMessage({ message, isNew = false }: ChatMessageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isUser = message.role === 'user'

  useEffect(() => {
    if (!isNew || !ref.current) return
    const el = ref.current
    el.style.opacity = '0'
    el.style.transform = 'translateY(8px)'
    const frame = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    return () => cancelAnimationFrame(frame)
  }, [isNew])

  if (isUser) {
    return (
      <div ref={ref} className="flex flex-col items-end mb-3">
        <div
          className="max-w-[80%] px-4 py-3 font-body text-[13px] leading-relaxed text-cream"
          style={{ background: 'var(--color-amber-dim)', borderRight: '2px solid var(--color-amber)', borderRadius: 0 }}
        >
          {renderText(message.text)}
        </div>
        <span className="font-mono text-[10px] text-steel/50 mt-1 pr-1" aria-hidden="true">
          {formatTime(message.timestamp)}
        </span>
      </div>
    )
  }

  return (
    <div ref={ref} className="flex items-start gap-3 mb-3">
      {/* Bot avatar */}
      <div
        className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-amber/15 border border-amber/25"
        aria-hidden="true"
      >
        <span className="font-display text-amber text-[10px] leading-none">A</span>
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div
          className="px-4 py-3 border-l-2 border-amber font-body text-[13px] leading-relaxed text-cream"
          style={{ background: 'var(--color-furnace)', borderRadius: 0 }}
        >
          {renderText(message.text)}
        </div>

        {message.action?.type === 'navigate' && (
          <Link
            href={message.action.path}
            className="mt-2 self-start font-body text-[11px] font-semibold tracking-[0.15em] uppercase px-4 py-2 border border-amber/40 text-amber transition-all duration-150 hover:bg-amber hover:text-graphite hover:border-amber"
            style={{ borderRadius: 0 }}
          >
            {message.action.label} →
          </Link>
        )}

        <span className="font-mono text-[10px] text-steel/50 mt-1 pl-1" aria-hidden="true">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  )
}
