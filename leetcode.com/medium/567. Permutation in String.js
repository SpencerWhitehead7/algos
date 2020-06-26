// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.



// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False


// Constraints:

// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  const s1Letters = s1
    .split(``)
    .reduce((letters, letter) => {
      letters[letter] = (letters[letter] || 0) + 1
      return letters
    }, {})

  for (let i = 0; i < s1.length; i++) {
    const letter = s2[i]
    if (s1Letters.hasOwnProperty(letter)) {
      s1Letters[letter]--
    }
  }
  if (Object.values(s1Letters).every(count => count < 1)) return true

  for (let i = s1.length; i < s2.length; i++) {
    const nextLetterIn = s2[i]
    if (s1Letters.hasOwnProperty(nextLetterIn)) {
      s1Letters[nextLetterIn]--
    }
    const lastLetterOut = s2[i - s1.length]
    if (s1Letters.hasOwnProperty(lastLetterOut)) {
      s1Letters[lastLetterOut]++
    }

    if (Object.values(s1Letters).every(count => count < 1)) return true
  }

  return false
}
