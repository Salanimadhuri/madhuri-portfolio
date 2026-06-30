'use client'

/**
 * TechBadge — premium hover interactions for tech stack pills.
 *
 * Effects:
 *  - Framer Motion: lift (y -4px) + scale (1.05), spring physics
 *  - 3D tilt following mouse position (max ±8°)
 *  - Border brightens on hover (CSS transition)
 *  - Soft blue-white glow via box-shadow
 *  - Background lightens slightly
 *  - Icon brightness increases
 *  - One-shot shine sweep across the badge on hover entry
 *  - All transitions 300ms ease-out
 */

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { TechIcon } from './tech-icon'

interface TechBadgeProps {
  name: string
  size?: number
  className?: string
}

export function TechBadge({ name, size = 13, className = '' }: TechBadgeProps) {
  const ref = useRef<HTMLDivElement>(null)

  /* Mouse position relative to badge center — drives 3D tilt */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  /* Spring-smoothed tilt values */
  const springConfig = { stiffness: 300, damping: 30 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5   // -0.5 → 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      /* Lift + scale on hover */
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 600,
        display: 'inline-block',
      }}
      className={`group relative cursor-default ${className}`}
    >
      {/* Shine sweep — single pass on hover, CSS animation */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
        aria-hidden
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
            backgroundPosition: '200% center',
            transition: 'none',
            animation: 'badge-shine 0s',
          }}
        />
      </span>

      {/* Badge pill */}
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium relative"
        style={{
          background:   'var(--tag-bg)',
          border:       '1px solid var(--tag-border)',
          color:        'var(--tag-fg)',
          transition:   'border-color 0.3s ease-out, color 0.3s ease-out, background 0.3s ease-out, box-shadow 0.3s ease-out',
        }}
        /* Glow + border + bg on hover via group */
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLSpanElement
          el.style.borderColor = 'rgba(150,200,255,0.70)'
          el.style.color       = 'var(--foreground)'
          el.style.background  = 'var(--surface)'
          el.style.boxShadow   = '0 0 0 1px rgba(150,200,255,0.25), 0 4px 16px rgba(120,180,255,0.18)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLSpanElement
          el.style.borderColor = 'var(--tag-border)'
          el.style.color       = 'var(--tag-fg)'
          el.style.background  = 'var(--tag-bg)'
          el.style.boxShadow   = 'none'
        }}
      >
        {/* Icon brightens slightly on hover (CSS filter via group) */}
        <span
          className="shrink-0"
          style={{ transition: 'filter 0.3s ease-out' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.filter = 'brightness(1.3)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.filter = 'brightness(1)' }}
        >
          <TechIcon name={name} size={size} />
        </span>
        {name}
      </span>
    </motion.div>
  )
}
