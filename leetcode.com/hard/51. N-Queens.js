// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

// Constraints:

// 1 <= n <= 9

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  const solutions = []

  const qLocs = new Array(n).fill().map((_) => new Array(n).fill("."))
  const board = new Array(n).fill().map((_) => new Array(n).fill(0))

  const recurse = (nRemaining, startingRI) => {
    if (nRemaining === 0) {
      solutions.push(qLocs.map((row) => row.join("")))
      return
    }

    for (let ri = startingRI; ri < n; ri++) {
      for (let ci = 0; ci < n; ci++) {
        if (board[ri][ci] === 0) {
          addQ(n, board, ri, ci)
          qLocs[ri][ci] = "Q"
          recurse(nRemaining - 1, ri + 1)
          qLocs[ri][ci] = "."
          remQ(n, board, ri, ci)
        }
      }
    }
  }

  recurse(n, 0)

  return solutions
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
