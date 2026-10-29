"use client";

import React, { useRef } from "react";
import { StarMark } from "../components/lattice";
import { gsap, ScrollTrigger, useGSAP, motionOK } from "../lib/gsap";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "tRPC",
  "Tailwind CSS",
  "React Native",
  "Tauri",
  "Better Auth",
  "Zod",
  "Vercel AI SDK",
];

const TextMove = () => {
  const root = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Two copies so the track can loop seamlessly at -50%.
  const track = [...stack, ...stack];

  useGSAP(
    () => {
      gsap.matchMedia().add(motionOK, () => {
        // Endless loop; scrolling speeds it up and flips its direction.
        const loop = gsap.to(trackRef.current, {
          xPercent: -50,
          duration: 34,
          ease: "none",
          repeat: -1,
        });

        ScrollTrigger.create({
          onUpdate: (self) => {
            const direction = self.direction;
            const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 5);
            gsap
              .timeline()
              .to(loop, { timeScale: boost * direction, duration: 0.2, overwrite: true })
              .to(loop, { timeScale: direction, duration: 1.2, ease: "power2.out" });
          },
        });

        // Start deep into the repeats, so playing in reverse never hits time 0 and stops.
        loop.totalTime(loop.duration() * 1000);
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="border-y border-line bg-surface/40">
      <div className="edge-fade overflow-hidden py-5">
        <div ref={trackRef} className="flex w-max">
          {track.map((tech, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 px-8">
              <span className="font-display text-xl font-semibold whitespace-nowrap text-mist sm:text-2xl">
                {tech}
              </span>
              <StarMark size={9} className="text-jade" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextMove;
