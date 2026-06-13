import { ExternalLink, FileCode2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="p-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-[15px] leading-relaxed">
          {project.description}
        </p>
      </div>

      {(project.liveUrl || project.apiDocsUrl || project.githubUrl) && (
        <div className="mt-auto border-t border-zinc-800 p-6 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium bg-white text-zinc-950 rounded-xl hover:bg-zinc-200 transition-colors"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}

          {project.apiDocsUrl && (
            <a
              href={project.apiDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-emerald-400 border border-emerald-900 hover:border-emerald-500 hover:text-emerald-300 rounded-xl transition-colors"
            >
              <FileCode2 size={16} />
              API Docs
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-600 hover:text-white rounded-xl transition-colors"
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  )
}