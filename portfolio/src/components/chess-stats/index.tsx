import { useEffect, useState } from "react"
// @ts-expect-error -- No types found
import ChessWebAPI from 'chess-web-api'
import { BulletChess, BlitzChess, RapidChess } from "../svgs"
import { Skeleton } from "../ui/skeleton"

var chessAPI = new ChessWebAPI()

export default function ChessStats() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [stats, setStats] = useState<{ bullet: number, blitz: number, rapid: number } | null>(null)

  async function getChessStats() {
    setIsLoading(true)
    try {
      const stats = await chessAPI.getPlayerStats('samposwal')

      const body = stats.body
      const bulletRating = body.chess_bullet?.last?.rating || 0
      const blitzRating = body.chess_blitz?.last?.rating || 0
      const rapidRating = body.chess_rapid?.last?.rating || 0

      setStats({ bullet: bulletRating, blitz: blitzRating, rapid: rapidRating })
    } catch (error) {
      console.error(`Error while fetching chess stats: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { getChessStats() }, [])

  const cards = [
    { name: "Bullet", rating: stats?.bullet, Icon: BulletChess },
    { name: "Blitz", rating: stats?.blitz, Icon: BlitzChess },
    { name: "Rapid", rating: stats?.rapid, Icon: RapidChess },
  ]

  if (isLoading) {
    return (
      <div className="flex flex-row gap-2 sm:gap-4 w-full py-4 px-4 sm:px-8">
        {cards.map((card, index) => (
          <div
            key={card.name}
            className={`flex flex-1 items-center gap-x-2 sm:gap-x-4 p-2 sm:p-4 bg-transparent rounded-none hover:bg-zinc-900/40 transition-colors ${index === 0 ? "justify-start" : index === 1 ? "justify-center" : "justify-end"
              }`}
          >
            <div className="flex-shrink-0 fill-zinc-300">
              <card.Icon className="w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <div className="flex flex-col gap-0 sm:gap-y-1">
              <span className="text-[10px] sm:text-sm font-medium text-zinc-400">{card.name}</span>
              <Skeleton className="bg-zinc-800 h-4 sm:h-7 w-10 sm:w-14 rounded-none" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-row gap-2 sm:gap-4 w-full py-4 px-4 sm:px-8">
      {cards.map((card, index) => (
        <div
          key={card.name}
          className={`flex flex-1 items-center gap-x-2 sm:gap-x-4 p-2 sm:p-4 bg-transparent rounded-none hover:bg-zinc-900/40 transition-colors ${index === 0 ? "justify-start" : index === 1 ? "justify-center" : "justify-end"
            }`}
        >
          <div className="flex-shrink-0 fill-zinc-300">
            <card.Icon className="w-7 h-7 sm:w-10 sm:h-10" />
          </div>
          <div className="flex flex-col gap-0 sm:gap-y-1">
            <span className="text-sm sm:text-sm font-medium text-zinc-400">{card.name}</span>
            <span className="text-base sm:text-xl font-bold text-white">
              {isLoading ? "..." : card.rating || "N/A"}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
