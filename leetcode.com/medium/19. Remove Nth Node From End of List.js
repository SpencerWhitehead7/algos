// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let fast = head
  let slow = head

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  if (fast === null) return head.next

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next

  return head
}
