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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null

  let lastNode = null
  let pointerA = headA
  let pointerB = headB
  while (pointerA !== pointerB) {
    if (pointerA.next) {
      pointerA = pointerA.next
    } else {
      if (lastNode && pointerA !== lastNode) return null
      lastNode = pointerA
      pointerA = headB
    }

    if (pointerB.next) {
      pointerB = pointerB.next
    } else {
      if (lastNode && pointerB !== lastNode) return null
      lastNode = pointerB
      pointerB = headA
    }
  }

  return pointerA
}
