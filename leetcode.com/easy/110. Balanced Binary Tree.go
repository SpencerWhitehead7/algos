// Given a binary tree, determine if it is
// height-balanced
// .

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

package algos

func isBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}

	isLeftBalanced := isBalanced(root.Left)
	if !isLeftBalanced {
		return false
	}
	isRightBalanced := isBalanced(root.Right)
	if !isRightBalanced {
		return false
	}
	depthDifference := maxDepth(root.Left) - maxDepth(root.Right)

	return depthDifference >= -1 && depthDifference <= 1
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return 1 + max(maxDepth(root.Left), maxDepth(root.Right))
}
