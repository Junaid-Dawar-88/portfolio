"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";

type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Owner, Khan Traders" */
  role: string;
  /** Where the review came from, e.g. "Freelancer.com". */
  source?: string;
  /** Link to the original review, so visitors can verify it. */
  href?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

/*
 * Add real client reviews here as you receive them — copy the wording
 * exactly, and link the original on Freelancer.com when you can.
 * While this list is empty, the section shows an invitation instead.
 */
const testimonials: Testimonial[] = [];

const Stars = ({ rating }: { rating: number }) => (
  <p className="text-marigold" aria-label={`${rating} out of 5 stars`}>
    {"★".repeat(rating)}
    <span className="text-line">{"★".repeat(5 - rating)}</span>
  </p>
);

const Card = ({ t }: { t: Testimonial }) => (
  <RevealItem as="li" className="h-full">
    <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface/60 p-7">
      {t.rating && <Stars rating={t.rating} />}
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-pretty text-chalk">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-5">
        <p className="font-semibold text-chalk">{t.name}</p>
        <p className="mt-0.5 text-sm text-mist">
          {t.role}
          {t.source &&
            (t.href ? (
              <>
                {" · "}
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-jade">
                  {t.source}
                </a>
              </>
            ) : (
              ` · ${t.source}`
            ))}
        </p>
      </figcaption>
    </figure>
  </RevealItem>
);

const Testimonials = () => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      eyebrow="Testimonials"
      title={
        <>
          What clients <span className="text-jade">say</span>
        </>
      }
    />

    {testimonials.length > 0 ? (
      <Reveal as="ul" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
        {testimonials.map((t) => (
          <Card key={t.name} t={t} />
        ))}
      </Reveal>
    ) : (
      <Reveal>
        <RevealItem className="flex flex-col items-start gap-6 rounded-3xl border border-dashed border-line bg-surface/40 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <p className="font-display text-2xl font-bold tracking-tight text-chalk">
              Your review could be the first one here.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-pretty text-mist">
              I&apos;m new to freelancing on Freelancer.com, which means early
              clients get my full attention and extra care on every detail.
              Until the reviews arrive, the live projects above show the
              quality you can expect.
            </p>
          </div>
          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-line px-7 py-3.5 font-semibold text-chalk transition-colors hover:border-jade hover:text-jade"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </RevealItem>
      </Reveal>
    )}
  </div>
);

export default Testimonials;
