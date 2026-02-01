import "./globals.css";
import { cn } from "@/lib/utils";
import { geistSans } from "@/fonts";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-zinc-900 border-l border-r border-zinc-900 sm:border-zinc-700 max-w-2xl mx-auto",
          geistSans.className
        )}
      >

        <Analytics />
        {children}
      </body>
    </html>
  );
}
