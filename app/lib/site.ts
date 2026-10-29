/* Single source of truth for SEO — metadata, sitemap, robots and JSON-LD read from here. */

import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://junaid-dawar-portfolio.vercel.app"
).replace(/\/$/, "");

export const site = {
  name: "Junaid Iqbal",
  title: "Junaid Iqbal — Full Stack Developer",
  description:
    "Junaid Iqbal is a full stack developer in Peshawar, Pakistan, building fast, type-safe web, desktop and mobile apps with Next.js, React, Node.js, tRPC, Prisma, PostgreSQL and AI.",
  email: "junaidiqbal.dev88@gmail.com",
  github: "https://github.com/Junaid-Dawar-88",
  linkedin: "https://www.linkedin.com/in/junaid-iqbal-854813384/",
  image: "/junaid-iqbal.png",
  keywords: [
    "Junaid Iqbal",
    "Junaid Dawar",
    "full stack developer",
    "full stack developer Pakistan",
    "web developer Peshawar",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "React Native developer",
    "Tauri",
    "AI developer",
    "prompt engineering",
    "freelance developer",
    "hire web developer",
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "React Native",
    "Tauri",
    "Vercel AI SDK",
    "Prompt Engineering",
  ],
};

/** Per-page metadata: title, description, canonical URL and matching share card text. */
export const pageMeta = (path: string, title: string, description: string): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url: path,
    siteName: site.name,
    title: `${title} — ${site.name}`,
    description,
    // A page-level openGraph replaces the root one, so the share card must be re-attached.
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — ${site.name}`,
    description,
    images: ["/twitter-image"],
  },
});

/** The pages search engines should know about, most important first. */
export const routes = [
  { path: "/", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/stack", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/cv", priority: 0.6 },
];
