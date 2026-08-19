"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import ThemeToggle from "../components/theme-toggle";
import { PrismMark } from "../components/aurora";
import { ease } from "../lib/motion";
import { profile } from "../lib/data";

const navItems = [
  { label: "About", id: "about" },
  { label: "Stack", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Contact", id: "contact" },
];

/**
 * Highlights whichever section currently owns the viewport. An observer
 * is cheaper and steadier here than reading scroll offsets on every
 * frame, and it keeps the pill in sync when the user jumps via a hash.
 */
function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      // The band sits just below the bar, so a section counts as active
      // once its top clears the header rather than the viewport edge.
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const active = useActiveSection();

  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  // The bar tightens and gains an edge once you leave the hero.
  useMotionValueEvent(scrollY, "change", (v) => setLifted(v > 24));

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`bg-(--glass) backdrop-blur-2xl transition-[border-color,padding] duration-300 ${
          lifted ? "border-b border-edge" : "border-b border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-[padding] duration-300 sm:px-8 ${
            lifted ? "py-2.5" : "py-4"
          }`}
        >
          {/* Mark */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-iris to-aqua text-(--on-accent) transition-transform duration-500 group-hover:rotate-90">
              <PrismMark size={17} />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[15px] font-bold tracking-tight text-text">
                {profile.name}
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                {profile.role}
              </span>
            </span>
          </Link>

          {/* Desktop nav — the active pill slides between items */}
          <nav className="hidden items-center gap-1 rounded-full border border-edge bg-panel/40 p-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative isolate rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active === item.id
                    ? "text-(--on-accent)"
                    : "text-dim hover:text-text"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-iris to-aqua"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <Link
              href="/cv"
              className="hidden rounded-full border border-edge px-5 py-2 text-sm font-medium text-text transition-colors hover:border-aqua hover:text-aqua lg:inline-block"
            >
              CV
            </Link>

            <Link
              href="/#contact"
              className="hidden rounded-full bg-text px-5 py-2 text-sm font-semibold text-void transition-opacity hover:opacity-85 sm:inline-block"
            >
              Get in touch
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-edge text-text md:hidden"
            >
              <span className="relative block h-3 w-4">
                <motion.span
                  animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="absolute inset-x-0 top-0 h-0.5 rounded bg-current"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded bg-current"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease }}
              className="overflow-hidden border-t border-edge md:hidden"
            >
              <div className="flex flex-col px-5 py-3">
                {[...navItems, { label: "CV", id: "cv" }].map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.3, ease }}
                  >
                    <Link
                      href={item.id === "cv" ? "/cv" : `/#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-edge-soft py-3.5 text-base text-text"
                    >
                      {item.label}
                      <span className="font-mono text-xs text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Reading progress */}
      <motion.span
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="block h-0.5 origin-left bg-linear-to-r from-iris via-aqua to-flare"
      />
    </motion.header>
  );
};

export default Header;
