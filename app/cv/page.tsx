"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const GITHUB_URL = "https://github.com/Junaid-Dawar-88";
const LINKEDIN_URL = "https://www.linkedin.com/in/junaid-iqbal-854813384/";
const EMAIL = "junaidiqbal.dev88@gmail.com";

/* ----------------------------------------------------------------
   Fixed document palette — the CV sheet is a real document, so its
   colours are theme-independent (the PDF then matches it exactly).
---------------------------------------------------------------- */
const C = {
  sidebar: "#1c1a17",
  sheet: "#fbfaf7",
  ink: "#1f1f1f",
  body: "#4a4a4a",
  muted: "#8a8a8a",
  accent: "#c0392b",
  cream: "#e7e1d4",
  creamDim: "#9b9486",
  hair: "#e7e2d9",
  sideLine: "rgba(255,255,255,0.13)",
};

/* ----------------------------------------------------------------
   Resume data
---------------------------------------------------------------- */
const contact = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone", value: "+92 331 5995496", href: "https://wa.me/923315995496" },
  { label: "GitHub", value: "github.com/Junaid-Dawar-88", href: GITHUB_URL },
  { label: "LinkedIn", value: "linkedin.com/in/junaid-iqbal", href: LINKEDIN_URL },
  { label: "Location", value: "Karachi, Pakistan" },
];

const skillGroups = [
  { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js"] },
  { label: "Framework", items: ["Next.js", "App Router", "SSR / SSG"] },
  { label: "Backend", items: ["Node.js", "REST APIs", "Better Auth"] },
  { label: "Database", items: ["PostgreSQL", "Prisma ORM", "MongoDB", "SQL"] },
  { label: "Styling", items: ["Tailwind CSS", "Bootstrap"] },
  { label: "Desktop & AI", items: ["Tauri", "Prompt Engineering"] },
  { label: "Tooling", items: ["Git", "GitHub", "Vercel", "VS Code", "Bun"] },
];

const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];

