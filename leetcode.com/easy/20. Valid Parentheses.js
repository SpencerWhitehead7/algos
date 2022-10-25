// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const v = s[i]
    if (v === `(` || v === `{` || v === `[`) {
      stack.push(v)
    } else if (
      (v === `)` && stack.at(-1) === `(`) ||
      (v === `}` && stack.at(-1) === `{`) ||
      (v === `]` && stack.at(-1) === `[`)
    ) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
}
