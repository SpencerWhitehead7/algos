// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const res = []
  const temp = []

  const recurse = () => {
    if (temp.length === nums.length) {
      res.push([...temp])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (num !== null) {
        temp.push(num)
        nums[i] = null
        recurse()
        temp.pop()
        nums[i] = num
      }
    }
  }

  recurse()

  return res
}
