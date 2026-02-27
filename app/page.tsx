import React from "react";
import TextMove from "./text-movement/text-move";
import Skills from "./skills/skill";
import SelectProject from "./select-project/select-project";
import Footer from "./footer/footer";

const Home = () => {
  return (
    <div className="font-[Times_New_Roman,Georgia,serif] bg-[#f5f0e8] min-h-screen text-[#1a1a1a]">
      
      <header className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center px-4 sm:px-8 lg:px-10 py-3 border-b border-[#d4c9b8] tracking-[0.12em] text-[10px] sm:text-[11px] uppercase text-[#555] font-['Courier_New',monospace] text-center sm:text-left">
        <span>Karachi, Pakistan</span>
        <span>Vol. 1 — Full Stack Developer Portfolio</span>
        <span>Open to Opportunities</span>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_280px] min-h-[calc(100vh-45px)]">
        
        <aside className="order-2 lg:order-1 px-5 sm:px-8 lg:px-[30px] py-8 lg:py-[40px] border-t lg:border-t-0 lg:border-r border-[#d4c9b8] flex flex-col gap-8">
          
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[#c0392b] font-['Courier_New',monospace] mb-2">
              Developer Profile
            </p>
            <div className="h-[1px] bg-[#1a1a1a] mb-4 w-[80%]" />
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-[#333]">
              Junaid Iqbal is a full stack developer with expertise in modern
              JavaScript frameworks and a passion for building clean, efficient
              web applications.
            </p>
          </div>

          <div className="border border-[#d4c9b8] px-4 py-4">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#555] font-['Courier_New',monospace] mb-2">
              Current Status
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#27ae60]" />
              <span className="text-[13px] text-[#333]">
                Available for new roles & freelance
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            {["GitHub Profile", "LinkedIn", "Download CV"].map((link) => (
              <a
                key={link}
                href="#"
                className="block py-3 border-b border-[#d4c9b8] text-[13px] text-[#1a1a1a] tracking-[0.02em] hover:text-[#c0392b]"
              >
                → {link}
              </a>
            ))}
          </div>

        </aside>

        <main className="order-1 lg:order-2 px-5 sm:px-10 lg:px-[60px] py-10 lg:py-[50px] relative overflow-hidden flex flex-col justify-center">
          
          <div className="absolute right-[-10px] lg:right-[-20px] top-1/2 -translate-y-1/2 text-[180px] sm:text-[260px] lg:text-[420px] font-black text-black/5 font-serif leading-none select-none pointer-events-none tracking-[-0.05em]">
            J
          </div>

          <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-[#888] font-['Courier_New',monospace] mb-6 lg:mb-[30px]">
            Portfolio — 2025
          </p>

          <h1 className="leading-[0.95] mb-6">
            <span className="block text-[clamp(48px,12vw,120px)] font-black font-serif text-[#1a1a1a] tracking-[-0.02em]">
              Junaid
            </span>
            <span className="block text-[clamp(48px,12vw,120px)] font-black font-serif text-[#c0392b] italic tracking-[-0.02em]">
              Iqbal.
            </span>
          </h1>

          <div className="border-l-[3px] border-[#c0392b] pl-4 sm:pl-5 mb-8 lg:mb-12 max-w-full sm:max-w-[460px]">
            <p className="text-[16px] sm:text-[18px] italic text-[#333] leading-[1.5] font-serif">
              Building fast, scalable web experiences with React, Next.js &
              Node.js
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-start sm:items-center">
            <button className="w-full sm:w-auto bg-[#1a1a1a] text-[#f5f0e8] px-6 sm:px-8 py-4 text-[12px] tracking-[0.12em] uppercase font-['Courier_New',monospace] font-semibold hover:bg-[#c0392b] transition">
              View My Work
            </button>

            <button className="w-full sm:w-auto bg-transparent text-[#1a1a1a] border border-[#1a1a1a] px-6 sm:px-8 py-4 text-[12px] tracking-[0.12em] uppercase font-['Courier_New',monospace] font-semibold hover:bg-[#1a1a1a] hover:text-[#f5f0e8] transition">
              Get In Touch
            </button>
          </div>

        </main>

        <aside className="order-3 px-5 sm:px-8 lg:px-[30px] py-8 lg:py-[40px] border-t lg:border-t-0 lg:border-l border-[#d4c9b8] flex flex-col gap-10">
          
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#888] font-['Courier_New',monospace] mb-4">
              Core Technologies
            </p>
            <div className="h-[1px] bg-[#d4c9b8] mb-5" />

            {[
              { name: "React.js", level: "Advanced" },
              { name: "Next.js", level: "Advanced" },
              { name: "Node.js", level: "Advanced" },
              { name: "JavaScript", level: "Expert" },
              { name: "Tailwind CSS", level: "Advanced" },
              { name: "HTML / CSS", level: "Expert" },
            ].map(({ name, level }) => (
              <div
                key={name}
                className="flex justify-between items-center py-3 border-b border-[#e8e2d8]"
              >
                <span className="text-[13px]">{name}</span>
                <span className="text-[11px] text-[#c0392b] font-['Courier_New',monospace]">
                  {level}
                </span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#888] font-['Courier_New',monospace] mb-4">
              Quick Stats
            </p>
            <div className="h-[1px] bg-[#d4c9b8] mb-5" />

            {[
              { label: "Projects Built", value: "10+" },
              { label: "Technologies", value: "12+" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-center py-3 border-b border-[#e8e2d8]"
              >
                <span className="text-[13px]">{label}</span>
                <span className="text-[13px] text-[#c0392b] font-bold font-['Courier_New',monospace]">
                  {value}
                </span>
              </div>
            ))}
          </div>

        </aside>

      </div>
       <TextMove />
       <Skills />
       <SelectProject />
       <Footer />
    </div>
  );
};

export default Home;