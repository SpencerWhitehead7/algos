// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

const canJump = (nums: number[]): boolean => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) {
      for (let j = i - 1; j >= 0; j--) {
        if (j + nums[j] > i) {
          i = j
          break
        }
      }

      if (nums[i] === 0) return false
    }
  }

  return true
}

// the subarray trick for zero copy slicing is cool JS specific arcana but the worst case runtime is still disastrous
// something like [0,100,99,98,97...,3,2,1,0] does many repeated passes for each ultimately unreachable prefix
const canJumpRec = (nums: number[]): boolean =>
  canJumpRecInner(Float32Array.from(nums))

const canJumpRecInner = (nums: Float32Array): boolean => {
  if (nums.length === 1) return true

  const lastIdx = nums.length - 1

  for (let i = 0; i < lastIdx; i++) {
    if (i + nums[i] >= lastIdx && canJumpRecInner(nums.subarray(0, i + 1)))
      return true
  }

  return false
}
