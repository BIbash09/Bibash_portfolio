import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaJava, FaPython, FaReact, FaNodeJs,
  FaGitAlt, FaCss3Alt, FaHtml5, FaDatabase
} from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { BsFillBarChartFill } from 'react-icons/bs'
import './Skills.css'

const skillBars = [
  { name: 'Python',            pct: 85, icon: <FaPython />,          color: '#3776ab' },
  { name: 'JavaScript / ES6+', pct: 88, icon: <SiJavascript />,      color: '#f7df1e' },
  { name: 'React',             pct: 82, icon: <FaReact />,            color: '#61dafb' },
  { name: 'Java',              pct: 75, icon: <FaJava />,             color: '#f89820' },
  { name: 'MySQL / SQL',       pct: 80, icon: <FaDatabase />,         color: '#4479a1' },
  { name: 'Tableau',           pct: 78, icon: <BsFillBarChartFill />, color: '#e97627' },
  { name: 'Power BI',          pct: 72, icon: <BsFillBarChartFill />, color: '#f2c811' },
  { name: 'Machine Learning',  pct: 70, icon: <FaPython />,           color: '#f7931e' },
]

const techIcons = [
  { icon: <FaHtml5 />,           label: 'HTML5',      color: '#e34f26' },
  { icon: <FaCss3Alt />,         label: 'CSS3',       color: '#1572b6' },
  { icon: <SiJavascript />,      label: 'JavaScript', color: '#f7df1e' },
  { icon: <FaReact />,           label: 'React',      color: '#61dafb' },
  { icon: <FaNodeJs />,          label: 'Node.js',    color: '#339933' },
  { icon: <FaPython />,          label: 'Python',     color: '#3776ab' },
  { icon: <FaJava />,            label: 'Java',       color: '#f89820' },
  { icon: <FaDatabase />,        label: 'MySQL',      color: '#4479a1' },
  { icon: <BsFillBarChartFill />, label: 'Tableau',   color: '#e97627' },
  { icon: <BsFillBarChartFill />, label: 'Power BI',  color: '#f2c811' },
  { icon: <FaGitAlt />,          label: 'Git',        color: '#f05032' },
  { icon: <FaDatabase />,        label: 'SQL',        color: '#336791' },
]

function SkillBar({ name, pct, icon, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div className="skill-bar-item" ref={ref}>
      <div className="skill-bar-header">
        <span className="skill-bar-icon" style={{ color }}>{icon}</span>
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

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
            Tools I work<br />
            <span className="gradient-text">with daily</span>
          </h2>
          <p className="section-subtitle">
            From data pipelines to pixel-perfect UIs — here's my technical arsenal.
          </p>
        </motion.div>

        <div className="skills-grid">
          <div className="skill-bars-col">
            {skillBars.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={0.1 + i * 0.07} />
            ))}
          </div>
          <div className="tech-icons-col">
            <p className="tech-col-title">Technologies & Tools</p>
            <div className="tech-icons-grid">
              {techIcons.map((t, i) => (
                <motion.div
                  key={t.label}
                  className="tech-card"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <span className="tech-icon" style={{ color: t.color }}>{t.icon}</span>
                  <span className="tech-label">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}