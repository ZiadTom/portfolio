import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const navLinks = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Main row: logo (all screens) + desktop-only right side ── */}
        <div className="py-4 flex items-center justify-between">

          <Link href="/" className="flex flex-col group shrink-0">
            <span className="text-2xl font-semibold tracking-tighter text-white group-hover:text-zinc-100 transition-colors">
              Ziad Altom
            </span>
            <span className="text-xs font-mono text-emerald-500 -mt-1">
              Software Engineer
            </span>
          </Link>

          {/* Desktop: nav links + social + CTA */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-all duration-200 relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5 text-zinc-400">
              <a
                href="https://linkedin.com/in/ziad-altom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/ZiadTom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-sm"
                aria-label="GitHub"
              >
                GitHub <ExternalLink size={14} />
              </a>
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-white text-zinc-950 rounded-full text-sm font-semibold hover:bg-zinc-200 active:scale-95 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* ── Mobile-only: swipeable pill-link row ── */}
        <div className="md:hidden flex flex-row overflow-x-auto whitespace-nowrap no-scrollbar snap-x gap-2 pb-3 pt-2 border-t border-zinc-800">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="snap-start shrink-0 px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full text-sm font-medium text-zinc-300 hover:text-white transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}
