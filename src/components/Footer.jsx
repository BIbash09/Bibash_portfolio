import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const socials = [
  { icon: <FaGithub />,   href: 'https://github.com/BIbash09',   label: 'GitHub'   },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/bibash-gautam/', label: 'LinkedIn' },
];

const navLinks = ['about','skills','projects','experience','education','contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/purpleblur.png" alt="" className="footer-blur" aria-hidden="true" />
      <img src="/Vector2.png"    alt="" className="footer-blob-y" aria-hidden="true" />
      <img src="/Vector1.png"    alt="" className="footer-blob-b" aria-hidden="true" />

      <div className="container footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/logo.png" alt="logo" className="footer-logo-img" />
              <span className="footer-logo-text">Bibash<span>.</span></span>
            </div>
            <p className="footer-tagline">
              Data Analyst · Business Intelligence · Software Development<br />
              Turning data into clear, decision-ready insight from Canada.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-col">
            <p className="footer-col-title">Quick Links</p>
            {navLinks.map(l => (
              <Link key={l} to={l} smooth duration={600} offset={-80} className="footer-link">
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-links-col">
            <p className="footer-col-title">Contact</p>
            <a href="mailto:bibashgautam@gmail.com" className="footer-link">bibashgautam@gmail.com</a>
            <a href="tel:+12896003517"              className="footer-link">+1 289-600-3517</a>
            <p className="footer-link-text">Niagara Falls, ON, Canada</p>
            <a href="/Bibash_Gautam_Resume.pdf" download className="btn btn-primary footer-cv-btn">
              Download Résumé
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bibash Gautam. All rights reserved.</p>
          <p>Designed and built by <span className="gradient-text">Bibash Gautam</span></p>
        </div>
      </div>
    </footer>
  );
}
