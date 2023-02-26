// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
  const res = []
  if (!root) return res
  res.push(root.val)
  res.push(...preorderTraversal(root.left))
  res.push(...preorderTraversal(root.right))
  return res
}

const preorderTraversalIter = (root) => {
  const stack = []
  const res = []
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (root) {
      stack.push(root)
      res.push(root.val)
      root = root.left
    }
    if (!stack.length) {
      return res
    }
    root = stack.pop()
    root = root.right
  }
}
