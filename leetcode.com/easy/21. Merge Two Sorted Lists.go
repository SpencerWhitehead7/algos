// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

package algos

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	// see .js file for an iterative implementation
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}

	var smallest *ListNode
	if l1.Val <= l2.Val {
		smallest = l1
		smallest.Next = mergeTwoLists(l1.Next, l2)
	} else {
		smallest = l2
		smallest.Next = mergeTwoLists(l1, l2.Next)
	}

	return smallest
}
