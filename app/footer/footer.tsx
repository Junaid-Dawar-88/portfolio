"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal, RevealItem } from "../components/reveal";
import { PrismMark } from "../components/aurora";
import { ease, trackPointer } from "../lib/motion";
import { profile } from "../lib/data";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.handle, href: profile.github },
  { label: "LinkedIn", value: profile.name, href: profile.linkedin },
  { label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
];

const Footer = () => (
  <footer className="border-t border-edge">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal
        className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
        gap={0.09}
      >
        {/* The ask */}
        <div>
          <RevealItem variant="riseSm">
            <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.24em] text-aqua">
              <PrismMark size={13} />
              Contact
            </p>
          </RevealItem>

          <RevealItem
            as="h2"
            className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-text"
          >
            Let&apos;s build something{" "}
            <em className="font-editorial font-normal italic aurora-text">
              worth shipping.
            </em>
          </RevealItem>

          <RevealItem
            as="p"
            variant="riseSm"
            className="mt-6 max-w-md text-lg leading-relaxed text-dim"
          >
            I&apos;m open to full-time roles and freelance projects — and happy
            to talk through an idea before it becomes either one.
          </RevealItem>

          <RevealItem className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-iris to-aqua px-7 py-3.5 font-semibold text-(--on-accent) transition-opacity hover:opacity-90"
            >
              Send a message
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2.5 rounded-full border border-edge px-7 py-3.5 font-semibold text-text transition-colors hover:border-aqua hover:text-aqua"
            >
              Download CV
            </Link>
          </RevealItem>

          <RevealItem
            variant="fade"
            className="mt-8 inline-flex items-center gap-2.5 font-mono text-xs text-dim"
          >
            <span className="h-2 w-2 rounded-full bg-aqua" />
            Usually replies within a day
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
                className="spotlight aurora-edge group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-edge bg-panel/60 px-6 py-5"
              >
                <span className="relative min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {channel.label}
                  </span>
                  <span className="mt-1.5 block truncate text-[15px] font-medium text-text">
                    {channel.value}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="relative shrink-0 text-dim transition-all duration-300 group-hover:translate-x-1 group-hover:text-aqua"
                >
                  →
                </span>
              </motion.a>
            </RevealItem>
          ))}
        </div>
      </Reveal>
    </div>

    <div className="border-t border-edge">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 font-mono text-xs text-faint sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="flex items-center gap-2">
          Built with Next.js in {profile.location.split(",")[0]}
          <PrismMark size={10} className="text-iris" />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
