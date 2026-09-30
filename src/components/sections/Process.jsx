import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { processData } from "../../data/index.js";

function StepCard({ card, index, pathLength, containerRef }) {
  const ref = useRef(null);
  const [lit, setLit] = useState(false);

  useMotionValueEvent(pathLength, "change", (v) => {
    if (!ref.current || !containerRef.current) return;
    const cardBox = ref.current.getBoundingClientRect();
    const box = containerRef.current.getBoundingClientRect();
    const top = cardBox.top - box.top;
    const trigger = top + 50;
    const pos = v * box.height;
    if (pos >= trigger && !lit) setLit(true);
    if (pos < trigger && lit) setLit(false);
  });

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${
        index % 2 === 1 ? "lg:ml-auto lg:mr-4" : ""
      } ${
        lit
          ? "bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]"
          : "bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20" />
      </div>

      <div
        className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
          lit ? "bg-red-700/50" : "bg-[#f4f4f4]"
        }`}
      >
        <span
          className={`text-xl font-bold mb-2 font-mono tracking-tight transition-colors duration-500 ${
            lit ? "text-white" : "text-[#ff2a2a]"
          }`}
        >
          {card.number}
        </span>
        <h3
          className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-500 ${
            lit ? "text-white" : "text-gray-900"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`text-sm leading-relaxed transition-colors duration-500 ${
            lit ? "text-red-50" : "text-gray-600"
          }`}
        >
          {card.text}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });
  const drawn = useTransform(pathLength, (v) => v);

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(128,128,128,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="max-w-6xl mx-auto relative md:min-h-[1250px]">
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            {processData.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            {processData.heading}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            {processData.description}
          </p>
        </div>

        {/* Scroll-drawn dashed path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1250"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <motion.path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1250"
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ pathLength: drawn }}
          />
        </svg>

        <div className="relative md:absolute md:top-0 md:right-0 md:w-[52%] flex flex-col gap-14 md:gap-24 z-20 md:pt-40">
          {processData.cards.map((c, i) => (
            <StepCard
              key={c.number}
              card={c}
              index={i}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="relative z-20 mt-20 md:mt-0 md:absolute md:bottom-4 md:left-0 inline-block"
        >
          <span className="text-3xl font-black text-[#ff2a2a] handwritten -rotate-6 inline-block">
            {processData.endText}
          </span>
        </div>
      </div>
    </section>
  );
}
