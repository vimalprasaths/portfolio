import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Travel Hub Website",
    year: "2026",
    type: "Full Stack",
    description:
      "A comprehensive full-stack travel booking platform enabling users to explore destinations, manage trip plans, and book seamlessly. Features user authentication, trip listings, and robust booking management.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "REST API"],
    highlights: [
      "User authentication & authorization",
      "Dynamic trip listings & search",
      "Booking management system",
      "Optimized DB operations",
    ],
    color: "cyan",
    emoji: "✈️",
  },
  {
    id: 2,
    number: "02",
    title: "Two Stage Framework for Zero-Shot Video Grounding",
    year: "2025",
    type: "Deep Learning",
    description:
      "Designed a novel zero-shot video grounding framework using natural language queries. Applied contrastive learning techniques to significantly reduce dependency on labeled datasets.",
    tech: ["Python", "PyTorch", "Contrastive Learning", "NLP", "Computer Vision"],
    highlights: [
      "Zero-shot learning pipeline",
      "Contrastive learning integration",
      "Natural language query processing",
      "Reduced labeling dependency",
    ],
    color: "pink",
    emoji: "🎥",
  },
  {
    id: 3,
    number: "03",
    title: "Ambulance Tracking System",
    year: "2024",
    type: "IoT",
    description:
      "Built a real-time ambulance tracking system using IoT devices and GPS modules. Integrated mapping APIs to significantly improve emergency vehicle routing efficiency and response times.",
    tech: ["IoT", "GPS Modules", "Mapping APIs", "Embedded Systems", "JavaScript"],
    highlights: [
      "Real-time GPS tracking",
      "IoT device integration",
      "Mapping API integration",
      "Emergency routing optimization",
    ],
    color: "green",
    emoji: "🚑",
  },
  {
    id: 4,
    number: "04",
    title: "Outfit Recommendation System",
    year: "2025",
    type: "AI / ML",
    description:
      "An intelligent outfit recommendation system that suggests personalized clothing combinations based on user preferences, weather conditions, occasions, and style history using machine learning algorithms.",
    tech: ["Python", "Machine Learning", "React", "Node.js", "REST API"],
    highlights: [
      "Personalized style recommendations",
      "Weather-based outfit suggestions",
      "Occasion-based filtering",
      "User preference learning",
    ],
    color: "purple",
    emoji: "👗",
  },
  {
    id: 5,
    number: "05",
    title: "IPL Score Predictor",
    year: "2025",
    type: "Data Science",
    description:
      "A machine learning powered IPL cricket score prediction system that forecasts match scores and outcomes based on historical data, team statistics, player performance, venue, and match conditions.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    highlights: [
      "Real-time score prediction",
      "Team & player stats analysis",
      "Historical data modelling",
      "Match outcome forecasting",
    ],
    color: "orange",
    emoji: "🏏",
  },
];

const colorMap = {
  cyan: {
    accent: "text-neon-cyan",
    border: "border-neon-cyan/30",
    activeBorder: "border-neon-cyan/60",
    bg: "bg-neon-cyan/5",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
    dot: "bg-neon-cyan",
    glow: "shadow-[0_0_40px_rgba(0,245,255,0.1)]",
    rgb: "0,245,255",
  },
  pink: {
    accent: "text-neon-pink",
    border: "border-neon-pink/30",
    activeBorder: "border-neon-pink/60",
    bg: "bg-neon-pink/5",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
    dot: "bg-neon-pink",
    glow: "shadow-[0_0_40px_rgba(255,0,110,0.1)]",
    rgb: "255,0,110",
  },
  green: {
    accent: "text-neon-green",
    border: "border-neon-green/30",
    activeBorder: "border-neon-green/60",
    bg: "bg-neon-green/5",
    tag: "bg-neon-green/10 text-neon-green border-neon-green/20",
    dot: "bg-neon-green",
    glow: "shadow-[0_0_40px_rgba(57,255,20,0.1)]",
    rgb: "57,255,20",
  },
  purple: {
    accent: "text-purple-400",
    border: "border-purple-500/30",
    activeBorder: "border-purple-500/60",
    bg: "bg-purple-500/5",
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    dot: "bg-purple-400",
    glow: "shadow-[0_0_40px_rgba(167,139,250,0.1)]",
    rgb: "167,139,250",
  },
  orange: {
    accent: "text-orange-400",
    border: "border-orange-500/30",
    activeBorder: "border-orange-500/60",
    bg: "bg-orange-500/5",
    tag: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    dot: "bg-orange-400",
    glow: "shadow-[0_0_40px_rgba(251,146,60,0.1)]",
    rgb: "251,146,60",
  },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const current = projects[activeProject];
  const c = colorMap[current.color];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-neon-cyan/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-neon-cyan text-sm tracking-[0.3em]">03.</span>
            <span className="w-16 h-px bg-neon-cyan/50" />
            <span className="font-mono text-slate-600 text-xs tracking-widest uppercase">
              What I've Built
            </span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
            FEATURED
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(0,245,255,0.4)" }}
            >
              PROJECTS
            </span>
          </h2>
        </motion.div>

        {/* Project selector tabs */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-3 scrollbar-hide">
          {projects.map((p, i) => {
            const pc = colorMap[p.color];
            return (
              <motion.button
                key={p.id}
                onClick={() => setActiveProject(i)}
                whileHover={{ y: -2 }}
                className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-lg border font-mono text-sm transition-all duration-300 ${
                  activeProject === i
                    ? `${pc.activeBorder} ${pc.bg} ${pc.accent} ${pc.glow}`
                    : "border-slate-700/50 text-slate-500 hover:border-slate-600"
                }`}
              >
                <span className="text-lg">{p.emoji}</span>
                <span className="hidden lg:inline">{p.type}</span>
                <span className="text-xs opacity-60">{p.number}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Project Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`card-glass rounded-2xl border ${c.activeBorder} ${c.glow} overflow-hidden`}
          >
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{current.emoji}</span>
                    <div>
                      <span
                        className={`font-mono text-xs ${c.accent} tracking-widest uppercase`}
                      >
                        {current.type} · {current.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
                    {current.title}
                  </h3>

                  <p className="font-body text-slate-400 text-lg leading-relaxed mb-8">
                    {current.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {current.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1.5 border rounded-sm font-mono text-xs ${c.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project counter */}
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${c.accent} opacity-60`}>
                      {activeProject + 1} / {projects.length}
                    </span>
                    <div className="flex gap-1.5">
                      {projects.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveProject(i)}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === activeProject
                              ? `w-6 ${c.dot}`
                              : "w-2 bg-slate-700 hover:bg-slate-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — highlights */}
                <div>
                  <p
                    className={`font-mono text-xs ${c.accent} tracking-widest uppercase mb-6`}
                  >
                    Key Features
                  </p>
                  <div className="space-y-4">
                    {current.highlights.map((h, i) => (
                      <motion.div
                        key={h}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-colors"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${c.dot} flex-shrink-0`}
                        />
                        <span className="font-body text-slate-300">{h}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Big number decoration */}
                  <div className="mt-8 flex items-end justify-end">
                    <span
                      className="font-display text-[8rem] leading-none text-transparent select-none"
                      style={{
                        WebkitTextStroke: `1px rgba(${c.rgb},0.08)`,
                      }}
                    >
                      {current.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}