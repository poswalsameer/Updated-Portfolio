
import { useState } from "react"
import Gallery from "../gallery"
import BlurFade from "../magicui/blur-fade"
import { blurFadeDelay } from "@/constants"
import Projects from "@/components/projects"
import OpenSource from "@/components/open-source"
import WorkExperience from "@/components/work-experience"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioBody() {
  const [tab, setTab] = useState<string>("experience")

  return (
    <BlurFade delay={blurFadeDelay * 8} className="w-full flex max-w-2xl py-6 border-b border-zinc-700">
      <Tabs defaultValue={tab} onValueChange={setTab} className="flex flex-col px-6 gap-y-4 w-full">
        <TabsList className="bg-transparent p-0 flex gap-x-3 sm:gap-x-4 justify-start">
          <TabsTrigger value="experience" className="p-0 data-[state=active]:text-white text-zinc-400 text-xs sm:text-base data-[state=active]:bg-zinc-900 data-[state=active]:underline data-[state=active]:underline-offset-2">Work Experience</TabsTrigger>
          <TabsTrigger value="projects" className="p-0 data-[state=active]:text-white text-zinc-400 text-xs sm:text-base data-[state=active]:bg-zinc-900 data-[state=active]:underline data-[state=active]:underline-offset-2">Projects</TabsTrigger>
          <TabsTrigger value="oss" className="p-0 data-[state=active]:text-white text-zinc-400 text-xs sm:text-base data-[state=active]:bg-zinc-900 data-[state=active]:underline data-[state=active]:underline-offset-2">Open Source</TabsTrigger>
          <TabsTrigger value="gallery" className="p-0 data-[state=active]:text-white text-zinc-400 text-xs sm:text-base data-[state=active]:bg-zinc-900 data-[state=active]:underline data-[state=active]:underline-offset-2">Gallery</TabsTrigger>
        </TabsList>

        {tab === "experience" && <WorkExperience />}
        {tab === "projects" && <Projects />}
        {tab === "oss" && <OpenSource />}
        {tab === "gallery" && <Gallery />}
      </Tabs>
    </BlurFade>
  )
}