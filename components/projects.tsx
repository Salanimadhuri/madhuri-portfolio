'use client'

import Image from 'next/image'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { projects } from '@/lib/data'
import { GithubIcon } from './brand-icons'

/**
 * Sticky stacked scrolling — reference: html-to-react-converter-421 Projects.tsx
 *
 * Structure (matching reference exactly):
 *  - Section: flex flex-col justify-center items-center
 *  - Wrapper: px-4 lg:max-w-4xl w-full
 *  - Cards: position:sticky with hardcoded top offsets (72px, 152px, 232px...)
 *           and increasing z-index so later cards stack on top
 *  - Spacing: my-4 on each card (no calculated marginBottom)
 *  - Image: overflow-visible wrapper + absolute positioning to allow overflow
 */

const stickyOffsets = ['72px', '152px', '232px', '312px', '392px', '472px']

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-10 md:py-16 px-4"
    >
      {/* Header */}
      <div className="mb-10 md:mb-16">
        <SectionHeading
          eyebrow="Explore my creations"
          title="Project"
          accent="Showcase"
        />
      </div>

      {/* Cards wrapper — exactly matching reference structure */}
      <div className="px-4 lg:max-w-4xl w-full">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="flex max-lg:flex-col gap-4 my-4 glass rounded-2xl overflow-hidden
                       hover:shadow-lg transition-shadow duration-300 sticky"
            style={{
              top: `calc(${stickyOffsets[i] || `${72 + i * 80}px`})`,
              zIndex: i + 1,
            }}
          >
            {/* ── Text side ── */}
            <div className="flex flex-col flex-1 p-4 md:p-8 min-h-0">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                {p.description}
              </p>

              <ul className="text-sm space-y-2 text-muted-foreground mb-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-border
                               hover:bg-secondary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border border-border
                             transition-all duration-100 ease-out
                             hover:bg-secondary hover:scale-105 hover:-translate-y-0.5"
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border border-border
                             transition-all duration-100 ease-out
                             hover:bg-blue-600 hover:text-white hover:border-blue-600
                             hover:scale-105 hover:-translate-y-0.5"
                >
                  Live Site
                </a>
              </div>
            </div>

            {/* ── Image side ── */}
            <div className="relative max-md:h-80 md:h-96 max-lg:w-full lg:flex-1 overflow-visible">
              <Image
                src={p.image || '/placeholder.svg'}
                alt={`${p.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover lg:absolute lg:top-20 lg:right-[-55%] lg:w-[167%] lg:h-[22rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
