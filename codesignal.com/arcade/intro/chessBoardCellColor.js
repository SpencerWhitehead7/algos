// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.



// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string cell1

// [input] string cell2

// [output] boolean

// true if both cells have the same color, false otherwise.

function chessBoardCellColor(cell1, cell2){
  return checkColor(cell1) === checkColor(cell2)
}

function checkColor(cell){
  return (/[ACEG]+[1357]/.test(cell) || /[BDFH]+[2468]/.test(cell))
}