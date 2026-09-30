import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../../data/index.js";

const hireMail = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry — Portfolio&body=Hello ${personalInfo.brandName},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        open
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
          : scrolled
            ? "bg-black/45 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
        <div className="h-[76px] flex items-center justify-between">
          <a
            href="#home"
            className="text-white text-xl sm:text-2xl font-black tracking-tight transition-all duration-300 hover:opacity-80"
          >
            {personalInfo.brandName}
            <span className="text-[#ff4b1f]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="relative text-sm font-medium text-white/70 transition-all duration-300 hover:text-white group"
              >
                {label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#ff4b1f] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={hireMail}
              className="inline-flex items-center justify-center rounded-full border border-[#ff4b1f]/60 bg-[#ff4b1f]/5 px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#ff4b1f] hover:border-[#ff4b1f] hover:shadow-[0_0_25px_rgba(255,75,31,0.45)]"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#ff4b1f]/60 hover:text-[#ff4b1f]"
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-3 bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="flex flex-col">
            {navLinks.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="py-4 text-base font-medium text-white/75 border-b border-white/5 transition-colors hover:text-[#ff4b1f]"
              >
                {label}
              </a>
            ))}
            <a
              href={hireMail}
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-full bg-[#ff4b1f] py-3 text-center text-sm font-bold text-white shadow-[0_0_25px_rgba(255,75,31,0.3)]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
