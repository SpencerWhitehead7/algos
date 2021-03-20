// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  const res = []

  let startIndex = 0
  const currLevelNodes = root ? [root] : []
  while (currLevelNodes.length !== startIndex) {
    const currLevelValues = []
    const endIndex = currLevelNodes.length
    for (let i = startIndex; i < endIndex; i++) {
      const node = currLevelNodes[i]
      currLevelValues.push(node.val)
      if (node.left) currLevelNodes.push(node.left)
      if (node.right) currLevelNodes.push(node.right)
    }
    startIndex = endIndex
    res.push(currLevelValues)
  }

  return res
}
