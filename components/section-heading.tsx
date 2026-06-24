'use client'

import { motion } from 'framer-motion'

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
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl">
        {title} <span className="text-gradient italic">{accent}</span>
      </h2>
    </motion.div>
  )
}
