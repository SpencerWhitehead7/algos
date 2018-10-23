// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]
// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  let currRow = [0, 1, 0]
  for(let i = 0; i < rowIndex; i++){
    const nextRow = [0]
    for(let j = 0; j < currRow.length - 1; j++){
      nextRow.push(currRow[j] + currRow[j + 1])
    }
    nextRow.push(0)
    currRow = nextRow
  }
  currRow.pop()
  currRow.shift()
  return currRow
}
