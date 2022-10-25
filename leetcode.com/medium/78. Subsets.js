// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// desc doesn't mention it, but order doesn't matter

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const results = [[]]

  for (const num of nums) {
    results.forEach((subset) => {
      results.push([...subset, num])
    })
  }

  return results
}
