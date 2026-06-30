'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { personal } from '@/lib/data'
import { GlowingHorizon } from './glowing-horizon'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      /* Use CSS variable so it responds to light/dark/black theme toggle */
      style={{ background: 'var(--background)' }}
    >
      <GlowingHorizon />

      <motion.div
        style={{ y, opacity, paddingBottom: '14vh' }}
        className="relative z-10 mx-auto flex w-full max-w-[680px] flex-col items-center px-6 text-center"
      >

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative mb-7 inline-flex items-center rounded-full px-4 py-1.5 text-xs tracking-wide shine"
          style={{ color: 'var(--foreground)' }}
        >
          Learning. Building. Improving.
        </motion.div>

        {/* ── Heading ── */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
          className="font-serif w-full"
          style={{
            color:         'var(--foreground)',
            fontSize:      'clamp(2.8rem, 6.5vw, 4.25rem)',
            lineHeight:    1.12,
            letterSpacing: '-0.01em',
          }}
        >
          Turning Ideas into{' '}
          <br className="hidden sm:block" />
          <span style={{ fontStyle: 'normal' }}>Full Stack </span>
          <em
            style={{
              fontStyle:  'italic',
              fontFamily: 'var(--font-instrument-serif), Instrument Serif, Georgia, serif',
            }}
          >
            Solutions
          </em>
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          className="mt-5 text-base sm:text-lg"
          style={{ color: 'var(--muted-fg)', letterSpacing: '0.01em' }}
        >
          Hey, I&apos;m{' '}
          <span style={{ color: 'var(--foreground)' }}>{personal.name}</span>
          {', '}
          <span style={{ color: 'var(--foreground)' }}>{personal.role}</span>
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.55, delay: 0.34, ease: 'easeOut' }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 rounded-full px-7 py-2.5 text-sm font-medium transition-all duration-150"
            style={{
              background: 'var(--surface)',
              border:     '1px solid var(--border-color)',
              color:      'var(--foreground)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--muted-fg)'
              el.style.background  = 'var(--surface-hover)'
              el.style.transform   = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--border-color)'
              el.style.background  = 'var(--surface)'
              el.style.transform   = 'translateY(0)'
            }}
          >
            <span aria-hidden>👋</span>
            Let&apos;s Connect
          </button>

          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 rounded-full px-7 py-2.5 text-sm font-medium transition-all duration-150"
            style={{
              background: 'transparent',
              border:     '1px solid var(--border-color)',
              color:      'var(--foreground)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--muted-fg)'
              el.style.background  = 'var(--surface)'
              el.style.transform   = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--border-color)'
              el.style.background  = 'transparent'
              el.style.transform   = 'translateY(0)'
            }}
          >
            View Projects
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </motion.div>

      </motion.div>
    </section>
  )
}
