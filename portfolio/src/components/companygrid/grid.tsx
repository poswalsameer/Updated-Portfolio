"use client"

import { useState, useEffect } from "react"

export default function PixelGrid() {
  const rows = 8
  const cols = 32
  const [grid, setGrid] = useState<string[][]>([])

  useEffect(() => {
    // Initialize empty grid
    const newGrid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill("white"))

    // Define the wider R pattern (6x5)
    const rPattern = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ]

    // Calculate center position (start from second row)
    const startRow = 1
    const startCol = Math.floor(cols / 2 - Math.floor(rPattern[0].length / 2))

    // Place the R pattern
    rPattern.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 1 && startRow + i < rows - 1 && startCol + j < cols) {
          newGrid[startRow + i][startCol + j] = "#16db65"
        }
      })
    })

    setGrid(newGrid)
  }, [])

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div
        className="grid bg-black"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 20px)`,
          gap: "4px",
        }}
      >
        {grid.map((row, i) =>
          row.map((color, j) => (
            <div
              key={`${i}-${j}`}
              className="aspect-square"
              style={{
                borderRadius: "2px",
                backgroundColor: color,
                width: "20px",
                height: "20px",
              }}
            />
          )),
        )}
      </div>
    // </div>
  )
}