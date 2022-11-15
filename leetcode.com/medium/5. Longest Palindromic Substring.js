// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let longestPalindrome = ""

  for (let i = 0; i < s.length; i++) {
    let l = i
    let r = i
    while (s[l] === s[r + 1]) {
      r++
    }
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    const currPalindrome = s.slice(l + 1, r)
    longestPalindrome =
      longestPalindrome.length >= currPalindrome.length
        ? longestPalindrome
        : currPalindrome
  }

  return longestPalindrome
}
