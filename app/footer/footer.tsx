import React from 'react'

const contacts = [
  {
    icon: '↗',
    label: 'GITHUB',
    value: 'github.com/Junaid-Dawar-88',
    href: 'https://github.com/Junaid-Dawar-88',
  },
  {
    icon: 'in',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/junaidiqbal',
    href: 'https://www.linkedin.com/in/junaid-iqbal-854813384/',
  },
  {
    icon: '✉',
    label: 'EMAIL',
    value: 'junaidiqbal.dev88@gmail.com',
    href: 'mailto:junaidiqbal.dev88@gmail.com',
  },
  {
    icon: '⌾',
    label: 'WHATSAPP',
    value: '+92 331 5995496',
    href: 'https://wa.me/923315995496',
  },
]

const monoFont = "'Courier New', monospace"

const ContactCard = ({ item }: { item: (typeof contacts)[number] }) => {
  const external = !item.href.startsWith('mailto:')

  return (
    <a
      href={item.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="reveal group relative flex items-center gap-4 overflow-hidden border p-4 no-underline transition duration-300 hover:-translate-y-1"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-alt)' }}
    >
      {/* Accent bar — slides in on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.75 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        style={{ backgroundColor: 'var(--accent)' }}
      />

      {/* Icon tile */}
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center text-sm font-bold transition-colors duration-300 group-hover:bg-(--accent) group-hover:text-white"
        style={{
          backgroundColor: 'var(--bg-soft)',
          color: 'var(--text-muted)',
          fontFamily: monoFont,
          borderRadius: '3px',
        }}
      >
        {item.icon}
      </span>

      {/* Label + value */}
      <span className="min-w-0 flex-1">
        <span
          className="mb-1 block text-xs uppercase"
          style={{ color: 'var(--text-faint)', fontFamily: monoFont, letterSpacing: '0.15em' }}
        >
          {item.label}
        </span>
        <span
          className="block truncate text-sm"
          style={{ color: 'var(--text)', fontFamily: 'Georgia, serif' }}
        >
          {item.value}
        </span>
      </span>

      {/* Hover arrow */}
      <span
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        style={{ color: 'var(--text-faint)', fontFamily: monoFont }}
      >
        →
      </span>
    </a>
  )
}

const Footer = () => {
  return (
    <footer
      className="w-full border-t"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', fontFamily: 'Georgia, serif' }}
    >
      <div className="flex min-h-140 flex-col md:flex-row">

        {/* CTA panel */}
        <div
          className="reveal flex flex-1 flex-col justify-center border-b px-8 py-16 sm:px-12 md:border-b-0 md:border-r md:px-16 md:py-20"
          style={{ borderColor: 'var(--border)' }}
        >
          <p
            className="mb-6 text-xs"
            style={{ color: 'var(--accent)', fontFamily: monoFont, letterSpacing: '0.2em' }}
          >
            04 — GET IN TOUCH
          </p>

          <h2
            className="mb-8 font-bold leading-none text-balance"
            style={{ fontSize: 'clamp(44px, 7vw, 88px)' }}
          >
            <span style={{ color: 'var(--text)', display: 'block' }}>Let&apos;s build</span>
            <span style={{ color: 'var(--text)', display: 'block' }}>something</span>
            <span style={{ color: 'var(--accent)', fontStyle: 'italic', display: 'block' }}>
              great.
            </span>
          </h2>

          <p
            className="mb-10 text-sm leading-relaxed text-pretty"
            style={{ color: 'var(--text-muted)', maxWidth: '380px' }}
          >
            I am open to full-time roles, freelance projects, or just a
            conversation about web development. Do not hesitate to reach out.
          </p>

          {/* Availability + primary CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:junaidiqbal.dev88@gmail.com"
              className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs font-bold tracking-widest no-underline transition-opacity duration-300 hover:opacity-85"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontFamily: monoFont,
                letterSpacing: '0.12em',
              }}
            >
              SEND A MESSAGE
              <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                →
              </span>
            </a>
            <span
              className="inline-flex items-center gap-2 text-xs"
              style={{ color: 'var(--text-muted)', fontFamily: monoFont, letterSpacing: '0.08em' }}
            >
              <span className="h-2 w-2 rounded-full bg-[#27ae60]" />
              Available for work
            </span>
          </div>
        </div>

        {/* Contact channels */}
        <div
          className="flex flex-col justify-center gap-3 px-8 py-12 sm:px-12 md:px-16 md:py-20"
          style={{ minWidth: 'min(100%, 480px)', maxWidth: '520px' }}
        >
          <p
            className="reveal mb-2 text-xs uppercase"
            style={{ color: 'var(--text-faint)', fontFamily: monoFont, letterSpacing: '0.18em' }}
          >
            Direct channels
          </p>
          {contacts.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col items-center justify-between gap-2 border-t px-8 py-5 sm:flex-row sm:px-12 md:px-16"
        style={{ borderColor: 'var(--border)' }}
      >
        <p
          className="text-center text-xs sm:text-left"
          style={{ color: 'var(--text-faint)', fontFamily: monoFont, letterSpacing: '0.1em' }}
        >
          © 2025 Junaid Iqbal — All rights reserved
        </p>
        <p
          className="text-center text-xs sm:text-right"
          style={{ color: 'var(--text-faint)', fontFamily: monoFont, letterSpacing: '0.1em' }}
        >
          Designed &amp; Built with passion
        </p>
      </div>
    </footer>
  )
}

export default Footer
