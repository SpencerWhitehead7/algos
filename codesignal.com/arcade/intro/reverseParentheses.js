// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a regular bracket sequence.

// Constraints:
// 5 ≤ s.length ≤ 55.

// [output] string

function reverseParentheses(s) {
  const arr = s.split(``)
  while (arr.includes(`(`)) {
    let opening = 0
    let closing = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === `(`) {
        opening = i
      } else if (arr[i] === `)`) {
        closing = i
        break
      }
    }
    const reversedSegment = arr.slice(opening + 1, closing).reverse()
    arr.splice(opening, closing - opening + 1, ...reversedSegment)
  }
  return arr.join(``)
}
