"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

/* Register once, import from here everywhere. */
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/* GSAP's take on the site-wide curve in ./motion (cubic-bezier(0.22, 1, 0.36, 1)). */
export const gsapEase = "expo.out";

/** Media query that gates every GSAP animation. */
export const motionOK = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, SplitText, useGSAP };
