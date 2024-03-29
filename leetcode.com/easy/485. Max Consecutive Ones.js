// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let maxOnes = 0
  let currentOnesCount = 0
  nums.forEach((num) => {
    if (num === 1) {
      currentOnesCount++
    } else {
      if (currentOnesCount > maxOnes) maxOnes = currentOnesCount
      currentOnesCount = 0
    }
  })
  if (currentOnesCount > maxOnes) maxOnes = currentOnesCount

  return maxOnes
}
