export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
          Let us Work Together
        </h2>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          I am currently open to new opportunities and interesting projects.
          Whether you have a backend challenge, want to discuss architecture,
          or just want to connect — feel free to reach out.
        </p>

        {/* Main CTA Button */}
        <div className="mb-12">
          <a
            href="mailto:eng.ziad.altom@gmail.com"
            className="block w-full max-w-[280px] mx-auto px-6 py-2.5 bg-white text-zinc-950 text-sm font-semibold tracking-wide rounded-2xl hover:bg-zinc-200 transition-all active:scale-[0.985]"
          >
            Send me an Email
          </a>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white text-lg font-medium mb-2">Email</h3>
            <a
              href="mailto:eng.ziad.altom@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors break-all"
            >
              eng.ziad.altom@gmail.com
            </a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white text-lg font-medium mb-2">Phone</h3>
            <a
              href="tel:+963952720546"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              +963 952 720 546
            </a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:col-span-2">
            <h3 className="text-white text-lg font-medium mb-2">Location</h3>
            <p className="text-zinc-400">Damascus, Syria</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex flex-col items-center">
          <p className="text-zinc-500 mb-4 text-sm">Or find me on</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/ziad-altom-653519326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white text-base transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ZiadTom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white text-base transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-zinc-800 text-zinc-500 text-sm flex flex-col sm:flex-row justify-center gap-2">
          <span className="text-emerald-500">© {new Date().getFullYear()} Ziad Altom</span>
        </div>
      </div>
    </section>
  );
}