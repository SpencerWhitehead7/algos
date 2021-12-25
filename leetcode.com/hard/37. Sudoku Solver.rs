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

impl Solution {
  fn is_valid_guess(board: &Vec<Vec<char>>, candidate: char, row_i: usize, col_i: usize) -> bool {
    for i in 0..9 {
      if board[row_i][i] == candidate {
        return false;
      }
      if board[i][col_i] == candidate {
        return false;
      }
      if board[row_i / 3 * 3 + i / 3][col_i / 3 * 3 + i % 3] == candidate {
        return false;
      }
    }
    true
  }

  fn helper(board: &mut Vec<Vec<char>>, n: usize) -> bool {
    if n == 81 {
      return true;
    }

    let (row_i, col_i) = (n / 9, n % 9);

    if board[row_i][col_i] != '.' {
      return Self::helper(board, n + 1);
    }

    for candidate in 1..10 {
      let candidateStr = std::char::from_digit(candidate, 10).unwrap();
      if Self::is_valid_guess(board, candidateStr, row_i, col_i) {
        board[row_i][col_i] = candidateStr;
        let is_done = Self::helper(board, n + 1);
        if is_done {
          return true;
        }
        board[row_i][col_i] = '.'
      }
    }
    return false;
  }

  pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
    Self::helper(board, 0);
  }
}
