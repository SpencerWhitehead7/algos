// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let reversed = 0

  if (x > 0) {
    const MAX = (2 ** 31) - 1
    while (x !== 0) {
      if (MAX / 10 <= reversed) return 0
      reversed *= 10
      const popped = x % 10
      x = Math.floor(x / 10)
      if (MAX - popped <= reversed) return 0
      reversed += popped
    }
  }
  if (x < 0) {
    const MAX = (-2) ** 31
    while (x !== 0) {
      if (MAX / 10 >= reversed) return 0
      reversed *= 10
      const popped = x % 10
      x = Math.ceil(x / 10)
      if (MAX - popped >= reversed) return 0
      reversed += popped
    }
  }

  return reversed
}

// leetcode has accepted this in the past, but I think it shouldn't have; it's also kinda against the spirit of the question
const reverseViaStr = x => {
  const MAX = (2 ** 31) - 1
  const MIN = (-2) ** 31

  const numAsRevStr = x
    .toString()
    .split(``)
    .reverse()
    .join(``)

  const revInt =
    numAsRevStr[numAsRevStr.length - 1] === `-`
      ? Number(numAsRevStr.slice(0, -1)) * -1
      : Number(numAsRevStr)

  return revInt > MAX || revInt < MIN
    ? 0
    : revInt
}
