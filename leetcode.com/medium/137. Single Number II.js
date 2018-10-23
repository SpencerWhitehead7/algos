// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? // Nope, but I assume it also uses XOR

// Example 1:

// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  const uniques = new Set(nums)
  const totalSum = nums.reduce((acc, curr) => acc + curr)
  let setSum = 0
  for(const num of uniques){
    setSum += num
  }
  return ((setSum * 3) - totalSum) / 2
}
