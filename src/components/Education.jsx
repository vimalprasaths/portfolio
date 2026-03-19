import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "Madras Institute of Technology, Anna University",
    location: "Chennai, India",
    period: "2022 – 2025",
    grade: "CGPA: 6.82",
    icon: "🎓",
    color: "cyan",
  },
  {
    degree: "Diploma",
    field: "Automobile Engineering",
    institution: "Annai JKK Sampoorani Ammal Polytechnic College",
    location: "Erode, India",
    period: "2020 – 2022",
    grade: "84%",
    icon: "📚",
    color: "pink",
  },
];

const certifications = [
  {
    title: "Java Full Stack Developer",
    issuer: "Besant Technologies",
    year: "2025",
    icon: "☕",
    color: "green",
  },
  {
    title: "Salesforce Administrator",
    issuer: "Udemy",
    year: "2025",
    icon: "☁️",
    color: "purple",
  },
];

const colorMap = {
  cyan: { accent: "text-neon-cyan", border: "border-neon-cyan/30", bg: "bg-neon-cyan/10", dot: "bg-neon-cyan" },
  pink: { accent: "text-neon-pink", border: "border-neon-pink/30", bg: "bg-neon-pink/10", dot: "bg-neon-pink" },
  green: { accent: "text-neon-green", border: "border-neon-green/30", bg: "bg-neon-green/10", dot: "bg-neon-green" },
  purple: { accent: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", dot: "bg-purple-400" },
};

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="relative py-32 overflow-hidden bg-dark-900/30">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-neon-cyan text-sm tracking-[0.3em]">04.</span>
            <span className="w-16 h-px bg-neon-cyan/50" />
            <span className="font-mono text-slate-600 text-xs tracking-widest uppercase">Background</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
            EDUCATION
            <br />
            <span className="text-neon-cyan text-glow-cyan">&</span>{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(0,245,255,0.4)" }}>
              CERTS
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <p className="font-mono text-xs text-slate-600 tracking-widest uppercase mb-8">
              Academic Journey
            </p>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-cyan/20 to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => {
                  const c = colorMap[edu.color];
                  return (
                    <motion.div
                      key={edu.institution}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.2 }}
                      className="relative pl-16"
                    >
                      {/* Dot on timeline */}
                      <div className={`absolute left-3 top-5 w-4 h-4 rounded-full ${c.dot} border-2 border-dark-950`} />
                      {/* Icon */}
                      <div className={`absolute left-0 top-2 w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center text-xl`}>
                        {edu.icon}
                      </div>

                      <div className={`card-glass rounded-xl p-6 border ${c.border} hover:border-opacity-70 transition-all duration-300`}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className={`font-mono text-xs ${c.accent} tracking-widest uppercase mb-1`}>
                              {edu.period}
                            </p>
                            <h3 className="font-display text-2xl text-white tracking-wide">{edu.degree}</h3>
                            <p className="font-body text-slate-300 font-medium">{edu.field}</p>
                          </div>
                          <span className={`px-3 py-1 ${c.bg} border ${c.border} rounded-sm font-mono text-xs ${c.accent} flex-shrink-0 ml-4`}>
                            {edu.grade}
                          </span>
                        </div>
                        <p className="font-body text-slate-500 text-sm mt-3">{edu.institution}</p>
                        <p className="font-mono text-xs text-slate-600 mt-1">📍 {edu.location}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="font-mono text-xs text-slate-600 tracking-widest uppercase mb-8">
              Certifications
            </p>
            <div className="space-y-6">
              {certifications.map((cert, i) => {
                const c = colorMap[cert.color];
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    whileHover={{ x: 6 }}
                    className={`card-glass rounded-xl p-6 border ${c.border} hover:${c.bg} transition-all duration-300 flex items-center gap-5`}
                  >
                    <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-body font-semibold text-white text-lg">{cert.title}</h3>
                      <p className={`font-mono text-xs ${c.accent} mt-1`}>{cert.issuer}</p>
                      <p className="font-mono text-xs text-slate-600 mt-0.5">{cert.year}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full ${c.bg} border ${c.border} flex items-center justify-center`}>
                      <span className={`text-sm ${c.accent}`}>✓</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Experience callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 card-glass rounded-xl p-6 border border-neon-cyan/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <p className="font-mono text-xs text-neon-cyan tracking-widest uppercase mb-3">Current Role</p>
              <p className="font-display text-3xl text-white mb-2">Full Stack Developer</p>
              <p className="font-body text-slate-400">Nutz Innovation Tech Pvt Ltd</p>
              <p className="font-mono text-xs text-slate-600 mt-1">Jan 2026 – Present</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="font-mono text-xs text-neon-green">Currently Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
