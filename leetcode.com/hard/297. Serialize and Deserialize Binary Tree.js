// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Example:

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

/* eslint-disable no-extra-parens, no-confusing-arrow */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => root
  ? [root.val, ...serialize(root.left), ...serialize(root.right)]
  : ``

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => {
  const nodeValues = data.reverse()

  const traverse = () => {
    const nextValue = nodeValues.pop()
    if (!nextValue) return null

    const nextNode = new TreeNode(Number(nextValue))
    nextNode.left = traverse()
    nextNode.right = traverse()
    return nextNode
  }

  return traverse()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// this (appears to?) work in that it passes 31/32 test cases, but it times out

const serializeSlow = root => {
  const res = [root]
  let ptr = 0
  while (ptr < res.length) {
    const curr = res[ptr]
    if (curr) {
      res[(ptr * 2) + 1] = curr.left
      res[(ptr * 2) + 2] = curr.right
      res[ptr] = curr.val
    }
    ptr++
  }
  return res
}

const deserializeSlow = (data, i = 0) => {
  if (!data[i]) return null

  const left = (i * 2) + 1
  const right = (i * 2) + 2
  const root = new TreeNode(data[i])
  root.left = deserializeSlow(data, left)
  root.right = deserializeSlow(data, right)

  return root
}
