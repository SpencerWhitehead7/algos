// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  if(nums.length === 1) return [nums]
  const all = []
  let i = 0
  while(i < nums.length){
    const num = nums[i]
    const otherNums = [...nums.slice(0, i), ...nums.slice(i + 1)]
    permute(otherNums).forEach(submpermut => {
      submpermut.unshift(num)
      all.push(submpermut)
    })
    i++
  }
  return all
}
