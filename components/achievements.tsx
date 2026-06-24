'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { achievements } from '@/lib/data'

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Milestones"
          title="My"
          accent="Achievements"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex items-start gap-4 rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/60">
                <Trophy className="h-5 w-5 text-glow-start" />
              </span>
              <div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
