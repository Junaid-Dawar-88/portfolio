"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { StarMark } from "../components/lattice";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "tRPC",
  "Tailwind CSS",
  "React Native",
  "Tauri",
  "Better Auth",
  "Zod",
];

const TextMove = () => {
  const reduced = useReducedMotion();
  // Two copies so the track can loop seamlessly at -50%.
  const track = [...stack, ...stack];

  return (
    <div className="border-y border-line bg-surface/40">
      <div className="edge-fade overflow-hidden py-5">
        <motion.div
          className="flex w-max"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        >
          {track.map((tech, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 px-8">
              <span className="font-display text-xl font-semibold whitespace-nowrap text-mist sm:text-2xl">
                {tech}
              </span>
              <StarMark size={9} className="text-jade" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TextMove;
