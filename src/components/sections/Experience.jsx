import { experienceData, experienceLogos } from "../../data/index.js";

function ExperienceCard({ intern, index }) {
  const ongoing =
    intern.status?.toLowerCase() === "ongoing" ||
    intern.duration?.toLowerCase().includes("present") ||
    intern.duration?.toLowerCase().includes("currently");
  const org = experienceLogos[intern.organization];

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group relative bg-white rounded-[24px] border border-[#f5ddd3] px-5 py-5 md:px-6 md:py-6 min-h-[315px] overflow-hidden shadow-[0_8px_30px_rgba(240,105,65,0.07)] hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(240,105,65,0.16)] hover:border-[#ffb99b] transition-all duration-400"
    >
      <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-[#fff0ea] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-[54px] h-[54px] shrink-0 rounded-2xl bg-[#faf6f3] border border-[#f2e2d8] flex items-center justify-center overflow-hidden">
            {org ? (
              <img
                src={org.logo}
                alt={intern.organization}
                className={org.className}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <span className="text-[#ef6538] font-black text-lg">
                {intern.organization.charAt(0)}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ef6538]">
              {intern.type}
            </p>
            <h3 className="text-[17px] md:text-[19px] font-black text-[#111] leading-tight tracking-tight mt-1">
              {intern.organization}
            </h3>
          </div>
        </div>

        <span
          className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9.5px] font-black uppercase tracking-wider border ${
            ongoing
              ? "bg-[#ecfdf5] border-[#a7f3d0] text-[#047857]"
              : "bg-[#f4f4f5] border-[#e4e4e7] text-[#52525b]"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              ongoing ? "bg-[#10b981] animate-pulse" : "bg-[#a1a1aa]"
            }`}
          />
          {intern.status}
        </span>
      </div>

      <p className="relative mt-4 text-[13.5px] font-black text-[#1f1f22]">
        {intern.role}
      </p>
      <p className="relative text-[12px] font-semibold text-[#8a8a91] mt-1">
        {intern.duration}
      </p>

      <p className="relative mt-3.5 text-[12.5px] leading-[1.65] text-[#66666d]">
        {intern.description}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {intern.skills.slice(0, 4).map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wide text-[#b4552f] bg-[#fff3ed] border border-[#ffe0d1] rounded-full"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="relative mt-4 pt-3.5 border-t border-dashed border-[#f0e2d8] flex flex-wrap gap-1.5">
        {intern.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#9a9aa1] bg-[#fafafa] border border-[#eee] rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#fffdfc] px-5 sm:px-8 lg:px-10 pt-14 md:pt-16 pb-16 scroll-mt-20"
    >
      <div className="absolute top-[150px] left-[-100px] w-[250px] h-[250px] rounded-full bg-[#fff0ea] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-[50px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#fff1eb] blur-3xl opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div data-aos="fade-up" className="relative text-center mb-8 md:mb-9">
          <div className="mb-3">
            <span className="text-[#ef6538] text-[10px] md:text-[11px] font-black tracking-[0.22em] uppercase">
              Internships & Experience
            </span>
          </div>
          <h2 className="text-[#111] text-[42px] md:text-[52px] font-black leading-none tracking-[-0.045em]">
            Work <span className="text-[#ef6538]">Experience</span>
          </h2>
          <p className="mt-4 max-w-[600px] mx-auto text-[#777] text-sm md:text-[15px] leading-6 font-medium">
            Real engineering roles where I applied backend principles
            <br className="hidden md:block" />
            and shipped production-oriented systems.
          </p>

          <div className="hidden md:block absolute right-[25px] top-[0px] w-[190px] text-left rotate-[-7deg] text-[#ef6538] font-medium italic leading-[1.02] text-[22px] opacity-90 pointer-events-none handwritten">
            <div>Turning</div>
            <div>Ideas into</div>
            <div className="ml-8">Impact</div>
            <div className="ml-12 mt-1 w-[70px] h-[2px] bg-[#ef6538] rotate-[-6deg] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {experienceData.map((e, i) => (
            <ExperienceCard
              key={`${e.organization}-${i}`}
              intern={e}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Wave divider into the dark highlights section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20 transform translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-16 fill-[#050505]"
        >
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1080,112 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
