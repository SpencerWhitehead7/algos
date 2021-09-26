// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Pushing into new list
// const mergeTwoLists = (l1, l2) => {
//   const res = new ListNode(0)
//   let curr = res
//   while (l1 && l2) {
//     let smaller
//     if (l1.val < l2.val) {
//       smaller = l1
//       l1 = l1.next
//     } else {
//       smaller = l2
//       l2 = l2.next
//     }
//     curr.next = smaller
//     curr = curr.next
//   }
//   curr.next = l1 ? l1 : l2
//   return res.next
// }

package algos

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
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
