import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "3+", label: "Projects Built" },
  { value: "2", label: "Certifications" },
  { value: "6+", label: "Tech Stacks" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-neon-cyan text-sm tracking-[0.3em]">01.</span>
            <span className="w-16 h-px bg-neon-cyan/50" />
            <span className="font-mono text-slate-600 text-xs tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
            WHO I<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(0,245,255,0.5)" }}>
              AM
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6 text-slate-300 font-body text-lg leading-relaxed">
              <p>
                I'm <span className="text-neon-cyan font-semibold">Vimal Prasath S</span>, a passionate 
                Full Stack Developer based in Chennai, India. I specialize in building modern, scalable 
                web applications with clean code and intuitive user experiences.
              </p>
              <p>
                Currently working as a <span className="text-neon-pink font-semibold">Full Stack Developer Intern</span> at 
                Nutz Innovation Tech Pvt Ltd, where I develop and maintain web applications, optimize database 
                performance, and collaborate with senior developers on scalability improvements.
              </p>
              <p>
                My passion spans from building travel booking platforms and IoT tracking systems, to 
                deep learning frameworks for video grounding. I love bridging the gap between design and 
                functionality.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solver", "Team Player", "Fast Learner", "Creative Thinker"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-neon-cyan/20 text-neon-cyan font-mono text-xs tracking-widest rounded-sm hover:bg-neon-cyan/10 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.a
              href="mailto:Vimalprasath1604@gmail.com"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-3 mt-8 font-mono text-sm text-neon-cyan group"
            >
              <span>Get In Touch</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Vimal_Prasath_Resume.pdf"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,0,110,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="ml-6 inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-neon-pink/40 text-neon-pink font-mono text-xs tracking-widest uppercase hover:bg-neon-pink/10 transition-all duration-300 rounded-sm"
            >
              ⬇ Download Resume
            </motion.a>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="card-glass rounded-lg p-6 text-center border-animate"
                >
                  <p className="font-display text-5xl text-neon-cyan text-glow-cyan mb-2">{stat.value}</p>
                  <p className="font-mono text-xs text-slate-500 tracking-widest uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Current Role Card */}
            <div className="card-glass rounded-lg p-6 border border-neon-green/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded border border-neon-green/30 flex items-center justify-center">
                  <span className="text-neon-green text-lg">⚡</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span className="font-mono text-xs text-neon-green tracking-widest uppercase">Currently</span>
                  </div>
                  <p className="font-body font-semibold text-white">Full Stack Developer Intern</p>
                  <p className="font-mono text-xs text-slate-500 mt-1">Nutz Innovation Tech Pvt Ltd</p>
                  <p className="font-mono text-xs text-slate-600 mt-0.5">Jan 2026 – Present · Erode, TN</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
