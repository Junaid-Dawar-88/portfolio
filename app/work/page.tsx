import React from "react";
import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import SelectProject from "../select-project/select-project";
import Footer from "../footer/footer";

export const metadata: Metadata = pageMeta(
  "/work",
  "Work",
  "Live projects by Junaid Iqbal — an e-commerce store, a hostel management SaaS, a school management system, invoicing and more, with demos and source code.",
);

const WorkPage = () => (
  <main id="main" className="pt-16">
    <SelectProject headingAs="h1" />
    <Footer />
  </main>
);

export default WorkPage;
