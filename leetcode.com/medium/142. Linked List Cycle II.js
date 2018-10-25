// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// Note: Do not modify the linked list.

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
 * @return {ListNode}
 */
const detectCycle = head => {
  if(!head) return null
  let tortoise = head
  let hare = head.next
  while(hare && hare.next && hare !== tortoise){
    tortoise = tortoise.next
    hare = hare.next.next
  }
  if(!hare || !hare.next) return null
  let counter = 1
  hare = hare.next
  while(hare !== tortoise){
    hare = hare.next
    counter++
  }
  hare = head
  tortoise = head
  let counter2 = 0
  while(counter2 < counter){
    hare = hare.next
    counter2++
  }
  while(tortoise !== hare){
    hare = hare.next
    tortoise = tortoise.next
  }
  return tortoise
}
