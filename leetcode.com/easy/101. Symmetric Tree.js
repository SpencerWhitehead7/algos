// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Follow up: Solve it both recursively and iteratively.

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
const isSymmetric = root => {
  if (!root) return true

  const mirrorCompare = (node1, node2) => {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false
    if (node1.val !== node2.val) return false
    return mirrorCompare(node1.left, node2.right) && mirrorCompare(node1.right, node2.left)
  }

  return mirrorCompare(root.left, root.right)
}
