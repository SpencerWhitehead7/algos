// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  if (!grid.length) return 0

  const rowsLength = grid.length
  const colsLength = grid[0].length

  let countIslands = 0
  for (let row = 0; row < rowsLength; row++) {
    for (let col = 0; col < colsLength; col++) {
      if (grid[row][col] === `1`) {
        countIslands++
        grid[row][col] = `2`
        const cellsToExplore = [{ row, col }]
        while (cellsToExplore.length) {
          const { row, col } = cellsToExplore.pop()
          const landNeighbors = [
            { row: row - 1, col },
            { row, col: col + 1 },
            { row: row + 1, col },
            { row, col: col - 1 },
          ]
            .filter(
              ({ row, col }) =>
                row >= 0 && row < rowsLength && col >= 0 && col < colsLength
            )
            .filter(({ row, col }) => grid[row][col] === `1`)

          landNeighbors.forEach(({ row, col }) => {
            grid[row][col] = `2`
          })

          cellsToExplore.push(...landNeighbors)
        }
      }
    }
  }

  return countIslands
}
