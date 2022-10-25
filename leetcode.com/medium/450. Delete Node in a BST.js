// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).

// Example:

// root = [5,3,6,2,4,null,7]
// key = 3

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Given key to delete is 3. So we find the node with value 3 and delete it.

// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

//     5
//    / \
//   4   6
//  /     \
// 2       7

// Another valid answer is [5,2,6,null,4,null,7].

//     5
//    / \
//   2   6
//    \   \
//     4   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNodeIter = (root, key) => {
  let curr = root
  let prev
  let ref
  while (curr) {
    if (curr.val > key) {
      prev = curr
      curr = curr.left
    } else if (curr.val < key) {
      prev = curr
      curr = curr.right
    } else {
      if (!curr.left || !curr.right) {
        if (!prev) {
          return curr.left || curr.right
        } else {
          prev.val > key
            ? (prev.left = curr.left || curr.right)
            : (prev.right = curr.left || curr.right)
          return root
        }
      }
      ref = curr
      prev = curr
      curr = curr.right
      while (curr.left) {
        prev = curr
        curr = curr.left
      }
      ref.val = curr.val
      prev.left === curr ? (prev.left = null) : (prev.right = null)
      key = curr.val
    }
  }
  return root
}

const deleteNodeRec = (root, key) => {
  if (root === null) return null
  if (root.val === key) {
    if (root.left === null) return root.right
    if (root.right === null) return root.left
    let next = root.right
    while (next.left) {
      next = next.left
    }
    next.left = root.left
    return root.right
  }
  if (root.val > key) root.left = deleteNodeRec(root.left, key)
  else if (root.val < key) root.right = deleteNodeRec(root.right, key)
  return root
}
