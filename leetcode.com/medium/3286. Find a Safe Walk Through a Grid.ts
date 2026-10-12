// You are given an m x n binary matrix grid and an integer health.

// You start on the upper-left corner (0, 0) and would like to get to the lower-right corner (m - 1, n - 1).

// You can move up, down, left, or right from one cell to another adjacent cell as long as your health remains positive.

// Cells (i, j) with grid[i][j] = 1 are considered unsafe and reduce your health by 1.

// Return true if you can reach the final cell with a health value of 1 or more, and false otherwise.

// Example 1:

// Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1

// Output: true

// Explanation:

// The final cell can be reached safely by walking along the gray cells below.

// Example 2:

// Input: grid = [[0,1,1,0,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,0,1,0,1,0]], health = 3

// Output: false

// Explanation:

// A minimum of 4 health points is needed to reach the final cell safely.

// Example 3:

// Input: grid = [[1,1,1],[1,0,1],[1,1,1]], health = 5

// Output: true

// Explanation:

// The final cell can be reached safely by walking along the gray cells below.

// Any path that does not go through the cell (1, 1) is unsafe since your health will drop to 0 when reaching the final cell.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// 2 <= m * n
// 1 <= health <= m + n
// grid[i][j] is either 0 or 1.

const findSafeWalk = (grid: number[][], health: number): boolean => {
  const h = grid.length
  const w = grid[0].length

  const costs = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => Infinity),
  )
  costs[0][0] = grid[0][0]

  const stack = [0, 0]
  while (stack.length > 0) {
    const y = stack.pop()!
    const x = stack.pop()!
    const val = grid[y][x]

    const costFromN = costs[y - 1]?.[x] ?? Infinity
    const costFromE = costs[y]?.[x + 1] ?? Infinity
    const costFromS = costs[y + 1]?.[x] ?? Infinity
    const costFromW = costs[y]?.[x - 1] ?? Infinity
    const minCost = Math.min(costFromN, costFromE, costFromS, costFromW)

    costs[y][x] = Math.min(costs[y][x], val + minCost)

    const cost = costs[y][x]
    if (cost < health) {
      const valN = grid[y - 1]?.[x]
      const valE = grid[y]?.[x + 1]
      const valS = grid[y + 1]?.[x]
      const valW = grid[y]?.[x - 1]

      if (valN !== undefined && cost + valN < costFromN) stack.push(x, y - 1)
      if (valE !== undefined && cost + valE < costFromE) stack.push(x + 1, y)
      if (valS !== undefined && cost + valS < costFromS) stack.push(x, y + 1)
      if (valW !== undefined && cost + valW < costFromW) stack.push(x - 1, y)
    }
  }

  return costs[h - 1][w - 1] < health
}
