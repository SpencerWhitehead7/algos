// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const pi = Math.floor(Math.random() * nums.length)
  const pv = nums[pi]

  const l = nums.filter((v) => v > pv)
  const m = nums.filter((v) => v === pv)
  const r = nums.filter((v) => v < pv)

  if (k <= l.length) {
    return findKthLargest(l, k)
  }
  if (k > l.length + m.length) {
    return findKthLargest(r, k - l.length - m.length)
  }
  return m[0]
}

// this algo actually has a formal name; quickselect https://en.wikipedia.org/wiki/Quickselect
// there's a more optimized version where you partition the array in place instead of making all the copies
// but the concept is the same and it's more compicated
