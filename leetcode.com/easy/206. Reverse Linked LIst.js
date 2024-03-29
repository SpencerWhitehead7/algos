// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListIter = (head) => {
  let curr = head
  let prev = null
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
const reverseListRec = (head) => {
  if (!head || !head.next) return head
  const rest = reverseListRec(head.next)
  head.next.next = head
  head.next = null
  return rest
}
const reverseListRec2 = (head, prev = null) => {
  if (!head) return head
  if (!head.next) {
    head.next = prev
    return head
  }

  const nextNode = head.next
  head.next = prev

  return reverseListRec2(nextNode, head)
}
