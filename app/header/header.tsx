"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import ThemeToggle from "../components/theme-toggle";
import { StarMark } from "../components/lattice";
import { ease } from "../lib/motion";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  // The bar gains a border and stronger blur once you leave the hero.
  useMotionValueEvent(scrollY, "change", (v) => setLifted(v > 24));

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`bg-(--glass) backdrop-blur-xl transition-[border-color,background-color] duration-300 ${
          lifted ? "border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          {/* Mark */}
          <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-jade text-[var(--on-jade)] transition-transform duration-300 group-hover:rotate-45">
              <StarMark size={16} />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[15px] font-extrabold tracking-tight text-chalk">
                Junaid Iqbal
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Full stack developer
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 text-sm text-mist transition-colors hover:text-chalk"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-jade transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <Link
              href="/#contact"
              className="hidden rounded-full bg-jade px-5 py-2.5 text-sm font-semibold text-[var(--on-jade)] transition-opacity hover:opacity-85 sm:inline-block"
            >
              Get in touch
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-chalk md:hidden"
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
              className="overflow-hidden border-t border-line md:hidden"
            >
              <div className="flex flex-col px-5 py-3">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.3, ease }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line-soft py-3.5 text-base text-chalk"
                    >
                      {item.label}
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
        className="block h-0.5 origin-left bg-linear-to-r from-lapis via-jade to-marigold"
      />
    </motion.header>
  );
};

export default Header;
