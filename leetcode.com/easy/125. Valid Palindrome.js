// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const cleaned = s.replace(/[^a-z0-9]/gi, ``).toLowerCase()
  for (let lPtr = 0, rPtr = cleaned.length - 1; lPtr < rPtr; lPtr++, rPtr--) {
    if (cleaned[lPtr] !== cleaned[rPtr]) return false
  }
  return true
}
