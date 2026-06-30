'use client'

import { motion } from 'framer-motion'
import { Home, User, Code2, Mail, Briefcase, Layers, Sun, Moon, Circle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personal } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { useTheme } from './theme-provider'

const NAV_ITEMS = [
  { id: 'home',       label: 'Home',       Icon: Home },
  { id: 'about',      label: 'About',      Icon: User },
  { id: 'skills',     label: 'Skills',     Icon: Layers },
  { id: 'experience', label: 'Experience', Icon: Briefcase },
  { id: 'projects',   label: 'Projects',   Icon: Code2 },
  { id: 'contact',    label: 'Contact',    Icon: Mail },
]

export function Navbar() {
  const [active, setActive] = useState('home')
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id)
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActive(id)
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // Dynamic gradient based on current theme
  const gradientClass = theme === 'light'
    ? 'bg-gradient-to-t from-white via-white/70 to-transparent lg:bg-gradient-to-b lg:from-white lg:via-white/70 lg:to-transparent'
    : 'bg-gradient-to-t from-[var(--background)] via-[var(--background)]/70 to-transparent lg:bg-gradient-to-b lg:from-[var(--background)] lg:via-[var(--background)]/70 lg:to-transparent'

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      /* Reference: fixed bottom on mobile, top on desktop */
      className={`fixed z-50 w-full text-sm bottom-0 pb-6 lg:top-0 lg:bottom-auto lg:pt-4 lg:pb-0 ${gradientClass}`}
    >
      {/* Pill — exact: bg #0a0a0a (card-bg), border #525252, navbar-shadow */}
      <ul
        className="flex items-center gap-2 md:gap-3 w-fit mx-auto rounded-full px-2.5 py-1.5 navbar-shadow"
        style={{ background: 'var(--background)', border: '1px solid var(--border-color)' }}
      >
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <li key={id} className="relative">
            <button
              type="button"
              onClick={() => scrollTo(id)}
              aria-label={label}
              className="navbar-li"
              style={active === id ? { background: 'var(--surface-hover)', color: 'var(--foreground)' } : {}}
            >
              <Icon size={18} strokeWidth={1.8} />

              {/* Tooltip — above on mobile, below on desktop */}
              <span
                className="pointer-events-none absolute left-1/2 -translate-x-1/2
                  max-lg:bottom-full max-lg:mb-1.5
                  lg:top-full lg:mt-1.5
                  px-2 py-1 rounded-md text-xs whitespace-nowrap
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-100"
                style={{ background: 'var(--foreground)', color: 'var(--background)' }}
                aria-hidden
              >
                {label}
              </span>
            </button>
          </li>
        ))}

        {/* Divider */}
        <li aria-hidden>
          <span className="block h-4 w-px mx-0.5" style={{ background: 'var(--border-color)' }} />
        </li>

        {/* GitHub */}
        <li>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="navbar-li group"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
            <span
              className="pointer-events-none absolute left-1/2 -translate-x-1/2
                max-lg:bottom-full max-lg:mb-1.5
                lg:top-full lg:mt-1.5
                px-2 py-1 rounded-md text-xs whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-100"
              style={{ background: 'var(--foreground)', color: 'var(--background)' }}
              aria-hidden
            >
              GitHub
            </span>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="navbar-li group"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
            <span
              className="pointer-events-none absolute left-1/2 -translate-x-1/2
                max-lg:bottom-full max-lg:mb-1.5
                lg:top-full lg:mt-1.5
                px-2 py-1 rounded-md text-xs whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-100"
              style={{ background: 'var(--foreground)', color: 'var(--background)' }}
              aria-hidden
            >
              LinkedIn
            </span>
          </a>
        </li>

        {/* Divider */}
        <li aria-hidden>
          <span className="block h-4 w-px mx-0.5" style={{ background: 'var(--border-color)' }} />
        </li>

        {/* Theme toggle */}
        <li>
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="navbar-li group relative"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0,   opacity: 1, scale: 1   }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {theme === 'dark' ? (
                <Sun size={18} strokeWidth={1.8} />
              ) : (
                <Moon size={18} strokeWidth={1.8} />
              )}
            </motion.div>
            <span
              className="pointer-events-none absolute left-1/2 -translate-x-1/2
                max-lg:bottom-full max-lg:mb-1.5
                lg:top-full lg:mt-1.5
                px-2 py-1 rounded-md text-xs whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-100"
              style={{ background: 'var(--foreground)', color: 'var(--background)' }}
              aria-hidden
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </span>
          </button>
        </li>
      </ul>
    </motion.nav>
  )
}
