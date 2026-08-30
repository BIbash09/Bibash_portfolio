import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDatabase, FaChartBar, FaChartLine, FaLightbulb, FaProjectDiagram, FaSearch } from 'react-icons/fa';
import './About.css';

const interests = [
  { icon: <FaDatabase />, label: 'Data Analytics' },
  { icon: <FaChartLine />, label: 'Business Intelligence' },
  { icon: <FaSearch />, label: 'Exploratory Analysis' },
  { icon: <FaChartBar />, label: 'Dashboard Reporting' },
  { icon: <FaProjectDiagram />, label: 'Statistical Modelling' },
  { icon: <FaLightbulb />, label: 'Business Problem Solving' },
];

const stats = [
  { num: '2+', label: 'Years Professional Experience' },
  { num: 'MDA', label: 'Master’s In Progress' },
  { num: '3', label: 'Languages' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about-section">
      {/* Blobs decoration */}
      <img src="/Vector1.png" alt="" className="about-blob-blue" aria-hidden="true" />
      <img src="/Vector2.png" alt="" className="about-blob-yellow" aria-hidden="true" />

      <div className="container">
        <div className="about-grid" ref={ref}>

          {/* Photo side */}
          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-photo-frame">
              <img src="/purpleblur.png" alt="" className="about-blur" aria-hidden="true" />
              <img src="/Bibash.jpg" alt="Bibash Gautam" className="about-photo" />
              <div className="about-photo-badge">
                <img src="/logo.png" alt="logo" className="badge-logo" />
                <span>Bibash Gautam</span>
              </div>
            </div>

            <div className="about-stats-row">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="about-stat-box"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="stat-num gradient-text">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Turning data into<br />
              <span className="gradient-text">powerful stories</span>
            </h2>

            <p className="about-para">
              I'm <strong>Bibash Gautam</strong>, a data analyst and software developer currently
              pursuing a <strong>Master of Data Analytics</strong> at the
              University of Niagara Falls, Canada.
            </p>
            <p className="about-para">
              My experience at Armam Games and Foliage Soft built a strong foundation in
              structured problem solving, quality assurance, API integration, and cross-functional
              delivery. I now apply that technical background to analytical work.
            </p>
            <p className="about-para">
              I work across exploratory data analysis, hypothesis testing, regression, data
              wrangling, ETL, and dashboard reporting. My goal is to translate technical findings
              into clear, practical recommendations for decision-makers.
            </p>

            <div className="interests-wrap">
              <p className="interests-title">Analytics Focus</p>
              <div className="interests-list">
                {interests.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="interest-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                  >
                    <span className="chip-icon">{item.icon}</span>
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
