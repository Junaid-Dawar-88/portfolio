import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b border-[#c9c1b6] bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-stretch justify-between">

        <div className="flex flex-col sm:flex-row items-center sm:items-start px-6 py-4 border-b sm:border-b-0 sm:border-r border-[#c9c1b6] w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide text-[#1a1410]">
            Junaid Iqbal
          </h1>
          <p className="text-[10px] sm:text-[10px] tracking-[3px] text-[#8a7f73] uppercase mt-1 sm:mt-0 sm:ml-2">
            Full Stack Developer
          </p>
        </div>

        <nav className="flex flex-col sm:flex-row flex-1 justify-center w-full sm:w-auto">
          {["About", "Skills", "Projects", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="px-4 sm:px-10 py-3 sm:py-6 text-[11px] sm:text-[12px] tracking-[2px] sm:tracking-[3px] uppercase text-[#1a1410] border-b sm:border-b-0 sm:border-r border-[#c9c1b6] hover:bg-[#ede6dc] transition text-center"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="px-6 py-4 border-t sm:border-t-0 sm:border-l border-[#c9c1b6] w-full sm:w-auto flex justify-center sm:justify-start">
          <button className="bg-[#c4440a] text-white text-[11px] sm:text-[12px] tracking-[2px] px-6 py-2 uppercase hover:bg-[#a83805] transition w-full sm:w-auto">
            Hire Me
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;