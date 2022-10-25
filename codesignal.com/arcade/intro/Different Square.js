// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer matrix

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 100,
// 1 ≤ matrix[i].length ≤ 100,
// 0 ≤ matrix[i][j] ≤ 9.

// [output] integer

// The number of different 2 × 2 squares in matrix.

const differentSquaresSlow = (matrix) => {
  const res = []
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      const square = []
      square.push(matrix[i][j])
      square.push(matrix[i][j + 1])
      square.push(matrix[i + 1][j])
      square.push(matrix[i + 1][j + 1])
      res.push(square)
    }
  }
  if (res.length === 0) {
    return 0
  } else {
    res.sort()
    const dedupedRes = [res[0]]
    res.forEach((square) => {
      if (
        !square.every((ele, i) => ele === dedupedRes[dedupedRes.length - 1][i])
      ) {
        dedupedRes.push(square)
      }
    })
    return dedupedRes.length
  }
}

// O(nlog(n))

const differentSquares = (matrix) => {
  const res = new Set()
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      let square = ``
      square += matrix[i][j]
      square += matrix[i][j + 1]
      square += matrix[i + 1][j]
      square += matrix[i + 1][j + 1]
      res.add(square)
    }
  }
  return res.size
}

// O(n)
