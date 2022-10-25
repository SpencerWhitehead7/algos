// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSumRec = (root, sum, memo = [], res = []) => {
  if (!root) return []
  const newMemo = memo.map((ele) => ele)
  newMemo.push(root.val)
  if (
    !root.left &&
    !root.right &&
    newMemo.reduce((acc, curr) => acc + curr) === sum
  ) {
    res.push(newMemo)
  } else {
    pathSumRec(root.left, sum, newMemo, res)
    pathSumRec(root.right, sum, newMemo, res)
  }
  return res
}

// from https://leetcode.com/problems/path-sum-ii/discuss/132072/Iterative-DFS-in-JavaScript-Easy-to-follow!

const pathSumIter = (root, sum) => {
  const result = []
  if (!root) {
    return result
  }

  // Init stack with root, array of its val, and sum of its root.val
  const stack = [root, [root.val], root.val]
  while (stack.length > 0) {
    // Extract currSum, currPath, currNode from stack
    const currSum = stack.pop()
    const currPath = stack.pop()
    const currNode = stack.pop()

    // If we're at a leaf and currSum equals sum
    if (!currNode.left && !currNode.right && currSum === sum) {
      result.push(currPath.slice())
    }

    if (currNode.left) {
      stack.push(currNode.left)
      stack.push(currPath.concat(currNode.left.val))
      stack.push(currSum + currNode.left.val)
    }

    if (currNode.right) {
      stack.push(currNode.right)
      stack.push(currPath.concat(currNode.right.val))
      stack.push(currSum + currNode.right.val)
    }
  }

  return result
}

// from https://leetcode.com/problems/path-sum-ii/discuss/36775/Javascript-solution

const pathSumRec2 = (root, sum) => {
  const result = []

  // amountLeft is technically extraneous (you could sum the array every step), but does make things clearer/less computationally intensive
  const explore = (root, amountLeft, arr) => {
    if (!root) return

    amountLeft -= root.val
    arr.push(root.val)

    if (!root.left && !root.rigth && amountLeft === 0) {
      result.push(arr)
    } else {
      explore(
        root.left,
        amountLeft,
        arr.map((a) => a)
      )
      explore(
        root.right,
        amountLeft,
        arr.map((a) => a)
      )
    }
  }

  explore(root, sum, [])

  return result
}
