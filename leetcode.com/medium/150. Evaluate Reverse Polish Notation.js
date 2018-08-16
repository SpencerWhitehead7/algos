// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Note:

// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
// Example 1:

// Input: ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// Output: 22
// Explanation: 
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens){
  const stack = []
  for(let i=0; i<tokens.length; i++){
    if(tokens[i] === `+`){
      stack.push(stack.pop() + stack.pop())
    }else if(tokens[i] === `-`){
      const subtracter = stack.pop()
      const subtracted = stack.pop()
      stack.push(subtracted - subtracter)
    }else if(tokens[i] === `*`){
      stack.push(stack.pop() * stack.pop())
    }else if(tokens[i] === `/`){
      const divider = stack.pop()
      const divided = stack.pop()
      const res = divided / divider
      stack.push(res > 0 ? Math.floor(res) : Math.ceil(res))
    }else{
      stack.push(Number(tokens[i]))
    }
  }
  return stack[0]
}
