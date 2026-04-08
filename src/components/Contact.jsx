import { CONTACT_LINKS } from "../data/index.js";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="vp-contact" id="contact">
      <p className="vp-label vp-reveal">Let's Connect</p>

      <h2 className="vp-contact-title vp-reveal">
        Got an <span className="vp-title-g">idea?</span>
        <br />
        Let's build it.
      </h2>

      <p className="vp-contact-desc vp-reveal">
        I'm currently open to full-time roles and freelance opportunities.
        If you have a project in mind or just want to say hi — my inbox is always open.
      </p>

      <div className="vp-contact-links vp-reveal">
        {CONTACT_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="vp-contact-link"
          >
            {l.icon} {l.label}
          </a>
        ))}
      </div>

      <a
        href="mailto:Vimalprasath1604@gmail.com"
        className="vp-btn-p vp-reveal"
        style={{ fontSize: "1rem", padding: "16px 46px" }}
      >
        Send a Message ✉️
      </a>
    </section>
  );
}
