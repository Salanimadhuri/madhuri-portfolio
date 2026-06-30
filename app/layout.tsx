import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Instrument_Serif } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Salani Madhuri — Java Full Stack Developer',
  description:
    'Portfolio of Salani Madhuri, a Java Full Stack Developer and Software Engineering Enthusiast based in Kakinada, Andhra Pradesh.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

/* ── No-flash theme init script ── */
const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var m = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var t = s || m;
    document.documentElement.classList.add(t);
    document.documentElement.style.colorScheme = t;
  } catch(e){}
})();
`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      /* 'light' as default SSR class — overridden client-side immediately */
      className={`light ${outfit.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script runs before paint → no flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
