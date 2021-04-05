// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.



// Example 1:


// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// Example 2:

// Input: n = 1
// Output: [[1]]


// Constraints:

// 1 <= n <= 8

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = n => {
  if (n === 1) return [new TreeNode(1)]

  const copy = tree => (!tree ? tree : new TreeNode(tree.val, copy(tree.left), copy(tree.right)))

  return generateTrees(n - 1).flatMap(tree => {
    let insertionPoint = tree
    const res = [new TreeNode(n, tree)]

    while (insertionPoint) {
      const treeCopy = copy(tree)
      let treeCopyRightWalk = treeCopy

      let rightWalk = tree
      while (insertionPoint !== rightWalk) {
        rightWalk = rightWalk.right
        treeCopyRightWalk = treeCopyRightWalk.right
      }

      treeCopyRightWalk.right = new TreeNode(n, treeCopyRightWalk.right)

      res.push(treeCopy)
      insertionPoint = insertionPoint.right
    }

    return res
  })
}
