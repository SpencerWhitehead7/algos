// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsSlow = strs => {
  const res = []
  strs.forEach((str, i) => {
    strs[i] = { str, sorted: str.split(``).sort().join(``) }
  })
  strs.sort((a, b) => a.sort - b.sort)
  const tracker = {}
  strs.forEach(strObj => {
    if (tracker[strObj.sorted]) {
      tracker[strObj.sorted].push(strObj.str)
    } else {
      tracker[strObj.sorted] = [strObj.str]
    }
  })
  Object.keys(tracker).forEach(key => {
    res.push(tracker[key])
  })
  return res
}

const groupAnagramsFaster = strs => {
  const res = []
  const baseHash = new Array(26).fill(0)
  strs.forEach((str, i) => {
    const hash = baseHash.map(a => a)
    str.split(``).forEach(letter => {
      hash[letter.charCodeAt(0) - 97]++
    })
    strs[i] = { str, hash: hash.join(``) }
  })
  const tracker = {}
  strs.forEach(strObj => {
    if (tracker[strObj.hash]) {
      tracker[strObj.hash].push(strObj.str)
    } else {
      tracker[strObj.hash] = [strObj.str]
    }
  })
  Object.keys(tracker).forEach(key => {
    res.push(tracker[key])
  })
  return res
}

const groupAnagrams = strs => {
  const baseHash = new Array(26).fill(0)
  const tracker = strs.reduce((accTracker, str) => {
    const hash = str.split(``).reduce((accHash, letter) => {
      accHash[letter.charCodeAt(0) - 97]++
      return accHash
    }, [...baseHash])

    if (!accTracker[hash]) {
      accTracker[hash] = [str]
    } else {
      accTracker[hash].push(str)
    }

    return accTracker
  }, {})

  return Object.values(tracker)
}
