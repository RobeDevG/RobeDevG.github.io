import Button from '../atoms/Button'
import SectionTitle from '../atoms/SectionTitle'
import ContactItem from '../molecules/ContactItem'

export default function Contact({ contact }) {
  const items = [
    {
      label: 'Email',
      value: contact.email,
      icon: 'mail',
      href: `mailto:${contact.email}`,
    },
    {
      label: 'Teléfono',
      value: contact.phone,
      icon: 'phone',
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
  ]

  const socials = [
    { label: 'GitHub', href: contact.github, icon: 'github' },
    { label: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' },
    { label: 'Telegram', href: contact.telegram, icon: 'telegram' },
  ]

  return (
    <section id="contacto" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <SectionTitle
              label="Contacto"
              title="Hablemos de tu siguiente proyecto"
              description="Estoy listo para colaborar en nuevas ideas, mejorar productos existentes o construir desde cero."
            />
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${contact.email}`} variant="primary">
                Enviar email
              </Button>
              <Button href={contact.cv} variant="outline">
                Descargar CV
              </Button>
            </div>
            <p className="text-sm text-steel">
              Respondo rápido y busco siempre claridad en los objetivos antes de
              iniciar un proyecto.
            </p>
          </div>

          <div className="glass-card flex flex-col gap-6 p-6">
            <div className="grid gap-4">
              {items.map((item) => (
                <ContactItem key={item.label} {...item} />
              ))}
            </div>
            <div className="border-t border-white/10 pt-5">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Redes
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <Button
                    key={social.label}
                    href={social.href}
                    variant="ghost"
                    target="_blank"
                  >
                    {social.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
