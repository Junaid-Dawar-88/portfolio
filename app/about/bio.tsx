"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";

/* What a client gets from working with me — outcomes first, tools second. */
const promises = [
  { label: "Clear updates", value: "Progress you can see, every few days" },
  { label: "Fast & mobile-first", value: "Pages that load quickly on any phone" },
  { label: "Yours to keep", value: "Full source code and a handover walkthrough" },
  { label: "After launch", value: "Help with fixes and small changes once you're live" },
];

/** Short, client-focused bio for the home page; the full story lives on /about. */
const Bio = () => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      eyebrow="About"
      title={
        <>
          A developer who cares about{" "}
          <span className="text-jade">your results, not just the code</span>
        </>
      }
    />

    <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
      <Reveal gap={0.09}>
        <RevealItem as="p" className="text-xl leading-relaxed text-pretty text-chalk">
          Hi, I&apos;m Junaid — a full stack developer who turns your idea into a
          working website or app that customers enjoy using.
        </RevealItem>
        <RevealItem as="p" className="mt-6 text-lg leading-relaxed text-pretty text-mist">
          I handle everything from design to launch, so you have one person to
          talk to instead of a team to manage. I explain things in plain
          language, share progress as I go, and build with modern tools like
          Next.js so your site stays fast, secure and easy to grow.
        </RevealItem>
        <RevealItem as="p" className="mt-6 text-lg leading-relaxed text-pretty text-mist">
          My goal is simple: deliver on time, on budget, and leave you with
          something you&apos;re proud to show your customers.
        </RevealItem>
        <RevealItem className="mt-10">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2.5 font-semibold text-chalk transition-colors hover:text-jade"
          >
            More about how I work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </RevealItem>
      </Reveal>

      <Reveal as="ul" className="grid gap-3 self-start" gap={0.07}>
        {promises.map((item) => (
          <RevealItem
            as="li"
            variant="riseSm"
            key={item.label}
            className="rounded-2xl border border-line bg-surface/60 px-6 py-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-jade">
              {item.label}
            </p>
            <p className="mt-1.5 text-[15px] font-medium text-chalk">{item.value}</p>
          </RevealItem>
        ))}
      </Reveal>
    </div>
  </div>
);

export default Bio;
