'use client'

import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { QuickReplies } from './QuickReplies'
import { TypingIndicator } from './TypingIndicator'
import type { ChatMessage as ChatMessageType } from '@/lib/chatbot/chat-state'

interface ChatWindowProps {
  messages: ChatMessageType[]
  isTyping: boolean
  onSend: (text: string) => void
  onClose: () => void
  onReset: () => void
}

export function ChatWindow({ messages, isTyping, onSend, onClose, onReset }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const lastMessage = messages[messages.length - 1]
  const quickReplies =
    !isTyping && lastMessage?.role === 'bot' ? (lastMessage.quickReplies ?? []) : []

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  return (
    <div
      className="flex flex-col border border-amber/20"
      style={{
        background: 'var(--color-graphite)',
        borderRadius: 0,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Asistent Atlas Reclame"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 h-[60px] flex-shrink-0 border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber dot-pulse flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-[11px] text-amber uppercase tracking-[0.2em]">
              Asistent Atlas
            </span>
          </div>
          <span className="font-body text-[11px] text-steel/60 ml-3.5 mt-0.5">
            Răspundem instant
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Reset button */}
          <button
            onClick={onReset}
            title="Resetează conversația"
            className="w-7 h-7 flex items-center justify-center text-steel/50 transition-colors duration-150 hover:text-amber"
            aria-label="Resetează conversația"
            style={{ borderRadius: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1.5 7a5.5 5.5 0 1 1 1.1 3.3M1.5 7V4M1.5 7H4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center text-steel/50 transition-colors duration-150 hover:text-cream"
            aria-label="Închide asistentul"
            style={{ borderRadius: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 2L12 12M12 2L2 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4 min-h-0"
        role="log"
        aria-live="polite"
        aria-label="Conversație"
      >
        {messages.map((msg, i) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            isNew={i === messages.length - 1 && i > 0}
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} aria-hidden="true" />
      </div>

      {/* Quick replies */}
      {quickReplies.length > 0 && (
        <QuickReplies replies={quickReplies} onSelect={onSend} />
      )}

      {/* Input */}
      <ChatInput onSend={onSend} disabled={isTyping} />
    </div>
  )
}
