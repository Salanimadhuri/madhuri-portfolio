'use client'

import { motion } from 'framer-motion'
import { Home, User, Code2, Mail, Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personal } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const navItems = [
  { id: 'home', label: 'Home', icon: Home, type: 'scroll' as const },
  { id: 'about', label: 'About', icon: User, type: 'scroll' as const },
  { id: 'projects', label: 'Projects', icon: Code2, type: 'scroll' as const },
  { id: 'contact', label: 'Contact', icon: Mail, type: 'scroll' as const },
]

export function Navbar() {
  const [active, setActive] = useState('home')
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact']
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3
      for (const id of sections) {
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

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('light', !next)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl sm:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-label={item.label}
              className={`relative flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                isActive
                  ? 'text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 h-[18px] w-[18px]" />
            </button>
          )
        })}

        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        >
          <LinkedinIcon className="h-[18px] w-[18px]" />
        </a>
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-[18px] w-[18px]" />
        </a>

        <span className="mx-1 h-5 w-px bg-border" aria-hidden />

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        >
          {dark ? (
            <Sun className="h-[18px] w-[18px]" />
          ) : (
            <Moon className="h-[18px] w-[18px]" />
          )}
        </button>
      </div>
    </motion.nav>
  )
}
