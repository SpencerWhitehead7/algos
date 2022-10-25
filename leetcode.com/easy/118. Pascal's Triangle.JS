// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (numRows === 0) return []
  const res = []
  for (let row = 0; row < numRows; row++) {
    const nextRow = res.length ? res[res.length - 1].map((a) => a) : []
    nextRow.push(1)
    for (let i = nextRow.length - 2; i > 0; i--) {
      nextRow[i] = nextRow[i - 1] + nextRow[i]
    }
    res.push(nextRow)
  }
  return res
}
