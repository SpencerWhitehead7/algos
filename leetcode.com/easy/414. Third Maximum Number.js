// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Can you find an O(n) solution?

const thirdMax = (nums) => {
  // super aesthetic js one-liner multivalue reassign:: faster, more memory (according to leetcode's none too reliable runner)
  let [first, second, third] = Array(3).fill(-Infinity)
  for (const n of nums) {
    if (![first, second, third].includes(n)) {
      if (n > first) {
        ;[first, second, third] = [n, first, second]
      } else if (n > second) {
        ;[second, third] = [n, second]
      } else if (n > third) {
        third = n
      }
    }
  }

  return third === -Infinity ? first : third
}

const thirdMax2 = (nums) => {
  // ugly by hand version :: slower, less memory (according to leetcode's none too reliable runner)
  const maxes = Array(3).fill(-Infinity)
  for (const n of nums) {
    if (!maxes.includes(n)) {
      if (n > maxes[0]) {
        maxes[2] = maxes[1]
        maxes[1] = maxes[0]
        maxes[0] = n
      } else if (n > maxes[1]) {
        maxes[2] = maxes[1]
        maxes[1] = n
      } else if (n > maxes[2]) {
        maxes[2] = n
      }
    }
  }

  return maxes[2] === -Infinity ? maxes[0] : maxes[2]
}
