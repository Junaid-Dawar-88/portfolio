import React from "react";
import Hero from "./hero/hero";
import TextMove from "./text-movement/text-move";
import Approach from "./approach/approach";
import Skills from "./skills/skill";
import SelectProject from "./select-project/select-project";
import Footer from "./footer/footer";
import { profile, projects } from "./lib/data";

/* Structured data, so search results and link previews describe the
   person rather than guessing from the markup. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  image: profile.photo,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peshawar",
    addressRegion: "KPK",
    addressCountry: "PK",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "Node.js",
    "Tailwind CSS",
  ],
  worksFor: { "@type": "Organization", name: profile.company },
  hasOccupation: {
    "@type": "Occupation",
    name: profile.role,
    skills: "Full stack TypeScript, multi-tenant SaaS, API and schema design",
  },
  subjectOf: projects
    .filter((p) => p.featured)
    .map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.summary,
      url: p.live ?? p.source,
    })),
};

const Home = () => (
  <main id="main">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />

    <Hero />
    <TextMove />

    <section id="approach" className="scroll-mt-24">
      <Approach />
    </section>

    <section id="skills" className="scroll-mt-24">
      <Skills />
    </section>

    <section id="projects" className="scroll-mt-24">
      <SelectProject />
    </section>

    <section id="contact" className="scroll-mt-24">
      <Footer />
    </section>
  </main>
);

export default Home;
