// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */

const haveCommonLetter = (arr, i) => {
  const commonLetter = arr[0][i]
  if(commonLetter === undefined) return false
  for(let j = 0; j < arr.length; j++){
    if(arr[j][i] !== commonLetter) return false
  }
  return true
}

const longestCommonPrefix = strs => {
  if(strs.length === 0) return ``
  if(strs.length === 1) return strs[0]
  let prefix = ``
  let i = 0
  while(haveCommonLetter(strs, i)){
    prefix += strs[0][i]
    i++
  }
  return prefix
}

// The leetcode solutions section has some quite interesting ones too https://leetcode.com/problems/longest-common-prefix/solution/
