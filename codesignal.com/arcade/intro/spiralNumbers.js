// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// spiralNumbers(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Matrix size, a positive integer.

// Guaranteed constraints:
// 3 ≤ n ≤ 100.

// [output] array.array.integer

const spiralNumbers = n => {
  let count = 1
  let depth = 0
  const res = []
  for(let i = 0; i < n; i++){
    res.push(new Array(n))
  }
  while(count < n * n){
    for(let i = depth; i < n - depth; i++){
      res[depth][i] = count++
    }
    for(let i = depth + 1; i < n - 1 - depth; i++){
      res[i][res[i].length - 1 - depth] = count++
    }
    for(let i = n - 1 - depth; i >= 0 + depth; i--){
      res[n - 1 - depth][i] = count++
    }
    for(let i = n - 2 - depth; i > 0 + depth; i--){
      res[i][0 + depth] = count++
    }
    depth++
  }
  if(n % 2 === 1){
    const center = Math.floor(n / 2)
    res[center][center] = count
  }
  return res
}
