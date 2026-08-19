"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "../lib/motion";

/**
 * The site's mark: a prism. Three nested rhombi, the middle one knocked
 * out — light going in on one side and coming apart on the other, which
 * is the same idea the aurora palette is built on.
 */
export const PrismMark = ({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M12 1.5 22.5 12 12 22.5 1.5 12 12 1.5Z"
      fill="currentColor"
      fillOpacity="0.28"
    />
    <path
      d="M12 5.2 18.8 12 12 18.8 5.2 12 12 5.2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M12 9.1 14.9 12 12 14.9 9.1 12 12 9.1Z" fill="currentColor" />
  </svg>
);

/* ------------------------------------------------------------------ */

/** One band of the ribbon, described as a cubic curve across the frame. */
const bands = [
  { d: "M-40 210 C 140 90, 320 300, 500 150 S 820 40, 1040 170", w: 1.4, o: 0.85 },
  { d: "M-40 260 C 160 140, 340 350, 520 200 S 840 90, 1040 220", w: 1.1, o: 0.6 },
  { d: "M-40 310 C 180 190, 360 400, 540 250 S 860 140, 1040 270", w: 1.1, o: 0.45 },
  { d: "M-40 360 C 200 240, 380 450, 560 300 S 880 190, 1040 320", w: 0.9, o: 0.32 },
  { d: "M-40 160 C 120 40, 300 250, 480 100 S 800 -10, 1040 120", w: 0.9, o: 0.5 },
  { d: "M-40 410 C 220 290, 400 500, 580 350 S 900 240, 1040 370", w: 0.8, o: 0.24 },
];

/**
 * The hero backdrop: a set of ribbons that draw themselves on load and
 * then breathe. Purely decorative, so it is hidden from assistive tech
 * and freezes flat when reduced motion is requested.
 */
export const AuroraRibbons = ({ className = "" }: { className?: string }) => {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1000 520"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="aurora-thread" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="var(--iris)" stopOpacity="0" />
          <stop offset="22%" stopColor="var(--iris)" />
          <stop offset="55%" stopColor="var(--aqua)" />
          <stop offset="82%" stopColor="var(--flare)" />
          <stop offset="100%" stopColor="var(--flare)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {bands.map((band, i) => (
        <motion.path
          key={i}
          d={band.d}
          stroke="url(#aurora-thread)"
          strokeWidth={band.w}
          strokeLinecap="round"
          initial={
            reduced
              ? { pathLength: 1, opacity: band.o }
              : { pathLength: 0, opacity: 0 }
          }
          animate={
            reduced
              ? { pathLength: 1, opacity: band.o }
              : {
                  pathLength: 1,
                  opacity: band.o,
                  // Each band drifts on its own cycle, so the set never
                  // resolves into a single visible pulse.
                  y: [0, -14 - i * 3, 0],
                }
          }
          transition={{
            pathLength: { duration: 2, ease, delay: 0.2 + i * 0.12 },
            opacity: { duration: 1.2, delay: 0.2 + i * 0.12 },
            y: {
              duration: 9 + i * 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            },
          }}
        />
      ))}
    </svg>
  );
};

/**
 * A rotating conic halo, used behind the portrait. The rotation lives in
 * CSS so it stays off the main thread.
 */
export const Halo = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={`slow-spin rounded-full blur-2xl ${className}`}
    style={{
      background:
        "conic-gradient(from 0deg, var(--iris), var(--aqua), var(--flare), var(--iris))",
    }}
  />
);
