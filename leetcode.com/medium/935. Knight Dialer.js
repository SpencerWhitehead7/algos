// A chess knight can move as indicated in the chess diagram below:

//  .



// This time, we place our chess knight on any numbered key of a phone pad (indicated above), and the knight makes N-1 hops.  Each hop must be from one key to another numbered key.

// Each time it lands on a key (including the initial placement of the knight), it presses the number of that key, pressing N digits total.

// How many distinct numbers can you dial in this manner?

// Since the answer may be large, output the answer modulo 10^9 + 7.



// Example 1:

// Input: 1
// Output: 10
// Example 2:

// Input: 2
// Output: 20
// Example 3:

// Input: 3
// Output: 46


// Note:

// 1 <= N <= 5000

// Slow queue version

/**
 * @param {number} N
 * @return {number}
 */

const MOD = (10 ** 9) + 7

const moves = [
  [`4`, `6`],
  [`6`, `8`],
  [`7`, `9`],
  [`4`, `8`],
  [`0`, `3`, `9`],
  [],
  [`0`, `1`, `7`],
  [`2`, `6`],
  [`1`, `3`],
  [`2`, `4`],
]

const knightDialerQueue = n => {
  const queue = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
  let count = 0
  while(queue.length > 0){
    const curr = queue.pop()
    if(curr.length === n){
      count = (count + 1) % MOD
    }else{
      moves[curr[curr.length - 1]].forEach(possibleHop => {
        queue.push(curr + possibleHop)
      })
    }
  }
  return count
}

/**
 * @param {number} N
 * @return {number}
 */
const knightDialerMatrix = N => {
  if(N === 1) return 10
  let baseMatrix = [
  // 0,1,2,3,4,5,6,7,8,9
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 2
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0], // 3
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 0], // 6
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0], // 7
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], // 8
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0], // 9
  ]
  const multMatrix = [
  // 0,1,2,3,4,5,6,7,8,9
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0], // 1
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 2
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0], // 3
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], // 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 0], // 6
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0], // 7
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], // 8
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0], // 9
  ]
  for(let i = 2; i < N; i++){
    baseMatrix = multiplyMatrices(baseMatrix, multMatrix)
  }
  return baseMatrix.reduce((acc, curr) => acc + (curr.reduce((acc, curr) => acc + curr) % MOD), 0) % MOD
}

const multiplyMatrices = (matrix1, matrix2) => {
  const res = []
  for(let row = 0; row < matrix1.length; row++){
    const newRow = []
    for(let col = 0; col < matrix1[0].length; col++){
      const allVals = []
      matrix1[row].forEach((rowVal, i) => {
        allVals.push((rowVal * matrix2[i][col]) % MOD)
      })
      newRow.push(allVals.reduce((acc, curr) => acc + curr) % MOD)
    }
    res.push(newRow)
  }
  return res
}

/**
 * @param {number} N
 * @return {number}
 */
const knightDialer = N => {
  let dp = new Array(moves.length).fill(1)
  for(let i = 1; i < N; i++){
    const newDp = new Array(moves.length).fill(0)
    for(let j = 0; j < moves.length; j++){
      moves[j].forEach(move => {
        newDp[move] += dp[j]
        newDp[move] %= MOD
      })
    }
    dp = newDp
  }
  return dp.reduce((acc, curr) => acc + curr) % MOD
}
