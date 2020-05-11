// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// For example,

// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3
// And the value to insert: 5
// You can return this binary search tree:

//          4
//        /   \
//       2     7
//      / \   /
//     1   3 5
// This tree is also valid:

//          5
//        /   \
//       2     7
//      / \
//     1   3
//          \
//           4


// Constraints:

// The number of nodes in the given tree will be between 0 and 10^4.
// Each node will have a unique integer value from 0 to -10^8, inclusive.
// -10^8 <= val <= 10^8
// It's guaranteed that val does not exist in the original BST.

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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBSTRec = (root, val) => {
  if (!root) return new TreeNode(val)

  if (val > root.val) {
    if (!root.right) {
      root.right = new TreeNode(val)
    } else {
      insertIntoBSTRec(root.right, val)
    }
  } else if (val < root.val) {
    if (!root.left) {
      root.left = new TreeNode(val)
    } else {
      insertIntoBSTRec(root.left, val)
    }
  }
  return root
}

const insertIntoBSTIter = (root, val) => {
  const newNode = new TreeNode(val)
  if (!root) return newNode

  let curr = root
  let parent
  while (curr) {
    if (curr.val > val) {
      parent = curr
      curr = curr.left
    } else {
      parent = curr
      curr = curr.right
    }
  }

  parent.val > val ? parent.left = newNode : parent.right = newNode

  return root
}
