# Vimal Prasath S — Portfolio

A sleek, dark-themed personal portfolio built with **React + Vite**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
vimal-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← Entry point
    ├── App.jsx               ← Root component
    ├── index.css             ← Global styles & CSS variables
    ├── data/
    │   └── index.js          ← All static data (projects, skills, etc.)
    ├── hooks/
    │   ├── useTypewriter.js  ← Typing animation hook
    │   └── useReveal.js      ← Scroll reveal hook
    └── components/
        ├── Cursor.jsx / .css
        ├── Navbar.jsx / .css
        ├── Hero.jsx   / .css
        ├── Experience.jsx / .css
        ├── Projects.jsx   / .css
        ├── Skills.jsx     / .css
        ├── Education.jsx  / .css
        ├── Contact.jsx    / .css
        └── Footer.jsx     / .css
```

## ✨ Features

- Custom dual-layer cursor with smooth trailing effect
- Animated gradient spinning avatar ring
- Typewriter effect cycling through roles
- Scroll-triggered reveal animations on every section
- Hover effects: glow cards, gradient skill tags, floating buttons
- Floating background orbs with blur
- Noise texture overlay
- Fully responsive (mobile-friendly)
- No external UI libraries — pure React + CSS
