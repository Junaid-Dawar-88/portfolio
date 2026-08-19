"use client";

import React from "react";
import { motion } from "motion/react";
import { inView, rise, riseSm, slide, fade, pop, stagger } from "../lib/motion";

const variantMap = { rise, riseSm, slide, fade, pop } as const;

type RevealProps = {
  children?: React.ReactNode;
  className?: string;
  /** Seconds before the group starts. */
  delay?: number;
  /** Gap between each child's entrance. */
  gap?: number;
  as?: "div" | "section" | "ul" | "ol" | "article";
};

/**
 * Wraps a group so its direct children enter in sequence when scrolled
 * into view. Children opt in by rendering <RevealItem>.
 *
 * Entrances run in JS rather than on a CSS view timeline so they work in
 * every engine — the scroll-driven CSS in globals.css is reserved for
 * decoration that can safely be absent.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  gap = 0.08,
  as = "div",
}: RevealProps) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={stagger(delay, gap)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {children}
    </Component>
  );
};

export const RevealItem = ({
  children,
  className,
  variant = "rise",
  as = "div",
}: Omit<RevealProps, "delay" | "gap" | "as"> & {
  variant?: keyof typeof variantMap;
  as?: "div" | "li" | "article" | "p" | "h2" | "h3";
}) => {
  const Component = motion[as];

  return (
    <Component className={className} variants={variantMap[variant]}>
      {children}
    </Component>
  );
};
