'use client'

/**
 * ThemeProvider
 * Manages light/dark/black mode via a class on <html>.
 * Cycles through: light → dark → black
 * Persists preference in localStorage and respects system preference on first visit.
 * Exposes useTheme() hook for consumer components (toggle button, etc.)
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

type Theme = 'light' | 'dark' | 'black'

interface ThemeContext {
  theme: Theme
  toggle: () => void
}

const Ctx = createContext<ThemeContext>({ theme: 'light', toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  /* On mount: read stored pref or system pref */
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const preferred = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    applyTheme(preferred)
    setTheme(preferred)
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      // Cycle: light → dark → black → light
      const next: Theme = prev === 'light' ? 'dark' : prev === 'dark' ? 'black' : 'light'
      applyTheme(next)
      localStorage.setItem('theme', next)
      return next
    })
  }, [])

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>
}

export function useTheme() {
  return useContext(Ctx)
}

/* Applies theme class to <html> without layout flash */
function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove('light', 'dark', 'black')
  root.classList.add(theme)
  root.style.colorScheme = theme === 'light' ? 'light' : 'dark'
}
