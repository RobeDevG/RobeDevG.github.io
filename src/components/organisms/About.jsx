import SectionTitle from '../atoms/SectionTitle'

export default function About({ about, softSkills, education, languages }) {
  return (
    <section id="sobre" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionTitle
          label="Sobre mí"
          title={about.title}
          description={about.description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card flex flex-col gap-4 p-6">
            <h3 className="text-lg font-semibold text-white">
              Lo que me define
            </h3>
            <ul className="space-y-3 text-sm text-steel">
              {about.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card flex flex-col gap-6 p-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Habilidades</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Educación
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-steel">
                  {education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Idiomas</h4>
                <ul className="mt-2 space-y-2 text-sm text-steel">
                  {languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
