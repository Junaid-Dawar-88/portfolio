"use client";

import React from "react";
import { motion } from "motion/react";
import { inView, rise, riseSm, fade, stagger } from "../lib/motion";

const variantMap = { rise, riseSm, fade } as const;

type RevealProps = {
  children?: React.ReactNode;
  className?: string;
  /** Travel distance / style of the entrance. */
  variant?: keyof typeof variantMap;
  /** Seconds before the group starts. */
  delay?: number;
  /** Gap between each child's entrance. */
  gap?: number;
  as?: "div" | "section" | "ul" | "article";
};

/**
 * Wraps a group so its direct children enter in sequence when scrolled into
 * view. Children opt in by rendering <RevealItem>.
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
  as?: "div" | "li" | "article" | "p" | "h2";
}) => {
  const Component = motion[as];

  return (
    <Component className={className} variants={variantMap[variant]}>
      {children}
    </Component>
  );
};
