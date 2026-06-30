'use client'

/**
 * About Section
 * ─────────────
 * Matches the reference screenshots:
 *  Left  — circular profile photo + bio text + location badge
 *  Right — Education / Experience (with left-border bullet points) / Tech Stack tags
 *
 * Full dark / light theme support via CSS custom properties.
 * Framer Motion fade-up animations on scroll (once).
 */

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { TechBadge } from './tech-badge'
import { personal, education, experience, skills } from '@/lib/data'

/* ── Shared animation preset ── */
const fadeUp = (delay = 0) => ({
  initial:      { opacity: 0, y: 22 },
  whileInView:  { opacity: 1, y:  0 },
  viewport:     { once: true, margin: '-60px' },
  transition:   { duration: 0.55, delay, ease: 'easeOut' as const },
})

/* ── Thin horizontal rule matching reference ── */
function Divider() {
  return (
    <div
      className="my-8"
      style={{ height: '1px', background: 'var(--divider)' }}
      aria-hidden
    />
  )
}

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 transition-colors duration-350"
      style={{ background: 'var(--background)' }}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Get to know me" title="About" accent="Me" />

        {/*
         * Two-column layout:
         *   col-1 (280px fixed) — photo + bio + location
         *   col-2 (flex-1)      — Education / Experience / Tech Stack
         */}
        <div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-16 lg:grid-cols-[280px_1fr]">

          {/* ═══════════════════════════════════
              LEFT COLUMN — profile
          ═══════════════════════════════════ */}
          <motion.div {...fadeUp(0)} className="flex flex-col items-center text-center md:items-start md:text-left">

            {/* Profile photo — circular, matches reference */}
            <div className="relative mb-6 self-center md:self-start">
              {/* Outer ring */}
              <div
                className="relative h-[160px] w-[160px] rounded-full overflow-hidden"
                style={{
                  border: '2px solid var(--border-color)',
                  boxShadow: '0 0 0 4px var(--surface)',
                }}
              >
                <Image
                  src="/profile.png"
                  alt={`Portrait of ${personal.name}`}
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio text — matches reference paragraph */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--muted-fg)' }}
            >
              I&apos;m a passionate Java Full Stack Developer who loves building robust,
              end-to-end applications. I thrive on solving problems, crafting clean
              backend logic, and creating seamless user experiences. Always eager to
              learn and grow, I&apos;m currently looking for new opportunities to
              contribute and innovate.
            </p>

            {/* Thin divider */}
            <div
              className="my-5 w-full"
              style={{ height: '1px', background: 'var(--divider)' }}
              aria-hidden
            />

            {/* Location badge — matches reference */}
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--muted-fg)' }}
            >
              <MapPin size={14} style={{ color: 'var(--muted-fg)' }} />
              {personal.location}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════
              RIGHT COLUMN — details
          ═══════════════════════════════════ */}
          <div>

            {/* ── Education ── */}
            <motion.div {...fadeUp(0.1)}>
              <h3
                className="mb-4 text-base font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                Education
              </h3>

              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div key={edu.school} {...fadeUp(0.1 + i * 0.07)}>
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-0.5">
                      {/* Left: school + degree */}
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {edu.school}
                        </p>
                        <p
                          className="mt-0.5 text-sm"
                          style={{ color: 'var(--muted-fg)' }}
                        >
                          {edu.degree}
                        </p>
                      </div>
                      {/* Right: period + detail */}
                      <div className="text-right shrink-0">
                        <p
                          className="text-sm"
                          style={{ color: 'var(--muted-fg)' }}
                        >
                          {edu.period}
                        </p>
                        <p
                          className="mt-0.5 text-sm font-medium"
                          style={{ color: 'var(--muted-fg)' }}
                        >
                          {edu.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <Divider />

            {/* ── Experience ── */}
            <motion.div {...fadeUp(0.18)}>
              <h3
                className="mb-4 text-base font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                Experience
              </h3>

              {experience.map((exp, i) => (
                <motion.div key={exp.company} {...fadeUp(0.18 + i * 0.07)} className="mb-6 last:mb-0">
                  {/* Company + period row */}
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-0.5">
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-sm shrink-0"
                      style={{ color: 'var(--muted-fg)' }}
                    >
                      {exp.period}
                    </p>
                  </div>

                  {/* Role */}
                  <p
                    className="mt-0.5 mb-3 text-sm font-medium"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {exp.role}
                  </p>

                  {/* Bullet points with left border — exact reference style */}
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="pl-4 text-sm leading-relaxed"
                        style={{
                          color: 'var(--muted-fg)',
                          borderLeft: '2px solid var(--border-color)',
                        }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <Divider />

            {/* ── Tech Stack ── */}
            <motion.div {...fadeUp(0.26)}>
              <h3
                className="mb-4 text-base font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: i * 0.022 }}
                  >
                    <TechBadge name={skill.name} size={13} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
