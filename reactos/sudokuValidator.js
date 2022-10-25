// Prompt
// Write a function that determines if a Sudoku solution is valid. Your input will be a 2-D array that represents a 9x9 matrix. Sudoku has three rules:

// Every row must contain the numbers from 1-9 (no repeats)
// Every column must also contain every number from 1-9
// Every 3x3 subgroup/square must contain each number from 1-9
// Representing the Data
// Your input is a 2-D array that represents a 9x9 matrix. For example:

// var solution = [
//   [5,3,4,6,7,8,9,1,2],
//   [6,7,2,1,9,5,3,4,8],
//   [1,9,8,3,4,2,5,6,7],
//   [8,5,9,7,6,1,4,2,3],
//   [4,2,6,8,5,3,7,9,1],
//   [7,1,3,9,2,4,8,5,6],
//   [9,6,1,5,3,7,2,8,4],
//   [2,8,7,4,1,9,6,3,5],
//   [3,4,5,2,8,6,1,7,9]
// ];
// Examples
console.log(
  sudokuValidator([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
) // true
console.log(
  sudokuValidator([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
  ])
) // false

// Used across my solutions

const isValidUnit = (items) =>
  items.sort().filter((val, index) => val === index + 1).length === 9

// my original solution

const sudokuChecker = (board) => {
  if (!board.every((row) => isValidUnit([...row]))) return false

  for (let colI = 0; colI < 9; colI++) {
    const col = []
    for (let rowI = 0; rowI < 9; rowI++) {
      col.push(board[rowI][colI])
    }
    if (!isValidUnit(col)) return false
  }

  for (let boxVI = 0; boxVI < 9; boxVI += 3) {
    for (let boxHI = 0; boxHI < 9; boxHI += 3) {
      const box = []
      for (let boxRow = boxVI; boxRow < boxVI + 3; boxRow++) {
        box.push(...board[boxRow].slice(boxHI, boxHI + 3))
      }
      if (!isValidUnit(box)) return false
    }
  }

  return true
}

// solution based off Ian's single string idea

const singleCheck = (board) => {
  const flatBoard = board.reduce((acc, curr) => acc.concat(curr))

  for (let rowOffset = 0; rowOffset < 81; rowOffset += 9) {
    if (!isValidUnit(flatBoard.slice(rowOffset, rowOffset + 9))) return false
  }

  for (let colOffset = 0; colOffset < 9; colOffset++) {
    const col = []
    for (let colI = 0; colI < 81; colI += 9) {
      col.push(flatBoard[colOffset + colI])
    }
    if (!isValidUnit(col)) return false
  }

  for (let boxVOffset = 0; boxVOffset < 81; boxVOffset += 27) {
    for (let boxHOffset = 0; boxHOffset < 9; boxHOffset += 3) {
      const box = []
      for (let boxColI = 0; boxColI < 27; boxColI += 9) {
        for (let boxRowI = 0; boxRowI < 3; boxRowI++) {
          box.push(flatBoard[boxVOffset + boxHOffset + boxColI + boxRowI])
        }
      }
      if (!isValidUnit(box)) return false
    }
  }

  return true
}

// "offical" reacto solution

const sudokuValidator = (solution) => {
  const check = (arr) =>
    arr.sort().filter((val, index) => val === index + 1).length === 9

  for (let i = 0; i < 9; i++) {
    const col = []
    const row = []
    const square = []
    for (let j = 0; j < 9; j++) {
      col.push(solution[j][i])
      row.push(solution[i][j])
      square.push(
        solution[Math.floor(j / 3) + (i % 3) * 3][
          (j % 3) + Math.floor(i / 3) * 3
        ]
      )
    }

    if (!check(col) || !check(row) || !check(square)) return false
  }
  return true
}

module.exports = sudokuValidator
