// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

// Note: The boy can buy the ice cream bars in any order.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// You must solve the problem by counting sort.

// Example 1:

// Input: costs = [1,3,2,4,1], coins = 7
// Output: 4
// Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
// Example 2:

// Input: costs = [10,6,8,7,7,8], coins = 5
// Output: 0
// Explanation: The boy cannot afford any of the ice cream bars.
// Example 3:

// Input: costs = [1,6,3,1,2,5], coins = 20
// Output: 6
// Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.

// Constraints:

// costs.length == n
// 1 <= n <= 105
// 1 <= costs[i] <= 105
// 1 <= coins <= 108

const maxIceCream = (costs: number[], coins: number): number => {
  const startAt = Math.min(...costs)
  if (startAt > coins) return 0

  const endAt = Math.min(Math.max(...costs), coins)

  const sorted = Array(endAt + 1 - startAt).fill(0)
  for (const c of costs) {
    if (c <= coins) {
      sorted[c - startAt]++
    }
  }
  // all this ^^ nonsense doesn't change the algorithmic complexity in terms of O(N)
  // but it does change _what_ the N is in ways that help a lot for pathological inputs
  // doing it with a straightforward
  //   const sorted = Array(coins + 1).fill(0)
  //   for (const c of costs) {
  //     if (c <= coins) sorted[c]++
  //   }
  // timed out
  // but optimizations like the Math.min for endAt didn't make a difference, which I think
  // is also silly - either give us all the pathological inputs and require every shortcut
  // or none of them and let us write something algorithmically simpler

  let total = 0
  let i = 0
  while (i < sorted.length && coins - (startAt + i) >= 0) {
    const currentPrice = startAt + i
    const availableQuantity = sorted[i]
    const purchasableQuantity = Math.floor(coins / currentPrice)
    const quantity = Math.min(availableQuantity, purchasableQuantity)

    coins -= quantity * currentPrice
    total += quantity
    i++
  }

  return total
}
