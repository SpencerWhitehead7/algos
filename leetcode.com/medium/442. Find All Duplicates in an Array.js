// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = nums => {
  const seen = new Set()
  const res = []

  for (const num of nums) {
    if (seen.has(num)) {
      res.push(num)
    } else {
      seen.add(num)
    }
  }

  return res
}

const findDuplicatesConstSpace = nums => {
  const res = []

  for (let i = 0; i < nums.length; i++) {
    const originalValue = Math.abs(nums[i])
    const derivedIndex = originalValue - 1
    const derivedIndexHasBeenVisited = nums[derivedIndex] < 0
    if (derivedIndexHasBeenVisited) {
      res.push(originalValue)
    } else {
      nums[derivedIndex] = -nums[derivedIndex]
    }
  }

  return res
}
