// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:

// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n){
  const tried = new Set()
  const steps = [0]
  const remainders = [n]
  while(remainders.length > 0){
    const base = remainders.shift()
    const step = steps.shift() + 1
    let minus = 1
    while(base - Math.pow(minus, 2) >= 0){
      const remainder = base - Math.pow(minus, 2)
      if(remainder === 0) return step
      if(!tried.has(remainder)){
        tried.add(remainder)
        remainders.push(remainder)
        steps.push(step)
      }
      minus++
    }
  }
}
