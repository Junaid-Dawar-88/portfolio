"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Lattice from "../components/lattice";
import Tilt3D from "../components/tilt-3d";
import { ease, stagger, rise, riseSm } from "../lib/motion";
import { gsap, SplitText, useGSAP, gsapEase, motionOK } from "../lib/gsap";

const facts = [
  { label: "I build", value: "Stores, web & mobile apps" },
  { label: "Replies", value: "Within 24 hours" },
  { label: "Based in", value: "Peshawar, PK · GMT+5" },
];

const Hero = () => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const nameRef = useRef<HTMLHeadingElement>(null);

  // GSAP: the headline assembles word by word, each flipping up in 3D.
  useGSAP(() => {
    gsap.set(nameRef.current, { autoAlpha: 1 });
    gsap.matchMedia().add(motionOK, () => {
      SplitText.create(nameRef.current, {
        type: "words",
        autoSplit: true, // re-split once the display font swaps in
        onSplit: (self) =>
          gsap.from(self.words, {
            yPercent: 60,
            rotateX: -70,
            opacity: 0,
            transformOrigin: "50% 100%",
            duration: 1,
            ease: gsapEase,
            stagger: 0.06,
            delay: 0.3,
          }),
      });
    });
  });

  // Lattice drifts slower than the content, so the hero gains depth on scroll.
  const latticeY = useTransform(scrollYProgress, [0, 0.25], ["0%", "18%"]);
  const latticeOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], ["0%", "-6%"]);

  return (
    <section
      id="top"
      className="relative isolate overflow-clip px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40 lg:pt-44"
    >
      {/* Signature lattice */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: latticeY, opacity: latticeOpacity }}
        className="pointer-events-none absolute -right-20 -top-8 -z-10 w-[92%] opacity-45 sm:-right-12 sm:w-[80%] sm:opacity-60 lg:right-0 lg:-top-16 lg:w-[68%] lg:opacity-75"
      >
        <Lattice className="h-auto w-full" />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { y: contentY }}
        className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
      >
        {/* Left — the thesis */}
        <motion.div variants={stagger(0.15, 0.09)} initial="hidden" animate="show">
          <motion.p
            variants={riseSm}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-1.5 font-mono text-xs tracking-wide text-mist backdrop-blur"
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-jade opacity-60" />
              <span className="h-2 w-2 rounded-full bg-jade" />
            </span>
            Junaid Iqbal · Available for freelance projects
          </motion.p>

          {/* Hidden until GSAP has split it, so words never flash in whole first */}
          <h1
            ref={nameRef}
            className="invisible mt-7 font-display text-[clamp(2.6rem,6.4vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-balance text-chalk perspective-midrange"
          >
            Websites, apps &amp; online stores{" "}
            <span className="text-jade">that win you customers</span>
          </h1>

          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-mist"
          >
            I help small businesses and startups launch fast, mobile-friendly
            e-commerce sites, web apps, mobile apps and business tools — built
            properly, explained clearly, and delivered on time.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-jade px-7 py-3.5 font-semibold text-[var(--on-jade)] transition-opacity hover:opacity-85"
            >
              Hire Me
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-full border border-line px-7 py-3.5 font-semibold text-chalk transition-colors hover:border-jade hover:text-jade"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Facts — labelled, not decorative */}
          <motion.dl
            variants={riseSm}
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 sm:grid-cols-3"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-chalk">
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
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Orbit — two tilted rings spinning in 3D behind the portrait */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-8%] -z-10 perspective-midrange"
          >
            {[
              { tilt: 72, duration: 18, color: "var(--jade)" },
              { tilt: -64, duration: 26, color: "var(--lapis)" },
            ].map((ring) => (
              <motion.div
                key={ring.tilt}
                style={{ rotateX: ring.tilt, transformStyle: "preserve-3d" }}
                animate={reduced ? undefined : { rotateZ: 360 }}
                transition={{ duration: ring.duration, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 rounded-full opacity-50"
              >
                <span
                  className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
                  style={{ background: ring.color, boxShadow: `0 0 18px ${ring.color}` }}
                />
                <span
                  className="absolute inset-0 rounded-full border"
                  style={{ borderColor: ring.color }}
                />
              </motion.div>
            ))}
          </div>

          {/* Idle float, then pointer-driven tilt on top of it */}
          <motion.div
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <Tilt3D max={10} glare radius="28px">
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="relative rounded-[28px] border border-line bg-surface p-2 shadow-[0_40px_80px_-30px_var(--halo)]"
              >
                <Image
                  src="/junaid-iqbal.png"
                  alt="Junaid Iqbal, full stack developer, at a desk with code on screen"
                  width={1254}
                  height={1254}
                  priority
                  sizes="(max-width: 1024px) 448px, 40vw"
                  className="h-auto w-full rounded-[20px] object-cover"
                />

                {/* Floating chips sit in front of the photo, so they parallax as it tilts */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.75 }}
                  style={{ transform: "translateZ(70px)" }}
                  className="absolute -bottom-5 left-6 rounded-2xl border border-line bg-surface-2/90 px-5 py-3 backdrop-blur-md"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                    Currently
                  </p>
                  <p className="mt-1 text-sm font-medium text-chalk">
                    Building with Next.js &amp; Prisma
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.9 }}
                  style={{ transform: "translateZ(50px)" }}
                  className="absolute -right-2 -top-4 rounded-2xl sm:-right-4 border border-line bg-surface-2/90 px-4 py-2.5 backdrop-blur-md"
                >
                  <p className="font-mono text-xs font-medium text-jade">
                    {"</>"} web · mobile · desktop
                  </p>
                </motion.div>
              </div>
            </Tilt3D>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
