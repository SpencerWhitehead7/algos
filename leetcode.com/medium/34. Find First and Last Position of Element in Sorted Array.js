// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let pivot
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    if (nums[m] < target) {
      l = m + 1
    } else if (nums[m] > target) {
      r = m - 1
    } else {
      pivot = m
      break
    }
  }

  if (nums[pivot] !== target) return [-1, -1]

  let ll = 0
  let lr = pivot
  while (ll < lr) {
    const m = Math.floor((ll + lr) / 2)
    if (nums[m] === target) {
      lr = m - 1
    } else {
      ll = m + 1
    }
  }
  const leftEdge = nums[lr] === target ? lr : lr + 1

  let rl = pivot
  let rr = nums.length - 1
  while (rl < rr) {
    const m = Math.floor((rl + rr) / 2)
    if (nums[m] === target) {
      rl = m + 1
    } else {
      rr = m - 1
    }
  }
  const rightEdge = nums[rl] === target ? rl : rl - 1

  return [leftEdge, rightEdge]
}
