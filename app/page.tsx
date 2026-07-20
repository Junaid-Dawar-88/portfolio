import React from "react";
import Hero from "./hero/hero";
import TextMove from "./text-movement/text-move";
import Skills from "./skills/skill";
import SelectProject from "./select-project/select-project";
import Footer from "./footer/footer";

const Home = () => (
  <main id="main">
    <Hero />
    <TextMove />

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
