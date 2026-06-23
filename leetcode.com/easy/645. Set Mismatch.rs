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

impl Solution {
    pub fn find_error_nums(mut nums: Vec<i32>) -> Vec<i32> {
        let mut i = 0;
        while i < nums.len() {
            let num = nums[i];
            let idx_for_num = (num - 1) as usize;
            let actual_at_idx_for_num = nums[idx_for_num];
            if num != actual_at_idx_for_num {
                nums[i] = actual_at_idx_for_num;
                nums[idx_for_num] = num;
            } else {
                i += 1;
            }
        }

        for i in 0..nums.len() {
            let expected = (i + 1) as i32;
            if nums[i] != expected {
                return vec![nums[i], expected];
            }
        }

        vec![]
    }
}

impl Solution {
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> {
        let buckets = vec![0i32; nums.len() + 1];
        for i in 0..nums.len() {
            buckets[nums[i] as usize] += 1;
        }

        let mut doubled = 0i32;
        let mut missing = 0i32;
        for i in 1..buckets.len() {
            doubled = if buckets[i] == 2 { i } else { doubled };
            missing = if buckets[i] == 0 { i } else { missing };
        }

        return vec![doubled, missing];
    }
}
