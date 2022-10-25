// We are given head, the head node of a linked list containing unique integer values.

// We are also given the list G, a subset of the values in the linked list.

// Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.

// Example 1:

// Input:
// head: 0->1->2->3
// G = [0, 1, 3]
// Output: 2
// Explanation:
// 0 and 1 are connected, so [0, 1] and [3] are the two connected components.
// Example 2:

// Input:
// head: 0->1->2->3->4
// G = [0, 3, 1, 4]
// Output: 2
// Explanation:
// 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.
// Note:

// If N is the length of the linked list given by head, 1 <= N <= 10000.
// The value of each node in the linked list will be in the range [0, N - 1].
// 1 <= G.length <= 10000.
// G is a subset of all values in the linked list.

// SIGNIFICANTLY better explanation from random commenter in discussion page https://leetcode.com/problems/linked-list-components/discuss/131853/Can-someone-explain-the-test-case

// Absolute garbage explanation and test cases from leetcode. Let me help, here are some sample inputs:

// List =>  0->1->2->3->4->5->6->7->NULL
// G    =>  [0,2,3,5,7]
// Every element of the linked list that is in G is a component. So these are all components (marked with a 'c'):

//          c     c  c     c     c
// List =>  0->1->2->3->4->5->6->7->NULL
// If you were to group together all of the components (c), then you would have the following groups:

// 0->
// 2->3->
// 5->
// 7->
// Thus, 4 components... you're welcome.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
const numComponents = (head, G) => {
  const testSet = new Set(G)
  let res = 0
  let pointer = head
  while (pointer) {
    if (testSet.has(pointer.val)) {
      res++
      while (pointer && testSet.has(pointer.val)) {
        pointer = pointer.next
      }
    } else {
      pointer = pointer.next
    }
  }
  return res
}
