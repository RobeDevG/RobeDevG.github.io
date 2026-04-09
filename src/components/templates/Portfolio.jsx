import { portfolio } from '../../data/portfolio'
import About from '../organisms/About'
import Contact from '../organisms/Contact'
import Experience from '../organisms/Experience'
import Footer from '../organisms/Footer'
import Hero from '../organisms/Hero'
import Navbar from '../organisms/Navbar'
import Projects from '../organisms/Projects'
import Skills from '../organisms/Skills'

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-emerald-400/20 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-lime-300/20 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10">
        <Navbar
          name={portfolio.person.name}
          role={portfolio.person.role}
          links={portfolio.nav}
          cv={portfolio.contact.cv}
        />
        <main id="contenido-principal">
          <Hero
            person={portfolio.person}
            hero={portfolio.hero}
            stats={portfolio.stats}
          />
          <About
            about={portfolio.about}
            softSkills={portfolio.softSkills}
            education={portfolio.education}
            languages={portfolio.languages}
          />
          <Experience experience={portfolio.experience} />
          <Projects projects={portfolio.projects} />
          <Skills skillGroups={portfolio.skillGroups} />
          <Contact contact={portfolio.contact} />
        </main>
        <Footer name={portfolio.person.name} />
      </div>
    </div>
  )
}
