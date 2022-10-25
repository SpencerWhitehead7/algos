// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

// Rows:

// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

// Columns:

// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

// Regions

// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

// Valid board example:

// For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/

function doneOrNot(board) {
  const arr = board.reduce((acc, curr) => (acc = acc.concat(curr)))
  for (let rowI = 0; rowI < 81; rowI += 9) {
    // rows
    if (!val(arr.slice(rowI, rowI + 9))) return `Try again!`
  }
  for (let col = 0; col < 9; col++) {
    // columns
    const tempCol = []
    for (let colI = 0; colI < 81; colI += 9) {
      tempCol.push(arr[col + colI])
    }
    if (!val(tempCol)) return `Try again!`
  }
  for (let box = 0; box < 81; box += 27) {
    // boxes
    const rows = arr.slice(box, box + 27)
    for (let boxI = 0; boxI < 7; boxI += 3) {
      let tempBox = []
      tempBox = tempBox.concat(rows.slice(boxI, boxI + 3))
      tempBox = tempBox.concat(rows.slice(boxI + 9, boxI + 12))
      tempBox = tempBox.concat(rows.slice(boxI + 18, boxI + 21))
      if (!val(tempBox)) return `Try again!`
    }
  }
  return `Finished!`
}

function val(arr) {
  const arrCopy = arr.slice(0)
  arrCopy.sort()
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] !== i + 1) {
      return false
    }
  }
  return true
}
