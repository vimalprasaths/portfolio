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
