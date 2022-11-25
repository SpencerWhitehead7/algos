// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

// Example 1:

// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodesOn = (root) =>
  // to my considerable surprise, this does NOT time out, even though it's O(n) time complexity, counter to the instructions.
  root ? countNodesOn(root.left) + 1 + countNodesOn(root.right) : 0

/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = (root) => {
  // to my even greater surprise, this sub O(n) solution is waaaaay slower than the O(n) one, at least according to leetcode's shitty unreliable runner.
  let lH = 0
  let lNode = root
  while (lNode) {
    lH++
    lNode = lNode.left
  }

  let rH = 0
  let rNode = root
  while (rNode) {
    rH++
    rNode = rNode.right
  }

  return lH === rH
    ? Math.pow(2, rH + 1) - 1
    : countNodes(root.left) + 1 + countNodes(root.right)
}
