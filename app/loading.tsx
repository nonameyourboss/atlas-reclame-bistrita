export default function Loading() {
  return (
    <div className="min-h-screen bg-furnace flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Amber pulse bar */}
        <div className="w-16 h-0.5 bg-amber/20 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-amber animate-loading-bar" />
        </div>
        <span className="font-mono text-[10px] text-steel uppercase tracking-widest">
          Se încarcă...
        </span>
      </div>
    </div>
  )
}
