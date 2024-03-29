// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
const climbStairsIter = (n) => {
  let stepCount = 0
  let waysToReachPrevStep = 0
  let waysToReachCurrStep = 1

  while (stepCount < n) {
    const waysToReachNextStep = waysToReachPrevStep + waysToReachCurrStep
    waysToReachPrevStep = waysToReachCurrStep
    waysToReachCurrStep = waysToReachNextStep
    stepCount++
  }

  return waysToReachCurrStep
}

const climbStairsRec = (n, cache = [0, 1, 2]) => {
  if (cache[n] !== undefined) return cache[n]

  cache[n - 1] = climbStairsRec(n - 1, cache)
  cache[n - 2] = climbStairsRec(n - 2, cache)

  return cache[n - 1] + cache[n - 2]
}
