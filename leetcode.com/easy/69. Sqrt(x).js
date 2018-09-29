// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
//              the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
const mySqrtTrivial = x => Math.floor(Math.sqrt(x))

const mySqrt = x => {
  if(x === 1 || x === 2) return 1
  let start = 0
  let end = x
  while(start < end){
    const middle = Math.floor((start + end) / 2)
    const prev = middle - 1
    const middleSqrd = middle * middle
    const prevSqrd = prev * prev
    if(middleSqrd === x){
      return middle
    }else if(prevSqrd <= x && middleSqrd > x){
      return prev
    }else if(middleSqrd > x){
      end = middle
    }else if(middleSqrd < x){
      start = middle
    }
  }
  return start
}
