'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { projects } from '@/lib/data'
import { GithubIcon } from './brand-icons'

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Explore my creations"
          title="Project"
          accent="Showcase"
        />

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass overflow-hidden rounded-3xl"
            >
              <div className="grid items-stretch md:grid-cols-2">
                {/* Text */}
                <div className="p-8 sm:p-10">
                  <h3 className="font-serif text-2xl sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-glow-end" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      GitHub <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      Live Site <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="relative min-h-[260px] overflow-hidden border-t border-border md:border-l md:border-t-0">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`${p.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-left-top"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
