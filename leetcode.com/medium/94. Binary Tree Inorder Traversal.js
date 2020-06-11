// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
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

// Rec
const inorderTraversalRec = function(root) {
  const res = []
  if (!root) return res
  if (root.left) res.push(...inorderTraversalRec(root.left))
  res.push(root.val)
  if (root.right) res.push(...inorderTraversalRec(root.right))
  return res
}

// Iter
const inorderTraversalIter = function(root) {
  const res = []
  if (!root) return res
  const stack = [root]
  while (stack.length > 0) {
    const curr = stack.pop()
    if (curr.flag) {
      res.push(curr.val)
    } else {
      curr.flag = 1
      if (curr.right) {
        stack.push(curr.right)
      }
      stack.push(curr)
      if (curr.left) {
        stack.push(curr.left)
      }
    }
  }
  return res
}
