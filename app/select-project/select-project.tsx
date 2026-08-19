"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import SectionHeading, { Accent } from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import { ease, trackPointer } from "../lib/motion";
import { projects, categories, type Category, type Project } from "../lib/data";

/* ------------------------------------------------------------------ */
/* Links                                                               */

const LiveIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const SourceIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

const Links = ({ project, compact }: { project: Project; compact?: boolean }) => (
  <div className={`flex flex-wrap items-center gap-2 ${compact ? "" : "pt-2"}`}>
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-panel-2/60 px-3.5 py-1.5 font-mono text-[11px] text-text transition-colors hover:border-aqua hover:text-aqua"
      >
        <LiveIcon />
        Live
      </a>
    )}
    {project.source && (
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-panel-2/60 px-3.5 py-1.5 font-mono text-[11px] text-text transition-colors hover:border-iris hover:text-iris"
      >
        <SourceIcon />
        Code
      </a>
    )}
  </div>
);

/* ------------------------------------------------------------------ */
/* Featured card                                                       */

const FeaturedCard = ({ project }: { project: Project }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 22 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.45, ease }}
    onMouseMove={trackPointer}
    className="spotlight aurora-edge relative flex flex-col overflow-hidden rounded-3xl border border-edge bg-panel/60 p-7 sm:p-9"
  >
    <div className="relative flex flex-1 flex-col">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-aqua">
          {project.kind}
        </p>
        <span className="shrink-0 font-mono text-xs text-faint">
          {project.year}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
        {project.title}
      </h3>

      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-dim">
        {project.summary}
      </p>

      <ul className="mt-7 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-edge bg-panel-2/60 px-3 py-1 font-mono text-xs text-dim"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Links project={project} compact />
      </div>
    </div>
  </motion.article>
);

/* ------------------------------------------------------------------ */
/* Index row                                                           */

const IndexRow = ({ project, index }: { project: Project; index: number }) => (
  <motion.li
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease }}
    onMouseMove={trackPointer}
    className="spotlight group relative border-b border-edge-soft transition-colors last:border-b-0 hover:bg-panel/50"
  >
    <div className="relative grid gap-4 px-4 py-7 sm:px-6 lg:grid-cols-[auto_1.1fr_1.4fr_auto] lg:items-baseline lg:gap-8">
      <span className="font-mono text-xs text-faint transition-colors group-hover:text-iris lg:pt-1">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <h3 className="font-display text-xl font-bold tracking-tight text-text transition-colors group-hover:text-aqua">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {project.kind} · {project.year}
        </p>
      </div>

      <div>
        <p className="text-sm leading-relaxed text-dim">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-edge bg-panel-2/50 px-2.5 py-0.5 font-mono text-[11px] text-faint"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <Links project={project} compact />
    </div>
  </motion.li>
);

/* ------------------------------------------------------------------ */

const SelectProject = () => {
  const [filter, setFilter] = useState<Category>("All");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((c) => [
          c,
          c === "All"
            ? projects.length
            : projects.filter((p) => p.category === c).length,
        ]),
      ) as Record<Category, number>,
    [],
  );

  const matches = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const featured = matches.filter((p) => p.featured);
  const rest = matches.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Nineteen projects, <Accent>built and shipped</Accent>
          </>
        }
        lede="Everything here is a real repository or a running deployment — no mockups standing in for working software."
      />

      {/* Filter */}
      <LayoutGroup>
        <div
          role="tablist"
          aria-label="Filter projects by type"
          className="mb-10 flex flex-wrap gap-2"
        >
          {categories.map((category) => {
            const selected = filter === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(category)}
                className={`relative isolate rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                  selected
                    ? "border-transparent text-(--on-accent)"
                    : "border-edge text-dim hover:border-aqua/50 hover:text-text"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="filter-pill"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-iris to-aqua"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                {category}
                <span
                  className={`ml-2 ${selected ? "opacity-70" : "text-faint"}`}
                >
                  {counts[category]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <motion.div layout className="grid gap-4 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {featured.map((project) => (
                <FeaturedCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Index */}
        {rest.length > 0 && (
          <Reveal
            as="div"
            className={featured.length > 0 ? "mt-4" : ""}
            gap={0.04}
          >
            <RevealItem variant="fade">
              <motion.ul
                layout
                className="overflow-hidden rounded-3xl border border-edge bg-panel/30"
              >
                <AnimatePresence mode="popLayout">
                  {rest.map((project, i) => (
                    <IndexRow key={project.title} project={project} index={i} />
                  ))}
                </AnimatePresence>
              </motion.ul>
            </RevealItem>
          </Reveal>
        )}
      </LayoutGroup>

      {/* Everything else lives on GitHub */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/Junaid-Dawar-88?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-edge px-6 py-3 text-sm font-medium text-text transition-colors hover:border-iris hover:text-iris"
        >
          <SourceIcon />
          Browse every repository
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default SelectProject;
