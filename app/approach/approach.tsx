"use client";

import React from "react";
import SectionHeading, { Accent } from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import { approach, profile } from "../lib/data";

/**
 * The method behind the project list. A vertical rail connects the four
 * steps; where the browser supports scroll-driven animation the rail
 * draws itself as the section scrolls past, and where it does not the
 * rail is simply already there.
 */
const Approach = () => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      eyebrow="How I work"
      title={
        <>
          Four habits that keep a project <Accent>from going sideways</Accent>
        </>
      }
      lede={profile.summary}
    />

    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      {/* Steps */}
      <Reveal as="ol" className="relative" gap={0.1}>
        {/* The rail */}
        <span
          aria-hidden="true"
          className="rail absolute bottom-6 left-[27px] top-6 w-px bg-linear-to-b from-iris via-aqua to-transparent"
        />

        {approach.map((item) => (
          <RevealItem
            key={item.step}
            as="li"
            variant="slide"
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-edge bg-panel font-mono text-sm text-aqua">
              {item.step}
            </span>
            <div className="pt-2">
              <h3 className="font-display text-lg font-bold text-text">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-dim">
                {item.body}
              </p>
            </div>
          </RevealItem>
        ))}
      </Reveal>

      {/* Pull quote */}
      <Reveal className="lg:pt-4">
        <RevealItem variant="pop">
          <figure className="drift relative overflow-hidden rounded-3xl border border-edge bg-panel/50 p-8 sm:p-10">
            <blockquote className="font-editorial text-2xl italic leading-snug text-text sm:text-3xl">
              &ldquo;The schema is the product. Everything above it is an
              opinion about how to read it.&rdquo;
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              — the rule I keep coming back to
            </figcaption>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-2">
              {[
                { k: "Primary stack", v: "Next.js · tRPC · Prisma" },
                { k: "Database", v: "PostgreSQL · Neon" },
                { k: "Auth", v: "Better Auth · 2FA · OAuth" },
                { k: "Deployed on", v: "Vercel · Docker" },
              ].map((row) => (
                <div key={row.k} className="bg-panel px-5 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    {row.k}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-text">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </figure>
        </RevealItem>
      </Reveal>
    </div>
  </div>
);

export default Approach;
