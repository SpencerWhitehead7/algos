// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

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
const isPalindrome = (head) => {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  if (fast) slow = slow.next

  let firstHalf = head
  let secondHalf = reverseLL(slow)
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false
    firstHalf = firstHalf.next
    secondHalf = secondHalf.next
  }

  return true
}

const reverseLL = (head) => {
  if (!head || !head.next) return head
  const rest = reverseLL(head.next)
  head.next.next = head
  head.next = null
  return rest
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
