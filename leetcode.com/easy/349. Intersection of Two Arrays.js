// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2){
  const res = []
  const hash = {}
  nums1.forEach(num => {
    hash[num] = 1
  })
  nums2.forEach(num => {
    if(hash[num]) hash[num]++
  })
  Object.keys(hash).forEach(key => {
    if(hash[key] > 1) res.push(Number(key))
  })
  return res
}
