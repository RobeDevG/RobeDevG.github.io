export default function Footer({ name }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-white/60">
        <p>Todos los derechos reservados © {name} {year}</p>
        <p>Diseño y desarrollo con React + Tailwind CSS.</p>
      </div>
    </footer>
  )
}
