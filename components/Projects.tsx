import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 mb-8 md:mb-16">
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-emerald-400">
                Projects
              </h2>
            </div>
          </div>

          <div className="lg:w-2/3">
            <p className="text-xl text-zinc-400 max-w-2xl">
              Here are some of the projects I have worked on.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}