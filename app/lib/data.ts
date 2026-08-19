/**
 * Single source of truth for the portfolio and the CV.
 *
 * Project and stack entries are drawn from the public repositories on
 * github.com/Junaid-Dawar-88 — the tech listed on each card is what the
 * repository actually ships, not an aspirational list.
 */

export const profile = {
  name: "Junaid Iqbal",
  handle: "Junaid-Dawar-88",
  role: "Full Stack Developer",
  company: "Dawloom",
  location: "Peshawar, KPK, Pakistan",
  email: "junaidiqbal.dev88@gmail.com",
  phone: "+92 331 5995496",
  whatsapp: "https://wa.me/923315995496",
  github: "https://github.com/Junaid-Dawar-88",
  linkedin: "https://www.linkedin.com/in/junaid-iqbal-854813384/",
  photo: "/junaid-iqbal.jpeg",
  tagline:
    "I build type-safe products end to end — multi-tenant SaaS, tRPC APIs, Prisma schemas and the interfaces on top of them.",
  summary:
    "Full stack developer working across the TypeScript stack. I ship multi-tenant SaaS platforms with Next.js and React on the front, tRPC and Prisma in the middle, and PostgreSQL underneath — with authentication, billing, transactional email and file storage wired in rather than bolted on. Recent work includes a hostel-management SaaS with Better Auth and Stripe, and a 20-module school platform with per-organisation isolation and role-based access for admins, teachers and parents.",
} as const;

export const facts = [
  { label: "Based in", value: "Peshawar, PK" },
  { label: "Focus", value: "Type-safe full stack" },
  { label: "Ships to", value: "Web, desktop, CLI" },
] as const;

export const stats = [
  { value: "17", label: "Public repositories" },
  { value: "19", label: "Projects shipped" },
  { value: "45+", label: "Technologies used" },
  { value: "2+", label: "Years building" },
] as const;

/* ============================================================
   Stack
   ============================================================ */

export type Tech = { name: string; core?: boolean };

export type SkillGroup = {
  category: string;
  note: string;
  /** Grid span on the bento layout. */
  span: string;
  tech: Tech[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    note: "Typed where it counts",
    span: "lg:col-span-2",
    tech: [
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "SQL", core: true },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Frontend",
    note: "Interfaces that stay fast as they grow",
    span: "lg:col-span-4",
    tech: [
      { name: "React 19", core: true },
      { name: "Next.js 16", core: true },
      { name: "App Router", core: true },
      { name: "Server Components" },
      { name: "TanStack Query", core: true },
      { name: "React Hook Form" },
      { name: "Motion" },
      { name: "Recharts" },
      { name: "nuqs" },
      { name: "SSR / SSG / ISR" },
    ],
  },
  {
    category: "Backend & APIs",
    note: "Type-safe from route handler to query",
    span: "lg:col-span-3",
    tech: [
      { name: "Node.js", core: true },
      { name: "tRPC v11", core: true },
      { name: "Server Actions", core: true },
      { name: "REST APIs" },
      { name: "Zod", core: true },
      { name: "Bun" },
      { name: "superjson" },
    ],
  },
  {
    category: "Data",
    note: "Schema first, migrations always",
    span: "lg:col-span-3",
    tech: [
      { name: "PostgreSQL", core: true },
      { name: "Prisma ORM", core: true },
      { name: "Neon Serverless", core: true },
      { name: "SQLite" },
      { name: "MongoDB" },
      { name: "Prisma adapters" },
    ],
  },
  {
    category: "Auth & Payments",
    note: "The parts you cannot get wrong",
    span: "lg:col-span-3",
    tech: [
      { name: "Better Auth", core: true },
      { name: "NextAuth" },
      { name: "JOSE / JWT" },
      { name: "bcrypt" },
      { name: "Stripe", core: true },
      { name: "2FA & OAuth" },
      { name: "Turnstile" },
    ],
  },
  {
    category: "Styling & UI",
    note: "Design systems, not one-off CSS",
    span: "lg:col-span-3",
    tech: [
      { name: "Tailwind CSS 4", core: true },
      { name: "shadcn/ui", core: true },
      { name: "Radix UI", core: true },
      { name: "Base UI" },
      { name: "Lucide" },
      { name: "CVA" },
      { name: "Bootstrap" },
    ],
  },
  {
    category: "Services",
    note: "Email, storage, documents, AI",
    span: "lg:col-span-4",
    tech: [
      { name: "Resend", core: true },
      { name: "React Email" },
      { name: "Nodemailer" },
      { name: "AWS S3 / R2", core: true },
      { name: "Vercel AI SDK" },
      { name: "jsPDF" },
      { name: "xlsx / ExcelJS" },
    ],
  },
  {
    category: "Cross platform",
    note: "One codebase, more than one target",
    span: "lg:col-span-2",
    tech: [
      { name: "Tauri", core: true },
      { name: "React Native" },
    ],
  },
  {
    category: "Tooling & Ops",
    note: "Ship it, watch it, fix it",
    span: "lg:col-span-6",
    tech: [
      { name: "Git & GitHub", core: true },
      { name: "Vercel", core: true },
      { name: "Docker" },
      { name: "Sentry", core: true },
      { name: "Playwright" },
      { name: "Vitest" },
      { name: "Biome" },
      { name: "ESLint" },
      { name: "pnpm" },
      { name: "VS Code" },
    ],
  },
];

