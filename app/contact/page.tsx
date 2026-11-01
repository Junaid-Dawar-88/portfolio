import React from "react";
import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import Contact from "./contact";
import { FooterBar } from "../footer/footer";

export const metadata: Metadata = pageMeta(
  "/contact",
  "Contact",
  "Hire Junaid Iqbal for your website, online store or app — send a message, or reach out by email or WhatsApp. Replies within 24 hours.",
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
