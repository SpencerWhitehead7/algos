// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
// begin to intersect at node c1.

// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.
// Credits:
// Special thanks to @stellari for adding this problem and creating all test cases.

package algos

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	if headA == nil || headB == nil {
		return nil
	}

	var lastNode *ListNode
	pointerA := headA
	pointerB := headB
	for pointerA != pointerB {
		if pointerA.Next != nil {
			pointerA = pointerA.Next
		} else {
			if lastNode != nil && pointerA != lastNode {
				return nil
			}
			lastNode = pointerA
			pointerA = headB
		}

		if pointerB.Next != nil {
			pointerB = pointerB.Next
		} else {
			if lastNode != nil && pointerB != lastNode {
				return nil
			}
			lastNode = pointerB
			pointerB = headA
		}
	}

	return pointerA
}
