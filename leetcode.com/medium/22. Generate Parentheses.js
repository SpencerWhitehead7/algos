// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = []

  const recurse = (parens, availableOpens, availableCloses) => {
    if (availableOpens === 0 && availableCloses === 0) {
      res.push(parens)
    }

    if (availableOpens > 0) {
      recurse(parens + "(", availableOpens - 1, availableCloses + 1)
    }
    if (availableCloses > 0) {
      recurse(parens + ")", availableOpens, availableCloses - 1)
    }
  }

  recurse("", n, 0)

  return res
}
