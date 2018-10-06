// Given an encoded string, return it's decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

/**
 * @param {string} s
 * @return {string}
 */
const digits = new Set([`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`])

const decodeString = str => {
  const stack = []
  for(let i = 0; i < str.length; i++){
    if(str[i] === `]`){
      let chunk = ``
      let reps = ``
      let expandedChunk = ``
      while(stack[stack.length - 1] !== `[`){
        chunk = stack.pop() + chunk
      }
      stack.pop()
      while(digits.has(stack[stack.length - 1])){
        reps = stack.pop() + reps
      }
      reps = Number(reps)
      for(let i = 0; i < reps; i++){
        expandedChunk += chunk
      }
      stack.push(expandedChunk)
    }else{
      stack.push(str[i])
    }
  }
  return stack.join(``)
}
