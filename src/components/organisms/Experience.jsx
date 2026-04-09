import SectionTitle from '../atoms/SectionTitle'
import TimelineItem from '../molecules/TimelineItem'

export default function Experience({ experience }) {
  return (
    <section id="experiencia" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionTitle
          label="Experiencia"
          title="Trayectoria profesional"
          description="Experiencias clave que fortalecen mi enfoque en producto, diseño y desarrollo."
        />
        <div className="relative mt-10 space-y-6">
          <div className="absolute left-2 top-3 h-full w-px bg-white/10" />
          {experience.map((item) => (
            <TimelineItem key={`${item.role}-${item.company}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
