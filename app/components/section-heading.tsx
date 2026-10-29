"use client";

import React, { useRef } from "react";
import { Reveal, RevealItem } from "./reveal";
import { StarMark } from "./lattice";
import { gsap, SplitText, useGSAP, gsapEase, motionOK } from "../lib/gsap";

/**
 * Section headings are marked with the lattice star rather than an index —
 * these sections aren't a sequence, so numbering them would imply an order
 * that isn't there.
 */
const SectionHeading = ({
  eyebrow,
  title,
  lede,
  as = "h2",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  /** h1 when the heading opens its own page. */
  as?: "h1" | "h2";
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const Heading = as;

  // GSAP: the title's words rise out of a mask as it scrolls into view.
  useGSAP(() => {
    gsap.set(titleRef.current, { autoAlpha: 1 });
    gsap.matchMedia().add(motionOK, () => {
      SplitText.create(titleRef.current, {
        type: "words",
        mask: "words",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.words, {
            yPercent: 105,
            duration: 1,
            ease: gsapEase,
            stagger: 0.06,
            scrollTrigger: { trigger: titleRef.current, start: "top 88%", once: true },
          }),
      });
    });
  });

  return (
    <Reveal className="mb-12 sm:mb-16">
      <RevealItem variant="riseSm">
        <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-jade">
          <StarMark size={11} />
          {eyebrow}
        </p>
      </RevealItem>

      <Heading
        ref={titleRef}
        className="invisible mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-chalk sm:text-5xl md:text-6xl"
      >
        {title}
      </Heading>

      {lede && (
        <RevealItem as="p" variant="riseSm" className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-mist">
          {lede}
        </RevealItem>
      )}

      <RevealItem variant="fade" className="rule mt-10" />
    </Reveal>
  );
};

export default SectionHeading;
