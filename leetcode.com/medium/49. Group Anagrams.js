// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsSlow = (strs) => {
  const res = []
  strs.forEach((str, i) => {
    strs[i] = { str, sorted: str.split(``).sort().join(``) }
  })
  strs.sort((a, b) => a.sort - b.sort)
  const tracker = {}
  strs.forEach((strObj) => {
    if (tracker[strObj.sorted]) {
      tracker[strObj.sorted].push(strObj.str)
    } else {
      tracker[strObj.sorted] = [strObj.str]
    }
  })
  Object.keys(tracker).forEach((key) => {
    res.push(tracker[key])
  })
  return res
}

const groupAnagramsFaster = (strs) => {
  const res = []
  const baseHash = new Array(26).fill(0)
  strs.forEach((str, i) => {
    const hash = baseHash.map((a) => a)
    str.split(``).forEach((letter) => {
      hash[letter.charCodeAt(0) - 97]++
    })
    strs[i] = { str, hash: hash.join(``) }
  })
  const tracker = {}
  strs.forEach((strObj) => {
    if (tracker[strObj.hash]) {
      tracker[strObj.hash].push(strObj.str)
    } else {
      tracker[strObj.hash] = [strObj.str]
    }
  })
  Object.keys(tracker).forEach((key) => {
    res.push(tracker[key])
  })
  return res
}

const groupAnagrams = (strs) =>
  Object.values(
    strs.reduce((hashesToStrs, str) => {
      const hash = str
        .split(``)
        .reduce((hashArr, letter) => {
          hashArr[letter.charCodeAt(0) - 97]++
          return hashArr
        }, new Array(26).fill(0))
        .join(`,`)

      hashesToStrs[hash] ??= []
      hashesToStrs[hash].push(str)

      return hashesToStrs
    }, {})
  )
