# Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

# For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

# Example:

# Given the sorted array: [-10,-3,0,5,9],

# One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

#       0
#      / \
#    -3   9
#    /   /
#  -10  5

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        def helper(start: int, end: int) -> TreeNode:
            if start > end:
                return None
            middle = (start + end) // 2
            newNode = TreeNode(nums[middle])
            newNode.left = helper(start, middle - 1)
            newNode.right = helper(middle + 1, end)
            return newNode
        return helper(0, len(nums) -1)
