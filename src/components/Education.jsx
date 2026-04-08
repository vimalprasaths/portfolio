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
      </div>
    </section>
  );
}
