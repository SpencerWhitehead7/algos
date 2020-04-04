// Prompt
// You're an industrious programmer that lives off the grid. The local well that you use to fetch water has gone dry, so you've decided to collect rain water to filter; however, your collection device isn't flat.

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water your collection device is able to trap after raining.

// Example
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

// Visual Representation of above:

// Missing

// Here are some samples to test to be sure the function works. It is helpful to draw them out then walk step-by-step through the solution to help visualize it.

const rainCollector = arr => {
  const rightMaxes = []
  let rightMax = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, arr[i])
    rightMaxes[i] = rightMax
  }

  const leftMaxes = []
  let leftMax = 0
  for (let i = 0; i < arr.length; i++) {
    leftMax = Math.max(leftMax, arr[i])
    leftMaxes[i] = leftMax
  }

  return arr.reduce((waterCollected, block, i) => {
    const leftMax = leftMaxes[i]
    const rightMax = rightMaxes[i]
    return waterCollected + Math.min(leftMax, rightMax) - block
  }, 0)
}


// // vol = 7
const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1]
console.log(`collection device "a" can hold`, totalVol(a))

// // vol = 6
const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(`collection device "b" can hold`, totalVol(b))

// // vol = 12
const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2]
console.log(`collection device "c" can hold`, totalVol(c))

// // vol = 8
const d = [0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1]
console.log(`collection device "d" can hold`, totalVol(d))

// // vol = 38
const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2]
console.log(`collection device "e" can hold`, totalVol(e))
