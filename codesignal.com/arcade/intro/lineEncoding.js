// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// String consisting of lowercase English letters.

// Guaranteed constraints:
// 4 ≤ s.length ≤ 15.

// [output] string

// Encoded version of s.

const lineEncoding = (str) => {
  let res = ``
  let currChar = str[0]
  for (let i = 0; i < str.length; i++) {
    currChar = str[i]
    let counter = 1
    while (str[i + counter] === currChar) {
      counter++
    }
    res += counter === 1 ? currChar : `${counter}${currChar}`
    i += counter - 1
  }
  return res
}
