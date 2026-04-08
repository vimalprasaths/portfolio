import { useReveal } from "./hooks/useReveal.js";

import Cursor     from "./components/Cursor.jsx";
import Navbar     from "./components/Navbar.jsx";
import Hero       from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects   from "./components/Projects.jsx";
import Skills     from "./components/Skills.jsx";
import Education  from "./components/Education.jsx";
import Contact    from "./components/Contact.jsx";
import Footer     from "./components/Footer.jsx";

export default function App() {
  useReveal();

  return (
    <>
      {/* ── Background layers ── */}
      <div className="vp-noise" />
      <div className="vp-orb vp-orb1" />
      <div className="vp-orb vp-orb2" />
      <div className="vp-orb vp-orb3" />

      {/* ── UI ── */}
      <Cursor />
      <Navbar />
      <Hero />

      <div className="vp-divider" />
      <Experience />

      <div className="vp-divider" />
      <Projects />

      <div className="vp-divider" />
      <Skills />

      <div className="vp-divider" />
      <Education />

      <div className="vp-divider" />
      <Contact />

      <Footer />
    </>
  );
}
