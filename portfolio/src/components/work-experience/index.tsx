import { experiences } from "@/constants"

export default function WorkExperience() {
  return (
    <div className="w-full flex flex-col gap-y-8">
      {experiences.map((exp) => (
        <div key={exp.company} className="w-full flex flex-col gap-y-3 sm:gap-y-2">
          <div className="flex flex-col gap-y-1 sm:flex-row items-start justify-between gap-4">
            <h3 className="text-base font-medium text-white">
              {exp.title} <span className="text-zinc-400">at <a href={exp.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{exp.company}</a></span>
            </h3>
            <time className="text-xs sm:text-sm text-zinc-400 whitespace-nowrap">{exp.dateRange}</time>
          </div>

          {(exp as { description?: string }).description && (
            <p className="text-sm text-zinc-300">{(exp as { description?: string }).description}</p>
          )}

          {(exp as { points?: string[] }).points && (
            <ul className="list-disc list-outside ml-4 flex flex-col gap-y-1.5 text-sm text-zinc-300 marker:text-zinc-500">
              {((exp as { points?: string[] }).points as string[]).map((point: string) => (
                <li key={point} className="pl-1 leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}