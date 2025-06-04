"use client"

import { useState, useEffect } from "react"

// white - #ced4da
// green - #06b84d

export default function PixelGrid() {
  const grid = Array.from({ length: 8 }, (_, rowIndex) => (
    Array.from({ length: 32 }, (_, colIndex) => ({
      id: `${rowIndex}-${colIndex}`,
      row: rowIndex,
      col: colIndex
    }))
  ));

  const createGrid = (rows: number, cols: number) =>
    Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) => ({
        id: `${rowIndex}-${colIndex}`,
        row: rowIndex,
        col: colIndex
      }))
    );

  const greenCells = new Set([
    '1,13', '1,14', '1,15', '1,16', '1,17',
    '2,13', '2,17',
    '3,13', '3,14', '3,15', '3,16', '3,17',
    '4,13', '4,14', '4,15',
    '5,13', '5,16',
    '6,13', '6,17'
  ]);

  const greenCellsSmall = new Set([
    '1,5', '1,6', '1,7', '1,8', '1,9',
    '2,5', '2,9',
    '3,5','3,6', '3,7', '3,8', '3,9',
    '4,5','4,6', '4,7',
    '5,5', '5,8',
    '6,5', '6,9',

  ]);

  return (
    <div className=" ">
      <div className="block sm:hidden w-full">
        <div className="bg-black rounded-lg shadow-lg p-1">
          <div className="w-full">
            <div className="grid gap-[4px]" style={{ gridTemplateRows: 'repeat(8, minmax(0, 1fr))' }}>
              {createGrid(8, 16).map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid gap-[4px]"
                  style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
                >
                  {row.map((cell) => {
                    const cellCoord = `${cell.row},${cell.col}`;
                    const isGreen = greenCellsSmall.has(cellCoord);

                    return (
                      <div
                        key={cell.id}
                        className={`aspect-square ${isGreen ? 'bg-[#06b84d]' : 'bg-[#ced4da]'} transition-colors duration-200 rounded-[2px] flex items-center justify-center`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block bg-transparent">
        <div className="max-w-[1600px] rounded-md shadow-lg">
          <div className="grid gap-1" style={{ gridTemplateRows: 'repeat(8, minmax(0, 1fr))' }}>
            {createGrid(8, 31).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-[10px] sm:gap-[18px] md:gap-5 lg:gap-6"
                style={{ gridTemplateColumns: 'repeat(31, minmax(0, 1fr))' }}
              >
                {row.map((cell) => {
                  const cellCoord = `${cell.row},${cell.col}`;
                  const isGreen = greenCells.has(cellCoord);

                  return (
                    <div
                      key={cell.id}
                      className={`h-[7px] w-[7px] sm:h-[14px] sm:w-[14px] md:h-4 md:w-4 lg:h-5 lg:w-5 ${isGreen ? 'bg-green-500' : 'bg-zinc-700/50 border border-zinc-700/30'} transition-colors duration-200 rounded-[1px] sm:rounded-[2px] md:rounded-[3px] lg:rounded-[3px] flex items-center justify-center text-xs `}
                    >
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}