// RENDERED OBSOLETE BY BY MUCH BETTER SOLUTION TO LEETCODE/EASY/118. Pascal's Triangle.JS

// Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth

// The triangle should be returned as a nested array.

// Note: For JavaScript version, your final result is a string representation of the array. Sorry for the inconvenience, test cases are locked so this is the best I could do.

// - V

// for example:

// pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1"). eg

//           [1]
//         [1   1]
//        [1  2  1]
//       [1  3  3  1]
// here you get the 3 by adding the 2 and 1 above it.

const pascal = depth => {
  const res = [[1]]
  for(let i = 2; i <= depth; i++){
    const prevLayer = res[res.length - 1]
    prevLayer.unshift(0)
    prevLayer.push(0)
    const nextLayer = []
    for(let n = 0; n < i; n++){
      nextLayer.push(prevLayer[n] + prevLayer[n + 1])
    }
    prevLayer.shift()
    prevLayer.pop()
    res.push(nextLayer)
  }
  return JSON.stringify(res)
}
