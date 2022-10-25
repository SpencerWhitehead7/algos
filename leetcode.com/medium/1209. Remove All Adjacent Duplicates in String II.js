// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

// Constraints:

// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s only contains lower case English letters.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) =>
  s
    .split(``)
    .reduce((stack, char) => {
      stack.push(char)

      let count = 0
      while (count < k && stack[stack.length - 1 - count] === char) {
        count++
      }

      if (count === k) {
        while (count > 0) {
          stack.pop()
          count--
        }
      }

      return stack
    }, [])
    .join(``)

// I think it's sort of uglier and less direct, but it's approx the same algo, except about a zillion times faster
const removeDuplicatesFast = (s, k) => {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      stack.push(1)
    } else {
      stack[stack.length - 1]++
      if (stack[stack.length - 1] === k) {
        stack.pop()
        s = s.substring(0, i - k + 1) + s.substring(i + 1)
        i -= k
      }
    }
  }

  return s
}

// it's still not quite as fast as 2, but it is close, and it might be prettier than 1
const removeDuplicatesSynthesis = (s, k) =>
  s
    .split(``)
    .reduce((stack, char) => {
      if (stack[stack.length - 1]?.letter !== char) {
        stack.push({ letter: char, count: 1 })
      } else {
        stack[stack.length - 1].count++
        if (stack[stack.length - 1].count === k) {
          stack.pop()
        }
      }

      return stack
    }, [])
    .map(({ letter, count }) => new Array(count).fill(letter).join(``))
    .join(``)
