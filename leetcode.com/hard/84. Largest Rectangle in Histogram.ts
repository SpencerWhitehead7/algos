// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

const largestRectangleAreaDnC = (heights: number[]): number => {
  const recurse = (l: number, r: number): number => {
    if (l >= r) {
      return heights[l] ?? 0
    }

    let smallesti = l
    let smallest = Infinity
    for (let i = l; i <= r; i++) {
      if (heights[i] < smallest) {
        smallesti = i
        smallest = heights[i]
      }
    }

    return Math.max(
      recurse(l, smallesti - 1),
      (1 + r - l) * smallest,
      recurse(smallesti + 1, r),
    )
  }

  return recurse(0, heights.length - 1)
}
// I'm pretty confident this recursive divide and conquer algo works
// but it times out on their biggest examples

const largestRectangleArea = (heights: number[]): number => {
  let res = 0

  const stack: number[] = []
  for (let i = 0; i <= heights.length; i++) {
    const currHeight = i === heights.length ? 0 : heights[i]
    while (stack.length && currHeight < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()!]
      const l = stack.length ? stack[stack.length - 1] + 1 : 0
      const r = i
      const width = r - l
      res = Math.max(res, height * width)
    }

    stack.push(i)
  }

  return res
}
