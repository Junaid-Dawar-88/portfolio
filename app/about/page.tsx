import React from "react";
import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import About from "./about";
import Footer from "../footer/footer";

export const metadata: Metadata = pageMeta(
  "/about",
  "About",
  "Junaid Iqbal is a full stack developer in Peshawar, Pakistan, building type-safe web, desktop and mobile apps with Next.js, Node.js, Prisma, PostgreSQL and AI.",
);

const AboutPage = () => (
  <main id="main" className="pt-16">
    <About />
    <Footer />
  </main>
);

export default AboutPage;
