// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const counts = {} // you can also do [] and it'll still work, and skip the cost of hashing the char. However, it is confusing af.

  for (let i = 0; i < s.length; i++) {
    counts[s[i]] = (counts[s[i]] ?? 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === 1) return i
  }

  return -1
}
