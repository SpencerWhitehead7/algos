// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// n^2
const moveZeroesSlow = nums => {
  let shiftCount = 0
  let i = 0
  while (i < nums.length - shiftCount) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1))
      shiftCount++
    } else {
      i++
    }
  }
}

// n
const moveZeroes = nums => {
  let writePtr = 0
  for (let readPtr = 0; readPtr < nums.length; readPtr++) {
    const rVal = nums[readPtr]
    if (rVal !== 0) {
      const wVal = nums[writePtr]
      nums[writePtr] = rVal
      nums[readPtr] = wVal
      writePtr++
    }
  }
}
