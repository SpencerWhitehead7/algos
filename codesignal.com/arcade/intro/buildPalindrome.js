// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string st

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string

const buildPalindrome = str => {
  let palindromeIndex = 0
  while(str.slice(palindromeIndex) !== str.slice(palindromeIndex).split(``).reverse().join(``)){
    palindromeIndex++
  }
  const chunkToReverse = str.slice(0, palindromeIndex).split(``).reverse().join(``)
  return str + chunkToReverse
}
