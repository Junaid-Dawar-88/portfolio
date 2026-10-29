import React from "react";
import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import Skills from "../skills/skill";
import Footer from "../footer/footer";

export const metadata: Metadata = pageMeta(
  "/stack",
  "Stack",
  "The tools Junaid Iqbal builds with: React, Next.js, TypeScript, Node.js, tRPC, Prisma, PostgreSQL, Tauri, React Native, the Vercel AI SDK and prompt engineering.",
);

const StackPage = () => (
  <main id="main" className="pt-16">
    <Skills headingAs="h1" />
    <Footer />
  </main>
);

export default StackPage;
