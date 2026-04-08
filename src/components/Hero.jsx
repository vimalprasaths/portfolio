import { useTypewriter } from "../hooks/useTypewriter.js";
import { ROLES } from "../data/index.js";
import "./Hero.css";

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="vp-hero" id="about">
      <div className="vp-hero-inner">

        {/* ── Left content ── */}
        <div className="vp-hero-content">
          <div className="vp-badge">
            <span className="vp-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="vp-hero-name">
            Vimal<br />
            <span className="vp-hero-name-grad">Prasath</span> S
          </h1>

          <p className="vp-role">
            {role}
            <span className="vp-cursor-blink">_</span>
          </p>

          <p className="vp-hero-desc">
            Building scalable, performant web applications with modern technologies.
            Currently shaping the future at{" "}
            <strong style={{ color: "var(--text)" }}>Nutz Innovation Tech</strong>.
            Passionate about clean architecture and pixel-perfect UIs.
          </p>

          <div className="vp-btns">
            <a href="mailto:Vimalprasath1604@gmail.com" className="vp-btn-p">
              Get in Touch ↗
            </a>
            <a
              href="https://github.com/vimalprasaths"
              target="_blank"
              rel="noreferrer"
              className="vp-btn-s"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* ── Right avatar ── */}
        <div className="vp-avatar-wrap">
          <div className="vp-avatar-ring">
            <div className="vp-avatar-inner">👨‍💻</div>
          </div>

          <div className="vp-stats">
            {[
              ["3+",   "Projects"],
              ["6.82", "CGPA @ MIT"],
              ["2",    "Certifications"],
            ].map(([num, label]) => (
              <div className="vp-stat" key={label}>
                <div className="vp-stat-num">{num}</div>
                <div className="vp-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="vp-scroll-hint">
        <span>scroll</span>
        <div className="vp-scroll-line" />
      </div>
    </section>
  );
}
