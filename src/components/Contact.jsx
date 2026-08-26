import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import './Contact.css';

const contactInfo = [
  { icon: <HiMail />, label: 'Email', value: 'bibashgautam.official@gmail.com', href: 'mailto:bibashgautam.official@gmail.com' },
  { icon: <HiPhone />, label: 'Phone', value: '+1 289-969-5617', href: 'tel:+12899695617' },
  { icon: <HiLocationMarker />, label: 'Location', value: 'Niagara Falls, ON, Canada', href: 'https://www.google.com/maps/place/Niagara+Falls,+ON/@43.0540284,-79.1704351,12z/data=!3m1!4b1!4m6!3m5!1s0x89d3445eec824db9:0x46d2c56156bda288!8m2!3d43.0895577!4d-79.0849436!16zL20vMDE4bGNf?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/bibashgautam', href: 'https://www.linkedin.com/in/bibash-gautam/' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/bibashgautam', href: 'https://github.com/BIbash09' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setForm({ name:'', email:'', subject:'', message:'' }); }, 1500);
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
            Open to internships, collaborations, and full-time opportunities. Say hello!
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
                <p className="contact-tagline">Data Analyst · Developer · Designer</p>
              </div>
            </div>
            <p className="contact-desc">
              Whether you have a project in mind, want to discuss data science,
              or just want to connect — my inbox is always open.
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
            {sent ? (
              <div className="form-success card">
                <span className="success-icon">✅</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Bibash Gautam" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="bibash@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Collaboration / Job Opportunity" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." required />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : <><HiPaperAirplane /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
