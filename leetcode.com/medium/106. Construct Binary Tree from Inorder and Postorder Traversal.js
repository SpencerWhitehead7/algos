// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:

// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  let postorderI = postorder.length
  const inorderIMap = inorder.reduce((acc, v, i) => {
    acc[v] = i
    return acc
  }, {})

  const buildSubtree = (l, r) => {
    if (l > r) return null

    postorderI--
    const val = postorder[postorderI]
    const inorderSplitI = inorderIMap[val]

    const rightSubtree = buildSubtree(inorderSplitI + 1, r)
    const leftSubtree = buildSubtree(l, inorderSplitI - 1)

    return new TreeNode(val, leftSubtree, rightSubtree)
  }

  return buildSubtree(0, inorder.length - 1)
}
