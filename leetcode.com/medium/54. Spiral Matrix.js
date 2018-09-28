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
const spiralOrder = matrix => {
  const sorted = []
  while(matrix.length){
    sorted.push(...matrix.shift())
    for(let i = 0; i < matrix.length; i++){
      const next = matrix[i].pop()
      if(next !== undefined) sorted.push(next)
    }
    sorted.push(...(matrix.pop() || []).reverse())
    for(let i = matrix.length - 1; i >= 0; i--){
      const next = matrix[i].shift()
      if(next !== undefined) sorted.push(next)
    }
  }
  return sorted
}

// A slightly more rigorous version of snail sort that has to deal with cases like
// [ [1], [2], [3]] and [ [1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]
