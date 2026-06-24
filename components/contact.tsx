'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { personal } from '@/lib/data'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Get in touch" title="Let's" accent="Connect" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 sm:p-10"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${personal.email}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" />
              {personal.phone}
            </a>
          </div>

          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">
              Or send a message
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-glow-end/60"
            />
            <textarea
              required
              rows={5}
              placeholder="Your Message"
              aria-label="Your Message"
              className="w-full resize-none rounded-xl border border-input bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-glow-end/60"
            />
            <button
              type="submit"
              className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {sent ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
