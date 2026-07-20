"use client";

import React from "react";
import { motion } from "motion/react";
import { Reveal, RevealItem } from "../components/reveal";
import { StarMark } from "../components/lattice";
import { ease } from "../lib/motion";

const channels = [
  {
    label: "Email",
    value: "junaidiqbal.dev88@gmail.com",
    href: "mailto:junaidiqbal.dev88@gmail.com",
  },
  {
    label: "GitHub",
    value: "Junaid-Dawar-88",
    href: "https://github.com/Junaid-Dawar-88",
  },
  {
    label: "LinkedIn",
    value: "Junaid Iqbal",
    href: "https://www.linkedin.com/in/junaid-iqbal-854813384/",
  },
  {
    label: "WhatsApp",
    value: "+92 331 5995496",
    href: "https://wa.me/923315995496",
  },
];

const trackPointer = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20" gap={0.09}>
        {/* The ask */}
        <div>
          <RevealItem variant="riseSm">
            <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-jade">
              <StarMark size={11} />
              Contact
            </p>
          </RevealItem>

          <RevealItem as="h2" className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-balance text-chalk">
            Let&apos;s build something
            <span className="text-jade"> worth shipping.</span>
          </RevealItem>

          <RevealItem as="p" variant="riseSm" className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-mist">
            I&apos;m open to full-time roles and freelance projects — and happy
            to talk through an idea before it becomes either one.
          </RevealItem>

          <RevealItem className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:junaidiqbal.dev88@gmail.com"
              className="group inline-flex items-center gap-2.5 rounded-full bg-jade px-7 py-3.5 font-semibold text-[var(--on-jade)] transition-opacity hover:opacity-85"
            >
              Send a message
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <span className="inline-flex items-center gap-2.5 font-mono text-xs text-mist">
              <span className="h-2 w-2 rounded-full bg-jade" />
              Usually replies within a day
            </span>
          </RevealItem>
        </div>

        {/* The channels */}
        <div className="flex flex-col gap-3">
          {channels.map((channel) => (
            <RevealItem key={channel.label} variant="riseSm">
              <motion.a
                href={channel.href}
                {...(channel.href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                onMouseMove={trackPointer}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease }}
                className="spotlight group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-line bg-surface/60 px-6 py-5 transition-colors duration-300 hover:border-jade/45"
              >
                <span className="relative min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {channel.label}
                  </span>
                  <span className="mt-1.5 block truncate text-[15px] font-medium text-chalk">
                    {channel.value}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="relative shrink-0 text-mist transition-all duration-300 group-hover:translate-x-1 group-hover:text-jade"
                >
                  →
                </span>
              </motion.a>
            </RevealItem>
          ))}
        </div>
      </Reveal>
    </div>

    <div className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 font-mono text-xs text-faint sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Junaid Iqbal</p>
        <p className="flex items-center gap-2">
          Built with Next.js in Peshawar
          <StarMark size={9} className="text-jade" />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
