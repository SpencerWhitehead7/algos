// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

// Constraints:

// 0 <= rowIndex <= 33

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const res = [[1]]

  for (let row = 1; row < numRows; row++) {
    const nextRow = [1, ...res.at(-1)]
    for (let i = 1; i < nextRow.length - 1; i++) {
      nextRow[i] = nextRow[i] + nextRow[i + 1]
    }
    res.push(nextRow)
  }

  return res
}
