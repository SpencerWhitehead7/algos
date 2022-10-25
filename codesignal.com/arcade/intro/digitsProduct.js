// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer product

// Guaranteed constraints:
// 0 ≤ product ≤ 600.

// [output] integer

const digitsProduct = (product) => {
  if (product === 0) return 10
  if (product < 10) return product
  const products = [9, 8, 7, 6, 5, 4, 3, 2, 1]
  const factors = []
  while (product !== 1) {
    for (let i = 0; i < products.length; i++) {
      const possibleFactor = products[i]
      if (possibleFactor === 1) return -1
      if (Math.floor(product / possibleFactor) === product / possibleFactor) {
        factors.push(possibleFactor)
        product /= possibleFactor
        break
      }
    }
  }
  factors.sort((a, b) => a - b)
  return Number(factors.join(``))
}
