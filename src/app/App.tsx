import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import About from "../pages/About/about";
import Projects from "../pages/Projects/projects";
import Experience from "../pages/Experience/experience";
import LandingHero from "../pages/Landing/LandingHero";
import IntroSection from "../pages/IntroSection/introsection";
import "../index.css";

const App = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -60;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <Layout>
      <>
        <LandingHero />
        <IntroSection />
        <About />
        <Projects />
        <Experience />
      </>
    </Layout>
  );
};

export default App;