const stats = [
  { value: "12", label: "GitHub Repos" },
  { value: "8+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
];

const projects = [
  {
    name: "Hostel Management SaaS",
    stack: "Next.js · Prisma · Better Auth",
    desc: "Multi-tenant SaaS for hostel operations with role-based authentication, type-safe data access and a clean management dashboard.",
  },
  {
    name: "Developer Portfolio",
    stack: "Next.js · TypeScript · Tailwind",
    desc: "Editorial-style personal portfolio with animated scroll reveals, a responsive skills matrix, project showcase and a downloadable CV.",
  },
  {
    name: "Cross-Platform Desktop App",
    stack: "Tauri · React · TypeScript",
    desc: "Lightweight cross-platform desktop application built from web technologies with a fast, Rust-powered native shell.",
  },
];

const profile =
  "Full stack developer specialising in modern JavaScript and TypeScript frameworks, with a passion for building clean, efficient and scalable web applications. Experienced across the stack — from responsive React interfaces to Node.js APIs and type-safe data layers with Prisma and PostgreSQL — and comfortable shipping cross-platform desktop apps with Tauri. Focused on maintainable code, strong UX and fast, reliable delivery.";

const education = {
  title: "Web & Software Development",
  place: "Karachi, Pakistan",
  desc: "Self-driven and course-based training in full stack JavaScript & TypeScript development, focused on React, Next.js and modern backend practices.",
};

/* ----------------------------------------------------------------
   PDF generation — builds a two-column modern CV with jsPDF that
   mirrors the on-screen sheet. Selectable text, direct download.
---------------------------------------------------------------- */
async function buildResumePdf() {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });

  const PW = doc.internal.pageSize.getWidth();
  const PH = doc.internal.pageSize.getHeight();

  const rgb = (hex: string): [number, number, number] => {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const SIDEBAR = rgb(C.sidebar);
  const accent = rgb(C.accent);
  const ink = rgb(C.ink);
  const body = rgb(C.body);
  const muted = rgb(C.muted);
  const cream = rgb(C.cream);
  const creamDim = rgb(C.creamDim);
  const sheet = rgb(C.sheet);

  const set = (font: "normal" | "bold", size: number, col: [number, number, number]) => {
    doc.setFont("helvetica", font);
    doc.setFontSize(size);
    doc.setTextColor(col[0], col[1], col[2]);
  };

  /* Sheet background */
  doc.setFillColor(sheet[0], sheet[1], sheet[2]);
  doc.rect(0, 0, PW, PH, "F");

  /* ============ SIDEBAR ============ */
  const SBW = 214;
  doc.setFillColor(SIDEBAR[0], SIDEBAR[1], SIDEBAR[2]);
  doc.rect(0, 0, SBW, PH, "F");

  const SX = 28;
  const SCW = SBW - SX * 2;
  let ys = 0;

  /* Photo */
  const ps = SCW;
  const px = SX;
  const py = 36;
  try {
    const img = new window.Image();
    img.src = "/junaid-iqbal.jpeg";
    await new Promise<void>((res, rej) => {
      img.onload = () => res();
      img.onerror = () => rej(new Error("image"));
    });
    doc.addImage(img, "JPEG", px, py, ps, ps);
    doc.setDrawColor(accent[0], accent[1], accent[2]);
    doc.setLineWidth(2.4);
    doc.rect(px, py, ps, ps);
  } catch {
    /* photo optional */
  }
  ys = py + ps + 32;

  const sideHeading = (label: string) => {
    set("bold", 9.5, accent);
    doc.setCharSpace(1.6);
    doc.text(label.toUpperCase(), SX, ys);
    doc.setCharSpace(0);
    ys += 9;
    doc.setDrawColor(74, 70, 63);
    doc.setLineWidth(0.7);
    doc.line(SX, ys, SX + SCW, ys);
    ys += 17;
  };

  /* Contact */
  sideHeading("Contact");
  contact.forEach((c) => {
    set("bold", 7, creamDim);
    doc.setCharSpace(1);
    doc.text(c.label.toUpperCase(), SX, ys);
    doc.setCharSpace(0);
    ys += 11;
    set("normal", 8.6, cream);
    (doc.splitTextToSize(c.value, SCW) as string[]).forEach((ln) => {
      doc.text(ln, SX, ys);
      ys += 11;
    });
    ys += 9;
  });
  ys += 4;

  /* Skills */
  sideHeading("Skills");
  skillGroups.forEach((g) => {
    set("bold", 8.4, cream);
    doc.text(g.label, SX, ys);
    ys += 11.5;
    set("normal", 8, creamDim);
    (doc.splitTextToSize(g.items.join(", "), SCW) as string[]).forEach((ln) => {
      doc.text(ln, SX, ys);
      ys += 10;
    });
    ys += 8;
  });
  ys += 4;

  /* Languages */
  sideHeading("Languages");
  languages.forEach((l) => {
    set("bold", 8.6, cream);
    doc.text(l.name, SX, ys);
    set("normal", 8.4, creamDim);
    doc.text(l.level, SX + SCW, ys, { align: "right" });
    ys += 14;
  });

  /* ============ MAIN COLUMN ============ */
  const MX = SBW + 32;
  const MR = 40;
  const MW = PW - MX - MR;
  let ym = 50;

  const mainHeading = (label: string) => {
    set("bold", 10.5, accent);
    doc.setCharSpace(1.8);
    doc.text(label.toUpperCase(), MX, ym);
    doc.setCharSpace(0);
    ym += 8;
    doc.setDrawColor(accent[0], accent[1], accent[2]);
    doc.setLineWidth(1.6);
    doc.line(MX, ym, MX + 30, ym);
    ym += 20;
  };

  const mainParagraph = (text: string, size = 9.6) => {
    set("normal", size, body);
    const lh = size * 1.55;
    (doc.splitTextToSize(text, MW) as string[]).forEach((ln) => {
      doc.text(ln, MX, ym);
      ym += lh;
    });
  };

  /* Header */
  set("normal", 8, accent);
  doc.setCharSpace(2.4);
  doc.text("CURRICULUM VITAE — 2026", MX, ym);
  doc.setCharSpace(0);
  ym += 26;
  set("bold", 30, ink);
  doc.text("Junaid Iqbal", MX, ym);
  ym += 20;
  set("normal", 13, accent);
  doc.text("Full Stack Developer", MX, ym);
  ym += 24;

  /* Stats */
  const colW = MW / stats.length;
  stats.forEach((s, i) => {
    const cx = MX + colW * i;
    set("bold", 16, ink);
    doc.text(s.value, cx, ym);
    set("normal", 7.4, muted);
    doc.setCharSpace(0.8);
    doc.text(s.label.toUpperCase(), cx, ym + 12);
    doc.setCharSpace(0);
  });
  ym += 22;
  doc.setDrawColor(...rgb(C.hair));
  doc.setLineWidth(0.8);
  doc.line(MX, ym, MX + MW, ym);
  ym += 26;

  /* Profile */
  mainHeading("Profile");
  mainParagraph(profile);
  ym += 18;

  /* Selected Projects */
  mainHeading("Selected Projects");
  projects.forEach((p) => {
    const descLines = doc.splitTextToSize(p.desc, MW - 16) as string[];
    const blockH = 30 + descLines.length * 12.5;
    doc.setFillColor(accent[0], accent[1], accent[2]);
    doc.rect(MX, ym - 9, 2.6, blockH, "F");
    set("bold", 11, ink);
    doc.text(p.name, MX + 14, ym);
    set("normal", 8.2, accent);
    doc.text(p.stack, MX + 14, ym + 12);
    set("normal", 9.2, body);
    descLines.forEach((ln, i) => doc.text(ln, MX + 14, ym + 27 + i * 12.5));
    ym += blockH + 13;
  });
  ym += 5;

  /* Education */
  mainHeading("Education");
  set("bold", 10.6, ink);
  doc.text(education.title, MX, ym);
  ym += 13;
  set("normal", 8.4, muted);
  doc.text(education.place, MX, ym);
  ym += 14;
  mainParagraph(education.desc, 9.2);

  /* Footer */
  set("normal", 7.4, muted);
  doc.setCharSpace(0.8);
  doc.text("AVAILABLE FOR NEW ROLES & FREELANCE", MX, PH - 38);
  doc.setCharSpace(0);

  doc.save("Junaid-Iqbal-CV.pdf");
}

