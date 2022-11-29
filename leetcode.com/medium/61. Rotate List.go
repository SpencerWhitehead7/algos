// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

package algos

func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil || k == 0 {
		return head
	}

	ptr := head
	size := 1
	for ptr.Next != nil {
		ptr = ptr.Next
		size++
	}
	ptr.Next = head

	rotateTo := size - (k % size)
	if rotateTo < 0 {
		rotateTo *= -1
	}
	for rotateTo > 0 {
		ptr = ptr.Next
		rotateTo--
	}

	res := ptr.Next
	ptr.Next = nil
	return res
}
