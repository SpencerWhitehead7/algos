// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

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
// Pushing into new list
const mergeTwoLists = function(l1, l2){
  const res = new ListNode(0)
  let curr = res
  while(l1 && l2){
    let smallest = Infinity
    if(l1.val < l2.val){
      smallest = l1.val
      l1 = l1.next
    }else{
      smallest = l2.val
      l2 = l2.next
    }
    curr.next = new ListNode(smallest)
    curr = curr.next
  }
  curr.next = l1 ? l1 : l2
  return res.next
}

// Merging in place
const mergeTwoLists = function(l1, l2){
  if(!l1){
    return l2
  }else if(!l2){
    return l1
  }else if(!l1 && !l2){
    return null
  }
  const res = l1.val < l2.val ? l1 : l2
  let base = l1.val < l2.val ? l1 : l2
  let merge = l1.val < l2.val ? l2 : l1
  while(merge){
    if(!base.next){
      base.next = merge
      break
    }else if(base.next.val < merge.val){
      base = base.next
    }else{
      const mergeNode = merge
      merge = merge.next
      mergeNode.next = base.next
      base.next = mergeNode
      base = base.next
    }
  }
  return res
}
