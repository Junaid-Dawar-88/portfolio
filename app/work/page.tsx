import React from "react";
import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import SelectProject from "../select-project/select-project";
import Footer from "../footer/footer";

export const metadata: Metadata = pageMeta(
  "/work",
  "Work",
  "Projects by Junaid Iqbal — an AI-powered hostel management SaaS, a school management system, invoicing, e-commerce, and Node.js command-line tools.",
);

const WorkPage = () => (
  <main id="main" className="pt-16">
    <SelectProject headingAs="h1" />
    <Footer />
  </main>
);

export default WorkPage;
