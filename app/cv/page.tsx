"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  profile,
  stats,
  cvSkillGroups,
  cvProjects,
  languages,
  education,
  approach,
} from "../lib/data";

/* ----------------------------------------------------------------
   Fixed document palette. The CV sheet is a real document, so its
   colours are theme-independent — which also means the generated
   PDF matches what is on screen exactly.
---------------------------------------------------------------- */
const C = {
  sidebar: "#151327",
  sidebarDeep: "#0e0c1c",
  sheet: "#fcfbf9",
  ink: "#15131f",
  body: "#474354",
  muted: "#8b8698",
  accent: "#5b45e0",
  accent2: "#0d9e8c",
  cream: "#e9e6f2",
  creamDim: "#9691ac",
  hair: "#e6e2db",
  sideLine: "rgba(255,255,255,0.14)",
};

const contact = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.whatsapp },
  { label: "GitHub", value: `github.com/${profile.handle}`, href: profile.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/junaid-iqbal",
    href: profile.linkedin,
  },
  { label: "Location", value: profile.location },
];

/* ----------------------------------------------------------------
   PDF generation — a two-column CV built with jsPDF that mirrors the
   on-screen sheet. Text stays selectable, and the download is direct.
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
  const accent2 = rgb(C.accent2);
  const ink = rgb(C.ink);
  const body = rgb(C.body);
  const muted = rgb(C.muted);
  const cream = rgb(C.cream);
  const creamDim = rgb(C.creamDim);
  const sheet = rgb(C.sheet);

  const SBW = 206;

  const set = (
    font: "normal" | "bold",
    size: number,
    col: [number, number, number],
  ) => {
    doc.setFont("helvetica", font);
    doc.setFontSize(size);
    doc.setTextColor(col[0], col[1], col[2]);
  };

  /** Paints the sheet and the sidebar band. Run once per page. */
  const paintPage = () => {
    doc.setFillColor(sheet[0], sheet[1], sheet[2]);
    doc.rect(0, 0, PW, PH, "F");
    doc.setFillColor(SIDEBAR[0], SIDEBAR[1], SIDEBAR[2]);
    doc.rect(0, 0, SBW, PH, "F");
  };

  paintPage();

  /* ============ SIDEBAR ============ */
  const SX = 26;
  const SCW = SBW - SX * 2;
  let ys = 0;

  /* Photo */
  const ps = SCW;
  const py = 32;
  try {
    const img = new window.Image();
    img.src = profile.photo;
    await new Promise<void>((res, rej) => {
      img.onload = () => res();
      img.onerror = () => rej(new Error("image"));
    });
    doc.addImage(img, "JPEG", SX, py, ps, ps);
    doc.setDrawColor(accent[0], accent[1], accent[2]);
    doc.setLineWidth(2.2);
    doc.rect(SX, py, ps, ps);
    ys = py + ps + 28;
  } catch {
    /* Photo is optional — start the column where it would have ended. */
    ys = py + 8;
  }

  const sideHeading = (label: string) => {
    set("bold", 9, accent2);
    doc.setCharSpace(1.5);
    doc.text(label.toUpperCase(), SX, ys);
    doc.setCharSpace(0);
    ys += 8;
    doc.setDrawColor(66, 62, 84);
    doc.setLineWidth(0.6);
    doc.line(SX, ys, SX + SCW, ys);
    ys += 14;
  };

  /* Contact */
  sideHeading("Contact");
  contact.forEach((c) => {
    set("bold", 6.4, creamDim);
    doc.setCharSpace(0.9);
    doc.text(c.label.toUpperCase(), SX, ys);
    doc.setCharSpace(0);
    ys += 9.5;
    set("normal", 8, cream);
    (doc.splitTextToSize(c.value, SCW) as string[]).forEach((ln) => {
      doc.text(ln, SX, ys);
      ys += 9.5;
    });
    ys += 6;
  });
  ys += 2;

  /* Skills */
  sideHeading("Technical Skills");
  cvSkillGroups.forEach((g) => {
    set("bold", 7.8, cream);
    doc.text(g.label, SX, ys);
    ys += 10;
    set("normal", 7.2, creamDim);
    (doc.splitTextToSize(g.items.join(" · "), SCW) as string[]).forEach((ln) => {
      doc.text(ln, SX, ys);
      ys += 8.6;
    });
    ys += 5.5;
  });
  ys += 2;

  /* Languages */
  sideHeading("Languages");
  languages.forEach((l) => {
    set("bold", 8, cream);
    doc.text(l.name, SX, ys);
    set("normal", 7.6, creamDim);
    doc.text(l.level, SX + SCW, ys, { align: "right" });
    ys += 12.5;
  });

  /* ============ MAIN COLUMN ============ */
  const MX = SBW + 30;
  const MR = 38;
  const MW = PW - MX - MR;
  const MBOTTOM = PH - 46;
  let ym = 48;

  /** Starts a new page when the next block would run off the sheet. */
  const ensureSpace = (needed: number) => {
    if (ym + needed <= MBOTTOM) return;
    doc.addPage();
    paintPage();
    ym = 52;
  };

  const mainHeading = (label: string) => {
    ensureSpace(46);
    set("bold", 10, accent);
    doc.setCharSpace(1.7);
    doc.text(label.toUpperCase(), MX, ym);
    doc.setCharSpace(0);
    ym += 7;
    doc.setDrawColor(accent[0], accent[1], accent[2]);
    doc.setLineWidth(1.5);
    doc.line(MX, ym, MX + 28, ym);
    ym += 19;
  };

  const paragraph = (text: string, size = 9.3) => {
    const lines = doc.splitTextToSize(text, MW) as string[];
    const lh = size * 1.55;
    ensureSpace(lines.length * lh);
    set("normal", size, body);
    lines.forEach((ln) => {
      doc.text(ln, MX, ym);
      ym += lh;
    });
  };

  /* Header */
  set("normal", 7.6, accent2);
  doc.setCharSpace(2.2);
  doc.text("CURRICULUM VITAE — 2026", MX, ym);
  doc.setCharSpace(0);
  ym += 25;
  set("bold", 29, ink);
  doc.text(profile.name, MX, ym);
  ym += 19;
  set("normal", 12.5, accent);
  doc.text(profile.role, MX, ym);
  ym += 22;

  /* Stats */
  const colW = MW / stats.length;
  stats.forEach((s, i) => {
    const cx = MX + colW * i;
    set("bold", 15, ink);
    doc.text(s.value, cx, ym);
    set("normal", 6.6, muted);
    doc.setCharSpace(0.6);
    (doc.splitTextToSize(s.label.toUpperCase(), colW - 8) as string[]).forEach(
      (ln, j) => doc.text(ln, cx, ym + 11 + j * 8),
    );
    doc.setCharSpace(0);
  });
  ym += 30;
  doc.setDrawColor(...rgb(C.hair));
  doc.setLineWidth(0.8);
  doc.line(MX, ym, MX + MW, ym);
  ym += 24;

  /* Profile */
  mainHeading("Profile");
  paragraph(profile.summary);
  ym += 16;

  /* Selected Projects */
  mainHeading("Selected Projects");
  cvProjects.forEach((p) => {
    const stack = p.tech.slice(0, 6).join(" · ");
    const descLines = doc.splitTextToSize(p.summary, MW - 16) as string[];
    const blockH = 28 + descLines.length * 11.5;
    ensureSpace(blockH + 12);

    doc.setFillColor(accent[0], accent[1], accent[2]);
    doc.rect(MX, ym - 8.5, 2.4, blockH, "F");
    set("bold", 10.5, ink);
    doc.text(p.title, MX + 13, ym);
    set("normal", 7.6, accent2);
    doc.text(stack, MX + 13, ym + 11);
    set("normal", 8.8, body);
    descLines.forEach((ln, i) => doc.text(ln, MX + 13, ym + 25 + i * 11.5));
    ym += blockH + 11;
  });
  ym += 6;

  /* Education — kept ahead of the soft section, so if the document
     breaks it is "How I Work" that carries over rather than a lone
     two-line block stranded on its own page. */
  mainHeading("Education");
  ensureSpace(56);
  set("bold", 10.2, ink);
  doc.text(education.title, MX, ym);
  set("normal", 8, muted);
  doc.text(education.period, MX + MW, ym, { align: "right" });
  ym += 12;
  set("normal", 8.2, muted);
  doc.text(education.place, MX, ym);
  ym += 13;
  paragraph(education.desc, 8.8);
  ym += 16;

  /* How I work */
  mainHeading("How I Work");
  approach.forEach((a) => {
    const lines = doc.splitTextToSize(a.body, MW - 14) as string[];
    ensureSpace(20 + lines.length * 11);
    set("bold", 9.2, ink);
    doc.text(`${a.step}  ${a.title}`, MX, ym);
    ym += 12;
    set("normal", 8.6, body);
    lines.forEach((ln) => {
      doc.text(ln, MX + 14, ym);
      ym += 11;
    });
    ym += 8;
  });

  /* Footer on every page */
  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    set("normal", 7, muted);
    doc.setCharSpace(0.7);
    doc.text("AVAILABLE FOR NEW ROLES & FREELANCE", MX, PH - 30);
    doc.setCharSpace(0);
    if (pages > 1) {
      set("normal", 7, muted);
      doc.text(`${p} / ${pages}`, PW - MR, PH - 30, { align: "right" });
    }
  }

  doc.save("Junaid-Iqbal-CV.pdf");
}

