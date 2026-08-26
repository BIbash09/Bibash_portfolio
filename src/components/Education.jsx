import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import './Education.css';

const education = [
  {
    degree: 'Master of Data Analytics',
    school: 'University of Niagara Falls',
    period: '2025 – Present',
    location: 'Niagara Falls, ON, Canada 🇨🇦',
    status: 'In Progress · 4th Semester',
    highlights: [
      'Statistical Modelling & Machine Learning',
      'Business Intelligence & Data Visualization',
      'ETL Pipelines & Big Data Processing',
      'Research: Credit Card Usage Behavior Analysis',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'Tribhuvan University',
    period: '2017 – 2022',
    location: 'Kathmandu, Nepal 🇳🇵',
    status: 'Completed',
    highlights: [
      'Core Programming: Java, C, Python',
      'Web Technologies: HTML, CSS, JavaScript',
      'Database Management & SQL',
      'Software Engineering & Agile Principles',
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="edu-section">
      <img src="/Vector1.png"    alt="" className="edu-blob-b" aria-hidden="true" />
      <img src="/purpleblur.png" alt="" className="edu-blur"   aria-hidden="true" />

      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">
            Academic<br />
            <span className="gradient-text">foundations</span>
          </h2>
        </motion.div>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="edu-card card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <div className="edu-top">
                <div className="edu-icon-wrap">
                  <HiAcademicCap size={24} className="edu-icon" />
                </div>
                <span className="edu-status">{edu.status}</span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>

              <div className="edu-meta">
                <span><HiCalendar size={13} /> {edu.period}</span>
                <span><HiLocationMarker size={13} /> {edu.location}</span>
              </div>

              <div className="edu-highlights">
                <p className="edu-hl-label">Key Areas</p>
                <ul>
                  {edu.highlights.map(h => (
                    <li key={h}><span className="hl-arrow">→</span> {h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
