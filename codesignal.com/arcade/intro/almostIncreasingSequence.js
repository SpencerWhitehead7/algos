// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

// Matt Contract helped

function almostIncreasingSequence(arr) {
  let removed = false
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      if (removed) return false
      if (i === arr.length - 1) return true
      if (arr[i - 1] < arr[i + 1]) {
        removed = true
      } else if (!arr[i - 2] || arr[i - 2] < arr[i]) {
        removed = true
      } else {
        return false
      }
    }
  }
  return true
}
