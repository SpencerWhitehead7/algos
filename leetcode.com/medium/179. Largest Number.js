// Given a list of non negative integers, arrange them such that they form the largest number.

// Example 1:

// Input: [10,2]
// Output: "210"
// Example 2:

// Input: [3,30,34,5,9]
// Output: "9534330"
// Note: The result may be very large, so you need to return a string instead of an integer.

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums){
  const strs = nums.map(num => num.toString()).sort((a, b) => {
    const orderOne = a+b
    const orderTwo = b+a
    if(orderOne>orderTwo) return -1
    else if(orderOne<orderTwo) return 1
    else return 0
  })
  const res = strs.join(``)
  return Number(res) === 0 ? `0` : res
}
