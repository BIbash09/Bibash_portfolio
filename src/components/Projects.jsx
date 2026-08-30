import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCode, HiDocumentText } from 'react-icons/hi';
import './Projects.css';

const projects = [
  {
    title: 'Credit Card Usage Behavior',
    subtitle: 'Marketing Analytics · Academic Case Study',
    desc: 'Analyzed consumer financial data to understand the factors associated with credit card payment preferences and turn the results into practical recommendations.',
    highlights: [
      'Identified income level and number of cards held as the strongest predictors in the analysis.',
      'Tested whether BNPL services significantly substitute traditional credit card usage.',
      'Presented Tableau-supported findings to a panel of faculty evaluators.',
    ],
    tags: ['EDA', 'Statistical Analysis', 'Tableau', 'Business Insights'],
    emoji: '📊',
    type: 'Analytics Case Study',
    document: '/Bibash_Gautam_Resume.pdf',
  },
  {
    title: 'Air Quality Analytics Dashboard',
    subtitle: 'Agile Software Development · Team Project',
    desc: 'Built a Streamlit dashboard for exploring hourly air-pollution and weather measurements from the UCI Air Quality dataset.',
    highlights: [
      'Replaced -200 missing-value markers and standardized date, time, and numeric fields.',
      'Calculated summary metrics and visualized pollutant trends, distributions, and correlations.',
      'Used branches, pull requests, and team review as part of an Agile Git workflow.',
    ],
    tags: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'Seaborn', 'Git'],
    emoji: '🌿',
    type: 'Analytics Dashboard',
    github: 'https://github.com/BIbash09/Air_Quality_Group_7',
  },
  {
    title: 'React E-Commerce Interface',
    subtitle: 'Front-End Development',
    desc: 'Created a component-based e-commerce interface with React and Vite, applying reusable structure and responsive styling.',
    highlights: [
      'Separated navigation and main content into reusable React components.',
      'Used Vite for a fast development and production build workflow.',
      'Applied responsive CSS to support desktop and smaller screens.',
    ],
    tags: ['React', 'JavaScript', 'Vite', 'CSS'],
    emoji: '🛒',
    type: 'Web Application',
    github: 'https://github.com/BIbash09/ReactEcommerce',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="projects-section">
      <img src="/Vector2.png" alt="" className="proj-blob-y" aria-hidden="true" />
      <img src="/Vector1.png" alt="" className="proj-blob-b" aria-hidden="true" />
      <img src="/purpleblur.png" alt="" className="proj-blur" aria-hidden="true" />

      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Selected work with<br />
            <span className="gradient-text">clear outcomes</span>
          </h2>
          <p className="section-subtitle">
            Verifiable academic and technical projects across analytics, dashboards, and development.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="proj-card card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.09 }}
            >
              <div className="proj-top">
                <div className="proj-emoji">{p.emoji}</div>
                <span className="proj-type">{p.type}</span>
              </div>

              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-sub">{p.subtitle}</p>
              <p className="proj-desc">{p.desc}</p>

              <ul className="proj-highlights">
                {p.highlights.map(highlight => (
                  <li key={highlight}><span aria-hidden="true">→</span>{highlight}</li>
                ))}
              </ul>

              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>

              {(p.github || p.document) && (
                <div className="proj-links">
                  {p.github && (
                    <a href={p.github} className="proj-link" target="_blank" rel="noopener noreferrer">
                      <HiCode /> View Repository
                    </a>
                  )}
                  {p.document && (
                    <a href={p.document} className="proj-link" target="_blank" rel="noopener noreferrer">
                      <HiDocumentText /> Résumé Details
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
