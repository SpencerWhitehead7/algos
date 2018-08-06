// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val){
  if(head === null) return null
  let prev = head
  let curr = prev.next
  while(curr){
    if(curr.val === val){
      prev.next = prev.next.next
      curr = prev.next
    }else{
      prev = curr
      curr = curr.next
    }
  }
  return head.val === val ? head.next : head
}
