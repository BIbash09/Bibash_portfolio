import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const roles = ['Data Analyst', 'Business Intelligence Analyst', 'Business Analyst', 'Front-End Developer'];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/BIbash09', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/bibash-gautam/', label: 'LinkedIn' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Purple blur background glow */}
      <img src="/purpleblur.png" alt="" className="hero-blur" aria-hidden="true" />

      {/* Decorative blobs */}
      <img src="/Vector2.png" alt="" className="hero-blob blob-yellow" aria-hidden="true" />
      <img src="/Vector1.png" alt="" className="hero-blob blob-blue" aria-hidden="true" />

      <div className="container hero-inner">
        {/* ── LEFT: Text Content ── */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-pulse" />
            Open to data and business analyst opportunities in Canada
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Hi, I'm<br />
            <span className="hero-name gradient-text">Bibash Gautam</span>
          </motion.h1>

          <motion.div
            className="hero-role-wrap"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero-role-prefix">I'm a </span>
            <span className="hero-role-word" key={roleIdx}>{roles[roleIdx]}</span>
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            Master of Data Analytics student with a software development background. I use
            Python, SQL, Power BI, Tableau, and Excel to explore data, communicate findings,
            and support better business decisions.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="projects" smooth duration={600} offset={-80} className="btn btn-primary">
              Explore Case Studies
            </Link>
            <a href="/Bibash_Gautam_Resume.pdf" download className="btn btn-outline">
              <HiDownload /> Download Résumé
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="hero-social" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
            <span className="social-divider" />
            <a className="social-note" href="mailto:bibashgautam@gmail.com">bibashgautam@gmail.com</a>
          </motion.div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.4,0,0.2,1] }}
        >
          {/* Floating blob behind photo */}
          <div className="photo-blob-wrap">
            <div className="photo-ring" />
            <img src="/Me.png" alt="Bibash Gautam" className="hero-photo" />

            {/* Floating stat cards */}
            <motion.div className="float-card card-top-right"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="fc-emoji">🎓</span>
              <div>
                <p className="fc-title">MDA Candidate</p>
                <p className="fc-sub">University of Niagara Falls</p>
              </div>
            </motion.div>

            <motion.div className="float-card card-bottom-left"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
              <span className="fc-emoji">⚡</span>
              <div>
                <p className="fc-title">2+ Years</p>
                <p className="fc-sub">Professional Experience</p>
              </div>
            </motion.div>

            <motion.div className="float-card card-bottom-right"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
              <span className="fc-emoji">📊</span>
              <div>
                <p className="fc-title">Analytics Toolkit</p>
                <p className="fc-sub">Python · SQL · BI</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="hero-scroll"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}>
        <Link to="about" smooth duration={600}>
          <span className="scroll-btn" aria-label="Scroll to About"><HiArrowDown /></span>
        </Link>
      </motion.div>
    </section>
  );
}
