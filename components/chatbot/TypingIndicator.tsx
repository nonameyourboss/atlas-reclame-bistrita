'use client'

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 mb-3" role="status" aria-label="Asistentul scrie...">
      {/* Bot avatar mark */}
      <div
        className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-amber/15 border border-amber/25"
        aria-hidden="true"
      >
        <span className="font-display text-amber text-[10px]">A</span>
      </div>
      {/* Dots */}
      <div
        className="flex items-center gap-1 px-4 py-3 border-l-2 border-amber"
        style={{ background: 'var(--color-furnace)' }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-amber"
            style={{
              animation: 'typing-dot 1.2s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
