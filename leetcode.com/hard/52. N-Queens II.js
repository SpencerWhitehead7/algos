// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example 1:

// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 9

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
  let solutionCount = 0

  const board = new Array(n).fill().map((_) => new Array(n).fill(0))

  const recurse = (nRemaining, startingRI) => {
    if (nRemaining === 0) {
      solutionCount++
      return
    }

    for (let ri = startingRI; ri < n; ri++) {
      for (let ci = 0; ci < n; ci++) {
        if (board[ri][ci] === 0) {
          addQ(n, board, ri, ci)
          recurse(nRemaining - 1, ri + 1)
          remQ(n, board, ri, ci)
        }
      }
    }
  }

  recurse(n, 0)

  return solutionCount
}

const updateBoard = (updateVal) => (n, board, ri, ci) => {
  // horizontal and vertical
  for (let i = 0; i < n; i++) {
    board[ri][i] += updateVal
    board[i][ci] += updateVal
  }

  // diagonals
  let dRI = ri
  let dCI = ci
  // upper-left
  while (dRI >= 0 && dCI >= 0) {
    board[dRI][dCI] += updateVal
    dRI--
    dCI--
  }
  dRI = ri
  dCI = ci
  // upper-right
  while (dRI >= 0 && dCI < n) {
    board[dRI][dCI] += updateVal
    dRI--
    dCI++
  }
  dRI = ri
  dCI = ci
  // lower-left
  while (dRI < n && dCI >= 0) {
    board[dRI][dCI] += updateVal
    dRI++
    dCI--
  }
  dRI = ri
  dCI = ci
  // lower-right
  while (dRI < n && dCI < n) {
    board[dRI][dCI] += updateVal
    dRI++
    dCI++
  }
}

const addQ = updateBoard(1)
const remQ = updateBoard(-1)

console.log("1: 1:", totalNQueens(1))
console.log("1: 0:", totalNQueens(2))
console.log("1: 0:", totalNQueens(3))
console.log("1: 2:", totalNQueens(4))
console.log("1: 10:", totalNQueens(5))
console.log("1: 4:", totalNQueens(6))
console.log("1: 40:", totalNQueens(7))
console.log("1: 92:", totalNQueens(8))
console.log("1: 352:", totalNQueens(9))
