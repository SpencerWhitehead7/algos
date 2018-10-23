// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSumRec = (root, sum, memo = [], res = []) => {
  if(!root) return []
  const newMemo = memo.map(ele => ele)
  newMemo.push(root.val)
  if(!root.left && !root.right && newMemo.reduce((acc, curr) => acc + curr) === sum){
    res.push(newMemo)
  }else{
    pathSumRec(root.left, sum, newMemo, res)
    pathSumRec(root.right, sum, newMemo, res)
  }
  return res
}
