/**
 * TechIcon — official Simple Icons (react-icons/si) logos for tech badges.
 * All export names verified against react-icons v5 si/index.js.
 */

import {
  SiOpenjdk,       // Java
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiHibernate,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiFigma,
} from 'react-icons/si'
import { Database } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconEntry = { Icon: ComponentType<SVGProps<SVGSVGElement>>; color: string }

/* All keys lowercase for case-insensitive lookup */
const ICON_MAP: Record<string, IconEntry> = {
  'java':          { Icon: SiOpenjdk as ComponentType<SVGProps<SVGSVGElement>>,    color: '#f89820' },
  'python':        { Icon: SiPython as ComponentType<SVGProps<SVGSVGElement>>,     color: '#3776ab' },
  'javascript':    { Icon: SiJavascript as ComponentType<SVGProps<SVGSVGElement>>, color: '#f7df1e' },
  'typescript':    { Icon: SiTypescript as ComponentType<SVGProps<SVGSVGElement>>, color: '#3178c6' },
  'html':          { Icon: SiHtml5 as ComponentType<SVGProps<SVGSVGElement>>,      color: '#e34c26' },
  'html5':         { Icon: SiHtml5 as ComponentType<SVGProps<SVGSVGElement>>,      color: '#e34c26' },
  'css':           { Icon: SiCss3 as ComponentType<SVGProps<SVGSVGElement>>,       color: '#563d7c' },
  'css3':          { Icon: SiCss3 as ComponentType<SVGProps<SVGSVGElement>>,       color: '#563d7c' },
  // Databases
  'sql':           { Icon: Database as ComponentType<SVGProps<SVGSVGElement>>,     color: '#00758f' },
  'mysql':         { Icon: SiMysql as ComponentType<SVGProps<SVGSVGElement>>,      color: '#00758f' },
  'mongodb':       { Icon: SiMongodb as ComponentType<SVGProps<SVGSVGElement>>,    color: '#13aa52' },
  // Backend
  'spring boot':   { Icon: SiSpringboot as ComponentType<SVGProps<SVGSVGElement>>, color: '#6db33f' },
  'hibernate':     { Icon: SiHibernate as ComponentType<SVGProps<SVGSVGElement>>,  color: '#59666c' },
  'jdbc':          { Icon: Database as ComponentType<SVGProps<SVGSVGElement>>,     color: '#007396' },
  'node.js':       { Icon: SiNodedotjs as ComponentType<SVGProps<SVGSVGElement>>,  color: '#339933' },
  'express.js':    { Icon: SiExpress as ComponentType<SVGProps<SVGSVGElement>>,    color: '#888888' },
  // Frontend
  'react':         { Icon: SiReact as ComponentType<SVGProps<SVGSVGElement>>,      color: '#61dafb' },
  'react.js':      { Icon: SiReact as ComponentType<SVGProps<SVGSVGElement>>,      color: '#61dafb' },
  'next.js':       { Icon: SiNextdotjs as ComponentType<SVGProps<SVGSVGElement>>,  color: '#888888' },
  'tailwind css':  { Icon: SiTailwindcss as ComponentType<SVGProps<SVGSVGElement>>,color: '#06b6d4' },
  'framer motion': { Icon: SiFramer as ComponentType<SVGProps<SVGSVGElement>>,     color: '#0055ff' },
  'redux toolkit': { Icon: SiRedux as ComponentType<SVGProps<SVGSVGElement>>,      color: '#764abc' },
  // Tools
  'git':           { Icon: SiGit as ComponentType<SVGProps<SVGSVGElement>>,        color: '#f1502f' },
  'github':        { Icon: SiGithub as ComponentType<SVGProps<SVGSVGElement>>,     color: '#888888' },
  'postman':       { Icon: SiPostman as ComponentType<SVGProps<SVGSVGElement>>,    color: '#ff6c37' },
  'vercel':        { Icon: SiVercel as ComponentType<SVGProps<SVGSVGElement>>,     color: '#888888' },
  'figma':         { Icon: SiFigma as ComponentType<SVGProps<SVGSVGElement>>,      color: '#f24e1e' },
}

interface TechIconProps {
  name: string
  size?: number
}

export function TechIcon({ name, size = 13 }: TechIconProps) {
  const entry = ICON_MAP[name.toLowerCase()]

  if (!entry) {
    // Fallback: neutral dot for unmapped techs
    return (
      <span
        aria-hidden
        className="shrink-0 rounded-full bg-[#666]"
        style={{ width: size, height: size, display: 'inline-block' }}
      />
    )
  }

  const { Icon, color } = entry
  return (
    <Icon
      aria-hidden
      style={{ width: size, height: size, color, flexShrink: 0 }}
    />
  )
}
