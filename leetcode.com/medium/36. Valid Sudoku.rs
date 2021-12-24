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

use std::collections::HashSet;

impl Solution {
  pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {  
    for i in 0..9 {
      let mut row = vec!['.'; 9];
      let mut col = vec!['.'; 9];
      let mut boxx = vec!['.'; 9];
      
      for j in 0..9 {
        row[j] = board[i][j];
        col[j] = board[j][i];
        boxx[j] = board[i / 3 * 3 + j / 3][i % 3 * 3 + j % 3];
      }
      if !Self::is_valid_unit(row) || !Self::is_valid_unit(col) || !Self::is_valid_unit(boxx) {
        return false;
      }
    }

    true
  }

  fn is_valid_unit(items: Vec<char>) -> bool {
    let mut values = HashSet::new();
    for item in items {
      if item != '.' && !values.insert(item) {
        return false;
      }
    }
    true
  }
}