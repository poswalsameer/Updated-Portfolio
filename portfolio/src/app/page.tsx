"use client"

import Header from "@/components/header"
import Skills from "@/components/skills"
import Education from "@/components/education"
import PortfolioBody from "@/components/portfolio-body"

export default function Page() {
  return (
    <main className="selection:bg-zinc-300 selection:text-zinc-900 flex flex-col min-h-screen pt-3 sm:pt-10 justify-between">
      <div>
        <Header />
        <PortfolioBody />
        <Skills />
        <Education />
      </div>
    </main>
  )
}
