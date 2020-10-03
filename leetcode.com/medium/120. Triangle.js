// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = triangle => {
  while (triangle.length > 1) {
    const bottomRow = triangle.pop()
    const newBottomRow = triangle[triangle.length - 1]
    newBottomRow.forEach((_, i) => {
      newBottomRow[i] += Math.min(bottomRow[i], bottomRow[i + 1])
    })
  }
  return triangle[0][0]
}
