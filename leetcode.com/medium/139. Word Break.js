// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  // I don't think the set is algorithmically necessary, but it runs out of time on the "all 'a's" test otherwise
  const checked = new Set()
  const stack = [""]
  while (stack.length > 0) {
    const base = stack.pop()
    for (const word of wordDict) {
      const candidate = base + word
      if (candidate === s) return true
      if (s.startsWith(candidate) && !checked.has(candidate)) {
        checked.add(candidate)
        stack.push(candidate)
      }
    }
  }

  return false
}

const wordBreakRec = (s, wordDict) =>
  // I firmly believe this SHOULD work, but it runs out of time on the "all 'a'"s test
  s === "" ||
  wordDict.some(
    (w) => s.startsWith(w) && wordBreakRec(s.slice(w.length), wordDict)
  )

const wordBreakRecMemo = (s, wordDict) => {
  // this DOES work, but the adaptation necessary to add the set is so ugly you should just do it iteratively
  const checked = new Set()

  const wordBreakRec = (stub, remaining, wordDict) => {
    if (remaining === "") return true

    for (const word of wordDict) {
      const candidate = stub + word
      if (remaining.startsWith(word) && !checked.has(candidate)) {
        checked.add(candidate)
        if (wordBreakRec(candidate, remaining.slice(word.length), wordDict)) {
          return true
        }
      }
    }

    return false
  }

  return wordBreakRec("", s, wordDict)
}

const wordBreakDP = (s, wordDict) => {
  const wordSet = new Set(wordDict)
  const dps = new Array(s.length + 1).fill(false)
  dps[0] = true

  for (let i = 1; i < dps.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dps[j] && wordSet.has(s.slice(j, i))) {
        dps[i] = true
        break
      }
    }
  }

  return dps[dps.length - 1]
}

// the evil "all 'a's" test::
// s =
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
// wordDict =
// ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
