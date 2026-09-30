import { highlightsData, leetCodeData, socials } from "../../data/index.js";

function StatsPanel() {
  return (
    <div className="relative w-full h-full min-h-[420px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 70% at 30% 20%, rgba(255,114,0,0.35) 0%, transparent 62%), radial-gradient(70% 60% at 80% 85%, rgba(255,42,42,0.30) 0%, transparent 60%), linear-gradient(160deg, #14100e 0%, #050505 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="relative h-full flex flex-col justify-center gap-6 p-8 lg:p-12">
        <div className="inline-flex items-center gap-3 self-start rounded-full border border-[#ff7200]/50 bg-[#ff7200]/10 px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7900]" />
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ff7900]">
            By the numbers
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "36", l: "Public Repos" },
            { v: leetCodeData.problemsSolved, l: "DSA Problems" },
            { v: `${leetCodeData.streak}-Day`, l: "LeetCode Streak" },
            { v: "2×", l: "Pull Shark" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5"
            >
              <p className="text-[34px] leading-none font-black text-white tracking-tight">
                {s.v}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        <a
          href={socials.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          LeetCode Profile
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 17L17 7M8 7h9v9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative w-full overflow-hidden bg-[#050505] text-white font-sans"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute left-[-220px] top-[20%] w-[650px] h-[650px] rounded-full bg-[#ff5a00]/10 blur-[150px] pointer-events-none" />
      <div className="absolute right-[-300px] top-[35%] w-[700px] h-[700px] rounded-full bg-[#ff7200]/[0.045] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[42%_58%] items-stretch">
        <div className="hidden lg:block h-full min-h-0">
          <StatsPanel />
        </div>

        <div className="relative px-6 sm:px-10 md:px-14 lg:px-14 xl:px-16 pt-20 pb-16 lg:pt-24 lg:pb-20">
          <header data-aos="fade-up" className="max-w-4xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#ff7200]" />
              <span className="text-[#ff7900] text-[11px] md:text-xs font-black tracking-[0.28em] uppercase">
                Highlights
              </span>
            </div>
            <h2 className="text-white text-[42px] sm:text-5xl md:text-6xl xl:text-[72px] font-black uppercase tracking-[-0.045em] leading-[0.88] mb-7">
              Achievements
              <br />
              &amp; Recognition
            </h2>
            <p className="text-white/45 text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-[850px]">
              Open source contributions, consistent problem solving, and
              sustained delivery across backend engineering.
            </p>
          </header>

          <div className="relative pl-10">
            {/* vertical rail */}
            <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-[#ff7200] via-[#ff7200]/40 to-transparent" />

            <div className="flex flex-col gap-6">
              {highlightsData.map((h, i) => (
                <div
                  key={h.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 90}
                  className="relative rounded-[22px] border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:border-[#ff7200]/50 hover:bg-white/[0.055] transition-all duration-400"
                >
                  <span className="absolute -left-[47px] top-8 w-[14px] h-[14px] rounded-full bg-[#ff7200] shadow-[0_0_16px_rgba(255,114,0,0.75)]" />

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="rounded-full border border-[#ff7200]/40 bg-[#ff7200]/10 px-3 py-1 text-[9.5px] font-black uppercase tracking-[0.18em] text-[#ff7900]">
                      {h.badge}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      {h.role}
                    </span>
                  </div>

                  <h3 className="text-white text-xl md:text-2xl font-black tracking-[-0.03em] leading-tight">
                    {h.title}
                  </h3>
                  <p className="mt-2.5 text-white/50 text-sm leading-relaxed">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="mt-12 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ff7900]">
                  LeetCode
                </p>
                <p className="mt-2 text-white text-3xl md:text-4xl font-black tracking-tight">
                  {leetCodeData.problemsSolved} problems solved
                </p>
                <p className="mt-2 text-white/45 text-xs md:text-sm">
                  {leetCodeData.ranking}
                </p>
              </div>
              <a
                href={leetCodeData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-[#ff7200] hover:text-white transition-all duration-300"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