/* ----------------------------------------------------------------
   Page — modern two-column CV (dark sidebar + light main column)
---------------------------------------------------------------- */
const CVPage = () => {
  const [busy, setBusy] = useState(false);

  const handleDownload = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await buildResumePdf();
    } catch (err) {
      console.error("CV download failed:", err);
      alert("Sorry — the CV could not be generated. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      className="min-h-screen px-4 py-10 sm:py-16"
      style={{
        backgroundColor: "var(--bg)",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Action bar */}
      <div className="mx-auto mb-7 flex max-w-[900px] items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.18em] transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          ← Back to portfolio
        </Link>
        <button
          onClick={handleDownload}
          disabled={busy}
          className="group flex items-center gap-2.5 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all disabled:cursor-wait disabled:opacity-70"
          style={{ backgroundColor: C.accent, color: "#fff" }}
        >
          {busy ? "Generating…" : "Download CV (PDF)"}
          <span
            className={
              busy
                ? "inline-block h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white"
                : "transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none"
            }
          >
            {busy ? "" : "↓"}
          </span>
        </button>
      </div>

      {/* CV sheet */}
      <article
        className="mx-auto flex max-w-[900px] flex-col overflow-hidden sm:flex-row"
        style={{
          backgroundColor: C.sheet,
          boxShadow: "0 32px 72px -26px rgba(0,0,0,0.4)",
        }}
      >
        {/* ============ SIDEBAR ============ */}
        <aside
          className="shrink-0 px-7 py-9 sm:w-[270px] sm:py-10"
          style={{ backgroundColor: C.sidebar }}
        >
          {/* Photo */}
          <div
            className="mx-auto mb-8 w-[150px] p-[3px] sm:w-full"
            style={{ border: `2.5px solid ${C.accent}` }}
          >
            <Image
              src="/junaid-iqbal.jpeg"
              alt="Junaid Iqbal"
              width={240}
              height={240}
              priority
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Contact */}
          <SideSection title="Contact">
            <div className="flex flex-col gap-3">
              {contact.map((c) => (
                <div key={c.label}>
                  <p
                    className="text-[8px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: C.creamDim }}
                  >
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-words text-[11px] leading-snug transition-colors hover:opacity-75"
                      style={{ color: C.cream }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-[11px] leading-snug" style={{ color: C.cream }}>
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </SideSection>

          {/* Skills */}
          <SideSection title="Skills">
            <div className="flex flex-col gap-2.5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p
                    className="text-[10.5px] font-bold"
                    style={{ color: C.cream }}
                  >
                    {g.label}
                  </p>
                  <p className="text-[10px] leading-snug" style={{ color: C.creamDim }}>
                    {g.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </SideSection>

          {/* Languages */}
          <SideSection title="Languages" last>
            <div className="flex flex-col gap-1.5">
              {languages.map((l) => (
                <div key={l.name} className="flex items-baseline justify-between gap-2">
                  <span className="text-[11px] font-bold" style={{ color: C.cream }}>
                    {l.name}
                  </span>
                  <span className="text-[10px]" style={{ color: C.creamDim }}>
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </SideSection>
        </aside>

        {/* ============ MAIN COLUMN ============ */}
        <main className="min-w-0 flex-1 px-8 py-10 sm:px-10 sm:py-12">
          {/* Header */}
          <header>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.32em]"
              style={{ color: C.accent }}
            >
              Curriculum Vitae — 2026
            </p>
            <h1
              className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl"
              style={{ color: C.ink }}
            >
              Junaid Iqbal
            </h1>
            <p className="mt-2 text-lg" style={{ color: C.accent }}>
              Full Stack Developer
            </p>
          </header>

          {/* Stats */}
          <div
            className="mt-7 grid grid-cols-3 gap-4 border-b pb-6"
            style={{ borderColor: C.hair }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold leading-none" style={{ color: C.ink }}>
                  {s.value}
                </p>
                <p
                  className="mt-1.5 text-[9.5px] uppercase tracking-[0.12em]"
                  style={{ color: C.muted }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Profile */}
          <MainSection title="Profile">
            <p className="text-[13.5px] leading-[1.72]" style={{ color: C.body }}>
              {profile}
            </p>
          </MainSection>

          {/* Selected Projects */}
          <MainSection title="Selected Projects">
            <div className="flex flex-col gap-5">
              {projects.map((p) => (
                <div key={p.name} className="border-l-2 pl-4" style={{ borderColor: C.accent }}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <h3 className="text-[14.5px] font-bold" style={{ color: C.ink }}>
                      {p.name}
                    </h3>
                    <span className="text-[10.5px]" style={{ color: C.accent }}>
                      {p.stack}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6]" style={{ color: C.body }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </MainSection>

          {/* Education */}
          <MainSection title="Education">
            <h3 className="text-[14.5px] font-bold" style={{ color: C.ink }}>
              {education.title}
            </h3>
            <p className="mt-0.5 text-[11.5px]" style={{ color: C.muted }}>
              {education.place}
            </p>
            <p className="mt-1.5 text-[12.5px] leading-[1.6]" style={{ color: C.body }}>
              {education.desc}
            </p>
          </MainSection>

          {/* Footer */}
          <p
            className="mt-9 text-[9.5px] uppercase tracking-[0.16em]"
            style={{ color: C.muted }}
          >
            Available for new roles &amp; freelance
          </p>
        </main>
      </article>
    </div>
  );
};

/* Sidebar section — accent label + hairline divider */
const SideSection = ({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) => (
  <section className={last ? "" : "mb-7"}>
    <p
      className="text-[10px] font-bold uppercase tracking-[0.18em]"
      style={{ color: C.accent }}
    >
      {title}
    </p>
    <div className="mb-3.5 mt-2 h-px w-full" style={{ backgroundColor: C.sideLine }} />
    {children}
  </section>
);

/* Main section — accent label + short accent rule */
const MainSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <div className="mb-3.5">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: C.accent }}
      >
        {title}
      </p>
      <span className="mt-1.5 block h-[2px] w-8" style={{ backgroundColor: C.accent }} />
    </div>
    {children}
  </section>
);

export default CVPage;
