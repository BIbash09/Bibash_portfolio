# Bibash Gautam - Data Analyst Portfolio

A responsive personal portfolio focused on data analytics, business intelligence, and software development. Built with React, Vite, Framer Motion, and React Icons.

## Highlights

- Data and business analyst positioning based on the included résumé
- Verified project links and résumé-backed experience
- Dark and light themes with saved preference
- Responsive navigation and accessible keyboard focus states
- Contact form that opens a prepared email draft without collecting data
- Downloadable résumé

## Requirements

- Node.js `20.19+` or `22.12+`
- npm

Vite 8 does not support older Node.js releases. Check your version with:

```bash
node --version
```

## Run locally

```bash
git clone https://github.com/BIbash09/Bibash_portfolio.git
cd Bibash_portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) if it does not open automatically.

## Production build

```bash
npm run build
npm run preview
```

The optimized production files are written to `dist/`.

## Project structure

```text
Bibash_portfolio/
├── public/
│   ├── Bibash_Gautam_Resume.pdf
│   ├── Bibash.jpg
│   ├── Me.png
│   └── decorative images
├── src/
│   ├── components/
│   ├── context/
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Update portfolio content

- Hero and headline: `src/components/Hero.jsx`
- About summary: `src/components/About.jsx`
- Skills: `src/components/Skills.jsx`
- Projects: `src/components/Projects.jsx`
- Experience: `src/components/Experience.jsx`
- Education: `src/components/Education.jsx`
- Contact details: `src/components/Contact.jsx` and `src/components/Footer.jsx`
- Résumé: replace `public/Bibash_Gautam_Resume.pdf` using the same filename

## Contact form behavior

The form creates a `mailto:` link from the visitor's entries and opens their default email application. It does not claim that a message has been sent and does not require an API key or store submitted data.

## Deployment

The `dist/` directory can be deployed to a static hosting provider such as Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory.
