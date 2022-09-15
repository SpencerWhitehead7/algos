// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.



// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]


// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => { // basically copies "shuffle to end" technique from 283
  let writePtr = 0
  for (let readPtr = 0; readPtr < nums.length; readPtr++) {
    const rVal = nums[readPtr]
    if (rVal % 2 !== 0) {
      const wVal = nums[writePtr]
      nums[writePtr] = rVal
      nums[readPtr] = wVal
      writePtr++
    }
  }

  return nums
}

const sortArrayByParity2 = nums => { // actual value swapping
  let lPtr = 0
  let rPtr = nums.length - 1
  while (lPtr < rPtr) {
    const lVal = nums[lPtr]
    const rVal = nums[rPtr]
    if (lVal % 2 > rVal % 2) {
      nums[lPtr] = rVal
      nums[rPtr] = lVal
    }
    if (lVal % 2 === 0) lPtr++
    if (rVal % 2 === 1) rPtr--
  }

  return nums
}

// leetcode (terminally unreliable for js) says almost exactly the same time / memory
