// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

package algos

func lengthOfLISClassic(nums []int) int {
	dp := make([]uint16, len(nums))
	for i, _ := range dp {
		dp[i] = 1
	}

	for i := len(nums) - 1; i >= 0; i-- {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] < nums[j] && dp[j]+1 > dp[i] {
				dp[i] = dp[j] + 1
			}
		}
	}

	longest := dp[0]
	for _, length := range dp {
		if length > longest {
			longest = length
		}
	}
	return int(longest)
}

func lengthOfLISGreedy(nums []int) int {
	tails := []int{nums[0]}

	for _, num := range nums {
		if num > tails[len(tails)-1] {
			tails = append(tails, num)
		} else {
			replacementIdx := len(tails) - 1
			for i, t := range tails {
				if t >= num {
					replacementIdx = i
					break
				}
			}
			tails[replacementIdx] = num
		}
	}

	return len(tails)
}
