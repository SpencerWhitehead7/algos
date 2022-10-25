// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const allNums = [...Array(nums.length).keys()].map((num) => num + 1)
  for (const num of nums) {
    allNums[num - 1] = null
  }

  return allNums.filter(Boolean)
}

const findDisappearedNumbersSet = (nums) => {
  const allNums = new Set([...Array(nums.length).keys()].map((num) => num + 1))
  for (const num of nums) {
    allNums.remove(num)
  }

  return [...allNums]
}

const findDisappearedNumbersConstSpace = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const derivedIndex = Math.abs(nums[i]) - 1
    const derivedIndexHasBeenVisited = nums[derivedIndex] < 0
    if (!derivedIndexHasBeenVisited) nums[derivedIndex] = -nums[derivedIndex]
  }

  return nums.reduce((res, num, i) => {
    if (num > 0) res.push(i + 1)
    return res
  }, [])
}
