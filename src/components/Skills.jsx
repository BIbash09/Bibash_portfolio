import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaChartLine, FaCode, FaDatabase, FaFileExcel, FaGitAlt,
  FaPython, FaReact, FaTasks
} from 'react-icons/fa'
import { SiJavascript, SiMysql } from 'react-icons/si'
import { BsFillBarChartFill } from 'react-icons/bs'
import './Skills.css'

const skillGroups = [
  {
    icon: <FaChartLine />,
    title: 'Analytics & Statistics',
    description: 'Turning raw data into tested findings and decision-ready insight.',
    skills: ['Exploratory Data Analysis', 'Hypothesis Testing', 'Regression Analysis', 'Classification', 'Clustering'],
  },
  {
    icon: <BsFillBarChartFill />,
    title: 'BI & Reporting',
    description: 'Communicating performance, patterns, and business implications clearly.',
    skills: ['Power BI', 'Tableau', 'Advanced Excel', 'Dashboard Reporting', 'Data Visualization'],
  },
  {
    icon: <FaDatabase />,
    title: 'Data & Querying',
    description: 'Preparing reliable data for analysis, reporting, and repeatable workflows.',
    skills: ['SQL', 'MySQL', 'Data Extraction', 'ETL Pipelines', 'Data Wrangling'],
  },
  {
    icon: <FaTasks />,
    title: 'Delivery & Development',
    description: 'Building solutions collaboratively with a strong software foundation.',
    skills: ['Python', 'JavaScript', 'React', 'RESTful APIs', 'Agile', 'Git'],
  },
]

const techIcons = [
  { icon: <FaPython />,           label: 'Python',     color: '#4b8bbe' },
  { icon: <SiMysql />,            label: 'SQL / MySQL', color: '#4479a1' },
  { icon: <BsFillBarChartFill />, label: 'Power BI',   color: '#f2c811' },
  { icon: <BsFillBarChartFill />, label: 'Tableau',    color: '#e97627' },
  { icon: <FaFileExcel />,        label: 'Excel',      color: '#217346' },
  { icon: <FaReact />,            label: 'React',      color: '#61dafb' },
  { icon: <SiJavascript />,       label: 'JavaScript', color: '#f7df1e' },
  { icon: <FaGitAlt />,           label: 'Git',        color: '#f05032' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">
            Capabilities built for<br />
            <span className="gradient-text">business impact</span>
          </h2>
          <p className="section-subtitle">
            An analytics toolkit supported by hands-on software development experience.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.title}
              className="skill-group card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09 }}
            >
              <div className="skill-group-heading">
                <span className="skill-group-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <p className="skill-group-desc">{group.description}</p>
              <div className="skill-chip-list">
                {group.skills.map(skill => <span key={skill} className="skill-chip">{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="tools-panel">
          <p className="tech-col-title"><FaCode /> Core technologies & tools</p>
          <div className="tech-icons-grid">
            {techIcons.map((tool, i) => (
              <motion.div
                key={tool.label}
                className="tech-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <span className="tech-icon" style={{ color: tool.color }}>{tool.icon}</span>
                <span className="tech-label">{tool.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
