"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import { ease } from "../lib/motion";

type Project = {
  title: string;
  kind: string;
  summary: string;
  techs: string[];
  live: string;
  source?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Digital Invoicing",
    kind: "Full stack · Productivity",
    summary:
      "Generate invoices, manage clients, and track payments in one place. Built around a type-safe tRPC layer so the client and server never drift apart.",
    techs: ["Next.js", "TypeScript", "tRPC", "Zod", "PostgreSQL"],
    live: "https://digital-invoicing.vercel.app/",
    featured: true,
  },
  {
    title: "School System",
    kind: "Full stack · Education",
    summary:
      "Student, class, and administration records for a school, backed by Prisma and PostgreSQL with a shadcn/ui interface staff can learn in a day.",
    techs: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui"],
    live: "https://school-system-ivory.vercel.app/",
    featured: true,
  },
  {
    title: "E-Commerce Store",
    kind: "Full stack · Commerce",
    summary:
      "Product browsing, cart, and checkout with a responsive storefront tuned for fast first loads.",
    techs: ["Next.js", "React", "Prisma", "PostgreSQL"],
    live: "https://e-commerce-web-gamma-two.vercel.app",
  },
  {
    title: "MMA Orpin",
    kind: "Frontend · Landing page",
    summary:
      "A bold, responsive landing page built to make the service offering legible at a glance.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://mma-orpin.vercel.app/",
  },
  {
    title: "XMP Delta",
    kind: "Frontend · Marketing",
    summary:
      "A marketing site organised around visual hierarchy — features first, conversion close behind.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://xmp-delta.vercel.app/",
  },
];

const trackPointer = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const ProjectCard = ({ project }: { project: Project }) => (
  <RevealItem as="article" className={project.featured ? "lg:col-span-3" : "lg:col-span-2"}>
    <motion.a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={trackPointer}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.32, ease }}
      className="spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 p-7 transition-colors duration-300 hover:border-jade/45 sm:p-9"
    >
      <div className="relative flex flex-1 flex-col">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-jade">
          {project.kind}
        </p>

        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-chalk sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-pretty text-mist">
          {project.summary}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface-2/60 px-3 py-1 font-mono text-xs text-mist"
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-chalk">
          Visit the live site
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>
    </motion.a>
  </RevealItem>
);

const SelectProject = () => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      eyebrow="Selected work"
      title={
        <>
          Five projects, each one{" "}
          <span className="text-marigold">shipped and live</span>
        </>
      }
      lede="Every card links straight to the running app — no screenshots standing in for working software."
    />

    <Reveal className="grid gap-4 lg:grid-cols-6" gap={0.09}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Reveal>
  </div>
);

export default SelectProject;
