// (This problem is an interactive problem.)

// You may recall that an array arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

// You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

// MountainArray.get(k) returns the element of the array at index k (0-indexed).
// MountainArray.length() returns the length of the array.
// Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

// Example 1:

// Input: array = [1,2,3,4,5,3,1], target = 3
// Output: 2
// Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
// Example 2:

// Input: array = [0,1,2,4,2,1], target = 3
// Output: -1
// Explanation: 3 does not exist in the array, so we return -1.

// Constraints:

// 3 <= mountain_arr.length() <= 104
// 0 <= target <= 109
// 0 <= mountain_arr.get(index) <= 109

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
const findInMountainArray = (target, mountainArr) => {
  let l = 0
  let r = mountainArr.length() - 1
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  const peakI = l

  let upslopeL = 0
  let upslopeR = peakI
  while (upslopeL < upslopeR) {
    const mid = Math.floor((upslopeL + upslopeR) / 2)
    if (mountainArr.get(mid) > target) {
      upslopeL = mid + 1
    } else {
      upslopeR = mid
    }
  }
  if (mountainArr.get(upslopeL) === target) return upslopeL

  let downslopeL = peakI
  let downslopeR = mountainArr.length() - 1
  while (downslopeL < downslopeR) {
    const mid = Math.floor((downslopeL + downslopeR) / 2)
    if (mountainArr.get(mid) > target) {
      downslopeL = mid + 1
    } else {
      downslopeR = mid
    }
  }
  if (mountainArr.get(downslopeL) === target) return downslopeL

  return -1
}
