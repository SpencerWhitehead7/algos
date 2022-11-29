// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
  fun rotateRight(head: ListNode?, k: Int): ListNode? {
      if (head === null || head?.next === null || k === 0) return head

      var ptr = head
      var size = 1
      while (ptr?.next !== null) {
          ptr = ptr!!.next
          size++
      }
      ptr?.next = head

      var rotateTo = Math.abs(size - k % size)
      while(rotateTo > 0){
          ptr = ptr!!.next
          rotateTo--
      }

      val res = ptr!!.next
      ptr!!.next = null
      return res
  }
}
