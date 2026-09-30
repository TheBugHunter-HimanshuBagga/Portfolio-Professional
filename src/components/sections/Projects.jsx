import { projectsData, socials } from "../../data/index.js";

const ArrowIcon = () => (
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
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.351-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

function ProjectVisual({ project }) {
  return (
    <div className="relative h-full min-h-[240px] rounded-[20px] overflow-hidden border border-white/10 bg-[#080606]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 100% 0%, rgba(255,114,0,0.20) 0%, transparent 62%), radial-gradient(100% 80% at 0% 100%, rgba(255,42,42,0.16) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="relative h-full p-5 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">
            {project.id}.java
          </span>
        </div>

        <div className="font-mono text-[11px] leading-relaxed text-white/55">
          <p>
            <span className="text-[#ff8500]">@</span>
            <span className="text-[#7af4ce]">RestController</span>
          </p>
          <p className="mt-1">
            <span className="text-[#5bd8ff]">public class</span>{" "}
            <span className="text-white/85">{project.id}Api</span> {"{"}
          </p>
          <p className="pl-3">
            <span className="text-[#5bd8ff]">@GetMapping</span>
            <span className="text-white/70">("/{project.id}")</span>
          </p>
          <p className="pl-3 text-white/45">ResponseEntity&lt;?&gt; handle() …</p>
          <p>{"}"}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.techTags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-[3px] text-[8.5px] font-bold uppercase tracking-wider text-white/55 bg-white/[0.05] border border-white/10 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, aosDelay }) {
  return (
    <div className="relative pl-0 lg:pl-[70px]">
      <div className="hidden lg:block absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/70 via-orange-500/30 to-transparent" />
      <div className="hidden lg:flex absolute left-[-10px] top-[50%] -translate-y-1/2 z-30 w-[62px] h-[62px] rounded-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 border border-orange-300/40 text-white text-sm font-black shadow-[0_0_28px_rgba(255,90,0,0.35)]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <article
        data-aos="fade-up"
        data-aos-delay={aosDelay}
        className="relative group rounded-[26px] p-[1px] bg-gradient-to-br from-orange-500/35 via-orange-500/10 to-red-500/20 hover:from-orange-500/75 hover:via-orange-500/25 hover:to-red-500/50 transition-all duration-500"
      >
        <div className="relative rounded-[25px] overflow-hidden bg-[#0c0908] min-h-[390px] md:min-h-[410px] px-5 py-6 md:px-8 md:py-8 lg:px-9 lg:py-8">
          <div className="absolute right-[-100px] top-[-100px] w-[300px] h-[300px] rounded-full bg-orange-600/10 blur-[90px] pointer-events-none group-hover:bg-orange-600/15 transition-all duration-700" />

          <div className="lg:hidden mb-4">
            <span className="text-[52px] font-black italic font-serif text-white/10 leading-none">
              {project.number}
            </span>
          </div>

          <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_340px] gap-7 lg:gap-9 items-center">
            <div className="min-w-0">
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-black tracking-[0.16em] uppercase text-orange-500 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/25 mb-5">
                  {project.isFlagship ? "★ " : ""}
                  {project.badge}
                </span>
              )}

              <div className="flex items-start gap-4 mb-5">
                <span className="hidden md:block text-[54px] lg:text-[58px] font-black italic font-serif text-white/10 leading-none shrink-0">
                  {project.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-white text-[25px] md:text-[30px] lg:text-[31px] font-black tracking-[-0.035em] leading-[1.05]">
                    {project.title}
                  </h3>
                  {project.category && (
                    <span className="inline-block mt-2.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-white/35">
                      {project.category}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-white/55 text-sm md:text-[15px] leading-6 mb-6 max-w-[850px] font-medium">
                {project.description}
              </p>

              {project.techTags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.techTags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[9px] md:text-[10px] font-bold text-white/60 bg-white/[0.035] rounded-full border border-white/10 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white text-xs md:text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs md:text-sm font-bold shadow-[0_0_20px_rgba(255,70,0,0.18)] hover:shadow-[0_0_30px_rgba(255,70,0,0.35)] hover:scale-[1.03] transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <ArrowIcon />
                  </a>
                )}
                {!project.links?.github && !project.links?.demo && (
                  <span className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white/50 text-xs md:text-sm font-bold">
                    Source Private
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <ProjectVisual project={project} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#050505] px-5 sm:px-8 lg:px-10 pt-20 md:pt-24 pb-28 md:pb-36 font-sans"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(128,128,128,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="absolute top-[100px] left-[-180px] w-[420px] h-[420px] rounded-full bg-orange-700/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[500px] right-[-180px] w-[420px] h-[420px] rounded-full bg-red-700/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Header split */}
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-[350px_minmax(0,1fr)] gap-8 lg:gap-10 mb-16 md:mb-20 items-center"
        >
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2 text-orange-500 text-[10px] md:text-[11px] font-black tracking-[0.18em] uppercase mb-5">
              <span className="w-7 h-[2px] bg-orange-500 rounded-full" />
              Selected Work
            </div>
            <h2 className="text-white text-[43px] sm:text-[50px] lg:text-[58px] font-black leading-[0.97] tracking-[-0.045em]">
              Work that
              <br />
              speaks for
              <br />
              <span className="text-orange-500">itself.</span>
            </h2>
            <p className="mt-6 text-white/50 text-sm leading-6 max-w-[330px] font-medium">
              From scalable Spring Boot backends and secure JWT architectures to
              real-time messaging and AI-integrated services — these projects
              reflect my journey of turning ideas into production-ready systems.
            </p>
            <div className="hidden lg:block mt-9 ml-10 text-orange-500 text-[25px] leading-[0.92] italic rotate-[-7deg] opacity-90 select-none handwritten">
              <div>Build</div>
              <div className="ml-3">Learn</div>
              <div className="ml-1">Solve</div>
              <div className="ml-4">Repeat</div>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:min-h-[460px] flex items-center justify-center">
            <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-orange-600/15 blur-[120px] pointer-events-none" />
            <div className="absolute right-[4%] top-1/2 -translate-y-1/2 w-[520px] h-[270px] rounded-[50%] border border-orange-500/20 rotate-[-9deg] pointer-events-none" />
            <div className="absolute right-[7%] top-1/2 -translate-y-1/2 w-[460px] h-[230px] rounded-[50%] border border-orange-500/10 rotate-[12deg] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[560px] group">
              <div className="rounded-[22px] border border-orange-500/25 bg-[#0a0708] p-6 shadow-[0_25px_55px_rgba(255,75,0,0.16)] transition-all duration-700 group-hover:scale-[1.015] group-hover:shadow-[0_30px_70px_rgba(255,75,0,0.26)]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                    Backend Services
                  </span>
                </div>

                <div className="font-mono text-[12px] md:text-[13px] leading-7 text-white/60">
                  <p>
                    <span className="text-[#ff8500]">@</span>
                    <span className="text-[#7af4ce]">SpringBootApplication</span>
                  </p>
                  <p>
                    <span className="text-[#5bd8ff]">public class</span>{" "}
                    <span className="text-white/85">PortfolioApplication</span>{" "}
                    {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-[#5bd8ff]">public static void</span>{" "}
                    main(String[] args) {"{"}
                  </p>
                  <p className="pl-8 text-white/45">
                    SpringApplication.run(…);
                  </p>
                  <p className="pl-4">{"}"}</p>
                  <p>{"}"}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Spring Boot",
                    "JWT",
                    "WebSocket",
                    "Redis",
                    "Docker",
                    "MySQL",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-wider text-orange-300/80 bg-orange-500/10 border border-orange-500/25 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-[6%] bottom-[-26px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border border-orange-300/30 text-white text-[10px] md:text-xs font-black shadow-[0_0_25px_rgba(255,75,0,0.35)] hover:shadow-[0_0_35px_rgba(255,75,0,0.60)] hover:scale-105 transition-all duration-300"
              >
                <span>Visit My GitHub</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-7 md:gap-9">
          {projectsData.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              aosDelay={String(((i + 1) % 4) * 100)}
            />
          ))}
        </div>

        {/* Beyond the showcase */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-24 md:mt-32 border-t border-white/10 pt-14 md:pt-16"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-black text-orange-500">
                Beyond the showcase
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-[46px] font-black text-white mt-4 leading-[1.05] tracking-[-0.04em]">
                Building more than
                <br />
                <span className="text-white/35">just projects.</span>
              </h3>
            </div>
            <p className="text-white/45 text-sm md:text-base leading-7 font-medium">
              I am continuously building and experimenting with{" "}
              <span className="text-white font-bold">
                production-grade backend systems
              </span>{" "}
              across Spring Boot, security, real-time architectures, and
              AI-integrated services — with 36 public repositories and several
              more currently in progress.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative mt-24 md:mt-32 pt-16 md:pt-20 pb-8 md:pb-10 text-center"
        >
          <div className="relative max-w-[1100px] mx-auto">
            <div className="absolute -top-5 md:-top-8 left-1/2 -translate-x-1/2 text-orange-500/40 text-[72px] md:text-[90px] font-serif leading-none pointer-events-none">
              ❝
            </div>
            <p className="relative z-10 pt-8 text-white/70 text-[25px] md:text-[34px] lg:text-[40px] font-bold leading-[1.2] tracking-[-0.035em]">
              I don't just write code —
              <span className="text-white">
                {" "}
                I build systems that scale, secure, and serve.
              </span>
            </p>
            <div className="mt-8 md:mt-10 text-orange-500/40 text-[72px] md:text-[90px] font-serif leading-none pointer-events-none">
              ❞
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="mt-16 flex justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl px-8 py-5 border border-white/15 text-white font-bold text-base md:text-lg bg-white/[0.01] hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500"
          >
            <GithubIcon />
            <span>Explore All My Repositories</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
