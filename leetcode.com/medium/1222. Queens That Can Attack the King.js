// On a 0-indexed 8 x 8 chessboard, there can be multiple black queens ad one white king.

// You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the position of the ith black queen on the chessboard. You are also given an integer array king of length 2 where king = [xKing, yKing] represents the position of the white king.

// Return the coordinates of the black queens that can directly attack the king. You may return the answer in any order.

// Example 1:

// Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
// Output: [[0,1],[1,0],[3,3]]
// Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).
// Example 2:

// Input: queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]
// Output: [[2,2],[3,4],[4,4]]
// Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).

// Constraints:

// 1 <= queens.length < 64
// queens[i].length == king.length == 2
// 0 <= xQueeni, yQueeni, xKing, yKing < 8
// All the given positions are unique.

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttacktheKing = (queens, king) => {
  const [kri, kci] = king

  const queensRowMap = queens.reduce((map, [ri, ci]) => {
    map[ri] ??= {}
    map[ri][ci] = true
    return map
  }, {})

  let lh, rh, tv, bv, uld, urd, lrd, lld
  for (let i = 1; i < 8; i++) {
    const t = kri - i
    const r = kci + i
    const b = kri + i
    const l = kci - i
    if (!lh && queensRowMap[kri]?.[l]) lh = [kri, l]
    if (!rh && queensRowMap[kri]?.[r]) rh = [kri, r]
    if (!tv && queensRowMap[t]?.[kci]) tv = [t, kci]
    if (!bv && queensRowMap[b]?.[kci]) bv = [b, kci]
    if (!uld && queensRowMap[t]?.[l]) uld = [t, l]
    if (!urd && queensRowMap[t]?.[r]) urd = [t, r]
    if (!lrd && queensRowMap[b]?.[r]) lrd = [b, r]
    if (!lld && queensRowMap[b]?.[l]) lld = [b, l]
  }

  return [lh, rh, tv, bv, uld, urd, lld, lrd].filter(Boolean)
}
