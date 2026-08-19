"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { AuroraRibbons, Halo, PrismMark } from "../components/aurora";
import { ease, stagger, rise, riseSm } from "../lib/motion";
import { profile, facts, stats } from "../lib/data";

const Hero = () => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // The ribbons drift slower than the content, so the hero gains depth.
  const ribbonY = useTransform(scrollYProgress, [0, 0.25], ["0%", "22%"]);
  const ribbonOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], ["0%", "-7%"]);

  return (
    <section
      id="about"
      className="relative isolate overflow-clip px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:pt-44"
    >
      {/* Signature ribbons */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: ribbonY, opacity: ribbonOpacity }}
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 opacity-70 sm:-top-16 lg:-top-24"
      >
        <AuroraRibbons className="h-auto w-full" />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { y: contentY }}
        className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14"
      >
        {/* Left — the thesis */}
        <motion.div
          variants={stagger(0.15, 0.09)}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={riseSm}
            className="inline-flex items-center gap-2.5 rounded-full border border-edge bg-panel/60 px-4 py-1.5 font-mono text-xs tracking-wide text-dim backdrop-blur"
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-aqua opacity-60" />
              <span className="h-2 w-2 rounded-full bg-aqua" />
            </span>
            Open to roles and freelance work
          </motion.p>

          <motion.h1
            variants={rise}
            className="mt-7 font-display text-[clamp(3rem,10.5vw,7.25rem)] font-extrabold leading-[0.86] tracking-[-0.045em] text-text"
          >
            Junaid
            <br />
            <span className="stroked">Iqbal</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-lg leading-relaxed text-dim"
          >
            {profile.tagline} Next.js and Node on the web, Tauri on the desktop,
            and a schema underneath that the whole thing can be trusted to.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-iris to-aqua px-7 py-3.5 font-semibold text-(--on-accent) transition-opacity hover:opacity-90"
            >
              See the work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2.5 rounded-full border border-edge px-7 py-3.5 font-semibold text-text transition-colors hover:border-aqua hover:text-aqua"
            >
              View CV
            </Link>
          </motion.div>

          {/* Facts — labelled, not decorative */}
          <motion.dl
            variants={riseSm}
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-edge pt-8 sm:grid-cols-3"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-text">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Rotating aurora behind the frame */}
          <Halo className="absolute -inset-6 -z-10 opacity-35" />

          <div className="relative overflow-hidden rounded-[28px] border border-edge bg-panel p-2">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={640}
              height={760}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 384px, 40vw"
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>

          {/* Floating chip — anchors the portrait to the palette */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.75 }}
            className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-edge bg-panel-2/90 px-5 py-3 backdrop-blur-md"
          >
            <PrismMark size={18} className="shrink-0 text-aqua" />
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Currently
              </span>
              <span className="mt-0.5 block text-sm font-medium text-text">
                Multi-tenant SaaS at {profile.company}
              </span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Counters — the first hard evidence on the page */}
      <motion.dl
        variants={stagger(0.9, 0.08)}
        initial="hidden"
        animate="show"
        className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-edge bg-edge sm:mt-28 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={riseSm}
            className="bg-panel/70 px-6 py-7 backdrop-blur-sm"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                {stat.label}
              </span>
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
};

export default Hero;
