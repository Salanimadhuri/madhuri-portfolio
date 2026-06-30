'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { TechBadge } from './tech-badge'

// Brand colors matching the reference colored-dot style
const groups = [
  {
    label: 'Languages',
    items: [
      { name: 'Java',       color: '#f89820' },
      { name: 'Python',     color: '#3776ab' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'SQL',        color: '#00758f' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Spring Boot', color: '#6db33f' },
      { name: 'Hibernate',   color: '#59666c' },
      { name: 'JDBC',        color: '#007396' },
      { name: 'Node.js',     color: '#339933' },
      { name: 'Express.js',  color: '#888888' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', color: '#61dafb' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MySQL',   color: '#00758f' },
      { name: 'MongoDB', color: '#13aa52' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git',     color: '#f1502f' },
      { name: 'GitHub',  color: '#888888' },
      { name: 'Postman', color: '#ff6c37' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills &"
          accent="Tools"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <TechBadge key={item.name} name={item.name} size={13} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
