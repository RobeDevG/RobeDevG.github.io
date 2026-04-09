export default function SectionTitle({
  label,
  title,
  description,
  align = 'left',
}) {
  const alignClass =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label ? (
        <span className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
          {label}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-steel">{description}</p>
      ) : null}
    </div>
  )
}
