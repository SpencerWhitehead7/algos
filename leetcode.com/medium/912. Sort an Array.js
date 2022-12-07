// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  if (nums.length === 1) return nums

  const midpoint = Math.floor(nums.length / 2)
  return mergeArrays(
    sortArray(nums.slice(0, midpoint)),
    sortArray(nums.slice(midpoint))
  )
}

const mergeArrays = (arrA, arrB) => {
  const res = new Array(arrA.length + arrB.length)

  let arrAPtr = 0
  let arrBPtr = 0
  while (arrAPtr < arrA.length || arrBPtr < arrB.length) {
    const arrANext = arrA[arrAPtr] ?? Infinity
    const arrBNext = arrB[arrBPtr] ?? Infinity
    const nextResI = arrAPtr + arrBPtr
    if (arrANext < arrBNext) {
      res[nextResI] = arrANext
      arrAPtr++
    } else {
      res[nextResI] = arrBNext
      arrBPtr++
    }
  }

  return res
}
