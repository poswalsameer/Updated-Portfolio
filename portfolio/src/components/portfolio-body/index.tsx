import { useState } from "react"
import Gallery from "../gallery"
import ChessStats from "../chess-stats"
import BlurFade from "../magicui/blur-fade"
import { blurFadeDelay } from "@/constants"
import Projects from "@/components/projects"
import OpenSource from "@/components/open-source"
import WorkExperience from "@/components/work-experience"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Briefcase, Laptop, GitPullRequest, Gallery as GalleryIcon, ChessPawn } from "../svgs"

const tabsConfig = [
  { id: "experience", label: "Work Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Laptop },
  { id: "oss", label: "Open Source", icon: GitPullRequest },
  { id: "gallery", label: "Gallery", icon: GalleryIcon },
  { id: "chess", label: "Chess", icon: ChessPawn },
]

export default function PortfolioBody() {
  const [tab, setTab] = useState<string>("experience")

  return (
    <BlurFade delay={blurFadeDelay * 8} className="w-full flex max-w-2xl py-6 border-b border-zinc-700">
      <TooltipProvider delayDuration={100}>
        <Tabs defaultValue={tab} onValueChange={setTab} className="flex flex-col gap-y-4 w-full">
          <TabsList className="bg-transparent px-3 flex gap-x-1 sm:gap-x-3 justify-start">
            {tabsConfig.map((t) => {
              const Icon = t.icon
              return (
                <Tooltip key={t.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger
                      value={t.id}
                      className="flex items-center justify-center h-8 px-3 data-[state=active]:text-white text-zinc-400 data-[state=active]:bg-zinc-900 data-[state=active]:underline data-[state=active]:underline-offset-2"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <Icon />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="border border-zinc-700 bg-zinc-900 text-zinc-100 rounded-none text-sm px-2 py-1"
                  >
                    {t.label}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TabsList>

          <div className="w-full max-w-2xl border-t border-zinc-700 px-6 pt-6">
            {tab === "experience" && <WorkExperience />}
            {tab === "projects" && <Projects />}
            {tab === "oss" && <OpenSource />}
            {tab === "gallery" && <Gallery />}
            {tab === "chess" && <ChessStats />}
          </div>
        </Tabs>
      </TooltipProvider>
    </BlurFade>
  )
}