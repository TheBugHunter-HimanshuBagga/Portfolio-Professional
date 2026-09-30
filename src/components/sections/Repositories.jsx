import { useState } from "react";
import { repositoriesData, socials } from "../../data/index.js";

const accentIcons = {
  professional: "P",
  ai: "AI",
  ml: "ML",
  cloud: "CL",
  development: "DEV",
  security: "SEC",
};

export default function Repositories() {
  const [active, setActive] = useState("all");

  const total = repositoriesData.categories.reduce(
    (sum, c) => sum + c.repositories.length,
    0
  );

  const goTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="repositories-section" id="repositories">
      <div className="repositories-container">
        {/* Hero */}
        <div className="repositories-hero">
          <div className="repositories-hero-content">
            <div className="luxury-eyebrow" data-aos="fade-up">
              <span />
              Open Source Portfolio
            </div>
            <h1 data-aos="fade-up" data-aos-delay="80">
              Repositories<span>.</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="140">
              A growing collection of production-oriented Spring Boot backends,
              security systems, real-time services, and AI integrations — all
              built and version-controlled in public.
            </p>

            <div className="repository-stats" data-aos="fade-up" data-aos-delay="200">
              <div className="repository-stat">
                <div className="stat-icon">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.351-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <strong>{repositoriesData.stats.repositories}</strong>
                  <span>Repositories</span>
                </div>
              </div>

              <div className="repository-stat">
                <div className="stat-icon">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h10"
                    />
                  </svg>
                </div>
                <div>
                  <strong>{repositoriesData.categories.length}</strong>
                  <span>Domains</span>
                </div>
              </div>

              <div className="repository-stat">
                <div className="stat-icon">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Public</span>
                </div>
              </div>
            </div>
          </div>

          {/* Globe */}
          <div className="repository-globe" aria-hidden="true">
            <div className="globe">
              <div className="globe-grid" />
              <div className="globe-light" />
              <div className="globe-shine" />
            </div>
            <div className="globe-ring globe-ring-one" />
            <div className="globe-ring globe-ring-two" />
            <div className="globe-ring globe-ring-three" />
          </div>
        </div>

        {/* Filter */}
        <div className="repository-filter">
          <button
            type="button"
            className={active === "all" ? "active" : ""}
            onClick={() => goTo(repositoriesData.categories[0]?.id)}
          >
            All
          </button>
          {repositoriesData.categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={active === c.id ? "active" : ""}
              onClick={() => goTo(c.id)}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Categories */}
        {repositoriesData.categories.map((cat) => (
          <div
            key={cat.id}
            className={`repository-category ${cat.accent}`}
            id={cat.id}
          >
            <div className="category-header">
              <div className="category-heading-left">
                <div className="category-number">{cat.number}</div>
                <div className="category-heading-content">
                  <div className="category-title-row">
                    <span className="category-icon">
                      {accentIcons[cat.accent] ?? "●"}
                    </span>
                    <h3>{cat.title}</h3>
                  </div>
                  <p>{cat.description}</p>
                </div>
              </div>
              <div className="category-count">
                <strong>{cat.repositories.length}</strong>
                <span> repos</span>
              </div>
            </div>

            <div className="repository-grid">
              {cat.repositories.map((r) => (
                <div key={r.name + r.year} className="repository-card">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-bold leading-snug text-[#efede8]">
                        {r.name}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-[11.5px] text-[#8b8a91]">
                        <span className="issuer-dot" />
                        {r.issuer}
                      </p>
                    </div>
                    <span className="repository-year shrink-0">{r.year}</span>
                  </div>

                  <p className="mt-4 text-[12px] leading-relaxed text-[#73727a]">
                    Public repository maintained on GitHub, versioned and
                    documented alongside related backend work.
                  </p>

                  <div className="repository-footer">
                    <a
                      href={r.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repository-verify-link"
                    >
                      <span>View Repository</span>
                      <svg
                        className="w-3.5 h-3.5"
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
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center pb-10">
          <a
            href={repositoriesData.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-[#d5a83f]/50 bg-[#d5a83f]/10 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#d5a83f] hover:bg-[#d5a83f] hover:text-[#050505] transition-all duration-300"
          >
            Explore All {repositoriesData.stats.repositories} Repositories
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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

        <p className="text-center text-[11px] text-[#5d5b62] pb-6">
          {total} repositories indexed · profile:{" "}
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#d5a83f] transition-colors"
          >
            TheBugHunter-HimanshuBagga
          </a>
        </p>
      </div>
    </section>
  );
}
