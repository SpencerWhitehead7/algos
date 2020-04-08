// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  let length = 0
  let i = s.length - 1
  while (s[i] === ` `) {
    i--
  }
  while (s[i] !== ` ` && s[i] !== undefined) {
    length++
    i--
  }
  return length
}
