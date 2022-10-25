// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Example 1:

// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:

// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

// Constraints:

// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNumIter = (isConnected) => {
  let provinceCount = 0

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1) {
        provinceCount++
        const stack = [[i, j]]
        while (stack.length) {
          const [ownIdx, neiIdx] = stack.pop()
          isConnected[ownIdx][neiIdx] = 2
          isConnected[neiIdx][ownIdx] = 2
          for (let k = 0; k < isConnected[neiIdx].length; k++) {
            if (isConnected[neiIdx][k] === 1) stack.push([neiIdx, k])
          }
        }
      }
    }
  }

  return provinceCount
}

const findCircleNumRec = (isConnected) => {
  const dfs = (ownIdx, neiIdx) => {
    isConnected[ownIdx][neiIdx] = 2
    isConnected[neiIdx][ownIdx] = 2
    for (let k = 0; k < isConnected[neiIdx].length; k++) {
      if (isConnected[neiIdx][k] === 1) dfs(neiIdx, k)
    }
  }

  let provinceCount = 0

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1) {
        provinceCount++
        dfs(i, j)
      }
    }
  }

  return provinceCount
}
