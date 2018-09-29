// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target){
  let start = 0
  let end = nums.length - 1
  while(start <= end){
    const middle = Math.floor((start + end) / 2)
    if(nums[middle] > target){
      end = middle - 1
    }else if(nums[middle] < target){
      start = middle + 1
    }else{
      return middle
    }
  }
  return start
}

// It's basically binary search