// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.



// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquaresMerge = A => {
  const [negatives, positives] = A.reduce((arrs, num) => {
    arrs[num >= 0 ? 1 : 0].push(num * num)
    return arrs
  }, [[], []])

  const res = []
  let negI = negatives.length - 1
  let posI = 0
  while (negI >= 0 && posI < positives.length) {
    if (positives[posI] < negatives[negI]) {
      res.push(positives[posI])
      posI++
    } else {
      res.push(negatives[negI])
      negI--
    }
  }
  while (posI < positives.length) {
    res.push(positives[posI])
    posI++
  }
  while (negI >= 0) {
    res.push(negatives[negI])
    negI--
  }

  return res
}

const sortedSquaresMiddlePointer = A => {
  let left = A.findIndex(num => num >= 0) - 1
  let right = left + 1
  for (let i = 0; i < A.length; i++) {
    A[i] *= A[i]
  }
  if (left === -2) return A.reverse()
  if (left === -1) return A

  const res = []

  while (left >= 0 || right < A.length) {
    if (left < 0) {
      res.push(A[right])
      right++
    } else if (right >= A.length) {
      res.push(A[left])
      left--
    } else if (A[left] < A[right]) {
      res.push(A[left])
      left--
    } else {
      res.push(A[right])
      right++
    }
  }

  return res
}
