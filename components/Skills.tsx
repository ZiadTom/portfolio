export default function Skills() {
  const skillCategories = [
    {
      title: "Back-End & Databases",
      skills: [
        "ASP.NET Core",
        "C#",
        "EF Core",
        "LINQ",
        "Django",
        "Python",
        "PostgreSQL",
        "SQL Server",
        "Supabase",
      ],
    },
    {
      title: "Frontend & UI",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Software Concepts",
      skills: [
        "Clean Architecture",
        "DDD",
        "OOP",
        "SOLID Principles",
        "Design Patterns",
        "Clean Code",
        "RESTful APIs",
        "MVC Architecture",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "DevOps",
        "Docker",
        "Swagger",
        "Postman",
        "LLM Integration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 mb-8 md:mb-16">
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-emerald-400">
                Skills
              </h2>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors duration-300"
            >
              <h3 className="flex items-center gap-2 text-white text-lg font-semibold mb-4">
                <span className="text-emerald-400">▹</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}