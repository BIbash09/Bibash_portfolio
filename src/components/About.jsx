import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDatabase, FaCode, FaPalette, FaGamepad, FaYoutube, FaChartLine } from 'react-icons/fa';
import './About.css';

const interests = [
  { icon: <FaDatabase />, label: 'Data Analytics' },
  { icon: <FaCode />, label: 'Web Development' },
  { icon: <FaPalette />, label: 'UI/UX Design' },
  { icon: <FaYoutube />, label: 'YouTube Automation' },
  { icon: <FaGamepad />, label: 'Esports Management' },
  { icon: <FaChartLine />, label: 'Business Intelligence' },
];

const stats = [
  { num: '2+', label: 'Years Experience' },
  { num: '10+', label: 'Projects Built' },
  { num: '3', label: 'Languages Spoken' },
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
              I'm <strong>Bibash Gautam</strong> — a results-driven data enthusiast and frontend
              developer currently pursuing my <strong>Master of Data Analytics</strong> at the
              University of Niagara Falls, Canada.
            </p>
            <p className="about-para">
              With 2+ years of professional experience at companies like Armam Games and Foliage
              Soft, I bridge the gap between raw data and beautiful, functional interfaces.
              I'm fluent in English, Hindi, and Nepali — bringing a global perspective to every project.
            </p>
            <p className="about-para">
              Beyond code, I'm passionate about esports community building, YouTube content
              automation, and using machine learning to solve real-world business problems.
            </p>

            <div className="interests-wrap">
              <p className="interests-title">Interests & Focus</p>
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
