// Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const windowCharCounts = {}
  const tCharCounts = Object.entries(
    t.split(``).reduce((counts, char) => {
      counts[char] = (counts[char] ?? 0) + 1
      return counts
    }, {})
  )

  let res = ``
  let left = 0
  let right = 0
  while (right < s.length) {
    windowCharCounts[s[right]] = (windowCharCounts[s[right]] ?? 0) + 1
    while (
      tCharCounts.every(([char, count]) => windowCharCounts[char] >= count)
    ) {
      if (res === `` || right - left < res.length)
        res = s.slice(left, right + 1)
      windowCharCounts[s[left]]--
      left++
    }
    right++
  }

  return res
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindowOptimized = (s, t) => {
  const winCharCounts = {}
  const tCharCounts = t.split(``).reduce((counts, char) => {
    counts[char] = (counts[char] ?? 0) + 1
    return counts
  }, {})

  const necessaryCharsLength = Object.entries(tCharCounts).length

  let res = ``
  let completedCharsLength = 0
  let left = 0
  let right = 0
  while (right < s.length) {
    const rChar = s[right]
    winCharCounts[rChar] = (winCharCounts[rChar] ?? 0) + 1
    if (tCharCounts[rChar] === winCharCounts[rChar]) completedCharsLength++

    while (completedCharsLength === necessaryCharsLength) {
      if (right - left < res.length || res === ``)
        res = s.slice(left, right + 1)
      const lChar = s[left]
      winCharCounts[lChar]--
      if (tCharCounts[lChar] && winCharCounts[lChar] < tCharCounts[lChar])
        completedCharsLength--
      left++
    }
    right++
  }

  return res
}
