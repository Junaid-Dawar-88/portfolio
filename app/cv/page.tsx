"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const GITHUB_URL = "https://github.com/Junaid-Dawar-88";
const LINKEDIN_URL = "https://www.linkedin.com/in/junaid-iqbal-854813384/";
const EMAIL = "junaidiqbal.dev88@gmail.com";

const monoFont = "'Courier New', monospace";

const skillGroups = [
  { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js"] },
  { label: "Framework", items: ["Next.js", "App Router", "SSR / SSG"] },
  { label: "Backend", items: ["Node.js", "REST APIs", "Better Auth"] },
  { label: "Database", items: ["PostgreSQL", "Prisma ORM", "MongoDB", "SQL", "SQLite"] },
  { label: "Desktop", items: ["Tauri"] },
  { label: "Styling", items: ["Tailwind CSS", "Bootstrap"] },
  { label: "Tooling", items: ["Git", "GitHub", "Vercel", "VS Code", "Bun"] },
  { label: "AI", items: ["Prompt Engineering", "AI Integration"] },
];

const projects = [
  {
    name: "Hostel Management SaaS",
    stack: "Next.js · Prisma · Better Auth",
    desc: "Multi-tenant SaaS for hostel operations with role-based authentication, type-safe data access and a clean management dashboard.",
  },
  {
    name: "Developer Portfolio",
    stack: "Next.js · TypeScript · Tailwind",
    desc: "Editorial-style personal portfolio with animated scroll reveals, a responsive skills matrix, project showcase and a printable CV.",
  },
  {
    name: "Cross-Platform Desktop App",
    stack: "Tauri · React · TypeScript",
    desc: "Lightweight cross-platform desktop application built from web technologies with a fast, Rust-powered native shell.",
  },
];

const stats = [
  { value: "12", label: "GitHub Repos" },
  { value: "8+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
];

const CVPage = () => {
  const handleDownload = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div
      className="min-h-screen px-4 py-8 sm:py-12"
      style={{ backgroundColor: "var(--bg)", fontFamily: "Georgia, serif" }}
    >
      {/* Print + page setup — force light colors so the PDF always prints clean */}
      <style>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          :root, .dark {
            --bg: #ffffff;
            --bg-alt: #ffffff;
            --bg-soft: #f6f2ea;
            --text: #1a1a1a;
            --text-body: #333333;
            --text-muted: #666666;
            --text-faint: #999999;
            --border: #d4c9b8;
            --surface-invert: #1a1a1a;
            --on-invert: #ffffff;
            --accent: #c0392b;
            --accent-2: #c4440a;
          }
          html, body { background: #ffffff !important; }
          .no-print { display: none !important; }
          .cv-sheet { box-shadow: none !important; margin: 0 !important; }
        }
      `}</style>

      {/* Action bar */}
      <div className="no-print mx-auto mb-6 flex max-w-[820px] items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[12px] uppercase tracking-[0.12em] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          style={{ fontFamily: monoFont }}
        >
          ← Back to Portfolio
        </Link>
        <button
          onClick={handleDownload}
          className="group flex items-center gap-2 bg-[var(--surface-invert)] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--on-invert)] transition-colors hover:bg-[var(--accent)] hover:text-white"
          style={{ fontFamily: monoFont }}
        >
          Download CV (PDF)
          <span className="transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none">
            ↓
          </span>
        </button>
      </div>

      {/* CV sheet */}
      <article
        className="cv-sheet mx-auto max-w-[820px] overflow-hidden"
        style={{
          backgroundColor: "var(--bg-alt)",
          boxShadow: "0 24px 60px -12px rgba(0,0,0,0.25)",
        }}
      >
        {/* Accent top stripe */}
        <div className="h-2 w-full" style={{ backgroundColor: "var(--accent)" }} />

        <div className="p-8 sm:p-12">
          {/* Header */}
          <header className="flex items-start gap-6">
            <div
              className="shrink-0 p-1"
              style={{ border: "1px solid var(--text)", backgroundColor: "var(--bg-soft)" }}
            >
              <Image
                src="/junaid-iqbal.jpeg"
                alt="Junaid Iqbal"
                width={128}
                height={150}
                priority
                className="h-auto w-24 object-cover sm:w-30"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]"
                style={{ fontFamily: monoFont }}
              >
                Curriculum Vitae — 2026
              </p>
              <h1
                className="mb-1 text-4xl font-black leading-none sm:text-5xl"
                style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
              >
                Junaid Iqbal
              </h1>
              <p className="mb-4 text-lg italic text-[var(--accent)]">
                Full Stack Developer
              </p>

              <div
                className="flex flex-col gap-1 text-[11px] text-[var(--text-body)] sm:text-[12px]"
                style={{ fontFamily: monoFont }}
              >
                <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent)]">
                  ✉ {EMAIL}
                </a>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                    ↗ github.com/Junaid-Dawar-88
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                    in linkedin.com/in/junaid-iqbal
                  </a>
                </div>
                <a href="https://wa.me/923315995496" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                  ⌾ WhatsApp +92 331 5995496
                </a>
              </div>
            </div>
          </header>

          {/* Stats strip */}
          <div
            className="my-7 grid grid-cols-3 border-y"
            style={{ borderColor: "var(--border)" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-3 ${i > 0 ? "border-l" : ""}`}
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-xl font-black leading-none" style={{ color: "var(--accent)" }}>
                  {s.value}
                </p>
                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]"
                  style={{ fontFamily: monoFont }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Two-column body */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_248px]">
            {/* Left: profile, projects, education */}
            <div className="flex flex-col gap-7">
              <Section title="Profile">
                <p className="text-[14px] leading-[1.7] text-[var(--text-body)]">
                  Full stack developer with expertise in modern JavaScript and
                  TypeScript frameworks and a passion for building clean,
                  efficient and scalable web applications. Experienced across
                  the stack — from responsive React interfaces to Node.js APIs
                  and type-safe data layers with Prisma and PostgreSQL — and
                  comfortable shipping cross-platform desktop apps with Tauri.
                </p>
              </Section>

              <Section title="Selected Projects">
                <div className="flex flex-col gap-4">
                  {projects.map((p) => (
                    <div
                      key={p.name}
                      className="border-l-2 pl-3.5"
                      style={{ borderColor: "var(--accent)" }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h3 className="text-[14px] font-bold text-[var(--text)]">
                          {p.name}
                        </h3>
                        <span
                          className="text-[11px] text-[var(--accent)]"
                          style={{ fontFamily: monoFont }}
                        >
                          {p.stack}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] leading-[1.6] text-[var(--text-body)]">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Education">
                <h3 className="text-[14px] font-bold text-[var(--text)]">
                  Web &amp; Software Development
                </h3>
                <p
                  className="mb-1 text-[12px] text-[var(--text-muted)]"
                  style={{ fontFamily: monoFont }}
                >
                  Karachi, Pakistan
                </p>
                <p className="text-[13px] leading-[1.6] text-[var(--text-body)]">
                  Self-driven and course-based training in full stack
                  JavaScript &amp; TypeScript development, focused on React,
                  Next.js and modern backend practices.
                </p>
              </Section>
            </div>

            {/* Right: tinted sidebar panel */}
            <aside
              className="flex flex-col gap-6 self-start p-5"
              style={{ backgroundColor: "var(--bg-soft)", border: "1px solid var(--border)" }}
            >
              <Section title="Skills">
                <div className="flex flex-col gap-3">
                  {skillGroups.map((g) => (
                    <div key={g.label}>
                      <p
                        className="mb-1.5 text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]"
                        style={{ fontFamily: monoFont }}
                      >
                        {g.label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {g.items.map((item) => (
                          <span
                            key={item}
                            className="border px-2 py-0.5 text-[10px]"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--text-body)",
                              backgroundColor: "var(--bg-alt)",
                              fontFamily: monoFont,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Strengths">
                <ul className="flex flex-col gap-1.5">
                  {[
                    "Clean, maintainable code",
                    "Responsive UI design",
                    "API & database design",
                    "Performance & SEO",
                    "Fast, reliable delivery",
                  ].map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-[12px] text-[var(--text-body)]"
                    >
                      <span style={{ color: "var(--accent)" }}>→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Languages">
                <p className="text-[12px] leading-[1.6] text-[var(--text-body)]">
                  English — Professional
                  <br />
                  Urdu — Native
                </p>
              </Section>
            </aside>
          </div>

          {/* Footer */}
          <footer
            className="mt-8 flex justify-between border-t pt-4 text-[10px] uppercase tracking-[0.12em] text-[var(--text-faint)]"
            style={{ borderColor: "var(--border)", fontFamily: monoFont }}
          >
            <span>Junaid Iqbal — Full Stack Developer</span>
            <span>Available for new roles &amp; freelance</span>
          </footer>
        </div>
      </article>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="mb-3 flex items-center gap-2.5">
      <span className="h-0.5 w-4 shrink-0" style={{ backgroundColor: "var(--accent)" }} />
      <span
        className="text-[11px] font-bold uppercase tracking-[0.18em]"
        style={{ color: "var(--text)", fontFamily: monoFont }}
      >
        {title}
      </span>
    </h2>
    {children}
  </section>
);

export default CVPage;
