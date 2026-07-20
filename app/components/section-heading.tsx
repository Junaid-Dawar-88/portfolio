"use client";

import React from "react";
import { Reveal, RevealItem } from "./reveal";
import { StarMark } from "./lattice";

/**
 * Section headings are marked with the lattice star rather than an index —
 * these sections aren't a sequence, so numbering them would imply an order
 * that isn't there.
 */
const SectionHeading = ({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) => (
  <Reveal className="mb-12 sm:mb-16">
    <RevealItem variant="riseSm">
      <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-jade">
        <StarMark size={11} />
        {eyebrow}
      </p>
    </RevealItem>

    <RevealItem as="h2" className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-chalk sm:text-5xl md:text-6xl">
      {title}
    </RevealItem>

    {lede && (
      <RevealItem as="p" variant="riseSm" className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-mist">
        {lede}
      </RevealItem>
    )}

    <RevealItem variant="fade" className="rule mt-10" />
  </Reveal>
);

export default SectionHeading;
