"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import { ease } from "../lib/motion";

type Group = {
  category: string;
  note: string;
  technologies: { name: string; core: boolean }[];
};

const groups: Group[] = [
  {
    category: "Frontend",
    note: "Fast, responsive interfaces",
    technologies: [
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "TypeScript", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "shadcn/ui", core: false },
      { name: "JavaScript", core: false },
      { name: "HTML & CSS", core: false },
    ],
  },
  {
    category: "Backend",
    note: "Secure APIs, auth and payments",
    technologies: [
      { name: "Node.js", core: true },
      { name: "tRPC", core: true },
      { name: "REST APIs", core: false },
      { name: "Better Auth", core: false },
      { name: "Stripe", core: false },
      { name: "Zod", core: false },
    ],
  },
  {
    category: "Database",
    note: "Data modelled to grow with you",
    technologies: [
      { name: "PostgreSQL", core: true },
      { name: "Prisma ORM", core: true },
      { name: "MongoDB", core: false },
      { name: "SQLite", core: false },
    ],
  },
  {
    category: "Mobile & desktop",
    note: "One codebase, every device",
    technologies: [
      { name: "React Native", core: true },
      { name: "Tauri", core: true },
    ],
  },
  {
    category: "AI",
    note: "Chatbots and smart features",
    technologies: [
      { name: "Vercel AI SDK", core: true },
      { name: "OpenAI API", core: true },
      { name: "Prompt Engineering", core: false },
      { name: "Streaming chat", core: false },
    ],
  },
  {
    category: "Tools",
    note: "Ship, measure, iterate",
    technologies: [
      { name: "Git & GitHub", core: true },
      { name: "Vercel", core: true },
      { name: "Bun", core: false },
      { name: "VS Code", core: false },
      { name: "Claude Code", core: false },
      { name: "Cursor", core: false },
    ],
  },
];

const Badge = ({ name, core }: { name: string; core: boolean }) => (
  <span
    className={`rounded-full border px-3 py-1 font-mono text-xs ${
      core
        ? "border-jade/40 bg-jade/10 text-jade"
        : "border-line bg-surface-2/60 text-mist"
    }`}
  >
    {name}
  </span>
);

/** Tracks the pointer so the spotlight follows it across the tile. */
const trackPointer = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const Skills = ({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      as={headingAs}
      eyebrow="Skills"
      title={
        <>
          Tools I reach for, and{" "}
          <span className="text-jade">what each one is for</span>
        </>
      }
      lede="Filled tags are what I use daily. The rest I'm comfortable in when a project calls for it."
    />

    <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
      {groups.map((group) => (
        <RevealItem key={group.category} as="article">
          <motion.div
            onMouseMove={trackPointer}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease }}
            className="spotlight relative h-full overflow-hidden rounded-3xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-jade/45 sm:p-7"
          >
            <div className="relative">
              <h3 className="font-display text-xl font-bold text-chalk">
                {group.category}
              </h3>
              <p className="mt-1.5 text-sm text-mist">{group.note}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <Badge key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          </motion.div>
        </RevealItem>
      ))}
    </Reveal>
  </div>
);

export default Skills;
