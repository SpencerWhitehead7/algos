// Given a sorted array of integers a, find an integer x from a such that the value of

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible (here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.

// Example

// For a = [2, 4, 7], the output should be
// absoluteValuesSumMinimization(a) = 4.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// A non-empty array of integers, sorted in ascending order.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 200,
// -106 ≤ a[i] ≤ 106.

// [output] integer

function absoluteValuesSumMinimization(a) {
  return a[Math.ceil(a.length / 2) - 1]
}
