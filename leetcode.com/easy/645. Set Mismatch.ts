// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

const findErrorNums = (nums: number[]): number[] => {
  let i = 0
  while (i < nums.length) {
    const num = nums[i]
    const idxForNum = num - 1
    const actualAtIdxForNum = nums[idxForNum]
    if (num !== actualAtIdxForNum) {
      nums[i] = actualAtIdxForNum
      nums[idxForNum] = num
    } else {
      i++
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return [nums[i], i + 1]
  }

  return []
}

const findErrorNumsBucketSort = (nums: number[]): number[] => {
  const buckets = new Array(nums.length + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    buckets[nums[i]]++
  }

  let doubled = 0
  let missing = 0
  for (let i = 1; i < buckets.length; i++) {
    doubled = buckets[i] === 2 ? i : doubled
    missing = buckets[i] === 0 ? i : missing
  }

  return [doubled, missing]
}
