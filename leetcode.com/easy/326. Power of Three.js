// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
// Example 4:

// Input: n = 45
// Output: false

// Constraints:

// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThreeIter = (n) => {
  while (n > 3) {
    n /= 3
  }
  return n === 3
}

const isPowerOfThreeRec = (n) => {
  if (n === 3) return true
  if (n < 3) return false
  return isPowerOfThreeRec(n / 3)
}
