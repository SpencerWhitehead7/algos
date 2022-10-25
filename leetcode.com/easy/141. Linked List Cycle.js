// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (!head) return false

  let slow = head
  let fast = head.next
  while (fast?.next && fast !== slow) {
    slow = slow.next
    fast = fast.next.next
  }

  return fast === slow
}
