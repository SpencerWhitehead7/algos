// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.


// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const numToFreq = nums.reduce((acc, num) => {
    acc[num] ??= 0
    acc[num]++
    return acc
  }, {})

  const freqToNum = Object.entries(numToFreq).reduce((acc, [num, freq]) => {
    acc[freq] ??= []
    acc[freq].push(num)
    return acc
  }, [])

  return freqToNum.reduceRight((acc, num) => {
    if (acc.length < k) {
      acc.push(...num)
    }
    return acc
  }, [])
}
