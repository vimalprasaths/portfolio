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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <ParticleCanvas />

      {/* Big bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[22vw] text-white/[0.02] leading-none tracking-widest">
          VIMAL
        </span>
      </div>

      {/* Orb accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-neon-cyan" />
            <span className="font-mono text-neon-cyan text-xs tracking-[0.3em] uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-display text-7xl md:text-9xl leading-none text-white mb-4"
          >
            VIMAL
            <br />
            <span className="text-neon-cyan text-glow-cyan">PRASATH</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-slate-400 text-lg mb-8 h-8"
          >
            <span className="text-neon-green">&gt; </span>
            <TypeAnimation
              sequence={[
                "Building Full Stack Apps",
                2000,
                "Crafting React UIs",
                2000,
                "Designing with Figma",
                2000,
                "Salesforce Developer",
                2000,
                "IoT Enthusiast",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-white"
            />
            <span className="animate-pulse text-neon-cyan">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="font-body text-slate-400 text-lg leading-relaxed max-w-lg mb-10"
          >
            A passionate Full Stack Developer from Chennai, building scalable web 
            applications and innovative digital experiences. Currently @ Nutz Innovation Tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-neon-cyan text-dark-950 font-mono font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-white transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-neon-cyan/40 text-neon-cyan font-mono text-sm tracking-widest uppercase hover:bg-neon-cyan/10 transition-all duration-300 rounded-sm"
            >
              Contact Me
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="Vimal_Prasath_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 border border-neon-pink/40 text-neon-pink font-mono text-sm tracking-widest uppercase hover:bg-neon-pink/10 transition-all duration-300 rounded-sm"
            >
              <span>⬇</span> Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-6 mt-10"
          >
            {[
              { label: "GitHub", href: "https://github.com/vimalprasaths" },
              { label: "LinkedIn", href: "https://linkedin.com/in/vimal-prasath-s-b13b49301" },
              { label: "Email", href: "mailto:Vimalprasath1604@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-slate-500 hover:text-neon-cyan transition-colors duration-300 tracking-wider uppercase border-b border-transparent hover:border-neon-cyan pb-0.5"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Avatar / Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-neon-cyan/20 rounded-full"
              style={{ borderStyle: "dashed" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-16 border border-neon-pink/10 rounded-full"
              style={{ borderStyle: "dashed" }}
            />

            {/* Profile box */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="w-full h-full rounded-2xl card-glass border border-neon-cyan/30 flex flex-col items-center justify-center gap-4 p-6 glow-cyan">
                {/* Avatar initials */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 border-2 border-neon-cyan/50 flex items-center justify-center">
                  <span className="font-display text-5xl text-neon-cyan text-glow-cyan">VP</span>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl text-white tracking-wider">VIMAL PRASATH</p>
                  <p className="font-mono text-xs text-neon-cyan mt-1">Full Stack Developer</p>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">Chennai, India</p>
                </div>
                {/* Status dot */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <span className="font-mono text-xs text-neon-green">Available for work</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {[
              { label: "React", top: "-top-4", right: "-right-4", color: "cyan" },
              { label: "Node.js", bottom: "-bottom-4", left: "-left-4", color: "green" },
              { label: "Salesforce", top: "top-1/2", right: "-right-12", color: "pink" },
            ].map((b) => (
              <motion.div
                key={b.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute ${b.top || ""} ${b.bottom || ""} ${b.right || ""} ${b.left || ""} px-3 py-1.5 card-glass border rounded-full font-mono text-xs ${
                  b.color === "cyan" ? "text-neon-cyan border-neon-cyan/40" :
                  b.color === "green" ? "text-neon-green border-neon-green/40" :
                  "text-neon-pink border-neon-pink/40"
                }`}
              >
                {b.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
    </section>
  );
}
