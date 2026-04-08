<<<<<<< HEAD
import { PROJECTS } from "../data/index.js";
import "./Projects.css";
=======
<<<<<<< HEAD
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ElectricBorder from "./ElectricBorder";

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
    hexColor: "#00f5ff",
    liveUrl: "https://tracvelhub.vercel.app/",
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
    hexColor: "#ff006e",
    liveUrl: null,
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
    hexColor: "#39ff14",
    liveUrl: null,
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
    hexColor: "#bf5af2",
    liveUrl: null,
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
    hexColor: "#fb923c",
    liveUrl: null,
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
    glow: "shadow-[0_0_40px_rgba(0,245,255,0.15)]",
    rgb: "0,245,255",
  },
  pink: {
    accent: "text-neon-pink",
    border: "border-neon-pink/30",
    activeBorder: "border-neon-pink/60",
    bg: "bg-neon-pink/5",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
    dot: "bg-neon-pink",
    glow: "shadow-[0_0_40px_rgba(255,0,110,0.15)]",
    rgb: "255,0,110",
  },
  green: {
    accent: "text-neon-green",
    border: "border-neon-green/30",
    activeBorder: "border-neon-green/60",
    bg: "bg-neon-green/5",
    tag: "bg-neon-green/10 text-neon-green border-neon-green/20",
    dot: "bg-neon-green",
    glow: "shadow-[0_0_40px_rgba(57,255,20,0.15)]",
    rgb: "57,255,20",
  },
  purple: {
    accent: "text-purple-400",
    border: "border-purple-500/30",
    activeBorder: "border-purple-500/60",
    bg: "bg-purple-500/5",
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    dot: "bg-purple-400",
    glow: "shadow-[0_0_40px_rgba(167,139,250,0.15)]",
    rgb: "167,139,250",
  },
  orange: {
    accent: "text-orange-400",
    border: "border-orange-500/30",
    activeBorder: "border-orange-500/60",
    bg: "bg-orange-500/5",
    tag: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    dot: "bg-orange-400",
    glow: "shadow-[0_0_40px_rgba(251,146,60,0.15)]",
    rgb: "251,146,60",
  },
};
>>>>>>> 7623fc5 (updated index.html with chatbot)

export default function Projects() {
  return (
    <section className="vp-section" id="projects">
      <p className="vp-label vp-reveal">Portfolio</p>
      <h2 className="vp-title vp-reveal">
        Featured <span className="vp-title-g">Projects</span>
      </h2>

      <div className="vp-proj-grid">
        {PROJECTS.map((p) => (
          <div className="vp-proj-card vp-reveal" key={p.num}>
            <div className="vp-proj-num">{p.num}</div>
            <div className="vp-proj-icon">{p.icon}</div>
            <div className="vp-proj-tag">{p.tag}</div>
            <h3 className="vp-proj-title">{p.title}</h3>
            <p className="vp-proj-desc">{p.desc}</p>
            <div className="vp-chips">
              {p.chips.map((c) => (
                <div className="vp-chip" key={c}>{c}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======
=======
import { PROJECTS } from "../data/index.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="vp-section" id="projects">
      <p className="vp-label vp-reveal">Portfolio</p>
      <h2 className="vp-title vp-reveal">
        Featured <span className="vp-title-g">Projects</span>
      </h2>

      <div className="vp-proj-grid">
        {PROJECTS.map((p) => (
          <div className="vp-proj-card vp-reveal" key={p.num}>
            <div className="vp-proj-num">{p.num}</div>
            <div className="vp-proj-icon">{p.icon}</div>
            <div className="vp-proj-tag">{p.tag}</div>
            <h3 className="vp-proj-title">{p.title}</h3>
            <p className="vp-proj-desc">{p.desc}</p>
            <div className="vp-chips">
              {p.chips.map((c) => (
                <div className="vp-chip" key={c}>{c}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
>>>>>>> 5acbca0 (portfolio with chatbot)
>>>>>>> 7623fc5 (updated index.html with chatbot)
