'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { experience } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="My journey"
          title="Work"
          accent="Experience"
        />

        <div className="relative pl-8">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-border" />

          {experience.map((x, i) => (
            <motion.div
              key={x.company}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-10"
            >
              <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-glow-end/60 bg-background">
                <span className="h-2 w-2 rounded-full bg-glow-end" />
              </span>

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60">
                      <Briefcase className="h-5 w-5 text-glow-end" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{x.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {x.company}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {x.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {x.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-glow-end" />
                      {p}
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
