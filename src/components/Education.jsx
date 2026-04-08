<<<<<<< HEAD
import { EDUCATION, CERTIFICATIONS } from "../data/index.js";
import "./Education.css";
=======
<<<<<<< HEAD
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
>>>>>>> 7623fc5 (updated index.html with chatbot)

export default function Education() {
  return (
    <section className="vp-section" id="education">
      {/* Education */}
      <p className="vp-label vp-reveal">Academic</p>
      <h2 className="vp-title vp-reveal">Education</h2>

      <div className="vp-edu-grid">
        {EDUCATION.map((e) => (
          <div className="vp-edu-card vp-reveal" key={e.degree}>
            <div className="vp-edu-year">{e.years}</div>
            <div className="vp-edu-degree">{e.degree}</div>
            <div className="vp-edu-school">{e.school}</div>
            <div className="vp-edu-grade">
              {e.icon} {e.grade}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <p className="vp-label vp-reveal" style={{ marginTop: "56px" }}>Credentials</p>
      <h2 className="vp-title vp-reveal" style={{ marginBottom: "28px" }}>
        Certifications
      </h2>

      <div className="vp-cert-grid">
        {CERTIFICATIONS.map((c) => (
          <div className="vp-cert-card vp-reveal" key={c.name}>
            <span className="vp-cert-icon">{c.icon}</span>
            <div>
              <div className="vp-cert-name">{c.name}</div>
              <div className="vp-cert-issuer">{c.issuer}</div>
            </div>
          </div>
<<<<<<< HEAD
        ))}
=======
        </div>
=======
import { EDUCATION, CERTIFICATIONS } from "../data/index.js";
import "./Education.css";

export default function Education() {
  return (
    <section className="vp-section" id="education">
      {/* Education */}
      <p className="vp-label vp-reveal">Academic</p>
      <h2 className="vp-title vp-reveal">Education</h2>

      <div className="vp-edu-grid">
        {EDUCATION.map((e) => (
          <div className="vp-edu-card vp-reveal" key={e.degree}>
            <div className="vp-edu-year">{e.years}</div>
            <div className="vp-edu-degree">{e.degree}</div>
            <div className="vp-edu-school">{e.school}</div>
            <div className="vp-edu-grade">
              {e.icon} {e.grade}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <p className="vp-label vp-reveal" style={{ marginTop: "56px" }}>Credentials</p>
      <h2 className="vp-title vp-reveal" style={{ marginBottom: "28px" }}>
        Certifications
      </h2>

      <div className="vp-cert-grid">
        {CERTIFICATIONS.map((c) => (
          <div className="vp-cert-card vp-reveal" key={c.name}>
            <span className="vp-cert-icon">{c.icon}</span>
            <div>
              <div className="vp-cert-name">{c.name}</div>
              <div className="vp-cert-issuer">{c.issuer}</div>
            </div>
          </div>
        ))}
>>>>>>> 5acbca0 (portfolio with chatbot)
>>>>>>> 7623fc5 (updated index.html with chatbot)
      </div>
    </section>
  );
}
