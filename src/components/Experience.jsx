import "./Experience.css";

const bullets = [
  "Developing and maintaining full-stack web applications using modern front-end and back-end technologies.",
  "Working with relational databases to manage structured data and optimize performance.",
  "Collaborating with senior developers to debug and improve application scalability.",
];

export default function Experience() {
  return (
    <section className="vp-section" id="experience">
      <p className="vp-label vp-reveal">Career</p>
      <h2 className="vp-title vp-reveal">
        Work <span className="vp-title-g">Experience</span>
      </h2>

      <div className="vp-timeline vp-reveal">
        <div className="vp-tl-item">
          <div className="vp-tl-head">
            <span className="vp-tl-name">Full Stack Developer Intern</span>
            <span className="vp-tl-date">Jan 2026 — Present</span>
          </div>
          <div className="vp-tl-company">
            Nutz Innovation Tech Pvt Ltd · Erode, Tamil Nadu
          </div>
          <ul className="vp-tl-ul">
            {bullets.map((b) => (
              <li className="vp-tl-li" key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
