<<<<<<< HEAD
import { useTypewriter } from "../hooks/useTypewriter.js";
import { ROLES } from "../data/index.js";
import "./Hero.css";
=======
<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.5 ? "#00f5ff" : "#ff006e",
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // draw connections
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,245,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
>>>>>>> 7623fc5 (updated index.html with chatbot)

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="vp-hero" id="about">
      <div className="vp-hero-inner">

        {/* ── Left content ── */}
        <div className="vp-hero-content">
          <div className="vp-badge">
            <span className="vp-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="vp-hero-name">
            Vimal<br />
            <span className="vp-hero-name-grad">Prasath</span> S
          </h1>

          <p className="vp-role">
            {role}
            <span className="vp-cursor-blink">_</span>
          </p>

          <p className="vp-hero-desc">
            Building scalable, performant web applications with modern technologies.
            Currently shaping the future at{" "}
            <strong style={{ color: "var(--text)" }}>Nutz Innovation Tech</strong>.
            Passionate about clean architecture and pixel-perfect UIs.
          </p>

          <div className="vp-btns">
            <a href="mailto:Vimalprasath1604@gmail.com" className="vp-btn-p">
              Get in Touch ↗
            </a>
            <a
              href="https://github.com/vimalprasaths"
              target="_blank"
              rel="noreferrer"
              className="vp-btn-s"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* ── Right avatar ── */}
        <div className="vp-avatar-wrap">
          <div className="vp-avatar-ring">
            <div className="vp-avatar-inner">👨‍💻</div>
          </div>

          <div className="vp-stats">
            {[
              ["3+",   "Projects"],
              ["6.82", "CGPA @ MIT"],
              ["2",    "Certifications"],
            ].map(([num, label]) => (
              <div className="vp-stat" key={label}>
                <div className="vp-stat-num">{num}</div>
                <div className="vp-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-neon-cyan to-transparent"
        />
      </motion.div>
=======
import { useTypewriter } from "../hooks/useTypewriter.js";
import { ROLES } from "../data/index.js";
import "./Hero.css";

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="vp-hero" id="about">
      <div className="vp-hero-inner">

        {/* ── Left content ── */}
        <div className="vp-hero-content">
          <div className="vp-badge">
            <span className="vp-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="vp-hero-name">
            Vimal<br />
            <span className="vp-hero-name-grad">Prasath</span> S
          </h1>

          <p className="vp-role">
            {role}
            <span className="vp-cursor-blink">_</span>
          </p>

          <p className="vp-hero-desc">
            Building scalable, performant web applications with modern technologies.
            Currently shaping the future at{" "}
            <strong style={{ color: "var(--text)" }}>Nutz Innovation Tech</strong>.
            Passionate about clean architecture and pixel-perfect UIs.
          </p>

          <div className="vp-btns">
            <a href="mailto:Vimalprasath1604@gmail.com" className="vp-btn-p">
              Get in Touch ↗
            </a>
            <a
              href="https://github.com/vimalprasaths"
              target="_blank"
              rel="noreferrer"
              className="vp-btn-s"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* ── Right avatar ── */}
        <div className="vp-avatar-wrap">
          <div className="vp-avatar-ring">
            <div className="vp-avatar-inner">👨‍💻</div>
          </div>

          <div className="vp-stats">
            {[
              ["3+",   "Projects"],
              ["6.82", "CGPA @ MIT"],
              ["2",    "Certifications"],
            ].map(([num, label]) => (
              <div className="vp-stat" key={label}>
                <div className="vp-stat-num">{num}</div>
                <div className="vp-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

>>>>>>> 7623fc5 (updated index.html with chatbot)
      {/* Scroll hint */}
      <div className="vp-scroll-hint">
        <span>scroll</span>
        <div className="vp-scroll-line" />
      </div>
<<<<<<< HEAD
=======
>>>>>>> 5acbca0 (portfolio with chatbot)
>>>>>>> 7623fc5 (updated index.html with chatbot)
    </section>
  );
}
