// Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

// The length of the path between two nodes is represented by the number of edges between them.



// Example 1:


// Input: root = [5,4,5,1,1,5]
// Output: 2
// Example 2:


// Input: root = [1,4,5,4,4,5]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000
// The depth of the tree will not exceed 1000.

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
const longestUnivaluePath = root => {
  let res = 0

  const longestPath = node => {
    if (!node) return 0

    const longestLPath = longestPath(node.left)
    let leftPathLength = 0
    if (node.left?.val === node.val) leftPathLength += longestLPath + 1

    const longestRPath = longestPath(node.right)
    let rightPathLength = 0
    if (node.right?.val === node.val) rightPathLength += longestRPath + 1

    res = Math.max(res, leftPathLength + rightPathLength)
    return Math.max(leftPathLength, rightPathLength)
  }

  longestPath(root)

  return res
}

// seriously, fuck this algo... this is their preferred solution and it's still ugly as sin
