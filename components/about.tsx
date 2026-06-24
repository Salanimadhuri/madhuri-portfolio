'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { personal, education, experience, skills } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get to know me" title="About" accent="Me" />

        <div className="grid gap-12 md:grid-cols-[300px_1fr] md:gap-16">
          {/* Left: profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative h-44 w-44 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="/profile.png"
                alt={`Portrait of ${personal.name}`}
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              {personal.about}
            </p>
            <div className="my-6 h-px w-full bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {personal.location}
            </div>
          </motion.div>

          {/* Right: details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-l border-border pl-8 md:pl-12"
          >
            {/* Education */}
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="mt-4 space-y-4">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="flex flex-wrap items-start justify-between gap-2"
                >
                  <div>
                    <p className="font-medium">{e.school}</p>
                    <p className="text-sm text-muted-foreground">{e.degree}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-muted-foreground">{e.period}</p>
                    <p className="text-muted-foreground">{e.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-8 h-px w-full bg-border" />

            {/* Experience */}
            <h3 className="text-xl font-semibold">Experience</h3>
            {experience.map((x) => (
              <div key={x.company} className="mt-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-medium">{x.company}</p>
                    <p className="text-sm text-muted-foreground">{x.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{x.period}</p>
                </div>
                <ul className="mt-4 space-y-3">
                  {x.points.map((p) => (
                    <li
                      key={p}
                      className="border-l-2 border-glow-end/60 pl-3 text-sm text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="my-8 h-px w-full bg-border" />

            {/* Tech Stack */}
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
