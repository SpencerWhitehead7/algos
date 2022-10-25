// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string of lowercase letters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 50.

// [output] boolean

const isBeautifulString = (inputString) => {
  const tracker = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }
  for (let i = 0; i < inputString.length; i++) {
    if (tracker[inputString[i]]) {
      tracker[inputString[i]]++
    } else {
      tracker[inputString[i]] = 1
    }
  }
  const letterCountsAlphabetized = Object.keys(tracker)
    .sort()
    .map((key) => tracker[key])
  for (let i = 0; i < letterCountsAlphabetized.length - 1; i++) {
    if (letterCountsAlphabetized[i] < letterCountsAlphabetized[i + 1])
      return false
  }
  return true
}
