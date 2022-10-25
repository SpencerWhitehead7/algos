// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let prefix = ``
  let candidatePrefix = strs[0][0]
  let i = 1
  while (strs.every((str) => str.startsWith(candidatePrefix))) {
    prefix = candidatePrefix
    candidatePrefix += strs[0][i]
    i++
  }

  return prefix
}

// The leetcode solutions section has some quite interesting ones too https://leetcode.com/problems/longest-common-prefix/solution/
