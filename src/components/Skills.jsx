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
      </div>
    </section>
  );
}
