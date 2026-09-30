import { aboutData, personalInfo } from "../../data/index.js";

const RoleIcon = ({ kind }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (kind) {
    case "spring":
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <path d="M12 3s4 4 4 8-4 6-4 6" />
          <path d="M18 7c2 2 2.5 4.5 1 6.5" />
          <path d="M6 8.5C4.6 10.5 4.8 13 6.5 14.6" />
          <circle cx="12" cy="19.5" r="1.6" />
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <path d="M9 18c-2 .6-3 1.4-3 2.5 0 1.4 2.2 2.5 6 2.5s6-1.1 6-2.5c0-1.1-1.3-1.9-3.5-2.4" />
          <path d="M13 2c2.5 3-.5 4.5-.5 6.5S15.5 12 15 14.5" />
          <path d="M16.5 12.5c2 1.5 1.2 3.5-.5 4.2" />
          <path d="M8 14c-1.5 1-1.4 2.8.2 3.6" />
          <path d="M5 6.5c1.5-1 3.5-.6 4.3.8" />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <path d="M8 7H5a2 2 0 00-2 2v6a2 2 0 002 2h3" />
          <path d="M16 7h3a2 2 0 012 2v6a2 2 0 01-2 2h-3" />
          <path d="M9 12h6" />
          <path d="M12 9.5v5" />
          <circle cx="12" cy="12" r="8.5" strokeDasharray="3 3" />
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <path d="M12 2.8l7.5 3v5.4c0 4.6-3.1 8.5-7.5 10-4.4-1.5-7.5-5.4-7.5-10V5.8z" />
          <path d="M9 12.2l2.2 2.2L15.4 10" />
        </svg>
      );
    case "realtime":
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <path d="M3 12h3l2-5 3 10 2.5-7 1.8 4H21" />
          <circle cx="19" cy="6" r="2" />
        </svg>
      );
    case "microservices":
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.6" />
          <rect x="14" y="3" width="7" height="7" rx="1.6" />
          <rect x="3" y="14" width="7" height="7" rx="1.6" />
          <rect x="14" y="14" width="7" height="7" rx="1.6" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <path d="M9 4.5A3.5 3.5 0 005.5 8v.5A3.5 3.5 0 004 15a3.5 3.5 0 003 3.45V19a2 2 0 002 2h1z" />
          <path d="M15 4.5A3.5 3.5 0 0118.5 8v.5A3.5 3.5 0 0120 15a3.5 3.5 0 01-3 3.45V19a2 2 0 01-2 2h-1z" />
          <path d="M12 4v16" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14" {...common}>
          <path d="M10.5 3.5L3 12l7.5 8.5" />
          <path d="M13.5 3.5L21 12l-7.5 8.5" />
        </svg>
      );
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left — hanging profile frame */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-b from-[#1b1b1f] to-[#0a0a0c] flex items-center justify-center">
                <span className="text-[86px] font-black leading-none text-[#ff4b1f] select-none">
                  HB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — bio + role badges */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 text-white mt-8 md:mt-0 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            {aboutData.heading}
          </h2>
          <p
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutData.bio }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8 max-w-4xl">
            {aboutData.roleLogos.map((role, i) => (
              <div
                key={`${role.title}-${role.subtitle}`}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 100}
                className="flex flex-col items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-white drop-shadow-2xl">
                  <RoleIcon kind={role.image} />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs md:text-sm font-black text-white uppercase tracking-wide">
                    {role.title}
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-widest">
                    {role.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm font-medium text-red-50/80 max-w-2xl">
            {personalInfo.location} · {personalInfo.emails.primary}
          </p>
        </div>
      </div>

      {/* Wave divider into the dark skills section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#030405]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
