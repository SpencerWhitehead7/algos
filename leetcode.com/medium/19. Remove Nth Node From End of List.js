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
const removeNthFromEnd = function(head, n){
  const placeHolder = new ListNode(0)
  placeHolder.next = head
  let lead = placeHolder
  let follow = placeHolder
  for(let i=0; i<n; i++){
    lead = lead.next
  }
  while(lead.next){
    lead = lead.next
    follow = follow.next
  }
  follow.next = follow.next.next
  return placeHolder.next
}
