// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.

const coinChange = (coins, amount) => {
  const dpArr = new Array(amount + 1)
  dpArr[0] = 0
  for (let i = 1; i <= amount; i++) {
    dpArr[i] = Infinity
    coins.forEach((coin) => {
      if (i - coin >= 0) {
        dpArr[i] = Math.min(dpArr[i], dpArr[i - coin] + 1)
      }
    })
  }
  return dpArr[amount] === Infinity ? -1 : dpArr[amount]
}
