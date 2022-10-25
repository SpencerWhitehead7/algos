// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let start = i + 1
      let end = nums.length - 1
      while (start < end) {
        const sum = nums[i] + nums[start] + nums[end]
        if (sum === 0) {
          res.push([nums[i], nums[start], nums[end]])
          start++
          end--
          while (start < end && nums[start - 1] === nums[start]) {
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--
          }
        } else {
          sum < 0 ? start++ : end--
        }
      }
    }
  }
  return res
}
