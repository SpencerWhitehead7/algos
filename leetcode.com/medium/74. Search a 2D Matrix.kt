// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

class Solution {
  fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
      if(matrix.size == 0 || (matrix.size == 1 && matrix[0].size == 0)) return false
      var start = 0
      var end = matrix.size - 1
      var targetArr: IntArray? = null
      while(start <= end){
          val middle = (start + end) / 2
          if(matrix[middle][matrix[middle].size - 1] < target){
              start = middle + 1
          }else if(matrix[middle][0] > target){
              end = middle - 1
          }else{
              targetArr = matrix[middle]
              break
          }
      }
      if(targetArr == null) return false
          
      start = 0
      end = targetArr.size - 1
      while(start <= end){
          val middle = (start + end) / 2
          if(targetArr[middle] < target ){
              start = middle + 1
          }else if(targetArr[middle] > target){
              end = middle - 1
          }else{
              return true
          }
      }
      return false
  }
}