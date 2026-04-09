import agenciImg from '../assets/Agenci.webp'
import picarteImg from '../assets/PicarteTatto.webp'
import superListImg from '../assets/SuperList.webp'
import cvFile from '../CV/Currículum Vitae Cv de Roberto Gonzalez.pdf'

export const portfolio = {
  person: {
    name: 'Roberto González',
    role: 'Front-End Developer',
    tagline: 'Interfaces modernas, accesibles y con alma visual.',
    summary:
      'Desarrollador Front-End enfocado en construir experiencias claras, veloces y agradables. Trabajo con React, Tailwind y TypeScript para convertir ideas en productos reales, cuidando los detalles y la escalabilidad.',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    badge: 'Disponible para proyectos y equipos Front-End',
    ctas: [
      { label: 'Ver proyectos', href: '#proyectos', variant: 'primary' },
      { label: 'Contactar', href: '#contacto', variant: 'ghost' },
    ],
  },
  stats: [
    { label: 'Proyectos destacados', value: '3+' },
    { label: 'Stack principal', value: 'React + Tailwind' },
    { label: 'Enfoque', value: 'UI/UX + Performance' },
  ],
  about: {
    title: 'Diseño limpio, código sólido.',
    description:
      'Tengo experiencia en el desarrollo de aplicaciones web con React y TypeScript, así como en la integración con APIs y servicios como Supabase. Me enfoco en entregar interfaces intuitivas, accesibles y listas para escalar.',
    bullets: [
      'Arquitectura de componentes con enfoque en atomic design.',
      'Interfaces responsive con detalles visuales modernos.',
      'Integración fluida entre diseño y desarrollo.',
    ],
  },
  softSkills: [
    'Comunicación asertiva',
    'Auto desarrollo',
    'Resolución de problemas',
    'Constancia',
    'Trabajo en equipo',
    'Empatía',
  ],
  education: ['Cursos Udemy', 'Cursos Online'],
  languages: ['Español nativo', 'Inglés A2'],
  experience: [
    {
      role: 'Freelance',
      company: 'Proyectos independientes',
      period: '2020 - 2022',
      description:
        'Landing pages y sitios corporativos con enfoque en conversión, performance y SEO básico.',
    },
    {
      role: 'Desarrollador Web',
      company: 'Universidad de Matanzas',
      period: '2022 - 2024',
      description:
        'Desarrollo y mantenimiento de plataformas internas, optimizando flujos y experiencia de usuario.',
    },
    {
      role: 'Desarrollador React',
      company: 'Inmersoft',
      period: '2024 - 2025',
      description:
        'Construcción de interfaces SPA, formularios complejos y consumo de APIs con buenas prácticas.',
    },
    {
      role: 'Desarrollador React',
      company: 'DynamicCore',
      period: '2025 - 2026',
      description:
        'Módulos de software para onboarding interno y herramientas de productividad con React.',
    },
  ],
  projects: [
    {
      title: 'Agencia CubaTranffer',
      description:
        'Landing page para una agencia de remesas con combos de comida y artículos de venta. Incluye i18next y carruseles con Swiper para una experiencia fluida.',
      tags: ['React', 'Tailwind', 'i18next', 'Swiper'],
      link: 'https://cubatranffer.pages.dev/',
      image: agenciImg,
    },
    {
      title: 'Salon Picarte Tatto',
      description:
        'Landing page para un salón de tatuajes basada en un diseño de Figma, con rutas optimizadas y navegación intuitiva.',
      tags: ['React', 'Tailwind'],
      link: 'https://picartetatto.pages.dev',
      image: picarteImg,
    },
    {
      title: 'SuperList',
      description:
        'Aplicación full-stack para gestionar notas y tareas usando Supabase, React Hook Form y un enfoque modular.',
      tags: ['React', 'TypeScript', 'Supabase', 'React Hook Form'],
      link: 'https://superlist.pages.dev',
      image: superListImg,
    },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      skills: [
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'JavaScript',
        'React.js',
        'Next.js',
        'TypeScript',
      ],
    },
    {
      title: 'Estado y herramientas',
      skills: ['Redux Toolkit', 'React Hook Form', 'Axios', 'Vite', 'Git', 'GitHub'],
    },
    {
      title: 'Backend y CMS',
      skills: ['Supabase', 'Strapi'],
    },
    {
      title: 'Mobile y diseño',
      skills: ['React Native', 'Expo Go', 'Ionic', 'Sass', 'Bootstrap', 'Figma'],
    },
  ],
  contact: {
    email: 'roberto.dev97@gmail.com',
    phone: '+53 5867 2669',
    github: 'https://github.com/RobeDevG',
    linkedin: 'https://www.linkedin.com/in/roberto-gonzalez-47a5b6323',
    telegram: 'https://t.me/RobeDevG',
    cv: cvFile,
  },
}
