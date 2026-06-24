'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { education } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Where I learned" title="My" accent="Education" />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/60">
                <GraduationCap className="h-5 w-5 text-glow-end" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{e.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                  {e.period}
                </span>
                <span className="font-medium text-gradient">{e.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
