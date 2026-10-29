"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import Tilt3D from "../components/tilt-3d";
import { projectCount } from "../select-project/select-project";
import { ease } from "../lib/motion";

const facts = [
  { label: "Based in", value: "Peshawar, Pakistan" },
  { label: "Role", value: "Full stack developer" },
  { label: "Projects", value: `${projectCount} on GitHub` },
  { label: "Open to", value: "Roles and freelance" },
];

const offerings = [
  {
    icon: "</>",
    title: "Web apps",
    body: "Next.js and React front ends on a Node and tRPC back end — SaaS platforms, dashboards, and storefronts.",
  },
  {
    icon: "▯",
    title: "Mobile apps",
    body: "React Native apps that share types and logic with the web product instead of reinventing them.",
  },
  {
    icon: "▭",
    title: "Desktop apps",
    body: "Tauri apps that ship a small, fast binary with a web interface and native access underneath.",
  },
  {
    icon: "ϟ",
    title: "Fast & scalable",
    body: "Server rendering, lean bundles, and PostgreSQL schemas designed to hold up as the data grows.",
  },
];

const principles = [
  {
    title: "Type-safe end to end",
    body: "Zod at the edges and tRPC in the middle, so the client and server can't quietly drift apart.",
  },
  {
    title: "Schema first",
    body: "I model the data in Prisma before I draw a screen. Migrations always, hand-edited tables never.",
  },
  {
    title: "Shipped, not mocked",
    body: "Work goes live on Vercel early, so feedback comes from running software rather than screenshots.",
  },
];

const trackPointer = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const About = () => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      as="h1"
      eyebrow="About"
      title={
        <>
          I build the whole product,{" "}
          <span className="text-jade">not just one layer of it</span>
        </>
      }
    />

    {/* Portrait and bio */}
    <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="mx-auto w-full max-w-md"
      >
        <Tilt3D max={10} glare radius="28px">
          <div className="rounded-[28px] border border-line bg-surface p-2 shadow-[0_40px_80px_-30px_var(--halo)]">
            <Image
              src="/junaid-iqbal.png"
              alt="Junaid Iqbal, full stack developer, at a desk with code on screen"
              width={1254}
              height={1254}
              sizes="(max-width: 1024px) 448px, 35vw"
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>
        </Tilt3D>
      </motion.div>

      <Reveal gap={0.09}>
        <RevealItem as="p" className="text-xl leading-relaxed text-pretty text-chalk">
          I&apos;m Junaid Iqbal, a full stack developer in Peshawar. I take
          products from an empty repo to a live URL — the database schema, the
          API, and the interface people actually touch.
        </RevealItem>
        <RevealItem as="p" className="mt-6 text-lg leading-relaxed text-pretty text-mist">
          Most of my work is in TypeScript: Next.js and React on the front,
          Node.js and tRPC on the back, Prisma over PostgreSQL for the data.
          When a product needs to leave the browser, I reach for Tauri on the
          desktop and React Native on mobile. I also build AI features with
          the Vercel AI SDK and OpenAI, and lean on prompt engineering and AI
          coding tools to ship faster.
        </RevealItem>
        <RevealItem as="p" className="mt-6 text-lg leading-relaxed text-pretty text-mist">
          Recent work includes a multi-tenant hostel management SaaS with
          Stripe billing, a school management system, an invoicing app, and a
          handful of Node command-line tools.
        </RevealItem>

        <RevealItem>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-chalk">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </RevealItem>

        <RevealItem className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 rounded-full bg-jade px-7 py-3.5 font-semibold text-(--on-jade) transition-opacity hover:opacity-85"
          >
            See the work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center gap-2.5 rounded-full border border-line px-7 py-3.5 font-semibold text-chalk transition-colors hover:border-jade hover:text-jade"
          >
            Download CV
          </Link>
        </RevealItem>
      </Reveal>
    </div>

    {/* What I build */}
    <div className="mt-28 sm:mt-36">
      <SectionHeading
        eyebrow="What I build"
        title={
          <>
            One stack, <span className="text-marigold">three platforms</span>
          </>
        }
      />
      <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
        {offerings.map((item) => (
          <RevealItem key={item.title} className="h-full">
            <Tilt3D max={8} glare className="h-full">
              <div
                onMouseMove={trackPointer}
                className="spotlight relative h-full overflow-hidden rounded-3xl border border-line bg-surface/60 p-7 transition-colors duration-300 hover:border-jade/45"
              >
                <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2 font-mono text-lg text-jade">
                  {item.icon}
                </span>
                <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-chalk">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-pretty text-mist">
                  {item.body}
                </p>
              </div>
            </Tilt3D>
          </RevealItem>
        ))}
      </Reveal>
    </div>

    {/* How I work */}
    <div className="mt-28 sm:mt-36">
      <SectionHeading
        eyebrow="How I work"
        title={
          <>
            Three habits that keep <span className="text-jade">projects shippable</span>
          </>
        }
      />
      <Reveal as="ul" className="grid gap-10 md:grid-cols-3" gap={0.09}>
        {principles.map((item, i) => (
          <RevealItem as="li" key={item.title} className="border-t border-line pt-6">
            <p className="font-mono text-xs text-faint">0{i + 1}</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-chalk">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-pretty text-mist">{item.body}</p>
          </RevealItem>
        ))}
      </Reveal>
    </div>
  </div>
);

export default About;
