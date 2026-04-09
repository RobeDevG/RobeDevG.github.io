import Badge from '../atoms/Badge'

export default function SkillGroup({ title, skills }) {
  return (
    <div className="glass-card flex h-full flex-col gap-4 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  )
}
