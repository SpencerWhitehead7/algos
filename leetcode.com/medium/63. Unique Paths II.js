// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?



// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Note: m and n will be at most 100.

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = obstacleGrid => {
  if(obstacleGrid[0][0] === 1) return 0
  obstacleGrid[0][0] = 1
  fillFirsts(obstacleGrid)
  for(let row = 1; row < obstacleGrid.length; row++){
    for(let col = 1; col < obstacleGrid[row].length; col++){
      if(obstacleGrid[row][col] === 0){
        obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1]
      }else{
        obstacleGrid[row][col] = 0
      }
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[obstacleGrid.length - 1].length - 1]
}

const fillFirsts = obstacleGrid => {
  for(let i = 1; i < obstacleGrid[0].length; i++){
    if(obstacleGrid[0][i] === 0){
      obstacleGrid[0][i] = obstacleGrid[0][i - 1]
    }else{
      obstacleGrid[0][i] = 0
    }
  }
  for(let i = 1; i < obstacleGrid.length; i++){
    if(obstacleGrid[i][0] === 0){
      obstacleGrid[i][0] = obstacleGrid[i - 1][0]
    }else{
      obstacleGrid[i][0] = 0
    }
  }
  return obstacleGrid
}
