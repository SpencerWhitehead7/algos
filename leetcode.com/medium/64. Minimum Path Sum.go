// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 200

package algos

func minPathSum(grid [][]int) int {
	h := len(grid)
	w := len(grid[0])

	// top row (no cell above to compare)
	for i := 1; i < w; i += 1 {
		grid[0][i] += grid[0][i-1]
	}

	// left col (no cell left to compare)
	for i := 1; i < h; i += 1 {
		grid[i][0] += grid[i-1][0]
	}

	// inner grid, with both an upper and a left
	for hi := 1; hi < h; hi += 1 {
		for wi := 1; wi < w; wi += 1 {
			grid[hi][wi] += min(grid[hi-1][wi], grid[hi][wi-1])
		}
	}

	return grid[h-1][w-1]
}
