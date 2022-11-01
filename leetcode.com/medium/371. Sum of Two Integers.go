// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

// Constraints:

// -1000 <= a, b <= 1000

package algos

func getSum(a int, b int) int {
	for a&b != 0 {
		s := a ^ b
		c := (a & b) << 1
		a = s
		b = c
	}
	return a | b
}

// I have no fucking clue how this bit manipulation magic works and none of the top posted solutions have an explanation :/
