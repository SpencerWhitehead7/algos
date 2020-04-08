// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  if (x > 2 ** 31 - 1 || x < (-2) ** 31) return 0
  const numAsRevStr = x.toString().split(``).reverse()
    .join(``)
  const revInt = numAsRevStr[numAsRevStr.length - 1] === `-` ? Number(numAsRevStr.slice(0, -1)) * -1 : Number(numAsRevStr)
  return revInt > 2 ** 31 - 1 || revInt < (-2) ** 31 ? 0 : revInt
}
