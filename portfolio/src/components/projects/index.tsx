import { projects } from "@/constants";

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-8">
      {projects.map((project) => (
        <div className="w-full flex flex-col gap-y-3 sm:gap-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-medium text-white">
              {project.title}
            </h3>
            <div className="flex gap-x-4 text-xs sm:text-sm text-zinc-400 whitespace-nowrap">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  Github
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  View
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-zinc-300">{project.description}</p>

          <div className="flex flex-wrap gap-1 text-xs text-zinc-400">
            {project.technologies.map((tech, index) => (
              <span key={tech}>
                {tech}
                {index < project.technologies.length - 1 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}