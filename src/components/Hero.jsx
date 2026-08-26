import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Hero.css';

const roles = ['Data Analytics Student', 'Frontend Developer', 'UI/UX Designer', 'Problem Solver'];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/BIbash09', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/bibash-gautam/', label: 'LinkedIn' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@Bibashh', label: 'YouTube' },
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
            Open to opportunities in Canada 🇨🇦
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Hey, I'm<br />
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
            Passionate about turning data into insights and ideas into elegant digital 
            experiences. Currently pursuing my Master of Data Analytics at the 
            University of Niagara Falls, Canada.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn btn-primary">View My Work</button>
            </Link>
            <a href="/Bibash_Gautam_Resume.pdf" download className="btn btn-outline">
              <HiDownload /> Download CV
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
            <span className="social-note">bibashgautam.official@gmail.com</span>
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
                <p className="fc-title">MDA Student</p>
                <p className="fc-sub">Niagara Falls, Canada</p>
              </div>
            </motion.div>

            <motion.div className="float-card card-bottom-left"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
              <span className="fc-emoji">⚡</span>
              <div>
                <p className="fc-title">2+ Years</p>
                <p className="fc-sub">Dev Experience</p>
              </div>
            </motion.div>

            <motion.div className="float-card card-bottom-right"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
              <span className="fc-emoji">🚀</span>
              <div>
                <p className="fc-title">10+ Projects</p>
                <p className="fc-sub">Shipped</p>
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
          <div className="scroll-btn"><HiArrowDown /></div>
        </Link>
      </motion.div>
    </section>
  );
}
