// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// Example:

// Input:  [1,2,1,3,2,5]
// Output: [3,5]
// Note:

// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity? // Nope, but I imagine it uses XOR

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const tracker = {}
  nums.forEach((num) => {
    if (tracker[num]) {
      tracker[num]++
    } else {
      tracker[num] = 1
    }
  })
  const res = []
  const keys = Object.keys(tracker)
  for (let i = 0; i < keys.length; i++) {
    if (tracker[keys[i]] === 1) res.push(Number(keys[i]))
  }
  return res
}
