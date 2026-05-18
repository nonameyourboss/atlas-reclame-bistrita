'use client'

import { useRef, type KeyboardEvent, type FormEvent } from 'react'

interface ChatInputProps {
  onSend: (text: string) => void
  disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(e?: FormEvent) {
    e?.preventDefault()
    const text = inputRef.current?.value.trim()
    if (!text || disabled) return
    onSend(text)
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.style.height = 'auto'
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  function handleInput() {
    const el = inputRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-0 border-t px-3 py-3"
      style={{ borderColor: 'var(--color-border)' }}
      aria-label="Trimite mesaj"
    >
      <textarea
        ref={inputRef}
        placeholder="Întreabă-mă orice..."
        rows={1}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        className="flex-1 resize-none bg-transparent font-body text-[13px] text-cream placeholder:text-steel/50 outline-none border-b border-transparent focus:border-amber/40 transition-colors duration-150 py-1.5 pr-2 leading-relaxed"
        style={{ maxHeight: 96 }}
        aria-label="Mesajul tău"
      />
      <button
        type="submit"
        disabled={disabled}
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-amber text-graphite transition-all duration-150 hover:bg-amber/90 active:scale-95 disabled:opacity-40"
        style={{ borderRadius: 0 }}
        aria-label="Trimite"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  )
}
