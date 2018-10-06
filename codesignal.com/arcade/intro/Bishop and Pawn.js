// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


// Example

// For bishop = "a1" and pawn = "c3", the output should be
// bishopAndPawn(bishop, pawn) = true.



// For bishop = "h1" and pawn = "h3", the output should be
// bishopAndPawn(bishop, pawn) = false.



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string bishop

// Coordinates of the white bishop in the chess notation.

// [input] string pawn

// Coordinates of the black pawn in the same notation.

// [output] boolean

// true if the bishop can capture the pawn, false otherwise.

const bishopAndPawn = (bishop, pawn) => {
  const [bishopX, bishopY] = bishop.split(``)
  const [pawnX, pawnY] = pawn.split(``)
  const distanceY = pawnY - bishopY
  const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`]
  const startingPoint = letters.indexOf(bishopX)
  if(`${letters[startingPoint + distanceY]}${pawnY}` === pawn || `${letters[startingPoint - distanceY]}${pawnY}` === pawn){
    return true
  }else{
    return false
  }
}
