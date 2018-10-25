// // Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// Example 1:

// Input: "3+2*2"
// Output: 7
// Example 2:

// Input: " 3/2 "
// Output: 1
// Example 3:

// Input: " 3+5 / 2 "
// Output: 5
// Note:

// You may assume that the given expression is always valid.
// Do not use the eval built-in library function.

/**
 * @param {string} s
 * @return {number}
 */
const calculate = s => {
  s = s.replace(/\s/g, ``)
  const arr = []
  let numStart = 0
  let inNum = false
  for(let i = 0; i < s.length; i++){
    if(s[i] === `*` || s[i] === `/` || s[i] === `+` || s[i] === `-`){
      arr.push(Number(s.slice(numStart, i)))
      arr.push(s[i])
      inNum = false
    }else if(!inNum){
      numStart = i
      inNum = true
    }
  }
  arr.push(Number(s.slice(numStart)))

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === `*`){
      arr.splice(i - 1, 3, arr[i - 1] * arr[i + 1])
      i -= 3
    }else if(arr[i] === `/`){
      arr.splice(i - 1, 3, Math.floor(arr[i - 1] / arr[i + 1]))
      i -= 3
    }
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === `+`){
      arr[i + 1] = arr[i - 1] + arr[i + 1]
    }else if(arr[i] === `-`){
      arr[i + 1] = arr[i - 1] - arr[i + 1]
    }
  }
  return arr[arr.length - 1]
}
