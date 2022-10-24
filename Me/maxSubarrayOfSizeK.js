// given an integer k and an array of integers arr, find the subarray of length k of arr where the elements in the subarray add up to the greatest total size

// not sure this is right / haven't really had a way to validate it
const maxSubarrayOfSizeK = (k, arr) => {
  let windowStart = 0
  let windowEnd = 0
  let windowSum = 0

  while (windowEnd < k) {
    windowSum += arr[windowEnd]
    windowEnd++
  }

  let maxSum = windowSum

  while (windowEnd < arr.length) {
    windowSum -= arr[windowStart]
    windowSum += arr[windowEnd]
    if (windowSum > maxSum) maxSum = windowSum
    windowStart++
    windowEnd++
  }

  return maxSum
}
