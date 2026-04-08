import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/index.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`vp-nav ${scrolled ? "vp-nav--scrolled" : ""}`}>
      <div className="vp-nav-logo">VP/</div>
      <ul className="vp-nav-links">
        {NAV_LINKS.map((n) => (
          <li key={n}>
            <button className="vp-nav-link" onClick={() => scrollTo(n)}>
              {n}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
