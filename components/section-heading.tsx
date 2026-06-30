'use client'

import { motion } from 'framer-motion'

/**
 * SectionHeading
 * Matches the html-to-react-converter reference exactly:
 *  - eyebrow: small all-caps muted label above the heading
 *  - title:   first word(s) in normal theme foreground color, serif font
 *  - accent:  second word using `animated-text-gradient italic` — reuses the
 *             exact class already defined in globals.css (gradient-shift keyframe,
 *             blue→purple→pink animated gradient, Instrument Serif italic)
 *
 * Example output:  About <span class="animated-text-gradient italic">Me</span>
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string
  title: string
  accent: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-14 text-center"
    >
      {/* Eyebrow — matches reference: "text-xs text-center text-[var(--muted)] font-medium" */}
      <p className="text-xs font-medium tracking-widest uppercase mb-4"
         style={{ color: 'var(--muted-fg)' }}>
        {eyebrow}
      </p>

      {/* Heading — matches reference: serif, 4xl→6xl, first word normal, accent animated */}
      <h2
        className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium"
        style={{ lineHeight: 1.15 }}
      >
        {title}{' '}
        <span className="animated-text-gradient italic">{accent}</span>
      </h2>
    </motion.div>
  )
}
