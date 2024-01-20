// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:

// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

package algos

func partition(head *ListNode, x int) *ListNode {
	ltX := &ListNode{}
	ltXTail := ltX

	gteX := &ListNode{}
	gteXTail := gteX

	for head != nil {
		if head.Val < x {
			ltXTail.Next = head
			ltXTail = ltXTail.Next
		} else {
			gteXTail.Next = head
			gteXTail = gteXTail.Next
		}

		next := head.Next
		head.Next = nil
		head = next
	}

	if ltX.Next == nil {
		return gteX.Next
	}

	ltXTail.Next = gteX.Next
	return ltX.Next
}
