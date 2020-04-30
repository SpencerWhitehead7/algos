// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// leetcode had a image of a phone pad with the letter number mapping

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  const strings = []
  if (!digits) return strings

  const digitMapping = {
    2: [`a`, `b`, `c`],
    3: [`d`, `e`, `f`],
    4: [`g`, `h`, `i`],
    5: [`j`, `k`, `l`],
    6: [`m`, `n`, `o`],
    7: [`p`, `q`, `r`, `s`],
    8: [`t`, `u`, `v`],
    9: [`w`, `x`, `y`, `z`],
  }

  const constructStrings = (baseString, digits, i = 0) => {
    if (i === digits.length) {
      strings.push(baseString)
    } else {
      for (const letter of digitMapping[digits[i]]) {
        constructStrings(baseString + letter, digits, i + 1)
      }
    }
  }

  constructStrings(``, digits)

  return strings
}
