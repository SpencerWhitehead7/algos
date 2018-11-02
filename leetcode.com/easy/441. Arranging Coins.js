// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoinsSlow = n => {
  let count = 0
  let i
  for(i = 0; count <= n; i++){
    count += i + 1
  }
  return i - 1
}

const arrangeCoinsFast = n => {
  if(n === 0) return 0
  if(n === 1) return 1
  let start = 0
  let end = n
  while(start < end){
    const middle = Math.floor((start + end) / 2)
    const sum = (middle + 1) * (middle / 2)
    if(sum > n){
      end = middle
    }else if(sum < n){
      start = middle + 1
    }else{
      return middle
    }
  }
  return start - 1
}
