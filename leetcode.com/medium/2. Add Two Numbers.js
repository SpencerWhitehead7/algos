// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2){
  const start = new ListNode(0)
  let currentNode = start
  let carry = 0
  while(l1 || l2 || carry){
    const dSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    const nextNode = new ListNode(dSum%10)
    carry = Math.floor(dSum/10) !== 0 ? 1 : 0
    currentNode.next = nextNode
    currentNode = nextNode
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  return start.next
}
