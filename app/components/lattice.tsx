"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "../lib/motion";

/**
 * Khatam — the eight-point star that tiles across the hero.
 * Built from 16 alternating radii so the star reads crisp at any scale.
 */
function starPath(cx: number, cy: number, r: number) {
  const inner = r * 0.545;
  const points = Array.from({ length: 16 }, (_, i) => {
    const radius = i % 2 === 0 ? r : inner;
    const angle = (Math.PI / 8) * i - Math.PI / 2;
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(
      cy +
      radius * Math.sin(angle)
    ).toFixed(2)}`;
  });
  return `M${points.join("L")}Z`;
}

const CELL = 120;
const COLS = 7;
const ROWS = 5;

type Cell = { d: string; ring: number };

const cells: Cell[] = [];
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const cx = col * CELL + CELL / 2;
    const cy = row * CELL + CELL / 2;
    cells.push({
      d: starPath(cx, cy, CELL * 0.46),
      // Distance from the top-left origin drives the draw order.
      ring: row + col,
    });
  }
}

const maxRing = ROWS + COLS - 2;

/**
 * The site's signature: a lattice that draws itself stroke by stroke on load,
 * radiating out from the top-left behind the name.
 */
const Lattice = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="lattice-thread" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--lapis)" />
          <stop offset="55%" stopColor="var(--jade)" />
          <stop offset="100%" stopColor="var(--marigold)" />
        </linearGradient>
      </defs>

      {cells.map((cell, i) => (
        <motion.path
          key={i}
          d={cell.d}
          stroke="url(#lattice-thread)"
          strokeWidth={1.25}
          strokeLinejoin="round"
          initial={reduced ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: 1.5,
            ease,
            delay: reduced ? 0 : 0.3 + (cell.ring / maxRing) * 1.1,
          }}
        />
      ))}
    </svg>
  );
};

export default Lattice;

/** Single star, reused as the logo mark and as the section marker. */
export const StarMark = ({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    aria-hidden="true"
    className={className}
  >
    <path d={starPath(50, 50, 48)} fill="currentColor" />
  </svg>
);
