import React from 'react'

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML5', filled: true },
      { name: 'CSS3', filled: true },
      { name: 'JavaScript', filled: true },
      { name: 'React.js', filled: true },
    ],
    level: 'Expert',
    levelPercent: 92,
    useCase: 'UI components, SPAs, responsive design',
  },
  {
    category: 'Framework',
    technologies: [
      { name: 'Next.js', filled: true },
      { name: 'App Router', filled: false },
      { name: 'SSR / SSG', filled: false },
    ],
    level: 'Advanced',
    levelPercent: 78,
    useCase: 'Full-stack apps, SEO, performance',
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', filled: true },
      { name: 'REST APIs', filled: false },
      { name: 'MongoDB', filled: false },
    ],
    level: 'Advanced',
    levelPercent: 78,
    useCase: 'APIs, server logic, database ops',
  },
  {
    category: 'Styling',
    technologies: [
      { name: 'Tailwind CSS', filled: true },
      { name: 'Bootstrap', filled: true },
    ],
    level: 'Expert',
    levelPercent: 92,
    useCase: 'Utility-first styling, rapid UI',
  },
  {
    category: 'Tools',
    technologies: [
      { name: 'Git', filled: false },
      { name: 'GitHub', filled: false },
      { name: 'Vercel', filled: false },
      { name: 'VS Code', filled: false },
    ],
    level: 'Advanced',
    levelPercent: 78,
    useCase: 'Version control, deployment, dev workflow',
  },
]

const LevelBar = ({ percent, label }: { percent: number; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="relative w-20 sm:w-28 h-px bg-gray-300">
      <div
        className="absolute top-0 left-0 h-px bg-red-700"
        style={{ width: `${percent}%` }}
      />
    </div>
    <span
      className="text-xs italic"
      style={{ color: '#aaa', fontFamily: 'Georgia, serif', letterSpacing: '0.03em' }}
    >
      {label}
    </span>
  </div>
)

const Skills = () => {
  return (
    <div
      className="min-h-screen px-4 sm:px-8 md:px-16 py-10 sm:py-16"
      style={{ backgroundColor: '#f5f0e8', fontFamily: 'Georgia, serif' }}
    >
      <div className="flex items-start sm:items-center justify-between mb-2 gap-4">
        <div className="flex items-center gap-3 sm:gap-5">
          <span
            className="text-sm hidden sm:inline"
            style={{ color: '#aaa', fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}
          >
            02
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold italic"
            style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}
          >
            Skills &amp; Technologies
          </h2>
        </div>
        <div
          className="border px-2 sm:px-3 py-1 text-xs tracking-widest shrink-0"
          style={{ borderColor: '#1a1a1a', fontFamily: "'Courier New', monospace", color: '#1a1a1a' }}
        >
          STACK
        </div>
      </div>
      <div className="w-full h-px mb-8 sm:mb-12" style={{ backgroundColor: '#1a1a1a' }} />
      <div className="hidden md:block border" style={{ borderColor: '#d4c9b8' }}>
        <div
          className="grid border-b"
          style={{
            gridTemplateColumns: '160px 1fr 190px 1fr',
            borderColor: '#d4c9b8',
            backgroundColor: '#ede8de',
          }}
        >
          {['Category', 'Technologies', 'Level', 'Use Case'].map((h) => (
            <div
              key={h}
              className="px-6 py-4 text-xs uppercase"
              style={{ fontFamily: "'Courier New', monospace", color: '#888', letterSpacing: '0.15em' }}
            >
              {h}
            </div>
          ))}
        </div>

        {skills.map((skill, idx) => (
          <div
            key={skill.category}
            className="grid border-b"
            style={{
              gridTemplateColumns: '160px 1fr 190px 1fr',
              borderColor: '#d4c9b8',
              backgroundColor: idx % 2 === 0 ? '#f5f0e8' : '#f0ebe1',
            }}
          >
            <div className="px-6 py-6 font-bold text-sm flex items-center" style={{ color: '#1a1a1a' }}>
              {skill.category}
            </div>
            <div className="px-6 py-6 flex flex-wrap items-center gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1 text-xs border"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: '0.05em',
                    backgroundColor: tech.filled ? '#1a1a1a' : 'transparent',
                    color: tech.filled ? '#f5f0e8' : '#1a1a1a',
                    borderColor: '#1a1a1a',
                    fontWeight: tech.filled ? '600' : '400',
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="px-6 py-6 flex items-center">
              <LevelBar percent={skill.levelPercent} label={skill.level} />
            </div>
            <div className="px-6 py-6 text-sm flex items-center" style={{ color: '#333', lineHeight: '1.5' }}>
              {skill.useCase}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {skills.map((skill, idx) => (
          <div
            key={skill.category}
            className="border p-5"
            style={{
              borderColor: '#d4c9b8',
              backgroundColor: idx % 2 === 0 ? '#f5f0e8' : '#f0ebe1',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-base" style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>
                {skill.category}
              </span>
              <LevelBar percent={skill.levelPercent} label={skill.level} />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {skill.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-1 text-xs border"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: '0.05em',
                    backgroundColor: tech.filled ? '#1a1a1a' : 'transparent',
                    color: tech.filled ? '#f5f0e8' : '#1a1a1a',
                    borderColor: '#1a1a1a',
                    fontWeight: tech.filled ? '600' : '400',
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="w-full h-px mb-3" style={{ backgroundColor: '#d4c9b8' }} />

            <div className="flex items-start gap-2">
              <span
                className="text-xs uppercase tracking-widest shrink-0 mt-0.5"
                style={{ color: '#aaa', fontFamily: "'Courier New', monospace" }}
              >
                Use Case
              </span>
              <span className="text-xs" style={{ color: '#555', fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
                {skill.useCase}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills