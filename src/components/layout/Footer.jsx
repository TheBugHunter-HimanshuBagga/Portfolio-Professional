import { footerData, personalInfo, socials } from "../../data/index.js";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          {footerData.taglines.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <p>{footerData.credential}</p>
          <a
            href="#projects"
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1"
          >
            View Work
          </a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for opportunities</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a
            href="#contact"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold"
          >
            Contact
          </a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            {footerData.copyright}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-center">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
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
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] hover:text-white transition-colors duration-300"
              aria-label="LeetCode"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.528 5.528 0 00.062 2.768 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.039-.038-4.276-4.193c-.652-.64-.972-1.495-.79-2.348a3.56 3.56 0 01.196-1.186l.038-.038 3.854-4.126L10.4 4.577a5.266 5.266 0 00-2.104-1.209 5.35 5.35 0 00-.513-.125 5.528 5.528 0 00-2.768-.062 5.83 5.83 0 00-1.017.349A5.938 5.938 0 00.913 5.44L.046 9.54c-.54.54-.54 1.414-.003 1.955a1.378 1.378 0 001.951.003l2.396-2.392a3.021 3.021 0 014.205-.038l4.276 4.193c.652.64.972 1.495.79 2.348a3.56 3.56 0 01-.196 1.186l-.038.038-3.854 4.126 6.127 6.044a5.266 5.266 0 002.104 1.209 5.35 5.35 0 00.513.125 5.528 5.528 0 002.768.062 5.83 5.83 0 001.017-.349 5.938 5.938 0 001.818-1.271l4.193-4.277.038-.039c2.165-2.247 2.133-5.852-.074-8.063l-2.392-2.396a1.374 1.374 0 00-.438-.961z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
