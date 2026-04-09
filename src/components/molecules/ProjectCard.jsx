import Badge from '../atoms/Badge'
import Icon from '../atoms/Icon'

export default function ProjectCard({ project }) {
  const { title, description, tags, link, image } = project
  const isExternal = link?.startsWith('http')

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-white/20">
      <div className="relative h-44 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-emerald-500/10 to-transparent">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                Proyecto destacado
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex h-full flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-steel">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={link}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200/90 transition group-hover:text-emerald-200"
          >
            Ver preview
            <Icon name="external" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
