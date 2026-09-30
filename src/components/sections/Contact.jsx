import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { personalInfo, socials, emailJsConfig } from "../../data/index.js";

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = formRef.current;
    const first = form.querySelector("#firstName")?.value || "";
    const last = form.querySelector("#lastName")?.value || "";
    const email = form.querySelector("#email")?.value || "";
    const message = form.querySelector("#message")?.value || "";

    if (!first.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    const configured =
      emailJsConfig.serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
      emailJsConfig.templateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
      emailJsConfig.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

    if (!configured) {
      const body = encodeURIComponent(
        `From: ${first} ${last}\nEmail: ${email}\n\n${message}`
      );
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${first} ${last}&body=${body}`,
        "_blank"
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      const { sendForm } = await import("@emailjs/browser");
      await sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        form,
        emailJsConfig.publicKey
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  const label =
    status === "sending"
      ? "Sending…"
      : status === "success"
        ? "Sent Successfully ✓"
        : status === "error"
          ? "Failed — Try Again"
          : "Send Message";

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900"
    >
      {/* Giant parallax word */}
      <motion.div
        style={{ y: reduce ? 0 : y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top display-impact">
          Contact
        </h1>
      </motion.div>

      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
              Reach Me
            </div>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/10 hover:bg-white hover:text-red-600 border border-white/20 px-4 py-2 rounded-full transition-all duration-300"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </a>
          </div>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-col gap-12 md:gap-16 w-full"
          >
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here"
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 mt-4">
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input
                  type="checkbox"
                  id="permission"
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                  style={{ accentColor: "white" }}
                />
                <label
                  htmlFor="permission"
                  className="cursor-pointer max-w-[280px] leading-snug"
                >
                  I give permission to contact me at this email address.
                </label>
              </div>

              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Your message will be sent directly to my inbox. I typically
                  respond within 24-48 hours.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For urgent inquiries, reach me at{" "}
                    <a
                      className="underline font-bold text-white"
                      href={`mailto:${personalInfo.emails.primary}`}
                    >
                      {personalInfo.emails.primary}
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-white text-[#ff2a2a] px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  >
                    {label}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
