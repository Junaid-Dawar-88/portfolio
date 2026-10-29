"use client";

import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

type Tilt3DProps = {
  children: React.ReactNode;
  className?: string;
  /** Maximum rotation in degrees at the card's edge. */
  max?: number;
  /** Show a soft light that follows the pointer across the surface. */
  glare?: boolean;
  /** Corner radius of the glare, to match the surface it lights. */
  radius?: string;
};

const spring = { stiffness: 180, damping: 18, mass: 0.6 };

/**
 * Tilts its children in 3D toward the pointer. Children can lift off the
 * surface with `style={{ transform: "translateZ(40px)" }}` — the wrapper
 * preserves 3D, so those layers parallax against each other.
 */
const Tilt3D = ({ children, className = "", max = 12, glare = false, radius = "1.5rem" }: Tilt3DProps) => {
  const reduced = useReducedMotion();

  // Pointer position across the element, normalised to -0.5 … 0.5.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.18), transparent 55%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div className={`perspective-distant${className}`}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
        {glare && !reduced && (
          <motion.div
            aria-hidden="true"
            style={{ background: glareBg, borderRadius: radius, transform: "translateZ(1px)" }}
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Tilt3D;
