// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
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
const postorderTraversal = (root) => {
  const res = []
  if (!root) return res
  res.push(...postorderTraversal(root.left))
  res.push(...postorderTraversal(root.right))
  res.push(root.val)
  return res
}

const postorderTraversalIter = (root) => {
  const res = []
  const stack = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    if (stack[stack.length - 1].right) {
      root = stack[stack.length - 1].right
      stack[stack.length - 1].right = null
    } else {
      res.push(stack.pop().val)
    }
  }
  return res
}
