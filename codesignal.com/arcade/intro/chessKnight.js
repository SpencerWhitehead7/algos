// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example

// For cell = "a1", the output should be
// chessKnight(cell) = 2.

// For cell = "c2", the output should be
// chessKnight(cell) = 6.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string cell

// String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

// [output] integer

const chessKnight = (cell) => {
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  }

  let [xCoord, yCoord] = cell.split(``)
  xCoord = map[xCoord]
  yCoord = Number(yCoord)
  const coords = [
    [xCoord + 1, yCoord + 2],
    [xCoord + 2, yCoord + 1],
    [xCoord + 2, yCoord - 1],
    [xCoord + 1, yCoord - 2],
    [xCoord - 1, yCoord - 2],
    [xCoord - 2, yCoord - 1],
    [xCoord - 2, yCoord + 1],
    [xCoord - 1, yCoord + 2],
  ]

  return coords.filter((coordPair) =>
    coordPair.every((coord) => coord > 0 && coord <= 8)
  ).length
}