/* ----------------------------------------------------------------
   Page
---------------------------------------------------------------- */
const CVPage = () => {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleDownload = async () => {
    if (busy) return;
    setBusy(true);
    setFailed(false);
    try {
      await buildResumePdf();
    } catch (err) {
      console.error("CV download failed:", err);
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-void px-4 pb-16 pt-28 sm:pt-32">
      {/* Action bar */}
      <div className="mx-auto mb-7 flex max-w-[920px] flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-aqua"
        >
          ← Back to portfolio
        </Link>

        <div className="flex items-center gap-3">
          {failed && (
            <span role="alert" className="text-xs text-flare">
              Couldn&apos;t generate the PDF — please try again.
            </span>
          )}
          <button
            onClick={handleDownload}
            disabled={busy}
            className="group flex items-center gap-2.5 rounded-full bg-linear-to-r from-iris to-aqua px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-(--on-accent) transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
          >
            {busy ? "Generating…" : "Download CV (PDF)"}
            <span
              className={
                busy
                  ? "inline-block h-3 w-3 animate-spin rounded-full border-2 border-current/40 border-t-current"
                  : "transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none"
              }
            >
              {busy ? "" : "↓"}
            </span>
          </button>
        </div>
      </div>

      {/* CV sheet */}
      <article
        className="mx-auto flex max-w-[920px] flex-col overflow-hidden rounded-2xl sm:flex-row"
        style={{
          backgroundColor: C.sheet,
          boxShadow: "0 40px 90px -30px rgba(0,0,0,0.55)",
        }}
      >
        {/* ============ SIDEBAR ============ */}
        <aside
          className="shrink-0 px-7 py-9 sm:w-[272px] sm:py-10"
          style={{
            background: `linear-gradient(165deg, ${C.sidebar}, ${C.sidebarDeep})`,
          }}
        >
          {/* Photo */}
          <div
            className="mx-auto mb-8 w-[150px] p-[3px] sm:w-full"
            style={{ border: `2.5px solid ${C.accent}` }}
          >
            <Image
              src={profile.photo}
              alt={profile.name}
              width={240}
              height={240}
              priority
              sizes="(max-width: 640px) 150px, 220px"
              className="aspect-square w-full object-cover"
            />
          </div>

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
                      className="break-words text-[11px] leading-snug transition-opacity hover:opacity-75"
                      style={{ color: C.cream }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p
                      className="text-[11px] leading-snug"
                      style={{ color: C.cream }}
                    >
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </SideSection>

          <SideSection title="Technical Skills">
            <div className="flex flex-col gap-2.5">
              {cvSkillGroups.map((g) => (
                <div key={g.label}>
                  <p
                    className="text-[10.5px] font-bold"
                    style={{ color: C.cream }}
                  >
                    {g.label}
                  </p>
                  <p
                    className="text-[9.5px] leading-snug"
                    style={{ color: C.creamDim }}
                  >
                    {g.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </SideSection>

          <SideSection title="Languages" last>
            <div className="flex flex-col gap-1.5">
              {languages.map((l) => (
                <div
                  key={l.name}
                  className="flex items-baseline justify-between gap-2"
                >
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: C.cream }}
                  >
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
          <header>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: C.accent2 }}
            >
              Curriculum Vitae — 2026
            </p>
            <h1
              className="mt-3 text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl"
              style={{ color: C.ink }}
            >
              {profile.name}
            </h1>
            <p className="mt-2 text-lg" style={{ color: C.accent }}>
              {profile.role}
            </p>
          </header>

          {/* Stats */}
          <div
            className="mt-7 grid grid-cols-2 gap-4 border-b pb-6 sm:grid-cols-4"
            style={{ borderColor: C.hair }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl font-extrabold leading-none"
                  style={{ color: C.ink }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-1.5 text-[9px] uppercase tracking-[0.12em]"
                  style={{ color: C.muted }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <MainSection title="Profile">
            <p className="text-[13px] leading-[1.72]" style={{ color: C.body }}>
              {profile.summary}
            </p>
          </MainSection>

          <MainSection title="Selected Projects">
            <div className="flex flex-col gap-5">
              {cvProjects.map((p) => (
                <div
                  key={p.title}
                  className="border-l-2 pl-4"
                  style={{ borderColor: C.accent }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                    <h2
                      className="text-[14.5px] font-bold"
                      style={{ color: C.ink }}
                    >
                      {p.title}
                    </h2>
                    <span
                      className="text-[10px]"
                      style={{ color: C.accent2 }}
                    >
                      {p.tech.slice(0, 6).join(" · ")}
                    </span>
                  </div>
                  <p
                    className="mt-1.5 text-[12px] leading-[1.6]"
                    style={{ color: C.body }}
                  >
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </MainSection>

          <MainSection title="Education">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h2 className="text-[14.5px] font-bold" style={{ color: C.ink }}>
                {education.title}
              </h2>
              <span className="text-[11px]" style={{ color: C.muted }}>
                {education.period}
              </span>
            </div>
            <p className="mt-0.5 text-[11.5px]" style={{ color: C.muted }}>
              {education.place}
            </p>
            <p
              className="mt-1.5 text-[12px] leading-[1.6]"
              style={{ color: C.body }}
            >
              {education.desc}
            </p>
          </MainSection>

          <MainSection title="How I Work">
            <div className="flex flex-col gap-3.5">
              {approach.map((a) => (
                <div key={a.step}>
                  <h2 className="text-[13px] font-bold" style={{ color: C.ink }}>
                    <span style={{ color: C.accent }}>{a.step}</span>{" "}
                    &nbsp;{a.title}
                  </h2>
                  <p
                    className="mt-1 pl-7 text-[12px] leading-[1.6]"
                    style={{ color: C.body }}
                  >
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </MainSection>

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
      className="text-[9.5px] font-bold uppercase tracking-[0.18em]"
      style={{ color: C.accent2 }}
    >
      {title}
    </p>
    <div
      className="mb-3.5 mt-2 h-px w-full"
      style={{ backgroundColor: C.sideLine }}
    />
    {children}
  </section>
);

/* Main section — accent label + short accent rule */
const MainSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-8">
    <div className="mb-3.5">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: C.accent }}
      >
        {title}
      </p>
      <span
        className="mt-1.5 block h-[2px] w-8"
        style={{ backgroundColor: C.accent }}
      />
    </div>
    {children}
  </section>
);

export default CVPage;
