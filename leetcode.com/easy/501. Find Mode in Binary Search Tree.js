// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [1,null,2,2]
// Output: [2]
// Example 2:

// Input: root = [0]
// Output: [0]

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
 * @return {number[]}
 */
const findMode = (root) => {
  const counts = {}

  const stack = [root]
  while (stack.length > 0) {
    const node = stack.pop()
    if (node !== null) {
      counts[node.val] ??= 0
      counts[node.val]++
      stack.push(node.left)
      stack.push(node.right)
    }
  }

  let maxSoFar = 0
  let modes = []
  const itemCounts = Object.entries(counts)
  for (let i = 0; i < itemCounts.length; i++) {
    const [k, v] = itemCounts[i]
    if (v > maxSoFar) {
      maxSoFar = v
      modes = []
    }
    if (v === maxSoFar) {
      modes.push(k)
    }
  }

  return modes
}

const findModeConstantSpace = (root) => {
  let modes = []
  let maxCount = 0
  let prev = null
  let currCount = 0

  const dfs = (root) => {
    if (!root) return

    dfs(root.left)

    if (root.val === prev) {
      currCount++
    } else {
      currCount = 1
    }
    if (currCount === maxCount) {
      modes.push(root.val)
    }
    if (currCount > maxCount) {
      modes = [root.val]
      maxCount = currCount
    }

    prev = root.val

    dfs(root.right)
  }

  dfs(root)

  return modes
}
