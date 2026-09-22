/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start">

          {/* Left Column - Heading */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white">
                About Me
              </h2>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 space-y-8 text-lg text-zinc-300 leading-relaxed">
            <p>
              I'm a passionate Software Engineer and Back-End Developer based in Damascus, Syria.
              With a strong foundation in software engineering principles, I specialize in building
              scalable and maintainable backend systems.
            </p>

            <p>
              I have a thorough understanding of ASP.NET Core and its ecosystem, including C#, LINQ,
              Entity Framework, and more. I have experience designing and implementing RESTful APIs,
              and I'm proficient in modern tools and frameworks for building efficient and robust applications.
            </p>

            <div className="pt-6">
              <h3 className="text-white font-semibold mb-4 text-xl">Education</h3>
              <div className="text-zinc-400">
                <p className="font-medium text-white">Bachelor's in Software Engineering and Information Systems</p>
                <p>Syrian Private University (SPU)</p>
                <p className="text-sm text-zinc-500">2021 – 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}