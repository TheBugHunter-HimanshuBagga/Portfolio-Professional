import { useMemo, useState } from "react";
import {
  skillFilters,
  skillCardConfig,
  skillsData,
} from "../../data/index.js";

const CategoryIcon = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="relative z-10 text-[34px]"
    style={{
      color,
      filter: `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 11px ${color}) drop-shadow(0 0 22px ${color}70)`,
    }}
  >
    <path d="M4 6h16M4 12h16M4 18h10" />
    <circle cx="18.5" cy="18" r="2.5" />
  </svg>
);

function SkillCard({ category, index }) {
  const cfg = skillCardConfig[category.title];
  if (!cfg) return null;

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 80}
      className="group relative h-[386px] overflow-hidden rounded-[18px] border bg-[#050608]/68 p-[18px] backdrop-blur-[4px] transition-all duration-500"
      style={{
        borderColor: `${cfg.color}9d`,
        boxShadow: `0 0 0 1px ${cfg.color}12, 0 14px 38px rgba(0,0,0,0.45), inset 0 0 40px ${cfg.color}0b`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${cfg.color}e0`;
        e.currentTarget.style.boxShadow = `0 0 0 1px ${cfg.color}24, 0 18px 48px ${cfg.color}22, 0 0 55px ${cfg.color}12, inset 0 0 45px ${cfg.color}0f`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${cfg.color}9d`;
        e.currentTarget.style.boxShadow = `0 0 0 1px ${cfg.color}12, 0 14px 38px rgba(0,0,0,0.45), inset 0 0 40px ${cfg.color}0b`;
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(120% 80% at 15% 0%, ${cfg.color}1a 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-20">
        <div
          className="absolute left-[3px] top-[1px] z-30 text-[13px] font-bold leading-none"
          style={{
            color: cfg.light,
            textShadow: `0 0 7px ${cfg.color}, 0 0 15px ${cfg.color}55`,
          }}
        >
          {cfg.number}
        </div>

        <div className="flex items-center gap-3 pt-[23px]">
          <div
            className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-[17px] border"
            style={{
              borderColor: `${cfg.color}c0`,
              background: `radial-gradient(circle at 50% 42%, ${cfg.color}38 0%, ${cfg.color}12 46%, rgba(0,0,0,0.88) 86%)`,
              boxShadow: `0 0 18px ${cfg.color}45, 0 0 35px ${cfg.color}1c, inset 0 0 25px ${cfg.color}24`,
            }}
          >
            <div
              className="pointer-events-none absolute h-11 w-11 rounded-full blur-[16px]"
              style={{ background: cfg.color, opacity: 0.3 }}
            />
            <CategoryIcon color={cfg.color} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-[14px] font-black uppercase leading-[1.08] tracking-[-0.02em] text-white sm:text-[16px]">
              {category.title}
            </h3>
            <p className="mt-2 max-w-[250px] text-[11px] leading-[1.4] text-white/65 sm:text-[12px]">
              {cfg.description}
            </p>
          </div>
        </div>

        {/* Overall bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-[11px] font-bold text-white/60 mb-1.5">
            <span>OVERALL</span>
            <span style={{ color: cfg.light }}>{category.overall}%</span>
          </div>
          <div className="h-[6px] w-full rounded-full bg-white/8 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${category.overall}%`,
                background: `linear-gradient(90deg, ${cfg.color}, ${cfg.light})`,
                boxShadow: `0 0 12px ${cfg.color}99`,
              }}
            />
          </div>
        </div>

        {/* Skills */}
        <ul className="mt-5 space-y-3">
          {category.skills.map((s) => (
            <li key={s.name}>
              <div className="flex items-center justify-between text-[11.5px] text-white/75 mb-1">
                <span className="font-medium truncate">{s.name}</span>
                <span className="font-bold" style={{ color: cfg.light }}>
                  {s.level}%
                </span>
              </div>
              <div className="h-[3px] w-full rounded-full bg-white/8 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.level}%`,
                    background: `linear-gradient(90deg, ${cfg.color}, ${cfg.light})`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {category.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[9.5px] font-bold text-white/60 bg-white/[0.05] rounded-full border border-white/10 transition-all duration-300"
              style={{ borderColor: `${cfg.color}30` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? skillsData.categories
        : skillsData.categories.filter(
            (c) => skillCardConfig[c.title]?.filter === active
          ),
    [active]
  );

  return (
    <section
      id="skills"
      className="relative isolate min-h-screen overflow-hidden bg-[#030405] px-4 pb-28 pt-24 sm:px-6 lg:px-8 xl:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 10%, rgba(0,0,0,0.04) 48%, rgba(0,0,0,0.38) 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[4%] -z-10 h-[650px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px] bg-[rgba(35,10,2,0.16)]" />
      <div className="pointer-events-none absolute left-[1%] top-[24%] -z-10 h-[320px] w-[320px] rounded-full bg-orange-500/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute right-[1%] top-[14%] -z-10 h-[330px] w-[330px] rounded-full bg-orange-500/[0.08] blur-[115px]" />

      <div className="relative z-10 mx-auto max-w-[1460px]">
        <div data-aos="fade-up" className="mx-auto max-w-[900px] text-center">
          <div
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-400/80 bg-black/35 px-5 py-2 backdrop-blur-md"
            style={{ boxShadow: "0 0 22px rgba(255,100,0,0.20)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-orange-400"
              style={{ boxShadow: "0 0 10px #ff7800" }}
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white sm:text-xs">
              Skills & Technologies
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-orange-400"
              style={{ boxShadow: "0 0 10px #ff7800" }}
            />
          </div>

          <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[78px]">
            MY{" "}
            <span
              className="bg-gradient-to-r from-[#ffe0b2] via-[#ff9d38] via-[#ff7017] to-[#ff3030] bg-clip-text text-transparent"
            >
              SKILLSET
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-relaxed text-white/70 sm:text-base">
            A comprehensive overview of my languages, frameworks, databases,
            security tooling, and backend engineering concepts.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mb-8 mt-9 flex max-w-[1050px] flex-wrap justify-center gap-2 sm:gap-3"
        >
          {skillFilters.map((f) => {
            const on = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className="rounded-full border px-5 py-2 text-xs font-medium backdrop-blur-md transition-all duration-300 sm:text-sm"
                style={{
                  borderColor: on ? "#ff7a00" : "rgba(255,255,255,0.18)",
                  background: on ? "#ff7a00" : "rgba(5,5,5,0.42)",
                  color: "#ffffff",
                  boxShadow: on
                    ? "0 0 18px rgba(255,100,0,0.38), 0 0 35px rgba(255,70,0,0.14)"
                    : "none",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {filtered.map((c, i) => (
            <SkillCard key={c.title} category={c} index={i} />
          ))}
        </div>

        <div
          className="pointer-events-none mx-auto mt-12 h-px max-w-[1000px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,120,30,0.28), transparent)",
          }}
        />
      </div>
    </section>
  );
}
