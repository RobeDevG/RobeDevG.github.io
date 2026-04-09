export default function TimelineItem({ item }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-glow" />
      </span>
      <div className="glass-card flex flex-col gap-2 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-white">{item.role}</h3>
            <p className="text-sm text-emerald-200/80">{item.company}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-steel">{item.description}</p>
      </div>
    </div>
  )
}
