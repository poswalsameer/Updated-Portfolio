import BlurFade from "../magicui/blur-fade"
import { blurFadeDelay, education } from "@/constants"

export default function Education() {
  return (
    <div className="flex flex-col justify-center gap-y-3 px-6 py-6" id="education">
      <BlurFade delay={blurFadeDelay * 10}>
        <h2 className="text-xl font-medium text-white">Education</h2>
      </BlurFade>
      <BlurFade
        delay={blurFadeDelay * 8}
      >
        <div className="flex flex-col gap-y-6">
          {education.map((edu) => (
            <div className="w-full flex flex-col gap-y-3 sm:gap-y-2">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
                <h3 className="text-base font-medium text-white">
                  {edu.title}
                </h3>
                <time className="text-sm text-zinc-400 whitespace-nowrap">{edu.dateRange}</time>
              </div>

              <p className="text-sm text-zinc-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>


  )
}