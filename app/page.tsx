import React from "react";
import Hero from "./hero/hero";
import TextMove from "./text-movement/text-move";
import Services from "./services/services";
import SelectProject from "./select-project/select-project";
import Bio from "./about/bio";
import Skills from "./skills/skill";
import Testimonials from "./testimonials/testimonials";
import Contact from "./contact/contact";
import { FooterBar } from "./footer/footer";

/* Ordered the way a client decides: what you do, proof, who you are, how to hire you. */
const Home = () => (
  <main id="main">
    <Hero />
    <TextMove />

    <section id="services" className="scroll-mt-24">
      <Services />
    </section>

    <section id="projects" className="scroll-mt-24">
      <SelectProject />
    </section>

    <section id="about" className="scroll-mt-24">
      <Bio />
    </section>

    <section id="skills" className="scroll-mt-24">
      <Skills />
    </section>

    <section id="testimonials" className="scroll-mt-24">
      <Testimonials />
    </section>

    <section id="contact" className="scroll-mt-24 border-t border-line">
      <Contact headingAs="h2" />
    </section>

    <footer>
      <FooterBar />
    </footer>
  </main>
);

export default Home;
