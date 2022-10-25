// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]
// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?

package algos

func getRow(rowIndex int) []int {
	// see .js for an iterative, more efficient solution
	if rowIndex == 0 {
		return []int{1}
	}

	prevRow := getRow(rowIndex - 1)
	row := []int{1}
	for i := 0; i < len(prevRow)-1; i++ {
		row = append(row, prevRow[i]+prevRow[i+1])
	}
	row = append(row, 1)

	return row
}
