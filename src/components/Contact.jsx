<<<<<<< HEAD
import { CONTACT_LINKS } from "../data/index.js";
import "./Contact.css";
=======
<<<<<<< HEAD
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactLinks = [
  {
    label: "Email",
    value: "Vimalprasath1604@gmail.com",
    href: "mailto:Vimalprasath1604@gmail.com",
    icon: "✉️",
    color: "cyan",
  },
  {
    label: "Phone",
    value: "+91 7540066199",
    href: "tel:+917540066199",
    icon: "📞",
    color: "green",
  },
  {
    label: "GitHub",
    value: "github.com/vimalprasaths",
    href: "https://github.com/vimalprasaths",
    icon: "🐙",
    color: "pink",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vimal-prasath-s",
    href: "https://linkedin.com/in/vimal-prasath-s-b13b49301",
    icon: "💼",
    color: "purple",
  },
];

const colorMap = {
  cyan: { accent: "text-neon-cyan", border: "border-neon-cyan/30", bg: "bg-neon-cyan/10", hover: "hover:border-neon-cyan/60" },
  pink: { accent: "text-neon-pink", border: "border-neon-pink/30", bg: "bg-neon-pink/10", hover: "hover:border-neon-pink/60" },
  green: { accent: "text-neon-green", border: "border-neon-green/30", bg: "bg-neon-green/10", hover: "hover:border-neon-green/60" },
  purple: { accent: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", hover: "hover:border-purple-500/60" },
};
>>>>>>> 7623fc5 (updated index.html with chatbot)

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

<<<<<<< HEAD
=======
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-neon-cyan text-sm tracking-[0.3em]">05.</span>
            <span className="w-16 h-px bg-neon-cyan/50" />
            <span className="font-mono text-slate-600 text-xs tracking-widest uppercase">Let's Talk</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
            GET IN
            <br />
            <span className="text-neon-cyan text-glow-cyan">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="font-body text-slate-400 text-lg leading-relaxed mb-10">
              I'm always open to new opportunities, collaborations, and interesting conversations. 
              Whether you have a project in mind or just want to say hello — my inbox is open!
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, i) => {
                const c = colorMap[link.color];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className={`flex items-center gap-5 p-4 card-glass rounded-xl border ${c.border} ${c.hover} transition-all duration-300 group`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center text-xl flex-shrink-0`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className={`font-mono text-xs ${c.accent} tracking-widest uppercase mb-1`}>{link.label}</p>
                      <p className="font-body text-slate-300 text-sm group-hover:text-white transition-colors">{link.value}</p>
                    </div>
                    <span className={`ml-auto ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>→</span>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-4 border border-neon-cyan/10 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="font-mono text-xs text-neon-green">Available for opportunities</span>
              </div>
              <p className="font-mono text-xs text-slate-600 mt-2">📍 Chennai, Tamil Nadu, India</p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Vimal Prasath" },
                { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block font-mono text-xs text-slate-500 tracking-widest uppercase mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.id]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-5 py-4 bg-dark-800/50 border border-slate-700/50 rounded-lg text-white font-body placeholder-slate-600 focus:outline-none focus:border-neon-cyan/60 focus:bg-dark-800/80 transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="block font-mono text-xs text-slate-500 tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-5 py-4 bg-dark-800/50 border border-slate-700/50 rounded-lg text-white font-body placeholder-slate-600 focus:outline-none focus:border-neon-cyan/60 focus:bg-dark-800/80 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,245,255,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-neon-cyan text-dark-950 font-mono font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-white transition-all duration-300"
              >
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
=======
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

>>>>>>> 7623fc5 (updated index.html with chatbot)
      <a
        href="mailto:Vimalprasath1604@gmail.com"
        className="vp-btn-p vp-reveal"
        style={{ fontSize: "1rem", padding: "16px 46px" }}
      >
        Send a Message ✉️
      </a>
<<<<<<< HEAD
=======
>>>>>>> 5acbca0 (portfolio with chatbot)
>>>>>>> 7623fc5 (updated index.html with chatbot)
    </section>
  );
}
