const icons = {
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3z"
        strokeWidth="1.5"
      />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 12h14M13 5l6 7-6 7" strokeWidth="1.5" />
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M14 5h5v5M10 14l9-9M19 14v5H5V5h5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M4 6h16v12H4zM4 7l8 6 8-6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M4.5 5.5l3.2-1.6 2.6 4.8-2.5 1.3c1.2 2.4 3.1 4.3 5.5 5.5l1.3-2.5 4.8 2.6-1.6 3.2c-.4.8-1.2 1.3-2.1 1.2-6.2-.7-11.1-5.6-11.8-11.8-.1-.9.4-1.7 1.2-2.1z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 3c-5 0-9 4-9 9 0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.8c-2.5.5-3-.6-3.2-1.1-.2-.5-.6-1.1-1-1.3-.4-.2-1-.7 0-.7.9 0 1.6.9 1.8 1.3 1 .1 1.8-.7 2-.9.1-.7.4-1.1.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.7-4.5 4.9.3.3.7.8.7 1.7v2.6c0 .3.2.6.7.5 3.6-1.2 6.2-4.6 6.2-8.6 0-5-4-9-9-9z"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M5 9h3v10H5zM6.5 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11 9h3v1.4c.4-.8 1.4-1.6 3-1.6 3 0 3.5 2 3.5 4.5V19h-3v-5c0-1.2 0-2.7-1.6-2.7-1.6 0-1.9 1.3-1.9 2.6V19h-3z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M4 11.8l15.2-6.3c.7-.3 1.4.4 1.1 1.1l-3.5 12.9c-.2.7-1 .9-1.6.5l-3.9-2.8-2 2.3c-.3.4-.9.2-.9-.3v-2.8l8.6-7.8-10.8 7.1-4-.9c-.7-.1-.8-1.1-.2-1.3z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <span className={`inline-flex ${className}`} aria-hidden="true">
      {icons[name]}
    </span>
  )
}
