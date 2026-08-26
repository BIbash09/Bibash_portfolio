# 🚀 Bibash Gautam — Personal Portfolio

A modern, fully responsive, dark/light mode portfolio website built with React and Framer Motion.

---

## 📁 Folder Structure

```
bibash-portfolio/
├── public/
│   ├── index.html
│   └── bibash.jpg          ← ADD YOUR PHOTO HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── Cursor.jsx / .css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
└── package.json
```

---

## ⚡ Quick Start (VS Code)

### Step 1 — Prerequisites
Make sure you have installed:
- **Node.js** (v16 or higher): https://nodejs.org
- **npm** (comes with Node.js)

### Step 2 — Open in VS Code
```bash
# Open the project folder in VS Code
code bibash-portfolio
```

### Step 3 — Install Dependencies
Open the VS Code terminal (`Ctrl+\`` or View → Terminal) and run:
```bash
npm install
```
This installs React, Framer Motion, react-icons, and react-scroll.

### Step 4 — Add Your Photo
- Copy your photo (DSC00074.jpg or any image) to the `public/` folder
- Rename it to `bibash.jpg`
- That's it — the Hero section will display it automatically!

### Step 5 — Start the Dev Server
```bash
npm start
```
→ Opens automatically at **http://localhost:3000**

---

## 🛠 Customization Guide

### Update personal info
- **Hero**: Edit `src/components/Hero.jsx` — change tagline, description
- **About**: Edit `src/components/About.jsx` — update bio paragraphs
- **Projects**: Edit `src/components/Projects.jsx` — add real GitHub/demo links
- **Contact**: Edit `src/components/Contact.jsx` — update email, phone, LinkedIn

### Change colors / theme
Edit `src/index.css` — the CSS variables at the top control everything:
```css
[data-theme='dark'] {
  --accent: #7c6aff;     /* Primary purple */
  --accent-2: #00e5c8;  /* Teal accent */
}
```

### Add your CV for download
- Place your CV file as `public/Bibash_Gautam_Resume.pdf`
- The "Download CV" button in the Navbar will work automatically

---

## 📦 Build for Production
```bash
npm run build
```
Creates an optimized `build/` folder ready for deployment on:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `build/` folder
- **GitHub Pages**: Use `gh-pages` package

---

## ✨ Features
- ⚡ Dark / Light mode toggle
- 🎞 Framer Motion animations
- 📱 Fully responsive (mobile + tablet + desktop)
- 🖱 Custom cursor (desktop only)
- 📊 Animated skill progress bars
- 📬 Contact form with validation
- ⬇️ CV download button
- 🔢 SEO-friendly HTML structure

---

## 🧰 Tech Stack
| Tech | Version |
|------|---------|
| React | 18.x |
| Framer Motion | 11.x |
| react-icons | 5.x |
| react-scroll | 1.9.x |

---

Built with ❤️ for Bibash Gautam | Niagara Falls, Canada 🇨🇦
