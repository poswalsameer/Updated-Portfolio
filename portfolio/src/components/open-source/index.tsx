import { openSource } from "@/constants";

export default function OpenSource() {
  return (
    <div className="flex flex-col gap-y-8">
      {openSource.map((project) => (
        <div key={project.title} className="w-full flex flex-col gap-y-3 sm:gap-y-2">
          <h3 className="text-base font-medium text-white">
            {project.title}
          </h3>

          <ul className="list-disc list-outside ml-4 flex flex-col gap-y-2 text-sm text-zinc-300 marker:text-zinc-500">
            {project.contributions.map((contribution) => (
              <li key={contribution.link} className="pl-1">
                <div className="flex items-start justify-between gap-4">
                  <span className="leading-relaxed">{contribution.description}</span>
                  <a
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-zinc-400 underline underline-offset-2 whitespace-nowrap shrink-0"
                  >
                    View
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
