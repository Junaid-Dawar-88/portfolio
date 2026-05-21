import React from "react";
import Link from "next/link";
import ThemeToggle from "../components/theme-toggle";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  return (
    <header className="relative z-50 w-full border-b border-[var(--border)] sm:sticky sm:top-0">
      {/* Translucent glass bar — blurs the content scrolling beneath it */}
      <div className="bg-(--bg-glass) backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-stretch justify-between">

          {/* Logo / name */}
          <Link
            href="/"
            className="anim-rise-sm group flex items-center gap-3 px-6 py-4 border-b sm:border-b-0 sm:border-r border-[var(--border)] w-full sm:w-auto justify-center sm:justify-start"
          >
            <span className="flex items-center justify-center w-9 h-9 shrink-0 bg-[var(--surface-invert)] text-[var(--on-invert)] font-[Georgia,serif] font-black text-lg leading-none transition-colors group-hover:bg-[var(--accent-2)] group-hover:text-white">
              J
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-[Georgia,serif] text-lg sm:text-xl font-black tracking-[-0.02em] text-[var(--text)]">
                Junaid{" "}
                <span className="italic text-[var(--accent-2)]">Iqbal.</span>
              </span>
              <span className="text-[8px] tracking-[3px] text-[var(--text-muted)] uppercase mt-[3px] font-['Courier_New',monospace]">
                Full Stack Developer
              </span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="anim-rise-sm anim-d1 flex flex-col sm:flex-row flex-1 justify-center w-full sm:w-auto">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-4 sm:px-9 py-3 sm:py-6 text-[11px] sm:text-[12px] tracking-[2px] sm:tracking-[3px] uppercase text-[var(--text)] border-b sm:border-b-0 sm:border-r border-[var(--border)] transition-colors hover:text-[var(--accent-2)] text-center"
              >
                {item.label}
                {/* Sliding underline on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-4 sm:inset-x-9 bottom-2 sm:bottom-4 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                  style={{ backgroundColor: "var(--accent-2)" }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + theme toggle */}
          <div className="anim-rise-sm anim-d2 px-6 py-4 border-t sm:border-t-0 sm:border-l border-[var(--border)] w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="group flex flex-1 sm:flex-none items-center justify-center gap-2 bg-[var(--accent-2)] text-white text-[11px] sm:text-[12px] tracking-[2px] px-6 py-2.5 uppercase transition-opacity hover:opacity-90"
            >
              Hire Me
              <span className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll-progress indicator */}
      <span
        aria-hidden="true"
        className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </header>
  );
};

export default Header;
