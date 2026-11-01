"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import { ease } from "../lib/motion";

type Project = {
  title: string;
  kind: string;
  /** One line: the problem the project solves for its users. */
  problem: string;
  techs: string[];
  live?: string;
  source?: string;
  /** Screenshot in /public/projects, 1280×640. Projects without one render as compact cards. */
  image?: string;
};

const GITHUB = "https://github.com/Junaid-Dawar-88";

const projects: Project[] = [
  {
    title: "Life Star Hostel Management",
    kind: "SaaS · Business app",
    problem:
      "Hostel owners run rooms, residents, bookings and billing from one dashboard instead of paper registers, with Stripe subscriptions and an AI assistant built in.",
    techs: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Stripe", "Vercel AI SDK"],
    live: "https://life-star-hostel-management.vercel.app",
    source: `${GITHUB}/life-star-hostel-management`,
    image: "/projects/hostel.png",
  },
  {
    title: "E-Commerce Store",
    kind: "E-commerce",
    problem:
      "A shoe shop gets a fast online storefront where customers browse, add to cart and check out in seconds on any phone.",
    techs: ["Next.js", "React", "Prisma", "PostgreSQL"],
    live: "https://e-commerce-web-gamma-two.vercel.app",
    source: `${GITHUB}/e-commerce-web`,
    image: "/projects/ecommerce.png",
  },
  {
    title: "School Management System",
    kind: "Web app · Education",
    problem:
      "Admins, teachers and parents share one platform for classes, attendance and complaints, replacing scattered spreadsheets and phone calls.",
    techs: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui"],
    live: "https://school-system-ivory.vercel.app/",
    source: `${GITHUB}/school-system`,
    image: "/projects/school.png",
  },
  {
    title: "MMA Fighter Management",
    kind: "Web app · Sports",
    problem:
      "Promoters, managers and fighters handle events, matchmaking and signed contracts in one secure platform instead of email threads.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://mma-orpin.vercel.app/",
    image: "/projects/mma.png",
  },
  {
    title: "Digital Invoicing",
    kind: "Business app · Finance",
    problem:
      "Small businesses create invoices, manage clients and track payments in one place, so nothing slips through the cracks.",
    techs: ["Next.js", "TypeScript", "tRPC", "Zod", "PostgreSQL"],
    live: "https://digital-invoicing.vercel.app/",
    image: "/projects/invoicing.png",
  },
  {
    title: "XMP Delta",
    kind: "Business app",
    problem:
      "A secure, account-based business workspace with email and Google or Microsoft single sign-on, so teams log in with what they already use.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://xmp-delta.vercel.app/",
    image: "/projects/xmp.png",
  },
  {
    title: "Hospital Management",
    kind: "Backend · Node CLI",
    problem: "Patients, doctors and appointments managed from an interactive terminal menu over a Prisma data layer.",
    techs: ["Node.js", "TypeScript", "Prisma"],
    source: `${GITHUB}/Hospital-Management-System`,
  },
  {
    title: "Book Library",
    kind: "Full stack · Bun",
    problem: "Books, members and borrowing records tracked in a React app served by Bun and stored in SQLite.",
    techs: ["Bun", "React", "Prisma", "SQLite"],
    source: `${GITHUB}/Book-Library-Managment`,
  },
  {
    title: "Pet Adoption Center",
    kind: "Backend · Node CLI",
    problem: "Register pets, record adoptions and search the shelter from the command line.",
    techs: ["Node.js", "SQLite"],
    source: `${GITHUB}/Pet_Adoption_Center_Manager`,
  },
];

const featured = projects.filter((p) => p.image);
const smaller = projects.filter((p) => !p.image);

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Live demo of ${project.title} (opens in a new tab)`}
        className="group/link inline-flex items-center gap-2 rounded-full bg-jade px-5 py-2.5 text-sm font-semibold text-(--on-jade) transition-opacity hover:opacity-85"
      >
        Live demo
        <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">↗</span>
      </a>
    )}
    {project.source && (
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Source code of ${project.title} on GitHub (opens in a new tab)`}
        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-chalk transition-colors hover:border-jade hover:text-jade"
      >
        GitHub
      </a>
    )}
  </div>
);

const Techs = ({ techs }: { techs: string[] }) => (
  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
    {techs.map((tech) => (
      <li
        key={tech}
        className="rounded-full border border-line bg-surface-2/60 px-3 py-1 font-mono text-xs text-mist"
      >
        {tech}
      </li>
    ))}
  </ul>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <RevealItem as="article" className="h-full">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.32, ease }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition-[border-color,box-shadow] duration-300 hover:border-jade/45 hover:shadow-[0_30px_60px_-30px_var(--halo)]"
    >
      <div className="relative aspect-2/1 overflow-hidden border-b border-line bg-surface-2">
        <Image
          src={project.image!}
          alt={`Screenshot of ${project.title}`}
          width={1280}
          height={640}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-jade">{project.kind}</p>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-chalk">
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-pretty text-mist">{project.problem}</p>
        <Techs techs={project.techs} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  </RevealItem>
);

const CompactCard = ({ project }: { project: Project }) => (
  <RevealItem as="article" className="h-full">
    <div className="flex h-full flex-col rounded-3xl border border-line bg-surface/40 p-6 transition-colors duration-300 hover:border-jade/45">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">{project.kind}</p>
      <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-chalk">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-pretty text-mist">{project.problem}</p>
      <Techs techs={project.techs} />
      <ProjectLinks project={project} />
    </div>
  </RevealItem>
);

export const projectCount = projects.length;

const SelectProject = ({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        as={headingAs}
        eyebrow="Projects"
        title={
          <>
            Real products, <span className="text-marigold">live and running</span>
          </>
        }
        lede="Each featured project is deployed — click Live demo to try it yourself, or GitHub to see how it's built."
      />

      <Reveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Reveal>

      <p className="mt-16 mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        Smaller builds &amp; practice projects
      </p>
      <Reveal className="grid gap-4 md:grid-cols-3" gap={0.07}>
        {smaller.map((project) => (
          <CompactCard key={project.title} project={project} />
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
