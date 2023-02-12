// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColorsBasicallyCheating = (nums) => {
  nums.sort()
}

const sortColorsCountingSort = (nums) => {
  const colorCounts = [0, 0, 0]
  for (let i = 0; i < nums.length; i++) {
    colorCounts[nums[i]]++
  }

  let i = 0
  for (let color = 0; color < colorCounts.length; color++) {
    for (let count = 0; count < colorCounts[color]; count++) {
      nums[i] = color
      i++
    }
  }
}

const sortColors = (nums) => {
  let redPtr = 0
  let bluePtr = nums.length - 1

  let i = 0
  while (i <= bluePtr) {
    const num = nums[i]

    if (num === 0) {
      nums[i] = nums[redPtr]
      nums[redPtr] = 0
      redPtr++
      i++
    } else if (num === 2) {
      nums[i] = nums[bluePtr]
      nums[bluePtr] = 2
      bluePtr--
    } else {
      i++
    }
  }
}
