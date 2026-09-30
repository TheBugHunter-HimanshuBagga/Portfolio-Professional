import { softSkillsData } from "../../data/index.js";

const icons = {
  puzzle: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 4a2 2 0 104 0 2 2 0 00-4 0zM4 11a2 2 0 100-4 2 2 0 000 4zm0 8a2 2 0 100-4 2 2 0 000 4zm16-8a2 2 0 100-4 2 2 0 000 4zm0 8a2 2 0 100-4 2 2 0 000 4zM11 4v6H5m14 4v6h-6"
    />
  ),
  layers: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l9 5-9 5-9-5 9-5zm9 9l-9 5-9-5m18-1l-9 5-9-5"
    />
  ),
  chat: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10h8M8 14h5M21 12a8 8 0 01-8 8H7l-4 3v-5.5A8 8 0 1121 12z"
    />
  ),
  team: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-1a4 4 0 00-4-4h-1M9 20H4v-1a4 4 0 014-4h1m4-3a4 4 0 100-8 4 4 0 000 8zm6-6a3 3 0 100-6M7 11a3 3 0 100-6"
    />
  ),
  refresh: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v6h6M20 20v-6h-6M20 9A8 8 0 006.3 6.3M4 15a8 8 0 0013.7 2.7"
    />
  ),
  target: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-3.5a.5.5 0 100-1 .5.5 0 000 1z"
    />
  ),
  clock: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-13v5l3 2"
    />
  ),
  book: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2V5zm2 14h13"
    />
  ),
};

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 70}
      className="group relative rounded-[22px] bg-white border border-gray-200 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_55px_rgba(255,42,42,0.18)] hover:border-[#ff2a2a]/40 hover:-translate-y-1.5 transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-2xl bg-[#f4f4f4] border border-gray-200 group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] flex items-center justify-center transition-all duration-500">
        <svg
          className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          viewBox="0 0 24 24"
        >
          {icons[skill.icon] ?? icons.puzzle}
        </svg>
      </div>

      <h3 className="mt-5 text-lg font-black text-gray-900 tracking-tight">
        {skill.name}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
        {skill.desc}
      </p>

      <span className="absolute top-5 right-6 text-[11px] font-black text-gray-300 group-hover:text-[#ff2a2a] transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function SoftSkills() {
  return (
    <section
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(128,128,128,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      {/* Inverted wave divider from the dark repositories section */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#050505]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Essential traits that make me an effective engineer, collaborator,
            and communicator.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsData.map((s, i) => (
            <SoftSkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
