import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-cyan/10 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-display text-3xl cursor-pointer"
        >
          <span className="text-neon-cyan text-glow-cyan">V</span>
          <span className="text-white">P</span>
          <span className="text-neon-pink">.</span>
        </motion.div>

        <p className="font-mono text-xs text-slate-600 text-center">
          Designed & Built by{" "}
          <span className="text-neon-cyan">Vimal Prasath S</span>{" "}
          · Chennai, India · 2026
        </p>

        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/vimalprasaths" },
            { label: "LinkedIn", href: "https://linkedin.com/in/vimal-prasath-s-b13b49301" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-slate-600 hover:text-neon-cyan transition-colors duration-300 tracking-wider uppercase"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
