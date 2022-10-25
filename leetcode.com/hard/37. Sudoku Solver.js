// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Example 1:

// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  const helper = (board, n = 0) => {
    if (n === 81) return true

    const colI = n % 9
    const rowI = (n - colI) / 9

    if (board[rowI][colI] !== `.`) return helper(board, n + 1)

    for (let candidate = 1; candidate < 10; candidate++) {
      const candidateStr = String(candidate)
      if (isValidGuess(board, candidateStr, rowI, colI)) {
        board[rowI][colI] = candidateStr
        const isDone = helper(board, n + 1)
        if (isDone) return true
        board[rowI][colI] = `.`
      }
    }
    return false
  }

  helper(board)
}

const isValidGuess = (board, candidate, rowI, colI) => {
  for (let i = 0; i < 9; i++) {
    if (board[rowI][i] === candidate) return false
    if (board[i][colI] === candidate) return false
    if (
      board[3 * Math.floor(rowI / 3) + Math.floor(i / 3)][
        3 * Math.floor(colI / 3) + (i % 3)
      ] === candidate
    )
      return false
  }
  return true
}
