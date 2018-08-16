// Write a function that can solve sudoku puzzles

const sudokuValidator = require(`../reactos/sudokuValidator`)

const sudokuSolver = board => {
  if(sudokuValidator(board)) return `Board Complete! ${board}`
  const cols = []
  const boxes = []
  const boxRows = []
  const boxCols = []
  for(let i=0;i<9;i++){
    const col=[ ]
    const box=[ ]
    for(let j=0;j<9;j++){
      col.push(board[j][i])
      box.push(board[Math.floor(j/3)+((i%3)*3)][j%3+(Math.floor(i/3)*3)])
    }
    cols.push(col)
    boxes.push(box)
  }
  for(let i=0; i<9; i+=3){
    boxRows.push(boxes.slice(i, i+3))
  }
  for(let i=0; i<3; i++){
    boxCols.push([boxes[i], boxes[i+3], boxes[i+6]])
  }
  board.forEach(row => {
    row = missingOne(row)
  })
  cols.forEach(col => {
    col = missingOne(col)
  })
  boxes.forEach(box => {
    box = missingOne(box)
  })
}

const missingOne = unit => {
  const filtered = unit.filter(ele => ele !== 0)
  // if(filtered.length === 8){
  //   if(!filtered.includes(1)){ 2 3 4 etc
  //     return unit.splice(take out indexof 0, add missingno, )
  //   }
  // }else{
  //   return unit
  // }
}

const sudokuSolver2 = board => {
  if(sudokuValidator(board)) return `Board Complete! ${board}`
  const cells = {}
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      cells[`${j},${i}`] = board[j][i]
    }
  }
  const cellsArr = object.keys(cells)
  cellsArr.forEach(cell => {

  })
}
