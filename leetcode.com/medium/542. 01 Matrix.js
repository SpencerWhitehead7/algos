// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.
// Example 1:
// Input:

// 0 0 0
// 0 1 0
// 0 0 0
// Output:
// 0 0 0
// 0 1 0
// 0 0 0
// Example 2:
// Input:

// 0 0 0
// 0 1 0
// 1 1 1
// Output:
// 0 0 0
// 0 1 0
// 1 2 1
// Note:
// The number of elements of the given matrix will not exceed 10,000.
// There are at least one 0 in the given matrix.
// The cells are adjacent in only four directions: up, down, left and right.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = (matrix) => {
  const res = new Array(matrix.length)
  for (let i = 0; i < res.length; i++) {
    res[i] = []
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        res[row][col] = 0
      } else {
        let queue = [[row, col]]
        const closestZero = []
        while (queue.length) {
          const [row, col] = queue.shift()
          const neighboringCoords = generateNeighboringCoords([row, col])
          for (let i = 0; i < neighboringCoords.length; i++) {
            const [row, col] = neighboringCoords[i]
            if (matrix[row] && matrix[row][col] === 0) {
              queue = []
              closestZero.push(row)
              closestZero.push(col)
              break
            } else {
              queue.push([row, col])
            }
          }
        }
        res[row][col] =
          Math.abs(row - closestZero[0]) + Math.abs(col - closestZero[1])
      }
    }
  }
  return res
}

const generateNeighboringCoords = (coords) => {
  const [row, col] = coords
  return [
    [row - 1, col],
    [row, col + 1],
    [row + 1, col],
    [row, col - 1],
  ]
}
