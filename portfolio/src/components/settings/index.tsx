"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Settings, Check } from "lucide-react"
import { useBackground, BACKGROUND_OPTIONS, BackgroundId } from "@/context/background-context"
import { cn } from "@/lib/utils"

type SettingsProps = {
  variant?: "mobile" | "desktop"
  className?: string
}

export default function SettingsButton({ variant = "desktop", className }: SettingsProps) {
  const [open, setOpen] = useState(false)
  const { background, setBackground, isLight } = useBackground()
  const containerRef = useRef<HTMLDivElement>(null)

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [open])

  const isDesktop = variant === "desktop"

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-flex", className)}
    >
      <button
        aria-label="Open settings"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center justify-center border-0 bg-transparent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 rounded-none",
          isDesktop
            ? "h-10 w-10 text-white/70 hover:text-white"
            : "h-8 w-8 text-white/70 hover:text-white",
          isLight && isDesktop && "text-black/60 hover:text-black",
          isLight && !isDesktop && "text-black/60 hover:text-black",
        )}
      >
        <Settings className={cn("h-[18px] w-[18px] transition-transform duration-700 ease-in-out", open && "rotate-90")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: isDesktop ? 6 : -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isDesktop ? 6 : -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={cn(
              "absolute z-20 flex gap-2 border shadow-lg p-2 rounded-none",
              isDesktop ? "bottom-full mb-2 right-0" : "top-full mt-2 right-0",
              isLight ? "bg-white border-zinc-200" : "bg-zinc-900 border-zinc-700"
            )}
          >
            {BACKGROUND_OPTIONS.map((opt) => {
              const isActive = background === opt.id
              return (
                <button
                  key={opt.id}
                  aria-label={opt.name}
                  onClick={() => setBackground(opt.id as BackgroundId)}
                  className={cn("h-7 w-7 border flex items-center justify-center transition-none rounded-none")}
                  style={{
                    backgroundColor: opt.value,
                    borderColor: isActive
                      ? isLight
                        ? "#000"
                        : "#fff"
                      : opt.id === "white"
                        ? "#e4e4e7"
                        : opt.id === "default"
                          ? "#3f3f46"
                          : "rgba(63,63,70,0.6)",
                  }}
                >
                  {isActive && (
                    <Check className="h-4 w-4" style={{ color: opt.light ? "#000" : "#fff" }} />
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SettingsDesktop() {
  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-50">
      <SettingsButton variant="desktop" />
    </div>
  )
}

export function SettingsMobile() {
  return (
    <div className="flex sm:hidden">
      <SettingsButton variant="mobile" />
    </div>
  )
}
