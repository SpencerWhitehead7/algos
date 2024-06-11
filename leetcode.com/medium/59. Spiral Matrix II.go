// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

// Constraints:

// 1 <= n <= 20

package algos

func generateMatrix(n int) [][]int {
	mat := make([][]int, n)
	for i := range mat {
		mat[i] = make([]int, n)
	}

	tStartI := 0
	tEndI := n
	rStartI := 1
	rEndI := n
	bStartI := n - 2
	bEndI := -1
	lStartI := n - 2
	lEndI := 0

	num := 1
	layer := 0
	for num <= n*n {
		for top := tStartI; top < tEndI; top += 1 {
			mat[layer][top] = num
			num += 1
		}
		tStartI += 1
		tEndI -= 1

		for right := rStartI; right < rEndI; right += 1 {
			mat[right][n-1-layer] = num
			num += 1
		}
		rStartI += 1
		rEndI -= 1

		for bottom := bStartI; bottom > bEndI; bottom -= 1 {
			mat[n-1-layer][bottom] = num
			num += 1
		}
		bStartI -= 1
		bEndI += 1

		for left := lStartI; left > lEndI; left -= 1 {
			mat[left][layer] = num
			num += 1
		}
		lStartI -= 1
		lEndI += 1

		layer += 1
	}

	return mat
}
