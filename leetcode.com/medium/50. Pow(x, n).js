// Implement pow(x, n), which calculates x raised to the power n (i.e. xn).



// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25


// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) {
    return 1
  }
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n % 2 === 0) {
    const sqrt = myPow(x, n / 2)
    return sqrt * sqrt
  }
  return x * myPow(x, n - 1)
}

// (n > 1 || n < -1
//   ? n > 1
//     ? x * myPow(x, n - 1)
//     : myPow(x, n + 1) / x
//   : n === 0
//     ? 1
//     : n === 1
//       ? x
//       : 1 / x)

//  def Pow(self, x, n):
//  if n == 0:
//      return 1
//  if n < 0:
//      return 1 / self.Pow(x, -n)
//  elif n%2 == 0:
//      temp = self.Pow(x, n/2)
//      return temp*temp
//  else:
//      return x*self.Pow(x, n-1)
