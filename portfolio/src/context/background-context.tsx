"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type BackgroundId = "default" | "olive" | "black" | "white"

export type BackgroundOption = {
  id: BackgroundId
  name: string
  value: string
  light?: boolean
}

export const BACKGROUND_OPTIONS: BackgroundOption[] = [
  { id: "default", name: "Default", value: "#18181b" },
  { id: "olive", name: "Olive Dark", value: "#1D1D16" },
  { id: "black", name: "Black", value: "#000000" },
  { id: "white", name: "White", value: "#FFFFFF", light: true },
]

type BackgroundContextType = {
  background: BackgroundId
  setBackground: (id: BackgroundId) => void
  backgroundValue: string
  isLight: boolean
  options: BackgroundOption[]
}

const BackgroundContext = createContext<BackgroundContextType | null>(null)

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [background, setBackgroundState] = useState<BackgroundId>("default")

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-bg") as BackgroundId | null
    if (stored && BACKGROUND_OPTIONS.some((o) => o.id === stored)) {
      setBackgroundState(stored)
    }
  }, [])

  const setBackground = (id: BackgroundId) => {
    setBackgroundState(id)
    localStorage.setItem("portfolio-bg", id)
  }

  const current = BACKGROUND_OPTIONS.find((o) => o.id === background) ?? BACKGROUND_OPTIONS[0]
  const isLight = !!current.light
  const backgroundValue = current.value

  // Apply to html/body and toggle light class
  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    html.style.backgroundColor = backgroundValue
    body.style.backgroundColor = backgroundValue

    if (isLight) {
      html.classList.add("light")
    } else {
      html.classList.remove("light")
    }
  }, [backgroundValue, isLight])

  return (
    <BackgroundContext.Provider value={{ background, setBackground, backgroundValue, isLight, options: BACKGROUND_OPTIONS }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  const ctx = useContext(BackgroundContext)
  if (!ctx) throw new Error("useBackground must be used within BackgroundProvider")
  return ctx
}
