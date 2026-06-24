'use client'

import { Code2 } from 'lucide-react'
import { personal } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Code2 className="h-5 w-5" />
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  )
}
