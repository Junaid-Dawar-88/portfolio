import React from "react";
import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import Contact from "./contact";
import { FooterBar } from "../footer/footer";

export const metadata: Metadata = pageMeta(
  "/contact",
  "Contact",
  "Hire Junaid Iqbal for a full-time role or freelance project — send a message, or reach out by email, GitHub, LinkedIn or WhatsApp.",
);

const ContactPage = () => (
  <main id="main" className="pt-16">
    <Contact />
    <footer>
      <FooterBar />
    </footer>
  </main>
);

export default ContactPage;
