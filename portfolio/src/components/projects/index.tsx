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

          {(project as { description?: string }).description && (
            <p className="text-sm text-zinc-300">{(project as { description?: string }).description}</p>
          )}

          {(project as { points?: string[] }).points && (
            <ul className="list-disc list-outside ml-4 flex flex-col gap-y-1.5 text-sm text-zinc-300 marker:text-zinc-500">
              {((project as { points?: string[] }).points as string[]).map((point: string) => (
                <li key={point} className="pl-1 leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-1 text-xs text-zinc-400 ml-4">
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