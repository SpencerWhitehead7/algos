// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const rowsCount = board.length
  const colsCount = board[0].length

  const search = (row, col, i) => {
    const letter = board[row][col]
    if (word[i] !== letter) return false
    if (i === word.length - 1) return true

    board[row][col] = `*`

    const searchResult = [
      [row - 1, col],
      [row, col + 1],
      [row + 1, col],
      [row, col - 1],
    ]
      .reduce((result, [row, col]) => result || (row >= 0 && row < rowsCount && col >= 0 && col < colsCount && word[i] === letter && search(row, col, i + 1)), false)

    board[row][col] = letter
    return searchResult
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < colsCount; col++) {
      if (search(row, col, 0)) return true
    }
  }

  return false
}
