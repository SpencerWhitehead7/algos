// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

const lengthOfLISClassic = (nums: number[]): number => {
  const dp = new Array(nums.length).fill(1)

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) dp[i] = Math.max(dp[j] + 1, dp[i])
    }
  }

  return Math.max(...dp)
}

const lengthOfLISGreedy = (nums: number[]): number => {
  const tails = [nums[0]]

  for (const num of nums) {
    if (num > tails.at(-1)!) {
      tails.push(num)
    } else {
      const replacementIdx = tails.findIndex((t) => t >= num)
      tails[replacementIdx] = num
    }
  }

  return tails.length
}

// I believe they're technically both O(n^2) worst case
// but typically tails is so much shorter than nums that this gives a huge speedup
// 4ms for greedy vs 85ms for classic, as measured by leetcode
// if you want to get crazy you could use a binary search instead of .findIndex
// (which is linear) for the replacementIdx, since tails is guaranteed sorted
// which would make it O(n * log(n))
