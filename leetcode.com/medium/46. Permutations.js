// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums, base = []) => {
  if (!nums.length) return [base]
  const permutations = []

  for (let i = 0; i < nums.length; i++) {
    const splicedNums = [...nums]
    const num = splicedNums.splice(i, 1)
    permutations.push(...permute(splicedNums, [...base, num]))
  }

  return permutations
}
