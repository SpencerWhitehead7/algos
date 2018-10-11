// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

const deleteDigit = num => {
  const digits = num.toString().split(``).map(digit => Number(digit))
  let largest
  for(let i = 0; i < digits.length; i++){
    const newNum = Number([...digits.slice(0, i), ...digits.slice(i + 1)].join(``))
    if(!largest || newNum > largest) largest = newNum
  }
  return largest
}

// I suspect there's a wicked clever "pure math" way to solve this, but I went with brute force
