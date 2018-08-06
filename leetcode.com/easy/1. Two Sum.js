// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target){
  const hash = {}
  for(let i=0; i<nums.length; i++){
    hash[nums[i]] ? hash[nums[i]].push(i) : hash[nums[i]] = [i]
    const complement = target - nums[i]
    const hashComp = hash[complement]
    if(hashComp && hashComp[0] !== i){
      return [hashComp[0], i]
    }
  }
}
