import SectionTitle from '../atoms/SectionTitle'
import ProjectCard from '../molecules/ProjectCard'

export default function Projects({ projects }) {
  return (
    <section id="proyectos" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionTitle
          label="Proyectos"
          title="Selección de trabajos recientes"
          description="Cada proyecto refleja mi enfoque en interfaces atractivas y desarrollo funcional."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
