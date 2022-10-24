// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list.The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



//   Example 1:


// Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range[0, 50].
// - 100 <= Node.val <= 100
// Both list1 and list2 are sorted in non - decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => { // see .go version for a recursive implementation
  if (!l1) return l2
  if (!l2) return l1

  const res = l1.val < l2.val ? l1 : l2
  let base = l1.val < l2.val ? l1 : l2
  let merge = l1.val < l2.val ? l2 : l1
  while (merge) {
    if (!base.next) {
      base.next = merge
      break
    } else if (base.next.val < merge.val) {
      base = base.next
    } else {
      const mergeNode = merge
      merge = merge.next
      mergeNode.next = base.next
      base.next = mergeNode
      base = base.next
    }
  }
  return res
}

// Pushing into new list
const mergeTwoListsImmutable = (l1, l2) => {
  const res = new ListNode(0)
  let curr = res
  while (l1 && l2) {
    let smaller
    if (l1.val < l2.val) {
      smaller = l1
      l1 = l1.next
    } else {
      smaller = l2
      l2 = l2.next
    }
    curr.next = smaller
    curr = curr.next
  }
  curr.next = l1 ? l1 : l2
  return res.next
}
