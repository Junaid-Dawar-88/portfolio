import type { Variants } from "motion/react";

/* One easing curve for the whole site, so every movement feels related. */
export const ease = [0.22, 1, 0.36, 1] as const;

/** Parent that releases its children in sequence. */
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

/** The default child move: up and in. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Smaller travel, for dense rows of items. */
export const riseSm: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease } },
};

/** Shared viewport config — fire once, slightly before fully in view. */
export const inView = { once: true, amount: 0.2, margin: "0px 0px -80px 0px" };
