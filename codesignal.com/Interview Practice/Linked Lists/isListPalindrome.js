// Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

// Given a singly linked list of integers, determine whether or not it's a palindrome.

// Example

// For l = [0, 1, 0], the output should be
// isListPalindrome(l) = true;
// For l = [1, 2, 2, 3], the output should be
// isListPalindrome(l) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] linkedlist.integer l

// A singly linked list of integers.

// Guaranteed constraints:
// 0 ≤ list size ≤ 5 · 105,
// -109 ≤ element value ≤ 109.

// [output] boolean

// Return true if l is a palindrome, otherwise return false.

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
const isListPalindrome = l => {
  let fast = l
  let slow = l
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
  }
  if(fast) slow = slow.next
  let firstHalf = l
  let secondHalf = reverseList(slow)
  while(secondHalf){
    if(firstHalf.value !== secondHalf.value) return false
    firstHalf = firstHalf.next
    secondHalf = secondHalf.next
  }
  return true
}

const reverseList = head => {
  if(!head || !head.next) return head
  const rest = reverseList(head.next)
  head.next.next = head
  head.next = null
  return rest
}
