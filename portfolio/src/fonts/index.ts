import { Schibsted_Grotesk } from "next/font/google"

export const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

// Aliases for backwards compatibility - all point to Schibsted Grotesk
export const manrope = schibstedGrotesk
export const jetbrainsMono = schibstedGrotesk
export const outfit = schibstedGrotesk
export const dmSans = schibstedGrotesk

// Re-export as geist for compatibility if imported elsewhere
export const geistMono = schibstedGrotesk
export const geistSans = schibstedGrotesk