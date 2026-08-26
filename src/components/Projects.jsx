import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import './Projects.css';

const projects = [
  {
    title: 'Credit Card Usage Behavior',
    subtitle: 'Marketing Analytics',
    desc: 'Applied EDA and statistical analysis on consumer financial data to uncover key drivers of payment behavior. Leveraged Random Forest & Gradient Boosting, visualized via Tableau.',
    tags: ['Python', 'Tableau', 'EDA', 'scikit-learn', 'Statistics'],
    emoji: '📊', type: 'Data Analytics',
    github: '#', demo: '#',
  },
  {
    title: 'Responsive E-Commerce UI',
    subtitle: 'Frontend Development',
    desc: 'Built a fully responsive e-commerce interface with React featuring personalized product recommendations, reusable component library, and smooth animations.',
    tags: ['React', 'JavaScript', 'CSS3', 'Node.js'],
    emoji: '🛒', type: 'Web App',
    github: '#', demo: '#',
  },
  {
    title: 'Android AOSP Customization',
    subtitle: 'Mobile Development',
    desc: 'Customized Android Open Source Project system components to meet client-specific hardware requirements. Resolved memory leaks reducing crash rates significantly.',
    tags: ['Java', 'Android', 'AOSP', 'RESTful APIs'],
    emoji: '📱', type: 'Android',
    github: '#', demo: '#',
  },
  {
    title: 'BI Sales Dashboard',
    subtitle: 'Business Intelligence',
    desc: 'Designed an interactive Power BI dashboard with executive-level insights on sales performance, regional distribution, and predictive revenue forecasting via ETL pipelines.',
    tags: ['Power BI', 'SQL', 'ETL', 'Excel'],
    emoji: '📈', type: 'BI / Data',
    github: '#', demo: '#',
  },
  {
    title: 'Esports Team Portal',
    subtitle: 'Management Platform',
    desc: 'Web portal for managing esports team rosters, match schedules, and performance analytics for Zebec Esports. Integrated real-time data feeds and player statistics.',
    tags: ['React', 'Node.js', 'MySQL', 'REST API'],
    emoji: '🎮', type: 'Web App',
    github: '#', demo: '#',
  },
  {
    title: 'YouTube Automation Pipeline',
    subtitle: 'Content Automation',
    desc: 'Python-based pipeline to automate YouTube workflows — from data scraping and script generation to thumbnail creation and scheduling — reducing manual effort by 70%.',
    tags: ['Python', 'APIs', 'Automation', 'Scraping'],
    emoji: '🤖', type: 'Automation',
    github: '#', demo: '#',
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
            Things I've<br />
            <span className="gradient-text">built & shipped</span>
          </h2>
          <p className="section-subtitle">
            A curated collection spanning data analytics, web development, and automation.
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

              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>

              <div className="proj-links">
                <a href={p.github} className="proj-link" target="_blank" rel="noopener noreferrer">
                  <HiCode /> Code
                </a>
                <a href={p.demo} className="proj-link proj-link-live" target="_blank" rel="noopener noreferrer">
                  <HiExternalLink /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
