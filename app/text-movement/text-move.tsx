"use client";

import React from "react";
import { PrismMark } from "../components/aurora";
import { marqueeStack } from "../lib/data";

/**
 * Two counter-running rails of the stack. The animation lives in CSS
 * rather than JS so it stays off the main thread, and it stops entirely
 * under prefers-reduced-motion (see globals.css).
 */
const Rail = ({
  items,
  direction,
  duration,
  muted,
}: {
  items: string[];
  direction: "left" | "right";
  duration: string;
  muted?: boolean;
}) => (
  <div className="edge-fade overflow-hidden py-4">
    <div
      className="marquee-track"
      data-direction={direction}
      style={{ ["--marquee-duration" as string]: duration }}
    >
      {/* Two copies so the track loops seamlessly at -50%. */}
      {[...items, ...items].map((tech, i) => (
        <span key={i} className="flex shrink-0 items-center gap-7 px-7">
          <span
            className={`whitespace-nowrap font-display text-lg font-semibold sm:text-xl ${
              muted ? "text-faint" : "text-dim"
            }`}
          >
            {tech}
          </span>
          <PrismMark size={10} className="text-iris" />
        </span>
      ))}
    </div>
  </div>
);

const TextMove = () => {
  const half = Math.ceil(marqueeStack.length / 2);

  return (
    <div
      aria-hidden="true"
      className="divide-y divide-edge-soft border-y border-edge bg-panel/40"
    >
      <Rail items={marqueeStack.slice(0, half)} direction="left" duration="46s" />
      <Rail
        items={marqueeStack.slice(half)}
        direction="right"
        duration="58s"
        muted
      />
    </div>
  );
};

export default TextMove;
