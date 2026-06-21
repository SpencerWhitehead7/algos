// You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].

// the same idea, but way prettier
// somehow it's a little slower but they all run in 0-3 ms and it's
// javascript, so I suspect it's basically random variance
const jump = (nums: number[]): number => {
  if (nums.length === 1) return 0

  let jumps = 0

  let maxNextRange = 0
  let endOfCurrRange = 0

  for (let i = 0; i < nums.length; i++) {
    maxNextRange = Math.max(maxNextRange, i + nums[i])
    if (maxNextRange >= nums.length - 1) return jumps + 1

    if (i === endOfCurrRange) {
      endOfCurrRange = maxNextRange
      jumps++
    }
  }

  return jumps
}

// more efficiently, skips calculating min steps for indices in nums you don't need to visit
// and still more efficiently, skips rechecking indices you've already seen on previous jumps
// although the leetcode tests don't have any inputs that exercise this edge so it comes out slightly slower
const jumpUgly = (nums: number[]): number => {
  let jumps = 0

  let deepestCheckedI = 0
  let i = 0
  while (i < nums.length - 1) {
    let maxNextRange = 0
    let nextI = 0

    const currentRange = i + nums[i]
    if (currentRange >= nums.length - 1) return jumps + 1

    for (let j = deepestCheckedI + 1; j <= currentRange; j++) {
      const candidateNextRange = j + nums[j]
      if (candidateNextRange > maxNextRange) {
        maxNextRange = candidateNextRange
        nextI = j
      }

      deepestCheckedI = j
    }

    i = nextI
    jumps++
  }

  return jumps
}

// calculating min steps for every index in nums
const jumpClassicDp = (nums: number[]): number => {
  const dp = Array(nums.length).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < nums.length; i++) {
    const range = Math.min(nums[i], nums.length - 1 - i)
    for (let j = 0; j <= range; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1)
    }
  }

  return dp.at(-1)
}
