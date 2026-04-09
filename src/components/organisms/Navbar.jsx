import Button from '../atoms/Button'

export default function Navbar({ name, role, links, cv }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/80 via-emerald-300/70 to-lime-200/70">
            <div className="absolute inset-1 rounded-full bg-ink-2" />
            <span className="relative text-sm font-semibold text-white">RG</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-white/60">{role}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-1 transition hover:border-white/15 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          {cv ? (
            <Button
              href={cv}
              className="hidden md:inline-flex"
              variant="outline"
            >
              Descargar CV
            </Button>
          ) : null}
        </div>
      </nav>
    </header>
  )
}
