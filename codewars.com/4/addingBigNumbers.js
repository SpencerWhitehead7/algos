// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99"); -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(num1, num2) {
  const arr1 = num1.split(``)
  const arr2 = num2.split(``)
  const long = arr1.length >= arr2.length ? arr1 : arr2
  const short = arr1.length < arr2.length ? arr1 : arr2
  const sum = []
  let carry = 0
  for (let i = 1; i <= long.length; i++) {
    const res =
      short[short.length - i] !== undefined
        ? (
            Number(long[long.length - i]) +
            Number(short[short.length - i]) +
            carry
          ).toString()
        : (Number(long[long.length - i]) + carry).toString()
    const newD = res.slice(-1)
    carry = res.slice(0, -1).length ? Number(res.slice(0, -1)) : 0
    sum.push(newD)
    if (i === long.length && carry !== 0) {
      sum.push(carry.toString())
    }
  }
  return sum.reverse().join(``)
}
