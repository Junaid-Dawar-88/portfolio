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

const SelectProject = () => {
  return (
    <div
      className="min-h-screen px-4 sm:px-8 md:px-16 py-10 sm:py-16"
      style={{ backgroundColor: '#f5f0e8', fontFamily: 'Georgia, serif' }}
    >
      <div className="flex items-center justify-between mb-2 gap-4">
        <div className="flex items-center gap-3 sm:gap-5">
          <span
            className="text-sm hidden sm:inline"
            style={{ color: '#aaa', fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}
          >
            03
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold italic"
            style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}
          >
            Selected Projects
          </h2>
        </div>
        <div
          className="border px-2 sm:px-3 py-1 text-xs tracking-widest shrink-0"
          style={{ borderColor: '#1a1a1a', fontFamily: "'Courier New', monospace", color: '#1a1a1a' }}
        >
          WORK
        </div>
      </div>

      <div className="w-full h-px mb-8 sm:mb-12" style={{ backgroundColor: '#1a1a1a' }} />

      <div className="flex flex-col" style={{ border: '1px solid #d4c9b8' }}>
        {projects.map((project, idx) => (
          <div
            key={project.roman}
            className="flex flex-col sm:flex-row border-b last:border-b-0"
            style={{ borderColor: '#d4c9b8', backgroundColor: idx % 2 === 0 ? '#f5f0e8' : '#f0ebe1' }}
          >
            {/* Roman Numeral */}
            <div
              className="flex items-center justify-center sm:justify-start px-4 sm:px-8 pt-5 sm:pt-0"
              style={{ minWidth: '72px' }}
            >
              <span
                className="text-xl sm:text-2xl"
                style={{
                  color: '#c8bfb0',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  letterSpacing: '0.05em',
                }}
              >
                {project.roman}
              </span>
            </div>

            <div className="flex-1 px-5 sm:px-8 py-6 border-t sm:border-t-0 sm:border-l" style={{ borderColor: '#d4c9b8' }}>

              <p
                className="text-xs mb-2 tracking-widest"
                style={{ color: '#c0392b', fontFamily: "'Courier New', monospace", letterSpacing: '0.12em' }}
              >
                {project.tag}
              </p>

              <h3
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: '#444', fontFamily: 'Georgia, serif', maxWidth: '640px' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
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
            </div>

            <div
              className="flex flex-row sm:flex-col justify-center items-center gap-3 px-5 sm:px-8 py-5 sm:py-6 border-t sm:border-t-0 sm:border-l"
              style={{ borderColor: '#d4c9b8', minWidth: '150px' }}
            >
              <a
                href={project.liveDemo}
                className="w-full text-center px-5 py-2 text-xs tracking-widest font-bold transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: '#c0392b',
                  color: '#fff',
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: '0.12em',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                LIVE DEMO
              </a>
              <a
                href={project.github}
                className="w-full text-center px-5 py-2 text-xs tracking-widest font-bold border transition-colors hover:bg-gray-100"
                style={{
                  borderColor: '#1a1a1a',
                  color: '#1a1a1a',
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: '0.12em',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                GITHUB
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectProject