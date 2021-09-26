// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:



// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

const snailRec = array => {
  if (array.length === 1) {
    return array[0]
  } else if (array.length === 0) {
    return []
  } else {
    const sorted = []
    sorted.push(...array.shift())
    for (let i = 0; i < array.length; i++) {
      sorted.push(array[i].pop())
    }
    sorted.push(...array.pop().reverse())
    for (let i = array.length - 1; i >= 0; i--) {
      sorted.push(array[i].shift())
    }
    sorted.push(...snailRec(array))
    return sorted
  }
}

const snailIter = array => {
  const sorted = []
  while (array.length) {
    sorted.push(...array.shift())
    for (let i = 0; i < array.length; i++) {
      sorted.push(array[i].pop())
    }
    sorted.push(...(array.pop() || []).reverse())
    for (let i = array.length - 1; i >= 0; i--) {
      sorted.push(array[i].shift())
    }
  }
  return sorted
}

const spiralOrder = matrix => {
  const sorted = []
  while (matrix.length) {
    sorted.push(...matrix.shift())
    for (let i = 0; i < matrix.length; i++) {
      const next = matrix[i].pop()
      if (next !== undefined) sorted.push(next)
    }
    sorted.push(...(matrix.pop() || []).reverse())
    for (let i = matrix.length - 1; i >= 0; i--) {
      const next = matrix[i].shift()
      if (next !== undefined) sorted.push(next)
    }
  }
  return sorted
}

const spiralOrderNonMutating = matrix => {
  const res = []

  const length = matrix.length
  const width = matrix[0].length
  const seen = new Array(length).fill(null).map(_ => new Array(width).fill(false))
  const layerConstraint = Math.ceil(Math.min(length, width) / 2)

  for (let layer = 0; layer < layerConstraint; layer++) {
    for (let topI = layer; topI < width - layer - 1; topI++) {
      seen[layer][topI] = true
      res.push(matrix[layer][topI])
    }
    for (let rightI = layer; rightI < length - 1 - layer; rightI++) {
      seen[rightI][width - 1 - layer] = true
      res.push(matrix[rightI][width - 1 - layer])
    }
    for (let bottomI = width - 1 - layer; bottomI >= layer; bottomI--) {
      if (!seen[length - 1 - layer][bottomI]) {
        seen[length - 1 - layer][bottomI] = true
        res.push(matrix[length - 1 - layer][bottomI])
      }
    }
    for (let leftI = length - 1 - 1 - layer; leftI >= layer + 1; leftI--) {
      if (!seen[leftI][layer]) {
        seen[leftI][layer] = true
        res.push(matrix[leftI][layer])
      }
    }
  }

  return res
}

module.exports = {
  snailRec,
  snailIter,
  spiralOrder,
  spiralOrderNonMutating,
}
