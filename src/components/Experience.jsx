import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    role: 'Front-End Developer',
    company: 'Armam Games Private Limited',
    period: 'Jan 2022 – Apr 2022',
    location: 'Maharajganj, Nepal',
    type: 'Full-time',
    bullets: [
      'Built responsive web interfaces using JavaScript and React, improving session engagement.',
      'Developed reusable component libraries as the foundation for future product features.',
      'Implemented personalized UI features based on user behavior data.',
      'Enforced coding standards and QA processes to maintain production-grade code quality.',
      'Integrated modern frontend tooling and best practices to support maintainable delivery.',
    ],
  },
  {
    role: 'Java & UI Developer Intern',
    company: 'Foliage Soft Private Limited',
    period: 'Jul 2020 – Apr 2021',
    location: 'Baluwatar Road, Nepal',
    type: 'Internship',
    bullets: [
      'Delivered pixel-perfect cross-platform UIs for web and Android from Figma mockups.',
      'Customized Android AOSP system components for client-specific hardware requirements.',
      'Resolved memory leaks and performance bottlenecks, reducing app crash rates.',
      'Integrated RESTful APIs to power real-time, data-driven features across platforms.',
      'Collaborated cross-functionally in an Agile environment to deliver features on schedule.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            A technical foundation in<br />
            <span className="gradient-text">delivery and problem solving</span>
          </h2>
          <p className="section-subtitle">
            Professional development experience that supports analytical thinking, collaboration, and quality.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="tl-item"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15 }}
            >
              <div className="tl-dot" />
              <div className="exp-card card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <FaBuilding size={12} /> {exp.company}
                    </div>
                  </div>
                  <span className="exp-badge">{exp.type}</span>
                </div>
                <div className="exp-meta">
                  <span><FaCalendar size={12} /> {exp.period}</span>
                  <span><FaMapMarkerAlt size={12} /> {exp.location}</span>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
