// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be
// firstDigit(inputString) = '2';
// For inputString = "0ss", the output should be
// firstDigit(inputString) = '0'.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string containing at least one digit.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] char

const firstDigitSet = inputString => {
  const digits = new Set([`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`])
  for(let i = 0; i < inputString.length; i++){
    if(digits.has(inputString[i])) return inputString[i]
  }
}

const firstDigitRegex = inputString => inputString.match(/\d/)[0]
