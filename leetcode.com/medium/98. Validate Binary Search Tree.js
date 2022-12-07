// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:

// Input:
//     2
//    / \
//   1   3
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6
// Output: false
// Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
//              is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  // uses special tree property (dfs in order will produce sorted list for valid BSTs)
  if (!root) return true

  const sortedBST = []
  const dfsInOrder = (root) => {
    if (!root) return

    dfsInOrder(root.left)
    sortedBST.push(root.val)
    dfsInOrder(root.right)
  }
  dfsInOrder(root)

  for (let i = 1; i < sortedBST.length; i++) {
    if (sortedBST[i] <= sortedBST[i - 1]) return false
  }
  return true
}

const isValidBSTDandC = (root, min = null, max = null) => {
  // uses divide and conquer (validates each subtree recursively)
  if (!root) return true

  if (min !== null && root.val <= min.val) return false
  if (max !== null && root.val >= max.val) return false

  return (
    isValidBSTDandC(root.left, min, root) &&
    isValidBSTDandC(root.right, root, max)
  )
}
const isValidBSTDandC2 = (root, min = -Infinity, max = Infinity) => {
  // I absolutely don't trust the leetcode runner for JS, but it says this version is way slower than the one that passes nodes?
  // it is simpler though
  if (!root) return true

  if (root.val <= min) return false
  if (root.val >= max) return false

  return (
    isValidBSTDandC2(root.left, min, root.val) &&
    isValidBSTDandC2(root.right, root.val, max)
  )
}
