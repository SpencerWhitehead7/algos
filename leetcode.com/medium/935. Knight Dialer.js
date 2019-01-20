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

const knightDialer = n => {
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
  const queue = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
  let count = 0
  while(queue.length > 0){
    const curr = queue.pop()
    if(curr.length === n){
      count = (count + 1) % (Math.pow(10, 9) + 7)
    }else{
      moves[curr[curr.length - 1]].forEach(possibleHop => {
        queue.push(curr + possibleHop)
      })
    }
  }
  return count
}
