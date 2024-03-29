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
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  // see .go for a recursive solution
  const row = [1]
  for (let r = 0; r < rowIndex; r++) {
    row.push(1)
    for (let i = row.length - 2; i > 0; i--) {
      row[i] = row[i - 1] + row[i]
    }
  }

  return row
}
