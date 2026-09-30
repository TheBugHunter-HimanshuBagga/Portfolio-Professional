import { heroData, socials } from "../../data/index.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[680px] overflow-hidden bg-black"
    >
      {/* Animated backdrop (stands in for the reference hero video) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute inset-[-40%] opacity-[0.55]"
          style={{
            background:
              "radial-gradient(60% 55% at 20% 25%, #ff4b1f33 0%, transparent 60%), radial-gradient(50% 50% at 82% 70%, #ff2a2a26 0%, transparent 62%), radial-gradient(45% 45% at 55% 100%, #ff72001f 0%, transparent 65%)",
            animation: "heroDrift 22s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff22 1px, transparent 1px), linear-gradient(to bottom, #ffffff22 1px, transparent 1px)",
            backgroundSize: "78px 78px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 78%)",
          }}
        />
        <style>{`@keyframes heroDrift{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-4%,3%,0) scale(1.12)}}`}</style>
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.20) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-32 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.62), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.78), transparent)",
        }}
      />
      <div
        className="absolute right-[8%] top-[18%] w-[420px] h-[420px] rounded-full z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,72,25,0.16) 0%, rgba(255,72,25,0.05) 35%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1500px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="h-full flex items-center">
          <div className="w-full lg:w-[58%] xl:w-[56%] flex flex-col items-start pt-16 md:pt-12">
            <div data-aos="fade-up" className="flex items-center gap-4 mb-5">
              <span className="block w-11 h-[2px] bg-[#ff4b1f]" />
              <span className="text-white/85 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase">
                {heroData.greeting}
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-extrabold tracking-[-0.045em] leading-[0.92] whitespace-nowrap mb-5"
            >
              <span className="text-white text-[clamp(3.4rem,5.8vw,6rem)]">
                {heroData.name}{" "}
              </span>
              <span className="text-[#ff4b1f] text-[clamp(3.4rem,5.8vw,6rem)]">
                {heroData.nameAccent}
              </span>
            </h1>

            <div data-aos="fade-up" data-aos-delay="180" className="mb-5">
              <h2 className="text-white text-xl md:text-2xl lg:text-[28px] font-medium tracking-tight">
                {heroData.title}
              </h2>
              <div className="mt-3 w-12 h-[2px] bg-[#ff4b1f]" />
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="260"
              className="max-w-[590px] text-white/80 text-sm md:text-[15px] lg:text-[16px] leading-6 md:leading-7 font-medium mb-7"
            >
              {heroData.line1}
              <br />
              {heroData.line2}
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-full"
            >
              <a
                href={heroData.ctaPrimary.href}
                className="inline-flex items-center justify-center whitespace-nowrap px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-white text-black text-sm md:text-[15px] font-bold border border-white shadow-[0_5px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5f5f5] hover:shadow-[0_8px_30px_rgba(255,255,255,0.18)]"
              >
                {heroData.ctaPrimary.text}
              </a>

              <a
                href={heroData.ctaSecondary.href}
                className="inline-flex items-center justify-center whitespace-nowrap px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-black/25 backdrop-blur-md text-white text-sm md:text-[15px] font-bold border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
              >
                {heroData.ctaSecondary.text}
              </a>

              <a
                href={heroData.ctaTertiary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 md:px-6 py-3 md:py-3.5 rounded-full bg-[#c58b64]/70 backdrop-blur-md text-white text-sm md:text-[15px] font-bold border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d49a70]/80 hover:shadow-[0_8px_30px_rgba(255,130,65,0.22)]"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  />
                </svg>
                {heroData.ctaTertiary.text}
              </a>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="flex items-center gap-6 mt-7"
            >
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white transition-all duration-300 hover:text-[#ff4b1f] hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.351-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white transition-all duration-300 hover:text-[#ff4b1f] hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-white transition-all duration-300 hover:text-[#ff4b1f] hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.528 5.528 0 00.062 2.768 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.039-.038-4.276-4.193c-.652-.64-.972-1.495-.79-2.348a3.56 3.56 0 01.196-1.186l.038-.038 3.854-4.126L10.4 4.577a5.266 5.266 0 00-2.104-1.209 5.35 5.35 0 00-.513-.125 5.528 5.528 0 00-2.768-.062 5.83 5.83 0 00-1.017.349A5.938 5.938 0 00.913 5.44L.046 9.54c-.54.54-.54 1.414-.003 1.955a1.378 1.378 0 001.951.003l2.396-2.392a3.021 3.021 0 014.205-.038l4.276 4.193c.652.64.972 1.495.79 2.348a3.56 3.56 0 01-.196 1.186l-.038.038-3.854 4.126 6.127 6.044a5.266 5.266 0 002.104 1.209 5.35 5.35 0 00.513.125 5.528 5.528 0 002.768.062 5.83 5.83 0 001.017-.349 5.938 5.938 0 001.818-1.271l4.193-4.277.038-.039c2.165-2.247 2.133-5.852-.074-8.063l-2.392-2.396a1.374 1.374 0 00-.438-.961z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
