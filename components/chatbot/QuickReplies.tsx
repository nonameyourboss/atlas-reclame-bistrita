'use client'

interface QuickRepliesProps {
  replies: string[]
  onSelect: (reply: string) => void
}

export function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  if (!replies.length) return null

  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3 pt-1" role="group" aria-label="Sugestii rapide">
      {replies.map((reply) => (
        <button
          key={reply}
          onClick={() => onSelect(reply)}
          className="font-body text-[11px] tracking-[0.05em] px-3 py-1.5 border border-amber/30 text-steel transition-all duration-150 hover:border-amber hover:text-cream hover:bg-amber/8 active:scale-95"
          style={{ borderRadius: 0 }}
        >
          {reply}
        </button>
      ))}
    </div>
  )
}
