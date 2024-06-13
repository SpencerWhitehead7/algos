// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const mat = new Array(word1.length + 1)
    .fill()
    .map(() => new Array(word2.length + 1))
  mat[0][0] = 0
  for (let i = 1; i <= word2.length; i++) {
    mat[0][i] = i
  }
  for (let i = 1; i <= word1.length; i++) {
    mat[i][0] = i
  }

  for (let v = 1; v <= word1.length; v++) {
    for (let h = 1; h <= word2.length; h++) {
      if (word1[v - 1] == word2[h - 1]) {
        mat[v][h] = mat[v - 1][h - 1]
      } else {
        mat[v][h] = Math.min(
          mat[v - 1][h - 1] + 1,
          mat[v - 1][h] + 1,
          mat[v][h - 1] + 1
        )
      }
    }
  }

  return mat[word1.length][word2.length]
}
