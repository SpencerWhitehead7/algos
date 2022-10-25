// Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const res = []
  const stack = []
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop()
    }
    res.unshift(stack[stack.length - 1] ? stack[stack.length - 1] - i : 0)
    stack.push(i)
  }
  return res
}
