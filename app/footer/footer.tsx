'use client'
import React from 'react'

const contacts = [
  {
    icon: '↗',
    label: 'GITHUB',
    value: 'https://github.com/Junaid-Dawar-88',
    href: 'https://github.com/Junaid-Dawar-88',
  },
  {
    icon: 'in',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/junaidiqbal',
    href: 'https://linkedin.com/in/junaidiqbal',
  },
  {
    icon: '✉',
    label: 'EMAIL',
    value: 'junaidiqbal.dev88@email.com',
    href: 'mailto:junaidiqbal.dev88@email.com',
  }
]

const Footer = () => {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: '#1a1612', fontFamily: 'Georgia, serif' }}
    >
      <div className="flex flex-col md:flex-row min-h-[560px]">

        <div
          className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-16 py-16 md:py-20"
          style={{ borderRight: '1px solid #2e2a24' }}
        >
          <p
            className="text-xs tracking-widest mb-6"
            style={{
              color: '#c0392b',
              fontFamily: "'Courier New', monospace",
              letterSpacing: '0.2em',
            }}
          >
            GET IN TOUCH
          </p>

          <h2
            className="font-bold leading-none mb-8"
            style={{ fontSize: 'clamp(44px, 7vw, 88px)' }}
          >
            <span style={{ color: '#f5f0e8', display: 'block' }}>Let build</span>
            <span style={{ color: '#f5f0e8', display: 'block' }}>something</span>
            <span
              style={{
                color: '#c8922a',
                fontStyle: 'italic',
                display: 'block',
              }}
            >
              great.
            </span>
          </h2>

          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: '#888', maxWidth: '380px', fontFamily: 'Georgia, serif' }}
          >
            I am open to full-time roles, freelance projects, or just a
            conversation about web development. Do not hesitate to reach out.
          </p>

          <a
            href="mailto:junaidiqbal@email.com"
            className="text-sm italic inline-block"
            style={{
              color: '#f5f0e8',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.01em',
            }}
          >
            junaidiqbal.dev88@email.com →
          </a>
        </div>

        <div
          className="flex flex-col justify-center gap-3 px-8 sm:px-12 md:px-16 py-12 md:py-20"
          style={{ minWidth: 'min(100%, 480px)', maxWidth: '520px' }}
        >
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-5 border px-5 py-5 transition-colors group"
              style={{
                borderColor: '#2e2a24',
                backgroundColor: '#211e18',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#c0392b'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = '#261f18'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2e2a24'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = '#211e18'
              }}
            >
              <div
                className="flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#2e2a24',
                  color: '#888',
                  fontFamily: "'Courier New', monospace",
                  borderRadius: '2px',
                }}
              >
                {item.icon}
              </div>

              <div>
                <p
                  className="text-xs tracking-widest mb-1"
                  style={{
                    color: '#666',
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: '0.15em',
                  }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm"
                  style={{ color: '#f5f0e8', fontFamily: 'Georgia, serif' }}
                >
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row items-center justify-between px-8 sm:px-12 md:px-16 py-5 gap-2"
        style={{ borderTop: '1px solid #2e2a24' }}
      >
        <p
          className="text-xs text-center sm:text-left"
          style={{
            color: '#444',
            fontFamily: "'Courier New', monospace",
            letterSpacing: '0.1em',
          }}
        >
          © 2025 Junaid Iqbal — All rights reserved
        </p>
        <p
          className="text-xs text-center sm:text-right"
          style={{
            color: '#444',
            fontFamily: "'Courier New', monospace",
            letterSpacing: '0.1em',
          }}
        >
          Designed &amp; Built with passion
        </p>
      </div>
    </footer>
  )
}

export default Footer