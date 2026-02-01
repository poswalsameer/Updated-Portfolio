import { openSource } from "@/constants";

export default function OpenSource() {
  return (
    <div className="flex flex-col gap-y-8">
      {openSource.map((os) => (
        <div className="w-full flex flex-col gap-y-3 sm:gap-y-2">
          <div className="flex items-start justify-between gap-4 ">
            <h3 className="text-base font-medium text-white">
              {os.title}
            </h3>
            <div className="flex gap-x-4 text-xs sm:text-sm text-zinc-400 whitespace-nowrap">
              {os.link && (
                <a href={os.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  View
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-zinc-300">{os.description}</p>

          <div className="flex flex-wrap gap-1 text-xs text-zinc-400">
            {os.technologies.map((tech, index) => (
              <span key={tech}>
                {tech}
                {index < os.technologies.length - 1 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}