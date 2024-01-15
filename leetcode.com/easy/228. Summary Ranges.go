// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.

package algos

import "fmt"

func summaryRanges(nums []int) []string {
	res := []string{}

	for baseI := 0; baseI < len(nums); baseI++ {
		nextI := baseI
		for nextI+1 < len(nums) && nums[nextI]-nums[nextI+1] == -1 {
			nextI++
		}
		if baseI == nextI {
			res = append(res, fmt.Sprintf("%d", nums[baseI]))
		} else {
			res = append(res, fmt.Sprintf("%d->%d", nums[baseI], nums[nextI]))
		}
		baseI = nextI
	}

	return res
}
