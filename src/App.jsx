import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorTracker from "./components/CursorTracker";

export default function App() {
  return (
    <div className="noise bg-dark-950 min-h-screen text-white overflow-x-hidden">
      <div className="scanline" />
      <CursorTracker />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

