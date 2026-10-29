import type { Metadata } from "next";
import { pageMeta } from "../lib/site";

/* The CV page is a client component, so its metadata lives here. */
export const metadata: Metadata = pageMeta(
  "/cv",
  "CV",
  "Curriculum vitae of Junaid Iqbal, full stack developer — skills, projects and contact details, downloadable as a PDF.",
);

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
