// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// Note:
// You may assume that the array does not change.
// There are many calls to sumRange function.

/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
  const sumHash = [0]
  let tempSum = 0
  for (let i = 0; i < nums.length; i++) {
    tempSum += nums[i]
    sumHash[i + 1] = tempSum
  }

  this.nums = nums
  this.sumHash = sumHash
}

/**
* @param {number} i
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  return this.sumHash[j + 1] - this.sumHash[i]
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/
