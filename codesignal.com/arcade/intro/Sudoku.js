// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example

// For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer grid

// A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

// [output] boolean

// true if the given grid represents a correct solution to Sudoku, false otherwise.

// Man, I have done this so many times

const sudoku = grid => {
  if(!grid.every(row => val(row))) return false
  for(let col = 0; col < 9; col++){
    const tempCol = []
    for(let row = 0; row < 9; row++){
      tempCol.push(grid[row][col])
    }
    if(!val(tempCol)) return false
  }
  for(let boxRow = 0; boxRow < 7; boxRow += 3){
    const rows = grid.slice(boxRow, boxRow + 3)
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

const val = arr => {
  const arrCopy = arr.slice(0)
  arrCopy.sort()
  for(let i = 0; i < arrCopy.length; i++){
    if(arrCopy[i] !== i + 1){
      return false
    }
  }
  return true
}
