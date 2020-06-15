// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const getLetterCounts = str => str
    .split(``)
    .reduce((memo, letter) => {
      memo[letter] = (memo[letter] || 0) + 1
      return memo
    }, {})
  // a general form of this would also check that the objs are the same size, but it won't come up in this restricted example
  const isAnagram = (letterCountObj1, letterCountObj2) => Object.keys(letterCountObj1).reduce((acc, key) => acc && letterCountObj1[key] === letterCountObj2[key], true)

  const res = []
  const pLetterCounts = getLetterCounts(p)
  const chunkLetterCounts = getLetterCounts(s.slice(0, p.length))

  if (isAnagram(pLetterCounts, chunkLetterCounts)) res.push(0)
  for (let i = p.length; i < s.length; i++) {
    chunkLetterCounts[s[i - p.length]]--
    chunkLetterCounts[s[i]] = (chunkLetterCounts[s[i]] || 0) + 1
    if (isAnagram(pLetterCounts, chunkLetterCounts)) res.push(i - p.length + 1)
  }

  return res
}

const findAnagramsRollingArrHash = (s, p) => {
  const map = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 5,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  }
  const getLetterHash = str => str
    .split(``)
    .reduce((acc, letter) => {
      acc[map[letter]]++
      return acc
    }, new Array(26).fill(0))

  const res = []
  const pLetterHash = getLetterHash(p).join(``)
  const chunkLetterHashArr = getLetterHash(s.slice(0, p.length))

  if (pLetterHash === chunkLetterHashArr.join(``)) res.push(0)
  for (let i = p.length; i < s.length; i++) {
    chunkLetterHashArr[map[s[i - p.length]]]--
    chunkLetterHashArr[map[s[i]]]++
    if (pLetterHash === chunkLetterHashArr.join(``)) res.push(i - p.length + 1)
  }

  return res
}

const findAnagramsBrute = (s, p) => {
  const map = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 5,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  }
  const getLetterHash = str => str
    .split(``)
    .reduce((acc, letter) => {
      acc[map[letter]]++
      return acc
    }, new Array(26).fill(0))
    .join(``)

  const pLetterHash = getLetterHash(p)

  const res = []
  for (let i = 0; i < s.length; i++) {
    const chunk = s.slice(i, i + p.length)
    if (getLetterHash(chunk) === pLetterHash) res.push(i)
  }

  return res
}
