// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Example 1:

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5
// Example 2:

// Input: 1->1->1->2->3
// Output: 2->3

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
const deleteDuplicates = head => {
  if(!head || !head.next) return head
  const dummy = new ListNode(0)
  dummy.next = head
  let base = dummy
  let follower = head
  let leader = head.next
  while(leader){
    if(leader.val === follower.val){
      while(leader && leader.val === follower.val){
        leader = leader.next
      }
      base.next = leader
      follower = leader
      if(leader) leader = leader.next
    }else{
      base = base.next
      follower = follower.next
      leader = leader.next
    }
  }
  return dummy.next
}
