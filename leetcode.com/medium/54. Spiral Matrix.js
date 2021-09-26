// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrderMut = matrix => {
  const sorted = []
  while (matrix.length) {
    sorted.push(...matrix.shift())
    for (let i = 0; i < matrix.length; i++) {
      const next = matrix[i].pop()
      if (next !== undefined) sorted.push(next)
    }
    sorted.push(...(matrix.pop() ?? []).reverse())
    for (let i = matrix.length - 1; i >= 0; i--) {
      const next = matrix[i].shift()
      if (next !== undefined) sorted.push(next)
    }
  }
  return sorted
}

const spiralOrder = matrix => {
  const res = []

  const length = matrix.length
  const width = matrix[0].length
  const seen = new Array(length).fill(null).map(_ => new Array(width).fill(false))
  const layerConstraint = Math.ceil(Math.min(length, width) / 2)

  for (let layer = 0; layer < layerConstraint; layer++) {
    for (let topI = layer; topI < width - layer - 1; topI++) {
      seen[layer][topI] = true
      res.push(matrix[layer][topI])
    }
    for (let rightI = layer; rightI < length - 1 - layer; rightI++) {
      seen[rightI][width - 1 - layer] = true
      res.push(matrix[rightI][width - 1 - layer])
    }
    for (let bottomI = width - 1 - layer; bottomI >= layer; bottomI--) {
      if (!seen[length - 1 - layer][bottomI]) {
        seen[length - 1 - layer][bottomI] = true
        res.push(matrix[length - 1 - layer][bottomI])
      }
    }
    for (let leftI = length - 1 - 1 - layer; leftI >= layer + 1; leftI--) {
      if (!seen[leftI][layer]) {
        seen[leftI][layer] = true
        res.push(matrix[leftI][layer])
      }
    }
  }

  return res
}

module.exports = {
  spiralOrderMut,
  spiralOrder,
}
