// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3

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
  if (!head) return head

  let follower = head
  let leader = head.next
  while (leader) {
    while (leader && leader.val === follower.val) {
      leader = leader.next
    }
    follower.next = leader
    follower = follower.next
    if (leader) leader = leader.next
  }
  return head
}
