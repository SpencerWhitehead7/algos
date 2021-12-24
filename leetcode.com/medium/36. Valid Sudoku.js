// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:


// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  for (let i = 0; i < 9; i++) {
    const row = Array(9)
    const col = Array(9)
    const box = Array(9)

    for (let j = 0; j < 9; j++) {
      row[j] = board[i][j]
      col[j] = board[j][i]
      // eslint-disable-next-line no-extra-parens
      box[j] = board[(i - (i % 3)) + Math.floor(j / 3)][(3 * (i % 3)) + (j % 3)]
    }

    if (!isValidUnit(row) || !isValidUnit(col) || !isValidUnit(box)) return false
  }
  return true
}

const isValidUnit = items => {
  const set = new Set()
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item !== `.` && set.has(item)) {
      return false
    } else {
      set.add(item)
    }
  }
  return true
}
