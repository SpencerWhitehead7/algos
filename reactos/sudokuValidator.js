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
console.log(sudokuValidator([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
])) // true
console.log(sudokuValidator([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5],
])) // false

// Used across both my solutions

const val = arr => {
  const arrCopy = arr.slice(0)
  arrCopy.sort()
  for(let i=0; i < arrCopy.length; i++){
    if(arrCopy[i] !== i + 1){
      return false
    }
  }
  return true
}

// my original solution

const sudokuChecker = board => {
  if(!board.every(row => val(row))) return false
  for(let col = 0; col < 9; col++){
    const tempCol = []
    for(let row = 0; row < 9; row++){
      tempCol.push(board[row][col])
    }
    if(!val(tempCol)) return false
  }
  for(let boxRow = 0; boxRow < 7; boxRow += 3){
    const rows = board.slice(boxRow, boxRow + 3)
    for(let boxCol = 0; boxCol < 7; boxCol += 3){
      let tempBox = []
      rows.forEach(row => {
        tempBox = tempBox.concat(row.slice(boxCol, boxCol + 3))
      })
      if(!val(tempBox)) return false
    }
  }
  return true
}

// solution based off Ian's single string idea

const singleCheck = board => {
  const arr = board.reduce((acc, curr) => acc = acc.concat(curr))
  for(let rowI = 0; rowI < 81; rowI += 9){ // rows
    if(!val(arr.slice(rowI, rowI + 9))) return false
  }
  for(let col = 0; col < 9; col++){ // columns
    const tempCol = []
    for(let colI = 0; colI < 81; colI += 9){
      tempCol.push(arr[col + colI])
    }
    if(!val(tempCol)) return false
  }
  for(let box = 0; box < 81; box += 27){ // boxes
    const rows = arr.slice(box, box + 27)
    for(let boxI = 0; boxI < 7; boxI += 3){
      let tempBox = []
      tempBox = tempBox.concat(rows.slice(boxI, boxI + 3))
      tempBox = tempBox.concat(rows.slice(boxI + 9, boxI + 12))
      tempBox = tempBox.concat(rows.slice(boxI + 18, boxI + 21))
      if(!val(tempBox)) return false
    }
  }
  return true
}

// "offical" reacto solution

function sudokuValidator(solution){
  function check(arr){
    return arr.sort()
      .filter((val, index) => {
        return val===index+1
      })
      .length===9
  }

  for(let i=0;i<9;i++){
    const col=[ ]
    const row=[ ]
    const square=[ ]
    for(let j=0;j<9;j++){
      col.push(solution[j][i])
      row.push(solution[i][j])
      square.push(solution[Math.floor(j/3)+((i%3)*3)][j%3+(Math.floor(i/3)*3)])
    }

    if(!check(col) || !check(row) || !check(square)) return false
  }
  return true
}


module.exports = sudokuValidator
