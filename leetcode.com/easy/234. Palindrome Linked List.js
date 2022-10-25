// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

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

const reverseLL = (head) => {
  if (!head || !head.next) return head
  const rest = reverseLL(head.next)
  head.next.next = head
  head.next = null
  return rest
}

const isPalindrome = (head) => {
  if (!head || !head.next) return true
  let start = head
  let middle = head
  let leader = head
  while (leader && leader.next) {
    middle = middle.next
    leader = leader.next.next
  }
  if (leader) middle = middle.next
  middle = reverseLL(middle)
  while (middle) {
    if (start.val !== middle.val) return false
    start = start.next
    middle = middle.next
  }
  return true
}

const isPalindromeClever = (head) => {
  let current = head
  let result = true

  const traverse = (list) => {
    if (list) {
      traverse(list.next)
      if (list.val != current.val) {
        result = false
        return
      }
      current = current.next
    }
  }

  traverse(head)
  return result
}
