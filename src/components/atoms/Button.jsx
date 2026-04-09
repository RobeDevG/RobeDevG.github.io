const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60'

const variants = {
  primary:
    'bg-white text-ink shadow-glow hover:-translate-y-0.5 hover:bg-mist',
  ghost:
    'border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10',
  outline:
    'border border-white/20 text-white hover:-translate-y-0.5 hover:bg-white/10',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  target,
  rel,
}) {
  const Comp = href ? 'a' : 'button'
  const safeRel = target === '_blank' ? rel ?? 'noopener noreferrer' : rel

  return (
    <Comp
      href={href}
      target={target}
      rel={safeRel}
      className={`${baseStyles} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </Comp>
  )
}
