'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'

const groups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    label: 'Backend',
    items: ['Spring Boot', 'Hibernate', 'JDBC', 'Node.js', 'Express.js'],
  },
  {
    label: 'Frontend',
    items: ['React'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Postman'],
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
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm transition-colors hover:border-glow-end/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
