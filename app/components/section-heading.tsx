"use client";

import React from "react";
import { Reveal, RevealItem } from "./reveal";
import { PrismMark } from "./aurora";

/**
 * Every section opens the same way: a mono eyebrow behind the prism
 * mark, a display title, an optional lede, then a fading rule. Repeating
 * the shape is what makes the page scan as one document.
 */
const SectionHeading = ({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
}) => (
  <Reveal className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}>
    <RevealItem variant="riseSm">
      <p
        className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.24em] text-aqua ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <PrismMark size={13} />
        {eyebrow}
      </p>
    </RevealItem>

    <RevealItem
      as="h2"
      className={`mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] text-text sm:text-5xl md:text-6xl ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {title}
    </RevealItem>

    {lede && (
      <RevealItem
        as="p"
        variant="riseSm"
        className={`mt-5 max-w-xl text-base leading-relaxed text-dim ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {lede}
      </RevealItem>
    )}

    <RevealItem variant="fade" className="rule mt-10" />
  </Reveal>
);

export default SectionHeading;

/**
 * An accent word set in the editorial serif italic. Used sparingly —
 * one per heading — so it stays an emphasis rather than a style.
 */
export const Accent = ({ children }: { children: React.ReactNode }) => (
  <em className="font-editorial font-normal italic tracking-[-0.01em] aurora-text">
    {children}
  </em>
);
