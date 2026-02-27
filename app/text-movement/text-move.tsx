import React from 'react'

const TextMove = () => {
  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'JavaScript', 'Tailwind CSS',
    'Bootstrap', 'HTML5', 'CSS3', 'Postgress', 'React.js', 'Next.js',
    'Node.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Postgress',
  ]

  return (
    <div className="bg-[#f5f0e8] font-['Courier_New',monospace]">

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 22s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex items-center justify-start gap-[60px] px-6 sm:px-16 lg:px-16 py-7 border-y border-[#d4c9b8] overflow-x-auto">
        {[
          { value: '10+', label: 'Projects' },
          { value: '12+', label: 'Technologies' },
          { value: '1', label: 'Dedicated Developer' },
          { value: '∞', label: 'Lines of Code' },
        ].map(({ value, label }) => (
          <div key={label} className="flex items-baseline gap-2 sm:gap-2">
            <span className="text-[36px] font-black text-[#1a1a1a] font-serif tracking-[-0.02em]">{value}</span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#888] font-['Courier_New',monospace]">{label}</span>
          </div>
        ))}
      </div>

      <div className="bg-[#c0392b] overflow-hidden py-3 border-b border-[#a93226]">
        <div className="ticker-track">
          {technologies.map((tech, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-white font-['Courier_New',monospace] px-5 whitespace-nowrap">
                {tech}
              </span>
              <span className="text-white/50 text-[14px]">✦</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default TextMove