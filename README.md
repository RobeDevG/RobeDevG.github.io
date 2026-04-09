# Portfolio Personal - Roberto Gonzalez

Portfolio web profesional construido con React y Vite, enfocado en presentar experiencia, habilidades y proyectos destacados de Front-End Development con una interfaz moderna, responsive y orientada a performance.

## Vista general

Este proyecto muestra:

- Perfil profesional y propuesta de valor.
- Experiencia laboral y stack tecnico.
- Proyectos destacados con enlaces en produccion.
- Canales de contacto y acceso a CV.

## Tecnologias

- React 19
- Vite 8
- Tailwind CSS 4
- PostCSS + Autoprefixer
- ESLint 9

## Estructura del proyecto

```text
.
|-- public/
|-- src/
|   |-- assets/            # Imagenes e iconos
|   |-- components/        # Atomic Design (atoms, molecules, organisms, templates)
|   |-- CV/                # Documento CV
|   |-- data/              # Contenido central del portfolio
|   |-- App.jsx
|   |-- main.jsx
|-- index.html
|-- package.json
```

## Scripts disponibles

- npm run dev: levanta el entorno local con HMR.
- npm run build: genera el build de produccion.
- npm run preview: previsualiza localmente el build generado.
- npm run lint: ejecuta analisis estatico con ESLint.

## Instalacion y uso local

1. Clonar el repositorio.
2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

4. Abrir la URL que muestra Vite en terminal (por defecto http://localhost:5173).

## Datos y personalizacion

La informacion principal del portfolio (datos personales, experiencia, skills, proyectos y contacto) se gestiona desde [src/data/portfolio.js](src/data/portfolio.js).

Para personalizar rapido:

- Edita textos y enlaces en [src/data/portfolio.js](src/data/portfolio.js).
- Sustituye imagenes e iconos en [src/assets](src/assets).
- Ajusta estilos globales en [src/index.css](src/index.css) y [src/App.css](src/App.css).

## Deploy

El proyecto esta listo para despliegue en plataformas estaticas como Cloudflare Pages, Vercel o Netlify.

Proceso recomendado:

1. Ejecutar build con npm run build.
2. Publicar el contenido de la carpeta dist.

## Contacto

- GitHub: [RobeDevG](https://github.com/RobeDevG)
- LinkedIn: [Roberto Gonzalez](https://www.linkedin.com/in/roberto-gonzalez-47a5b6323)
- Email: roberto.dev97@gmail.com

---

Si te interesa colaborar en un proyecto Front-End, puedes escribirme por cualquiera de los canales anteriores.
