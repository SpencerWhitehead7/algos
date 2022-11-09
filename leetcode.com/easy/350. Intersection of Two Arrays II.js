// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  // O(n) time O(n) extra space
  const smaller = nums1.length < nums2.length ? nums1 : nums2
  const larger = nums1.length < nums2.length ? nums2 : nums1

  const counts = smaller.reduce((acc, n) => {
    acc[n] ??= 0
    acc[n]++
    return acc
  }, {})

  return larger.reduce((res, curr) => {
    if (counts[curr] > 0) {
      res.push(curr)
      counts[curr]--
    }
    return res
  }, [])
}

const intersectSort = (nums1, nums2) => {
  // O(nlogn) time O(1) (additional) space
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  const res = []
  let p1 = 0
  let p2 = 0
  while (nums1[p1] !== undefined && nums2[p2] !== undefined) {
    if (nums1[p1] === nums2[p2]) {
      res.push(nums1[p1])
      p1++
      p2++
    } else {
      nums1[p1] < nums2[p2] ? p1++ : p2++
    }
  }
  return res
}
