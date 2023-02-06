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
const inorderTraversalRec = (root) => {
  const res = []

  if (root.left) res.push(...inorderTraversalRec(root.left))
  res.push(root.val)
  if (root.right) res.push(...inorderTraversalRec(root.right))

  return res
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversalIter = (root) => {
  const res = []

  const stack = []
  let curr = root
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }

  return res
}
