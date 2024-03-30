import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import HomeLanding from "./Components/HomeLanding";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      direction: "horizontal",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HomeLanding scrollToSection={scrollToSection} />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
