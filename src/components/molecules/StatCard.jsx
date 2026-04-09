export default function StatCard({ label, value }) {
  return (
    <div className="glass-card flex flex-col gap-1 p-4 text-left">
      <span className="text-xs uppercase tracking-[0.25em] text-white/50">
        {label}
      </span>
      <span className="text-lg font-semibold text-white">{value}</span>
    </div>
  )
}
