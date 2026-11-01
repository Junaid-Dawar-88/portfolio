"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import Tilt3D from "../components/tilt-3d";

const services = [
  {
    icon: "$",
    title: "E-commerce Websites",
    body: "Online stores with product catalogs, carts, secure checkout and order tracking that turn visitors into buyers.",
  },
  {
    icon: "</>",
    title: "Web Applications",
    body: "Custom dashboards, booking systems and SaaS platforms built to solve your exact business problem.",
  },
  {
    icon: "▯",
    title: "Mobile Apps",
    body: "iOS and Android apps from one React Native codebase, so you reach both stores for one budget.",
  },
  {
    icon: "▦",
    title: "Business Applications",
    body: "Invoicing, inventory, school and hostel management tools that replace spreadsheets and save hours every week.",
  },
];

const trackPointer = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const Services = () => (
  <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
    <SectionHeading
      eyebrow="Services"
      title={
        <>
          What I can <span className="text-marigold">build for you</span>
        </>
      }
      lede="Every project includes responsive design, basic SEO, deployment, and a walkthrough so you know exactly how to run it."
    />

    <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
      {services.map((item) => (
        <RevealItem key={item.title} as="article" className="h-full">
          <Tilt3D max={8} glare className="h-full">
            <div
              onMouseMove={trackPointer}
              className="spotlight relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 p-7 transition-colors duration-300 hover:border-jade/45"
            >
              <span
                aria-hidden="true"
                className="relative grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2 font-mono text-lg text-jade"
              >
                {item.icon}
              </span>
              <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-chalk">
                {item.title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-pretty text-mist">
                {item.body}
              </p>
            </div>
          </Tilt3D>
        </RevealItem>
      ))}
    </Reveal>

    <Link
      href="#contact"
      className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-jade px-7 py-3.5 font-semibold text-(--on-jade) transition-opacity hover:opacity-85"
    >
      Get a free quote
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  </div>
);

export default Services;
