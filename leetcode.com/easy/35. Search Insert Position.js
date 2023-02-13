// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    if (nums[m] > target) {
      r = m - 1
    } else if (nums[m] < target) {
      l = m + 1
    } else {
      return m
    }
  }
  return l
}

// It's basically binary search
