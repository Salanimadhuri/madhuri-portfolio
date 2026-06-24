'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Floating ambient orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[12%] top-[28%] h-40 w-40 rounded-full bg-glow-start/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 28, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[14%] top-[34%] h-48 w-48 rounded-full bg-glow-end/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mb-8 rounded-full px-5 py-2 text-sm font-medium tracking-wide"
        >
          Learning. Building. Improving.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl leading-tight text-balance sm:text-6xl md:text-7xl"
        >
          Turning Ideas into Robust{' '}
          <span className="italic">Full Stack Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-lg text-muted-foreground sm:text-xl"
        >
          Hey, I&apos;m Salani Madhuri, a Java Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
          >
            <span aria-hidden>👋</span> Let&apos;s Connect
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="/Salani-Madhuri-Resume.txt"
            download
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>
      </div>

      {/* Signature arched horizon glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[60%] left-1/2 h-[80vh] w-[160vw] -translate-x-1/2 rounded-[50%] border-t border-white/30 bg-[radial-gradient(ellipse_at_top,_oklch(0.7_0.05_260_/_0.35),_transparent_55%)]"
      />
    </section>
  )
}
