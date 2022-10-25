// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquareTrivial = (x) => Math.sqrt(x) === Math.floor(Math.sqrt(x))

const isPerfectSquare = (x) => {
  if (x === 0 || x === 1) {
    return true
  }
  let start = 1
  let end = x
  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    const middleSqrd = middle * middle
    if (middleSqrd === x) {
      return true
    } else if (middleSqrd > x) {
      end = middle
    } else if (middleSqrd < x) {
      start = middle + 1
    }
  }
  return false
}
