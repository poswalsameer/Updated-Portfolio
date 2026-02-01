import { Badge } from "../ui/badge";
import BlurFade from "../magicui/blur-fade";
import { blurFadeDelay, skills } from "@/constants";

export default function Skills() {
  return (
    <div className="flex flex-col px-6 py-6 gap-y-4 border-b border-zinc-700" id="skills">
      <BlurFade delay={blurFadeDelay * 9}>
        <h2 className="text-xl font-medium text-white">Skills</h2>
      </BlurFade>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, id) => (
          <BlurFade key={skill} delay={blurFadeDelay * 10 + id * 0.05}>
            <Badge className="bg-zinc-400/15 font-medium text-sm text-white rounded-none py-1 hover:bg-zinc-400/20 cursor-pointer" key={skill}>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </div>
  )
}