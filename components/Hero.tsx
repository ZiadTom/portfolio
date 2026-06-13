import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to new opportunities
          </div>

          <div className="md:hidden flex justify-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Ziad Altom"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 176px, 208px"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-none">
            Hi, I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Ziad Altom
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-400 font-light tracking-tight max-w-lg md:max-w-none">
            Software Engineer and Back-End Developer
          </p>

          <p className="text-lg text-zinc-400 max-w-md md:max-w-lg leading-relaxed mx-auto md:mx-0">
            I build scalable, production-ready, real-world applications and APIs
            using multiple techniques and modern tools. I have a solid
            background in software engineering principles such as SOLID, SDLC
            and OOP.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="group px-8 py-4 bg-white text-zinc-950 rounded-full text-lg font-semibold inline-flex items-center gap-3 hover:bg-zinc-200 transition-all active:scale-[0.985]"
            >
              View My Projects
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

            <Link
              href="#contact"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-full text-lg font-medium text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-[420px] aspect-square">
            <div className="absolute -inset-6 bg-gradient-to-br from-zinc-700 via-transparent to-zinc-700 rounded-[3rem] -rotate-6 opacity-30" />

            <div className="relative rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Ziad Altom - Software Engineer"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-cover"
                style={{ objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>

            <div className="absolute -inset-4 border border-zinc-700/50 rounded-[3rem] -rotate-3" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500 text-sm">
        <span>Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
      </div>
    </section>
  )
}