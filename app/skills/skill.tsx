"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading, { Accent } from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import { ease, trackPointer } from "../lib/motion";
import { skillGroups, type Tech } from "../lib/data";

const Badge = ({ name, core }: Tech) => (
  <span
    className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
      core
        ? "border-aqua/40 bg-aqua/10 text-aqua"
        : "border-edge bg-panel-2/60 text-dim"
    }`}
  >
    {name}
  </span>
);

const Skills = () => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      eyebrow="The stack"
      title={
        <>
          Tools I reach for, and <Accent>what each one is for</Accent>
        </>
      }
      lede="Filled tags are what I use daily. The rest I'm comfortable in when a project calls for it."
    />

    {/* Bento — groups take different widths so the grid reads as a
        composition rather than a uniform table of tags. */}
    <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6" gap={0.06}>
      {skillGroups.map((group) => (
        <RevealItem
          key={group.category}
          as="article"
          variant="pop"
          className={`h-full ${group.span}`}
        >
          <motion.div
            onMouseMove={trackPointer}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease }}
            className="spotlight aurora-edge relative h-full overflow-hidden rounded-3xl border border-edge bg-panel/60 p-6 sm:p-7"
          >
            <div className="relative">
              <h3 className="font-display text-xl font-bold text-text">
                {group.category}
              </h3>
              <p className="mt-1.5 text-sm text-dim">{group.note}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.tech.map((tech) => (
                  <li key={tech.name}>
                    <Badge {...tech} />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </RevealItem>
      ))}
    </Reveal>
  </div>
);

export default Skills;
