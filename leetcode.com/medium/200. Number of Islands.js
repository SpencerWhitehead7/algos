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
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  if (grid.length === 0) return 0
  grid = addEdges(grid)
  let islands = 0
  for (let vert = 1; vert < grid.length - 1; vert++) {
    for (let hori = 1; hori < grid[vert].length - 1; hori++) {
      if (grid[vert][hori] === `1`) {
        islands++
        grid[vert][hori] = `2`
        const queue = [[vert, hori]]
        while (queue.length > 0) {
          const [vert, hori] = queue.shift()
          const neighbors = [[vert - 1, hori], [vert, hori + 1], [vert + 1, hori], [vert, hori - 1]]
          while (neighbors.length > 0) {
            const [vert, hori] = neighbors.shift()
            if (grid[vert][hori] === `1`) {
              grid[vert][hori] = `2`
              queue.push([vert, hori])
            }
          }
        }
      }
    }
  }
  return islands
}

const addEdges = grid => {
  grid.forEach(row => {
    row.unshift(`0`)
    row.push(`0`)
  })
  const caps = new Array(grid[0].length).fill(`0`)
  grid.unshift(caps)
  grid.push(caps)
  return grid
}
