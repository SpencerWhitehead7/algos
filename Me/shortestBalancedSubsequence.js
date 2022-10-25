// A string is considered balanced when every letter in the string appears both in uppercase and lowercase
// For example, CATattac is balanced (a, c, t occur in both cases). Madam is not (a, d only appear in lowercase).
// Write a function that given a string returns the shortest balanced substring of that string.
// More examples:
// “azABaabza” returns “ABaab”
// “TacoCat” returns -1 (not balanced)
// “AcZCbaBz” returns the entire string
// assume the string is all English upper and lower case letters

const { performance } = require(`perf_hooks`)

const shortestBalancedSubsequenceBruteForce = (str) => {
  for (let len = 2; len <= str.length; len++) {
    for (let i = 0; i + len <= str.length; i++) {
      const subseq = str.slice(i, i + len)
      const chars = new Set(subseq)
      if (
        subseq
          .split(``)
          .every(
            (char) =>
              chars.has(char.toLowerCase()) && chars.has(char.toUpperCase())
          )
      ) {
        return subseq
      }
    }
  }

  return -1
}

// just to provide neater utility methods for tracking char counts
// a map would serve as well, but be slower than array access
const CharCounter = function () {
  this._upper = new Array(26).fill(0)
  this._lower = new Array(26).fill(0)
  this._upperOffset = `A`.charCodeAt(0)
  this._lowerOffset = `a`.charCodeAt(0)
}

CharCounter.prototype.reset = function () {
  this._upper = new Array(26).fill(0)
  this._lower = new Array(26).fill(0)
}

CharCounter.prototype.get = function (char) {
  if (char === char.toUpperCase()) {
    return this._upper[char.charCodeAt(0) - this._upperOffset]
  } else {
    return this._lower[char.charCodeAt(0) - this._lowerOffset]
  }
}

CharCounter.prototype.inc = function (char) {
  if (char === char.toUpperCase()) {
    this._upper[char.charCodeAt(0) - this._upperOffset]++
  } else {
    this._lower[char.charCodeAt(0) - this._lowerOffset]++
  }
}

CharCounter.prototype.dec = function (char) {
  if (char === char.toUpperCase()) {
    this._upper[char.charCodeAt(0) - this._upperOffset]--
  } else {
    this._lower[char.charCodeAt(0) - this._lowerOffset]--
  }
}

CharCounter.prototype.isBalanced = function () {
  for (let i = 0; i < 26; i++) {
    if (
      (this._upper[i] !== 0 && this._lower[i] === 0) ||
      (this._upper[i] === 0 && this._lower[i] !== 0)
    ) {
      return false
    }
  }

  return true
}

const shortestBalancedSubsequence = (str) => {
  const charsInStr = new Set(str)

  const unbalancableChars = new Set(
    str
      .split(``)
      .filter(
        (k) =>
          (charsInStr.has(k.toUpperCase()) &&
            !charsInStr.has(k.toLowerCase())) ||
          (charsInStr.has(k.toLowerCase()) && !charsInStr.has(k.toUpperCase()))
      )
  )

  const charCounter = new CharCounter()

  let sPtr = 0
  let ePtr = 0

  let startI = -1
  let endI = -1

  while (ePtr < str.length) {
    const eChar = str[ePtr]

    if (unbalancableChars.has(eChar)) {
      charCounter.reset()
      sPtr = ePtr + 1
    } else {
      charCounter.inc(eChar)

      let sChar = str[sPtr]
      while (charCounter.get(sChar) > 1) {
        charCounter.dec(sChar)
        sPtr += 1
        sChar = str[sPtr]
      }

      if (charCounter.isBalanced()) {
        if (
          startI === -1 ||
          endI === -1 ||
          startI - endI + 1 > sPtr - ePtr + 1
        ) {
          startI = sPtr
          endI = ePtr
        }
      }
    }

    ePtr++
  }

  // prettier-ignore
  return startI === -1 || endI === -1
    ? -1
    : str.slice(startI, endI + 1)
}

const tests = [
  { i: `aA`, e: `aA` },
  { i: `Aa`, e: `Aa` },
  { i: `azABaabza`, e: `ABaab` },
  { i: `TacoCat`, e: -1 },
  { i: `AcZCbaBz`, e: `AcZCbaBz` },
  {
    i: `AcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBzAcZCbaBz`,
    e: `AcZCbaBz`,
  },
]

const runTests = (ts, func) => {
  const t0 = performance.now()
  for (let idx = 0; idx < ts.length; idx++) {
    const test = ts[idx]
    const a = func(test.i)
    if (test.e !== a) console.log(`expected: ${test.e} - got: ${a}`)
  }
  const t1 = performance.now()
  console.log(`${func.name} finished in:: ${t1 - t0}ms`)
}

runTests(tests, shortestBalancedSubsequenceBruteForce)
runTests(tests, shortestBalancedSubsequence)
