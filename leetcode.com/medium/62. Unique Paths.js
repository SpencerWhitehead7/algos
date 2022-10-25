// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
// Example 3:

// Input: m = 7, n = 3
// Output: 28
// Example 4:

// Input: m = 3, n = 3
// Output: 6

// Constraints:

// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 109.

/**
 * @param {number} h
 * @param {number} w
 * @return {number}
 */
const uniquePathsIter = (w, h) => {
  const row = new Array(w).fill(1)
  for (let rowI = 1; rowI < h; rowI++) {
    for (let colI = 1; colI < w; colI++) {
      row[colI] = row[colI - 1] + row[colI]
    }
  }
  return row[row.length - 1]
}

const uniquePathsRec = (w, h, memo = {}) => {
  const key = `${w}-${h}`

  if (memo[key]) return memo[key]

  if (w === 1 || h === 1) return 1

  memo[key] = uniquePathsRec(w - 1, h, memo) + uniquePathsRec(w, h - 1, memo)

  return memo[key]
}
