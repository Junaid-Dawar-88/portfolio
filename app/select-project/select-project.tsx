import React from 'react'

const projects = [
  {
    roman: 'I',
    tag: 'FULL STACK · FEATURED',
    title: 'Blog Platform',
    description:
      'A full-featured blogging platform with authentication, markdown editor, dynamic routing, SEO optimization, and an admin dashboard built with Next.js App Router.',
    techs: [
      { name: 'Next.js', filled: true },
      { name: 'Node.js', filled: false },
      { name: 'Postgress', filled: false },
      { name: 'Tailwind', filled: false },
    ],
    liveDemo: '#',
    github: '#',
  },
  {
    roman: 'II',
    tag: 'FRONTEND · E-COMMERCE',
    title: 'Online Store',
    description:
      'Modern e-commerce application with product listing, filtering, cart management, and checkout flow powered by React Context API and a Node.js backend.',
    techs: [
      { name: 'React.js', filled: true },
      { name: 'Postgress', filled: false },
      { name: 'Bootstrap', filled: false },
    ],
    liveDemo: '#',
    github: '#',
  },
  {
    roman: 'III',
    tag: 'FULL STACK · SaaS',
    title: 'Task Manager',
    description:
      'A productivity SaaS app with real-time collaboration, drag-and-drop boards, team workspaces, and role-based access control built using Next.js and Socket.io.',
    techs: [
      { name: 'Next.js', filled: true },
      { name: 'Socket.io', filled: false },
      { name: 'Postgress', filled: false },
      { name: 'Tailwind', filled: false },
    ],
    liveDemo: '#',
    github: '#',
  },
  {
    roman: 'IV',
    tag: 'BACKEND · API',
    title: 'REST API Boilerplate',
    description:
      'Production-ready Node.js REST API with JWT authentication, rate limiting, request validation, Swagger docs, and a modular architecture for rapid backend development.',
    techs: [
      { name: 'Node.js', filled: true },
      { name: 'Express', filled: false },
      { name: 'Postgress', filled: false },
      { name: 'Swagger', filled: false },
    ],
    liveDemo: '#',
    github: '#',
  },
]

const monoFont = "'Courier New', monospace"

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  return (
    <article
      className="reveal group relative flex flex-col overflow-hidden border p-6 transition duration-300 hover:-translate-y-1 sm:p-8"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
    >
      {/* Accent bar — slides in on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.75 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        style={{ backgroundColor: 'var(--accent)' }}
      />

      {/* Oversized roman-numeral watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-4 select-none text-7xl font-black italic leading-none sm:text-8xl"
        style={{ color: 'var(--text)', opacity: 0.06, fontFamily: 'Georgia, serif' }}
      >
        {project.roman}
      </span>

      {/* Category tag */}
      <p
        className="mb-3 text-xs"
        style={{ color: 'var(--accent)', fontFamily: monoFont, letterSpacing: '0.12em' }}
      >
        {project.tag}
      </p>

      {/* Title */}
      <h3
        className="mb-3 text-2xl font-bold italic text-balance"
        style={{ color: 'var(--text)', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="mb-6 text-sm leading-relaxed text-pretty"
        style={{ color: 'var(--text-body)', fontFamily: 'Georgia, serif' }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="mb-7 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech.name}
            className="border px-2.5 py-1 text-xs"
            style={{
              fontFamily: monoFont,
              letterSpacing: '0.05em',
              backgroundColor: tech.filled ? 'var(--surface-invert)' : 'transparent',
              color: tech.filled ? 'var(--on-invert)' : 'var(--text)',
              borderColor: tech.filled ? 'var(--surface-invert)' : 'var(--border)',
              fontWeight: tech.filled ? 600 : 400,
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* Actions — pinned to the bottom so every card aligns */}
      <div className="mt-auto flex flex-wrap gap-3 border-t pt-5" style={{ borderColor: 'var(--border-soft)' }}>
        <a
          href={project.liveDemo}
          className="flex-1 px-5 py-2.5 text-center text-xs font-bold tracking-widest transition-opacity duration-300 hover:opacity-80"
          style={{
            backgroundColor: 'var(--accent)',
            color: '#fff',
            fontFamily: monoFont,
            letterSpacing: '0.12em',
          }}
        >
          LIVE DEMO
        </a>
        <a
          href={project.github}
          className="flex-1 border px-5 py-2.5 text-center text-xs font-bold tracking-widest transition-colors duration-300 hover:bg-(--surface-invert) hover:text-(--on-invert)"
          style={{
            borderColor: 'var(--text)',
            color: 'var(--text)',
            fontFamily: monoFont,
            letterSpacing: '0.12em',
          }}
        >
          GITHUB
        </a>
      </div>
    </article>
  )
}

const SelectProject = () => {
  return (
    <div
      className="min-h-screen px-4 py-10 sm:px-8 sm:py-16 md:px-16"
      style={{ backgroundColor: 'var(--bg)', fontFamily: 'Georgia, serif' }}
    >
      <div className="reveal mb-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-5">
          <span
            className="hidden text-sm sm:inline"
            style={{ color: 'var(--text-faint)', fontFamily: monoFont, letterSpacing: '0.05em' }}
          >
            03
          </span>
          <h2
            className="text-2xl font-bold italic sm:text-3xl md:text-4xl"
            style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
          >
            Selected Projects
          </h2>
        </div>
        <div
          className="shrink-0 border px-2 py-1 text-xs tracking-widest sm:px-3"
          style={{ borderColor: 'var(--text)', fontFamily: monoFont, color: 'var(--text)' }}
        >
          WORK
        </div>
      </div>

      <div className="mb-8 h-px w-full sm:mb-12" style={{ backgroundColor: 'var(--text)' }} />

      {/* Responsive card grid */}
      <div
        className="grid gap-4 sm:gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))' }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.roman} project={project} />
        ))}
      </div>
    </div>
  )
}

export default SelectProject
