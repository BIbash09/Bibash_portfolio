import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { isDark, setIsDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container navbar-inner">
        <Link to="hero" smooth duration={600} className="nav-logo">
          <img src="/logo.png" alt="BG Logo" className="nav-logo-img" />
          <span className="nav-logo-text">Bibash<span className="logo-accent">.</span></span>
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth duration={600} offset={-80}
              className="nav-link"
              activeClass="active"
              spy
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setIsDark(!isDark)} aria-label="Toggle theme">
            {isDark ? <HiSun size={17} /> : <HiMoon size={17} />}
          </button>
          <a href="/Bibash_Gautam_Resume.pdf" download className="btn btn-primary nav-cv">
            Download CV
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.to}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={link.to} smooth duration={600} offset={-80} className="mobile-link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a href="/Bibash_Gautam_Resume.pdf" download className="btn btn-primary" style={{ marginTop: 20, alignSelf: 'flex-start' }}>
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
