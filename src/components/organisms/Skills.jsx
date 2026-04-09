import SectionTitle from '../atoms/SectionTitle'
import SkillGroup from '../molecules/SkillGroup'

export default function Skills({ skillGroups }) {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionTitle
          label="Skills"
          title="Stack y herramientas"
          description="Tecnologías que uso para construir productos confiables y escalables."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
