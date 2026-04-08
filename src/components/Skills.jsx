<<<<<<< HEAD
import { SKILLS } from "../data/index.js";
import "./Skills.css";
=======
<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "cyan",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "pink",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "purple",
    skills: ["MySQL", "SOQL", "SOSL"],
  },
  {
    title: "Languages",
    icon: "💻",
    color: "green",
    skills: ["Java", "C", "C++", "Apex", "JavaScript"],
  },
  {
    title: "Salesforce",
    icon: "☁️",
    color: "cyan",
    skills: ["Admin", "Flow Builder", "Apex Triggers", "SOQL", "SOSL"],
  },
  {
    title: "Tools & Design",
    icon: "🛠️",
    color: "pink",
    skills: ["GitHub", "Postman", "Blender", "Adobe Illustrator", "After Effects"],
  },
];

const colorMap = {
  cyan: {
    border: "border-neon-cyan/30",
    hoverBorder: "hover:border-neon-cyan/60",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    glow: "hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
  },
  pink: {
    border: "border-neon-pink/30",
    hoverBorder: "hover:border-neon-pink/60",
    text: "text-neon-pink",
    bg: "bg-neon-pink/10",
    glow: "hover:shadow-[0_0_20px_rgba(255,0,110,0.2)]",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
  },
  purple: {
    border: "border-purple-500/30",
    hoverBorder: "hover:border-purple-500/60",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    glow: "hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]",
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  green: {
    border: "border-neon-green/30",
    hoverBorder: "hover:border-neon-green/60",
    text: "text-neon-green",
    bg: "bg-neon-green/10",
    glow: "hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]",
    tag: "bg-neon-green/10 text-neon-green border-neon-green/20",
  },
};

const techMarqueeItems = [
  "React", "Node.js", "Java", "MySQL", "Salesforce", "Figma", "C++",
  "Express.js", "GitHub", "Postman", "Blender", "After Effects", "HTML5", "CSS3",
];
>>>>>>> 7623fc5 (updated index.html with chatbot)

export default function Skills() {
  return (
    <section className="vp-section" id="skills">
      <p className="vp-label vp-reveal">Stack</p>
      <h2 className="vp-title vp-reveal">
        Technical <span className="vp-title-g">Skills</span>
      </h2>

      <div className="vp-skill-grid">
        {SKILLS.map((group) => (
          <div className="vp-skill-group vp-reveal" key={group.title}>
            <div className="vp-skill-head">
              <span>{group.icon}</span>
              {group.title}
            </div>
            <div className="vp-skill-tags">
              {group.tags.map((tag) => (
                <div className="vp-skill-tag" key={tag}>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        ))}
=======
          <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
            TECH
            <br />
            <span className="text-neon-pink text-glow-pink">STACK</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`card-glass rounded-xl p-6 border ${c.border} ${c.hoverBorder} ${c.glow} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center text-xl`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-display text-2xl tracking-wide ${c.text}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 border rounded-sm font-mono text-xs tracking-wide ${c.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
=======
import { SKILLS } from "../data/index.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="vp-section" id="skills">
      <p className="vp-label vp-reveal">Stack</p>
      <h2 className="vp-title vp-reveal">
        Technical <span className="vp-title-g">Skills</span>
      </h2>

      <div className="vp-skill-grid">
        {SKILLS.map((group) => (
          <div className="vp-skill-group vp-reveal" key={group.title}>
            <div className="vp-skill-head">
              <span>{group.icon}</span>
              {group.title}
            </div>
            <div className="vp-skill-tags">
              {group.tags.map((tag) => (
                <div className="vp-skill-tag" key={tag}>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
>>>>>>> 5acbca0 (portfolio with chatbot)
>>>>>>> 7623fc5 (updated index.html with chatbot)
      </div>
    </section>
  );
}
