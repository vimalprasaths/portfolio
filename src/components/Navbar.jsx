import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-dark-950/90 backdrop-blur-xl border-b border-neon-cyan/10" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-display text-3xl cursor-pointer"
          onClick={() => handleNav("Home")}
        >
          <span className="text-neon-cyan text-glow-cyan">V</span>
          <span className="text-white">P</span>
          <span className="text-neon-pink">.</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => handleNav(link)}
              whileHover={{ y: -2 }}
              className={`font-body text-sm font-medium tracking-widest uppercase transition-all duration-300 relative group ${
                active === link ? "text-neon-cyan" : "text-slate-400 hover:text-white"
              }`}
            >
              {link}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-neon-cyan transition-all duration-300 ${
                  active === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/resume.pdf"
            download="Vimal_Prasath_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 border border-neon-pink/50 text-neon-pink font-mono text-xs tracking-widest uppercase hover:bg-neon-pink/10 transition-all duration-300 rounded-sm"
          >
            ⬇ Resume
          </motion.a>
          <motion.a
            href="mailto:Vimalprasath1604@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2 border border-neon-cyan/50 text-neon-cyan font-mono text-xs tracking-widest uppercase hover:bg-neon-cyan/10 transition-all duration-300 rounded-sm glow-cyan"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-7 h-0.5 bg-neon-cyan"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-7 h-0.5 bg-neon-cyan"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-7 h-0.5 bg-neon-cyan"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/98 backdrop-blur-xl border-t border-neon-cyan/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link)}
                  className={`text-left font-body text-base font-medium uppercase tracking-widest ${
                    active === link ? "text-neon-cyan" : "text-slate-300"
                  }`}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
