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
const hasCycle = head => {
  if(!head) return false
  let tortoise = head
  let hare = head.next
  while(hare && hare.next && hare !== tortoise){
    hare = hare.next.next
    tortoise = tortoise.next
  }
  return hare === tortoise
}