/** Flat marquee list — the tools worth reading at a glance. */
export const marqueeStack = [
  "TypeScript",
  "React 19",
  "Next.js 16",
  "tRPC",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "Better Auth",
  "Stripe",
  "Node.js",
  "Zod",
  "TanStack Query",
  "shadcn/ui",
  "Neon",
  "Resend",
  "Bun",
  "Tauri",
  "Sentry",
  "Docker",
  "Vercel",
];

/* ============================================================
   Projects
   ============================================================ */

export const categories = [
  "All",
  "SaaS",
  "Full stack",
  "Frontend",
  "CLI & tools",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  title: string;
  category: Exclude<Category, "All">;
  kind: string;
  year: string;
  summary: string;
  tech: string[];
  live?: string;
  source?: string;
  /** Featured projects take the wide slots at the top of the grid. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Life Star Hostel Management",
    category: "SaaS",
    kind: "Multi-tenant SaaS platform",
    year: "2026",
    summary:
      "A production-grade hostel management SaaS: organisations, per-seat and subscription billing, two-factor auth and Google OAuth, S3-backed file storage, transactional email and error tracking. The whole API surface is tRPC, so the client and server can never drift apart.",
    tech: [
      "Next.js 16",
      "React 19",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Stripe",
      "Resend",
      "AWS S3",
      "Sentry",
    ],
    live: "https://life-star-hostel-management.vercel.app",
    source: "https://github.com/Junaid-Dawar-88/life-star-hostel-management",
    featured: true,
  },
  {
    title: "DawloomSys — School System",
    category: "SaaS",
    kind: "Multi-tenant school platform",
    year: "2026",
    summary:
      "Twenty modules covering teachers, classes, attendance, results and fees. Every school is an isolated organisation with role-based access for admins, teachers and parents, invite codes delivered by email, and exports to PDF and Excel.",
    tech: [
      "Next.js 16",
      "tRPC v11",
      "Prisma 7",
      "Neon PostgreSQL",
      "shadcn/ui",
      "Recharts",
      "Zod",
      "jsPDF",
      "xlsx",
    ],
    live: "https://school-system-ivory.vercel.app",
    source: "https://github.com/Junaid-Dawar-88/school-system",
    featured: true,
  },
  {
    title: "Digital Invoicing",
    category: "Full stack",
    kind: "Billing & productivity",
    year: "2026",
    summary:
      "Generate invoices, manage clients and track payments in one place, built around a type-safe data layer so totals and statuses stay consistent wherever they are read.",
    tech: ["Next.js", "TypeScript", "tRPC", "Zod", "PostgreSQL"],
    live: "https://digital-invoicing.vercel.app/",
    featured: true,
  },
  {
    title: "E-Commerce Store",
    category: "Full stack",
    kind: "Storefront & admin",
    year: "2026",
    summary:
      "Product browsing, cart and checkout on the storefront, with an authenticated admin side for catalogue management, order tracking, sales charts and PDF receipts.",
    tech: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Recharts",
      "Nodemailer",
      "jsPDF",
    ],
    live: "https://e-commerce-web-gamma-two.vercel.app",
    source: "https://github.com/Junaid-Dawar-88/e-commerce-web",
  },
  {
    title: "Hostel Management",
    category: "Full stack",
    kind: "Rooms, tenants & billing",
    year: "2026",
    summary:
      "The system that became Life Star: room allocation, tenant records and billing, with JOSE session tokens, bcrypt-hashed credentials and validated forms throughout.",
    tech: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "JOSE",
      "bcrypt",
      "React Hook Form",
      "Zod",
      "TanStack Query",
    ],
    source: "https://github.com/Junaid-Dawar-88/hostel-management",
  },
  {
    title: "T-Apps",
    category: "Full stack",
    kind: "Task & data dashboard",
    year: "2026",
    summary:
      "A compact dashboard over a Postgres-backed data layer, using Radix primitives for the interface and the Prisma pg adapter for direct pooled access.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Radix UI", "Tailwind CSS"],
    live: "https://t-apps-three.vercel.app",
    source: "https://github.com/Junaid-Dawar-88/t-apps",
  },
  {
    title: "Todo Next App",
    category: "Full stack",
    kind: "Task tracker",
    year: "2026",
    summary:
      "A todo app taken past the tutorial version — server-backed persistence in PostgreSQL with TanStack Query handling caching, optimistic updates and invalidation.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "TanStack Query"],
    source: "https://github.com/Junaid-Dawar-88/todo-next-app",
  },
  {
    title: "Book Library Management",
    category: "Full stack",
    kind: "Catalogue & lending",
    year: "2025",
    summary:
      "Book catalogue, member records and lending history, built on the Bun runtime with client-side routing and a Prisma data layer.",
    tech: ["Bun", "React", "React Router", "Prisma", "Tailwind CSS"],
    source: "https://github.com/Junaid-Dawar-88/Book-Library-Managment",
  },
  {
    title: "Afnan Portfolio",
    category: "Frontend",
    kind: "Client portfolio site",
    year: "2026",
    summary:
      "A portfolio built for a client: animated section reveals, a light and dark theme that follows the system, and a contact form delivering through Resend.",
    tech: ["Next.js", "Framer Motion", "next-themes", "Resend", "Tailwind CSS"],
    live: "https://afnan-portfolio-tau.vercel.app",
    source: "https://github.com/Junaid-Dawar-88/Afnan-portfolio",
  },
  {
    title: "MMA Orpin",
    category: "Frontend",
    kind: "Landing page",
    year: "2026",
    summary:
      "A bold, responsive landing page built to make the service offering legible in a single scroll.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://mma-orpin.vercel.app/",
  },
  {
    title: "XMP Delta",
    category: "Frontend",
    kind: "Marketing site",
    year: "2026",
    summary:
      "A marketing site organised around visual hierarchy — features first, conversion close behind.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://xmp-delta.vercel.app/",
  },
  {
    title: "Typing Tutor",
    category: "Frontend",
    kind: "Practice app",
    year: "2026",
    summary:
      "A typing trainer with beginner and pro modes, live accuracy and speed feedback, written in plain HTML, CSS and JavaScript with no framework at all.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://safdarhashim-ten.vercel.app",
    source: "https://github.com/Junaid-Dawar-88/safdarhashim",
  },
  {
    title: "Counter App",
    category: "Frontend",
    kind: "React fundamentals",
    year: "2026",
    summary:
      "A small, deliberately clean React and Vite build used to keep state, effects and typed props sharp.",
    tech: ["React", "TypeScript", "Vite"],
    source: "https://github.com/Junaid-Dawar-88/counter-app",
  },
  {
    title: "Product & Weather Apps",
    category: "Frontend",
    kind: "Vanilla JS pair",
    year: "2025",
    summary:
      "Two browser apps built without a framework: a product catalogue reading from XML, and a weather client consuming a live JSON API.",
    tech: ["HTML5", "CSS3", "JavaScript", "XML", "JSON"],
    source: "https://github.com/Junaid-Dawar-88/web-application",
  },
  {
    title: "Hospital Management System",
    category: "CLI & tools",
    kind: "Node.js CLI",
    year: "2025",
    summary:
      "Patients, doctors and appointments driven from an interactive terminal prompt, with Prisma handling the schema and migrations behind it.",
    tech: ["Node.js", "TypeScript", "Prisma", "Inquirer"],
    source: "https://github.com/Junaid-Dawar-88/Hospital-Management-System",
  },
  {
    title: "Library Management System",
    category: "CLI & tools",
    kind: "TypeScript CLI",
    year: "2025",
    summary:
      "Issue, return and search a book catalogue from the command line, persisting to a local SQLite database.",
    tech: ["TypeScript", "Node.js", "SQLite"],
    source: "https://github.com/Junaid-Dawar-88/Library-Management-System",
  },
  {
    title: "Pet Adoption Center Manager",
    category: "CLI & tools",
    kind: "Node.js CLI",
    year: "2025",
    summary:
      "Intake, adoption and lookup for a shelter's animal records, stored in SQLite and driven from the terminal.",
    tech: ["Node.js", "JavaScript", "SQLite"],
    source: "https://github.com/Junaid-Dawar-88/Pet_Adoption_Center_Manager",
  },
  {
    title: "Console Music Player",
    category: "CLI & tools",
    kind: "Node.js CLI",
    year: "2026",
    summary:
      "A terminal music player handling playlists, queue order and playback state entirely in Node.",
    tech: ["Node.js", "JavaScript"],
    source: "https://github.com/Junaid-Dawar-88/musicplayer",
  },
  {
    title: "This Portfolio",
    category: "Frontend",
    kind: "Personal site",
    year: "2026",
    summary:
      "The site you are reading: Next.js 16 and React 19, a Tailwind 4 token system, scroll-driven CSS animation as progressive enhancement, and a CV that generates its own PDF in the browser.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Motion", "jsPDF"],
    live: "https://junaid-dawar-portfolio.vercel.app",
    source: "https://github.com/Junaid-Dawar-88/portfolio",
  },
];

/* ============================================================
   CV
   ============================================================ */

export const cvSkillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    items: [
      "React 19",
      "Next.js 16",
      "App Router",
      "TanStack Query",
      "React Hook Form",
      "Recharts",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "tRPC v11", "Server Actions", "REST APIs", "Zod", "Bun"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Prisma ORM", "Neon", "SQLite", "MongoDB"],
  },
  {
    label: "Auth & Payments",
    items: ["Better Auth", "NextAuth", "JOSE / JWT", "bcrypt", "Stripe"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS 4", "shadcn/ui", "Radix UI", "Base UI"],
  },
  {
    label: "Services",
    items: ["Resend", "React Email", "AWS S3 / R2", "Vercel AI SDK", "jsPDF"],
  },
  {
    label: "Cross platform",
    items: ["Tauri", "React Native"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "Vercel", "Docker", "Sentry", "Playwright", "pnpm"],
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Pashto", level: "Native" },
];

export const education = {
  title: "Web & Software Development",
  place: "Peshawar, KPK, Pakistan",
  period: "2024 — present",
  desc: "Self-directed and course-based training in full stack JavaScript and TypeScript, focused on React, Next.js, type-safe API design and relational data modelling.",
};

/**
 * How the work gets done. Written as capability rather than dated
 * employment, because it describes what the repositories demonstrate.
 */
export const approach = [
  {
    step: "01",
    title: "Model the data first",
    body: "Before a single screen exists there is a Prisma schema and a migration. Getting the relations right early is what stops a feature request turning into a rewrite three months later.",
  },
  {
    step: "02",
    title: "Make the seam type-safe",
    body: "tRPC and Zod across the client-server boundary, so a renamed field is a compile error rather than a runtime surprise found by a user.",
  },
  {
    step: "03",
    title: "Build the interface on a system",
    body: "Tailwind tokens and shadcn primitives instead of one-off CSS, so the tenth screen costs a fraction of the first and still looks like it belongs.",
  },
  {
    step: "04",
    title: "Ship it, then watch it",
    body: "Deployed on Vercel with Sentry catching what tests missed, and Playwright covering the paths that must never break.",
  },
];

/** Projects highlighted on the CV — the four with the most surface area. */
export const cvProjects = projects.filter((p) =>
  [
    "Life Star Hostel Management",
    "DawloomSys — School System",
    "E-Commerce Store",
    "Digital Invoicing",
  ].includes(p.title),
);
