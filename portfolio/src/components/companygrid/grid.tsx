"use client"

import { useState, useEffect } from "react"

export default function PixelGrid() {
  const rows = 8
  const [grid, setGrid] = useState<string[][]>([])

  // Calculate the number of columns based on screen width
  const calculateCols = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      // Adjust the number of columns based on screen width
      if (screenWidth < 375) return 10;
      if (screenWidth < 640) return 16;
      return 32;
    }
    return 32; // Default value if window is not defined
  };

  const [cols, setCols] = useState(calculateCols());

  useEffect(() => {
    const handleResize = () => {
      setCols(calculateCols());
    };

    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    // Initialize empty grid
    const newGrid = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill("#ced4da"))

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
          newGrid[startRow + i][startCol + j] = "#06b84d"
        }
      })
    })

    setGrid(newGrid)
  }, [cols]);

  return (
    <div
      className="grid bg-black max-w-[1280px] aspect-[4/1]"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 5vw))`, // Adjusted to decrease size with screen width
        gap: "4px",
      }}
    >
      {grid.map((row, i) =>
        row.map((color, j) => (
          <div
            key={`${i}-${j}`}
            className="aspect-square"
            style={{
              borderRadius: typeof window !== "undefined" ? (window.innerWidth < 640 ? "1px" : window.innerWidth < 1024 ? "2px" : "1.8px") : "1px",
              backgroundColor: color,
            }}
          />
        )),
      )}
    </div>
  )
}