import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextMove from "./text-movement/text-move";
import Skills from "./skills/skill";
import SelectProject from "./select-project/select-project";
import Footer from "./footer/footer";

const Home = () => {
  return (
    <div className="font-[Times_New_Roman,Georgia,serif] bg-[var(--bg)] min-h-screen text-[var(--text)]">

      <header className="anim-fade flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center px-4 sm:px-8 lg:px-10 py-3 border-b border-[var(--border)] tracking-[0.12em] text-[10px] sm:text-[11px] uppercase text-[var(--text-muted)] font-['Courier_New',monospace] text-center sm:text-left">
        <span>Peshawar, Pakistan</span>
        <span>Vol. 1 — Full Stack Developer Portfolio</span>
        <span>Open to Opportunities</span>
      </header>

      <div
        id="about"
        className="grid grid-cols-1 lg:grid-cols-[320px_1fr_280px] min-h-[calc(100vh-45px)] scroll-mt-20"
      >

        <aside className="anim-rise anim-d1 order-2 lg:order-1 px-5 sm:px-8 lg:px-[30px] py-8 lg:py-[40px] border-t lg:border-t-0 lg:border-r border-[var(--border)] flex flex-col gap-8">

          <div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[var(--accent)] font-['Courier_New',monospace] mb-2">
              Developer Profile
            </p>
            <div className="h-[1px] bg-[var(--text)] mb-4 w-[80%]" />

            <div className="border border-[var(--text)] p-[6px] mb-2 bg-[var(--bg-soft)]">
              <Image
                src="/junaid-iqbal.jpeg"
                alt="Junaid Iqbal — Full Stack Developer"
                width={500}
                height={600}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-faint)] font-['Courier_New',monospace] mb-4">
              Junaid Iqbal
            </p>

            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-[var(--text-body)]">
              Junaid Iqbal is a full stack developer with expertise in modern
              JavaScript frameworks and a passion for building clean, efficient
              web applications.
            </p>
          </div>

          <div className="border border-[var(--border)] px-4 py-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] font-['Courier_New',monospace] mb-2">
              Current Status
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#27ae60]" />
              <span className="text-[13px] text-[var(--text-body)]">
                Available for new roles & freelance
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            {[
              {
                label: "GitHub Profile",
                href: "https://github.com/Junaid-Dawar-88",
                external: true,
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/junaid-iqbal-854813384/",
                external: true,
              },
              { label: "Download CV", href: "/cv", external: false },
            ].map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block py-3 border-b border-[var(--border)] text-[13px] text-[var(--text)] tracking-[0.02em] hover:text-[var(--accent)]"
              >
                → {label}
              </a>
            ))}
          </div>

        </aside>

        <main className="order-1 lg:order-2 px-5 sm:px-10 lg:px-[60px] py-10 lg:py-[50px] relative overflow-hidden flex flex-col justify-start">

          <div className="anim-fade absolute right-[-10px] lg:right-[-20px] top-1/2 -translate-y-1/2 text-[180px] sm:text-[260px] lg:text-[420px] font-black text-[var(--text)] opacity-[0.05] font-serif leading-none select-none pointer-events-none tracking-[-0.05em]">
            J
          </div>

          <p className="anim-rise text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[var(--text-faint)] font-['Courier_New',monospace] mb-6 lg:mb-[30px]">
            Portfolio — 2025
          </p>

          <h1 className="anim-rise anim-d1 leading-[0.95] mb-6">
            <span className="block text-[clamp(48px,12vw,120px)] font-black font-serif text-[var(--text)] tracking-[-0.02em]">
              Junaid
            </span>
            <span className="block text-[clamp(48px,12vw,120px)] font-black font-serif text-[var(--accent)] italic tracking-[-0.02em]">
              Iqbal.
            </span>
          </h1>

          <div className="anim-rise anim-d2 border-l-[3px] border-[var(--accent)] pl-4 sm:pl-5 mb-8 lg:mb-12 max-w-full sm:max-w-[460px]">
            <p className="text-[16px] sm:text-[18px] italic text-[var(--text-body)] leading-[1.5] font-serif">
              Building fast, scalable web experiences with React, Next.js &
              Node.js
            </p>
          </div>

          <div className="anim-rise anim-d3 flex flex-col sm:flex-row gap-4 sm:gap-4 items-start sm:items-center">
            <Link
              href="/#projects"
              className="w-full sm:w-auto text-center bg-[var(--surface-invert)] text-[var(--on-invert)] px-6 sm:px-8 py-4 text-[12px] tracking-[0.12em] uppercase font-['Courier_New',monospace] font-semibold hover:bg-[var(--accent)] hover:text-white transition"
            >
              View My Work
            </Link>

            <Link
              href="/#contact"
              className="w-full sm:w-auto text-center bg-transparent text-[var(--text)] border border-[var(--text)] px-6 sm:px-8 py-4 text-[12px] tracking-[0.12em] uppercase font-['Courier_New',monospace] font-semibold hover:bg-[var(--surface-invert)] hover:text-[var(--on-invert)] transition"
            >
              Get In Touch
            </Link>
          </div>

        </main>

        <aside className="anim-rise anim-d3 order-3 px-5 sm:px-8 lg:px-[30px] py-8 lg:py-[40px] border-t lg:border-t-0 lg:border-l border-[var(--border)] flex flex-col gap-10">

          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-faint)] font-['Courier_New',monospace] mb-4">
              Core Technologies
            </p>
            <div className="h-[1px] bg-[var(--border)] mb-5" />

            {[
              { name: "React.js", level: "Advanced" },
              { name: "Next.js", level: "Advanced" },
              { name: "TypeScript", level: "Advanced" },
              { name: "Node.js", level: "Advanced" },
              { name: "JavaScript", level: "Expert" },
              { name: "Prisma ORM", level: "Advanced" },
              { name: "Tailwind CSS", level: "Advanced" },
              { name: "HTML / CSS", level: "Expert" },
            ].map(({ name, level }) => (
              <div
                key={name}
                className="flex justify-between items-center py-3 border-b border-[var(--border-soft)]"
              >
                <span className="text-[13px]">{name}</span>
                <span className="text-[11px] text-[var(--accent)] font-['Courier_New',monospace]">
                  {level}
                </span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-faint)] font-['Courier_New',monospace] mb-4">
              Quick Stats
            </p>
            <div className="h-[1px] bg-[var(--border)] mb-5" />

            {[
              { label: "Projects Built", value: "10+" },
              { label: "Technologies", value: "12+" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-center py-3 border-b border-[var(--border-soft)]"
              >
                <span className="text-[13px]">{label}</span>
                <span className="text-[13px] text-[var(--accent)] font-bold font-['Courier_New',monospace]">
                  {value}
                </span>
              </div>
            ))}
          </div>

        </aside>

      </div>
       <TextMove />
       <section id="skills" className="scroll-mt-20">
         <Skills />
       </section>
       <section id="projects" className="scroll-mt-20">
         <SelectProject />
       </section>
       <section id="contact" className="scroll-mt-20">
         <Footer />
       </section>
    </div>
  );
};

export default Home;
