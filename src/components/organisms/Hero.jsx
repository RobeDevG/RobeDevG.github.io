import Button from '../atoms/Button'
import Icon from '../atoms/Icon'
import StatCard from '../molecules/StatCard'

export default function Hero({ person, hero, stats }) {
  const year = new Date().getFullYear()

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200">
              <Icon name="spark" className="h-4 w-4" />
              {hero.badge}
            </span>
            <div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {person.name}
              </h1>
              <p className="mt-2 text-lg text-gradient">{person.role}</p>
            </div>
            <p className="text-base text-steel md:text-lg">{person.summary}</p>
            <div className="flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <Button key={cta.label} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                React, Tailwind, TypeScript
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                UI/UX, performance, accesibilidad
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-12 h-32 w-32 animate-float rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="absolute -left-12 bottom-6 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
            <div className="glass-card relative z-10 flex flex-col gap-6 p-8">
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/80 via-emerald-300/70 to-lime-200/70">
                  <div className="absolute inset-1 rounded-2xl bg-ink-2" />
                  <span className="relative text-base font-semibold text-white">
                    RG
                  </span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {person.tagline}
                  </p>
                  <p className="text-sm text-white/60">Portafolio {year}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                Disponible para colaborar en productos digitales que necesiten
                una interfaz cuidada y un desarrollo limpio.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
