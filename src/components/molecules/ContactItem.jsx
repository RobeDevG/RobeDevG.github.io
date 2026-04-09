import Icon from '../atoms/Icon'

export default function ContactItem({ icon, label, value, href }) {
  const isExternal = href?.startsWith('http')
  const Comp = href ? 'a' : 'div'

  return (
    <Comp
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="glass-card group flex items-center gap-4 p-4 transition hover:border-white/20"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-200">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          {label}
        </p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </Comp>
  )
}
