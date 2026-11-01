/* Single source of truth for SEO — metadata, sitemap, robots and JSON-LD read from here. */

import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://junaid-dawar-portfolio.vercel.app"
).replace(/\/$/, "");

export const site = {
  name: "Junaid Iqbal",
  title: "Junaid Iqbal — Freelance Web, App & E-commerce Developer",
  description:
    "I build e-commerce stores, web apps, mobile apps and business software for small businesses and startups — fast, mobile-friendly and delivered on time. Next.js, React, Node.js and PostgreSQL.",
  email: "junaidiqbal.dev88@gmail.com",
  github: "https://github.com/Junaid-Dawar-88",
  linkedin: "https://www.linkedin.com/in/junaid-iqbal-854813384/",
  /* Paste your Freelancer.com profile URL here (e.g. https://www.freelancer.com/u/your-username).
     While it's empty, the Freelancer.com link stays hidden everywhere. */
  freelancer: "",
  whatsapp: { display: "+92 331 5995496", number: "923315995496" },
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
    "freelance web developer",
    "e-commerce website developer",
    "business application developer",
    "mobile app developer",
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

/** WhatsApp click-to-chat link, with an opening line already typed for the visitor. */
export const whatsappLink = (
  text = "Hi Junaid, I found your portfolio and I'd like to discuss a project.",
) => `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;

/** Every way to reach me, in the order clients should see them. */
export const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "WhatsApp", value: site.whatsapp.display, href: whatsappLink() },
  ...(site.freelancer
    ? [{ label: "Freelancer.com", value: "Hire me on Freelancer", href: site.freelancer }]
    : []),
  { label: "GitHub", value: "Junaid-Dawar-88", href: site.github },
  { label: "LinkedIn", value: "Junaid Iqbal", href: site.linkedin },
];

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
