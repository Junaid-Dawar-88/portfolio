"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import Tilt3D from "../components/tilt-3d";
import { ease } from "../lib/motion";

type Project = {
  title: string;
  kind: string;
  summary: string;
  techs: string[];
  live?: string;
  source?: string;
  featured?: boolean;
};

const GITHUB = "https://github.com/Junaid-Dawar-88";

const projects: Project[] = [
  {
    title: "Life Star Hostel Management",
    kind: "Full stack · SaaS",
    summary:
      "A multi-tenant hostel management platform with organisations, email, Google and two-factor sign-in through Better Auth, Stripe subscription billing, and a built-in AI assistant with streaming chat.",
    techs: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Better Auth", "Stripe", "Vercel AI SDK"],
    live: "https://life-star-hostel-management.vercel.app",
    source: `${GITHUB}/life-star-hostel-management`,
    featured: true,
  },
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
    featured: true,
  },
  {
    title: "MMA Orpin",
    kind: "Frontend · Landing page",
    summary:
      "A bold, responsive landing page built to make the service offering legible at a glance.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://mma-orpin.vercel.app/",
    featured: true,
  },
  {
    title: "XMP Delta",
    kind: "Frontend · Marketing",
    summary:
      "A marketing site organised around visual hierarchy — features first, conversion close behind.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://xmp-delta.vercel.app/",
    featured: true,
  },
  {
    title: "Hospital Management",
    kind: "Backend · Node CLI",
    summary:
      "Patients, doctors and appointments managed from an interactive terminal menu, with controllers over a Prisma data layer.",
    techs: ["Node.js", "TypeScript", "Prisma"],
    source: `${GITHUB}/Hospital-Management-System`,
  },
  {
    title: "Book Library",
    kind: "Full stack · Bun",
    summary:
      "Track books, members and borrowing records in a React app served by Bun, stored in SQLite through Prisma.",
    techs: ["Bun", "React", "Tailwind CSS", "Prisma", "SQLite"],
    source: `${GITHUB}/Book-Library-Managment`,
  },
  {
    title: "Pet Adoption Center",
    kind: "Backend · Node CLI",
    summary:
      "Register pets, record adoptions and search the shelter from the command line, persisted in SQLite.",
    techs: ["Node.js", "SQLite"],
    source: `${GITHUB}/Pet_Adoption_Center_Manager`,
  },
];

const trackPointer = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const ProjectCard = ({ project }: { project: Project }) => (
  <RevealItem as="article" className={project.featured ? "lg:col-span-3" : "lg:col-span-2"}>
    <Tilt3D max={6} glare className="h-full">
      <motion.a
        href={project.live ?? project.source}
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
            {project.live ? "Visit the live site" : "View the source"}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </span>
        </div>
      </motion.a>
    </Tilt3D>
  </RevealItem>
);

export const projectCount = projects.length;

const SelectProject = ({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        as={headingAs}
        eyebrow="Selected work"
        title={
          <>
            {projects.length} projects, from SaaS to{" "}
            <span className="text-marigold">the command line</span>
          </>
        }
        lede="Live cards open the running app; the rest open the source on GitHub — no screenshots standing in for working software."
      />

      <Reveal className="grid gap-4 lg:grid-cols-6" gap={0.09}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Reveal>

      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 inline-flex items-center gap-2.5 rounded-full border border-line px-7 py-3.5 font-semibold text-chalk transition-colors hover:border-jade hover:text-jade"
      >
        More on GitHub
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};

export default SelectProject;
