// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
const BSTIterator = function (root) {
  this.root = root
  this.stack = []

  const processTree = (root) => {
    if (root) {
      if (root.left) {
        processTree(root.left)
      }
      this.stack.push(root.val)
      if (root.right) {
        processTree(root.right)
      }
    }
  }

  processTree(root)
  this.stack.reverse()
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0
}

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  return this.stack.pop()
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
