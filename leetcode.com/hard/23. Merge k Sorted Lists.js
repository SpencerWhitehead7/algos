// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.



// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []


// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const naiveMergeKLists = lists => { // 515 ms (not that leetcode is very reliable about these things)
  lists = lists.filter(ll => ll !== null)
  const mergedHead = new ListNode(0)
  let merged = mergedHead

  while (lists.length > 0) {
    const nextNode = lists.reduce((acc, curr) => (acc.val < curr.val ? acc : curr), new ListNode(Infinity))

    const nextNodeI = lists.indexOf(nextNode)
    lists[nextNodeI] = lists[nextNodeI].next
    if (lists[nextNodeI] === null) {
      lists.splice(nextNodeI, 1)
    }

    merged.next = nextNode
    merged = merged.next
  }

  return mergedHead.next
}

// the speed difference is because the flatten doesn't have to do any extra work finding the next smallest node; it just continuously folds the results forward

const flattenMergeKLists = lists => lists // 334 ms (not that leetcode is very reliable about these things)
  .filter(ll => ll !== null)
  .reduce((acc, curr) => mergeLists(acc, curr))

// the speed difference is because the recursive isn't rechecking nodes as many times as blindly folding repeatedly into the one gigantic list

const recursiveMergeKLists = lists => { // 180 ms (not that leetcode is very reliable about these things)
  lists.filter(ll => ll !== null)
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  const mergedLists = lists.length % 2 === 0 ? [] : [lists[lists.length - 1]]
  for (let i = 0; i < lists.length - 1; i += 2) {
    mergedLists.push(mergeLists(lists[i], lists[i + 1]))
  }

  return recursiveMergeKLists(mergedLists)
}

const mergeLists = (l1, l2) => {
  const mergedHead = new ListNode(0)
  let merged = mergedHead

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      merged.next = l1
      l1 = l1.next
    } else {
      merged.next = l2
      l2 = l2.next
    }
    merged = merged.next
  }

  if (l1 !== null) {
    merged.next = l1
  }
  if (l2 !== null) {
    merged.next = l2
  }

  return mergedHead.next
}
