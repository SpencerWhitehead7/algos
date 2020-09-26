// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:

// Input: [1,2,3]
// Output: 6
 

// Example 2:

// Input: [1,2,3,4]
// Output: 24
 

// Note:

// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

use std::cmp;
use std::i32;

impl Solution {
    pub fn maximum_product(nums: Vec<i32>) -> i32 {
        let mut max_1 = i32::MIN;
        let mut max_2 = i32::MIN;
        let mut max_3 = i32::MIN;
        let mut min_2 = i32::MAX;
        let mut min_1 = i32::MAX;

        for num in nums.iter() {
            if num > &max_1 {
                max_3 = max_2;
                max_2 = max_1;
                max_1 = *num;
            } else if num > &max_2 {
                max_3 = max_2;
                max_2 = *num;
            } else if num > &max_3 {
                max_3 = *num;
            }
            if num < &min_1 {
                min_2 = min_1;
                min_1 = *num;
            } else if num < &min_2 {
                min_2 = *num;
            }
        }

        cmp::max(max_1 * max_2 * max_3, max_1 * min_2 * min_1)
    }
}
