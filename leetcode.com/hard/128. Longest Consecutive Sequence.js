// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

// Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const unvisited = new Set(nums)
  const unvisitedIterator = unvisited.values()
  let maxLength = 0

  while (unvisited.size > 0) {
    let length = 1
    const base = unvisitedIterator.next().value
    unvisited.delete(base)

    let decreasing = base - 1
    while (unvisited.has(decreasing)) {
      unvisited.delete(decreasing)
      decreasing--
      length++
    }
    let increasing = base + 1
    while (unvisited.has(increasing)) {
      unvisited.delete(increasing)
      increasing++
      length++
    }

    if (length > maxLength) maxLength = length
  }

  return maxLength
}
