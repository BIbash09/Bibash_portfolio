import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import './Contact.css';

const contactInfo = [
  { icon: <HiMail />, label: 'Email', value: 'bibashgautam@gmail.com', href: 'mailto:bibashgautam@gmail.com' },
  { icon: <HiPhone />, label: 'Phone', value: '+1 289-600-3517', href: 'tel:+12896003517' },
  { icon: <HiLocationMarker />, label: 'Location', value: 'Niagara Falls, ON, Canada', href: 'https://www.google.com/maps/search/?api=1&query=Niagara+Falls%2C+Ontario%2C+Canada' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/bibash-gautam', href: 'https://www.linkedin.com/in/bibash-gautam/' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/BIbash09', href: 'https://github.com/BIbash09' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [draftOpened, setDraftOpened] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:bibashgautam@gmail.com?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  };

  return (
    <section id="contact" className="contact-section">
      <img src="/purpleblur.png" alt="" className="contact-blur-l" aria-hidden="true" />
      <img src="/purpleblur.png" alt="" className="contact-blur-r" aria-hidden="true" />
      <img src="/Vector2.png"    alt="" className="contact-blob-y"  aria-hidden="true" />

      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's work<br />
            <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle">
            Open to data analyst, business analyst, BI, internship, and collaborative opportunities.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="contact-intro">
              <img src="/logo.png" alt="logo" className="contact-logo" />
              <div>
                <h3 className="contact-name">Bibash Gautam</h3>
                <p className="contact-tagline">Data Analyst · BI · Software Development</p>
              </div>
            </div>
            <p className="contact-desc">
              Have a role, project, or analytics problem to discuss? Use the form to open a
              prepared email draft, or contact me directly through the verified links below.
            </p>
            <div className="contact-items">
              {contactInfo.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  className="contact-item"
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  <div className="ci-icon">{c.icon}</div>
                  <div>
                    <p className="ci-label">{c.label}</p>
                    <p className="ci-value">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {draftOpened ? (
              <div className="form-success card">
                <span className="success-icon">✉️</span>
                <h3>Email draft opened</h3>
                <p>Review the draft in your email app, then press Send. Nothing is sent automatically.</p>
                <button className="btn btn-outline" onClick={() => setDraftOpened(false)}>Create another draft</button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" autoComplete="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input id="contact-subject" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity or project discussion" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about the role, project, or question..." required />
                </div>
                <button type="submit" className="btn btn-primary">
                  <HiPaperAirplane /> Open Email Draft
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
