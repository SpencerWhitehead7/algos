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
  const res = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let l = i + 1
      let r = nums.length - 1
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r]
        if (sum === 0) {
          res.push([nums[i], nums[l], nums[r]])
          l++
          r--
          while (l < r && nums[l - 1] === nums[l]) {
            l++
          }
          while (l < r && nums[r] === nums[r + 1]) {
            r--
          }
        } else {
          sum < 0 ? l++ : r--
        }
      }
    }
  }

  return res
}
