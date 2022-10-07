// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]

// Constraints:

// 2 <= nums.length <= 2 * 104
// nums.length is even.
// Half of the integers in nums are even.
// 0 <= nums[i] <= 1000

// Follow Up: Could you solve it in-place?

package algos

func sortArrayByParityII(nums []int) []int {
	read := 1
	for write := 0; write < len(nums); write++ {
		if write%2 != nums[write]%2 {
			if read <= write {
				read = write + 1
			}
			for write%2 != nums[read]%2 {
				read++
			}
			nums[write], nums[read] = nums[read], nums[write]
		}
	}
	return nums
}
