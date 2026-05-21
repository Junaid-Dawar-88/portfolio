import React from 'react'

const skills = [
  {
    category: 'Frontend',
    wide: true,
    technologies: [
      { name: 'HTML5', filled: true },
      { name: 'CSS3', filled: true },
      { name: 'JavaScript', filled: true },
      { name: 'TypeScript', filled: true },
      { name: 'React.js', filled: true },
    ],
  },
  {
    category: 'Framework',
    wide: false,
    technologies: [
      { name: 'Next.js', filled: true },
      { name: 'App Router', filled: true },
      { name: 'SSR / SSG', filled: false },
    ],
  },
  {
    category: 'Backend',
    wide: false,
    technologies: [
      { name: 'Node.js', filled: true },
      { name: 'REST APIs', filled: false },
      { name: 'Better Auth', filled: false },
    ],
  },
  {
    category: 'Database',
    wide: true,
    technologies: [
      { name: 'PostgreSQL', filled: true },
      { name: 'Prisma ORM', filled: true },
      { name: 'MongoDB', filled: false },
      { name: 'SQL', filled: false },
      { name: 'SQLite', filled: false },
    ],
  },
  {
    category: 'Desktop',
    wide: false,
    technologies: [
      { name: 'Tauri', filled: true },
    ],
  },
  {
    category: 'AI',
    wide: false,
    technologies: [
      { name: 'Prompt Engineering', filled: true },
      { name: 'AI Integration', filled: false },
    ],
  },
  {
    category: 'Styling',
    wide: false,
    technologies: [
      { name: 'Tailwind CSS', filled: true },
      { name: 'Bootstrap', filled: true },
    ],
  },
  {
    category: 'Tools',
    wide: false,
    technologies: [
      { name: 'Git', filled: true },
      { name: 'GitHub', filled: true },
      { name: 'Vercel', filled: false },
      { name: 'VS Code', filled: false },
      { name: 'Bun', filled: true },
    ],
  },
]

const monoFont = "'Courier New', monospace"

const TechBadge = ({ name, filled }: { name: string; filled: boolean }) => (
  <span
    className="border px-3 py-1 text-xs"
    style={{
      fontFamily: monoFont,
      letterSpacing: '0.03em',
      backgroundColor: filled ? 'var(--surface-invert)' : 'transparent',
      color: filled ? 'var(--on-invert)' : 'var(--text-body)',
      borderColor: filled ? 'var(--surface-invert)' : 'var(--border)',
      fontWeight: filled ? 600 : 400,
    }}
  >
    {name}
  </span>
)

const Skills = () => {
  return (
    <div
      className="min-h-screen px-4 py-10 sm:px-8 sm:py-16 md:px-16"
      style={{ backgroundColor: 'var(--bg)', fontFamily: 'Georgia, serif' }}
    >
      <div className="mb-2 flex items-start justify-between gap-4 sm:items-center">
        <div className="flex items-center gap-3 sm:gap-5">
          <span
            className="hidden text-sm sm:inline"
            style={{ color: 'var(--text-faint)', fontFamily: monoFont, letterSpacing: '0.05em' }}
          >
            02
          </span>
          <h2
            className="text-2xl font-bold italic sm:text-3xl md:text-4xl"
            style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
          >
            Skills &amp; Technologies
          </h2>
        </div>
        <div
          className="shrink-0 border px-2 py-1 text-xs tracking-widest sm:px-3"
          style={{ borderColor: 'var(--text)', fontFamily: monoFont, color: 'var(--text)' }}
        >
          STACK
        </div>
      </div>
      <div className="mb-8 h-px w-full sm:mb-12" style={{ backgroundColor: 'var(--text)' }} />

      {/* Bento grid — asymmetric tiles, one accent anchor */}
      <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Accent anchor tile */}
        <article
          className="reveal flex flex-col justify-center border p-6 sm:col-span-2 sm:p-7"
          style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--accent)' }}
        >
          <p
            className="mb-3 text-xs uppercase"
            style={{ color: 'rgba(255,255,255,0.72)', fontFamily: monoFont, letterSpacing: '0.2em' }}
          >
            The Toolkit
          </p>
          <p className="text-lg font-bold leading-snug text-white sm:text-xl">
            From pixel-perfect React interfaces to type-safe APIs and
            cross-platform desktop apps.
          </p>
        </article>

        {/* Category tiles */}
        {skills.map((skill, idx) => (
          <article
            key={skill.category}
            className={`skill-tile reveal group relative flex flex-col overflow-hidden border p-6 ${
              skill.wide ? 'sm:col-span-2' : ''
            }`}
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
          >
            {/* Faint index watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-1 -top-3 select-none text-6xl font-black italic leading-none"
              style={{ color: 'var(--text)', opacity: 0.05, fontFamily: 'Georgia, serif' }}
            >
              {String(idx + 1).padStart(2, '0')}
            </span>

            {/* Category header */}
            <div className="mb-4 flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150 motion-reduce:transition-none"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <h3
                className="text-sm font-bold uppercase"
                style={{ color: 'var(--text)', fontFamily: monoFont, letterSpacing: '0.16em' }}
              >
                {skill.category}
              </h3>
            </div>

            {/* Technology badges */}
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} filled={tech.filled} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Skills
