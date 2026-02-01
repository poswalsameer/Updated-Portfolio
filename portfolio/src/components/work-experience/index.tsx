import { experiences } from "@/constants";

export default function WorkExperience() {
  return (
    <div className="w-full flex flex-col gap-y-8">
      {experiences.map((exp) => (
        <div className="w-full flex flex-col gap-y-3 sm:gap-y-2">
          <div className="flex flex-col gap-y-1 sm:flex-row items-start justify-between gap-4">
            <h3 className="text-base font-medium text-white">
              {exp.title} <span className="text-zinc-400">at <a href={exp.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{exp.company}</a></span>
            </h3>
            <time className="text-xs sm:text-sm text-zinc-400 whitespace-nowrap">{exp.dateRange}</time>
          </div>

          <p className="text-sm text-zinc-300">{exp.description}</p>

          <div className="flex flex-wrap gap-1 text-xs text-zinc-400">
            {exp.technologies.map((tech, index) => (
              <span key={tech}>
                {tech}
                {index < exp.technologies.length - 1 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}