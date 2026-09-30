import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/layout/Preloader.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Process from "./components/sections/Process.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Highlights from "./components/sections/Highlights.jsx";
import Repositories from "./components/sections/Repositories.jsx";
import SoftSkills from "./components/sections/SoftSkills.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Experience />
      <Highlights />
      <Repositories />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  );
}
