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
// merging them into one sorted linked list:
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

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 230 ms 62.2 mb
const mergeKLists_naive = (lists: Array<ListNode | null>): ListNode | null => {
  lists = lists.filter((ll) => ll !== null)

  const mergedBase = new ListNode(0)
  let merged = mergedBase

  const maxNode = new ListNode(Infinity)

  let nextNode = maxNode
  let nextNodeListI = -1
  while (lists.length > 0) {
    nextNode = maxNode
    for (let i = 0; i < lists.length; i++) {
      const ll = lists[i]
      if (ll && ll.val <= nextNode.val) {
        nextNode = ll
        nextNodeListI = i
      }
    }

    lists[nextNodeListI] = lists[nextNodeListI]!.next
    if (lists[nextNodeListI] === null) {
      lists[nextNodeListI] = lists[lists.length - 1]
      lists.pop()
    }

    merged.next = nextNode
    merged = merged.next
  }

  return mergedBase.next
}

// 273 ms 62.8 mb
const mergeKLists_repeatedFlatten = (
  lists: Array<ListNode | null>,
): ListNode | null => lists.reduce((acc, curr) => mergeLists(acc, curr), null)

// how is this so close in speed even though it's always folding into the same giant list over and over?
// I guess for their inputs, that cost is largely offset by skipping checking the heads of each list over and over?

// 5 ms 62.8 mb
const mergeKLists_byPairs = (
  lists: Array<ListNode | null>,
): ListNode | null => {
  if (lists.length === 0) return null

  while (lists.length > 1) {
    const mergedLists = []
    while (lists.length > 0) {
      mergedLists.push(mergeLists(lists.pop() ?? null, lists.pop() ?? null))
    }
    lists = mergedLists
  }

  return lists[0]
}

// wow I would not have expected that big a difference but there you go

const mergeLists = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  const mergedBase = new ListNode()
  let merged = mergedBase

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

  if (l1 !== null) merged.next = l1
  if (l2 !== null) merged.next = l2

  return mergedBase.next
}

// 16 ms 63.07 mb
const mergeKLists_tournamentTree_raw = (
  lists: Array<ListNode | null>,
): ListNode | null => {
  const mergedBase = new ListNode(0)
  let merged = mergedBase

  const tree = new TournamentTree(lists)
  let nextNode = tree.getWinner()
  while (nextNode) {
    merged.next = nextNode
    merged = merged.next

    nextNode = tree.getWinner()
  }

  return mergedBase.next
}

class TournamentTree {
  list: Array<ListNode | null>
  tree: Array<number>
  winnerListIdx: number

  constructor(list: Array<ListNode | null>) {
    const nextPowerOf2 = Math.ceil(Math.log2(list.length))
    const leafRowWidth = Math.pow(2, nextPowerOf2)

    const tree = Array.from<number>({ length: leafRowWidth * 2 - 1 })
    for (let i = 0; i < list.length; i++) {
      tree[tree.length - 1 - i] = i
    }
    for (let i = tree.length - 1 - list.length; i > leafRowWidth - 2; i--) {
      tree[i] = -1
    }

    const winners = [...tree]
    for (let i = leafRowWidth - 2; i >= 0; i--) {
      const lTreeIdx = 2 * i + 1
      const rTreeIdx = 2 * i + 2
      const lListIdx = winners[lTreeIdx]
      const rListIdx = winners[rTreeIdx]
      const lNode = list[lListIdx]
      const rNode = list[rListIdx]
      const lVal = lNode?.val ?? Infinity
      const rVal = rNode?.val ?? Infinity

      const winnerListIdx = lVal <= rVal ? lListIdx : rListIdx
      const loserListIdx = lVal > rVal ? lListIdx : rListIdx

      tree[i] = loserListIdx
      winners[i] = winnerListIdx
    }

    this.list = list
    this.tree = tree
    this.winnerListIdx = winners[0]
  }

  getWinner(): ListNode | null {
    const prevWinner = this.list[this.winnerListIdx]
    if (!prevWinner) return null

    this.list[this.winnerListIdx] = this.list[this.winnerListIdx]!.next

    let nextTreeIdx = this.tree.length - 1 - this.winnerListIdx
    while (nextTreeIdx > 0) {
      const parentTreeIdx = Math.floor((nextTreeIdx - 1) / 2)
      const candidateListIdx = this.winnerListIdx
      const parentListIdx = this.tree[parentTreeIdx]
      const candidateNode = this.list[candidateListIdx]
      const parentNode = this.list[parentListIdx]
      const candidateVal = candidateNode?.val ?? Infinity
      const parentVal = parentNode?.val ?? Infinity

      const winnerListIdx =
        candidateVal <= parentVal ? candidateListIdx : parentListIdx
      const loserListIdx =
        candidateVal > parentVal ? candidateListIdx : parentListIdx

      this.tree[parentTreeIdx] = loserListIdx
      this.winnerListIdx = winnerListIdx

      nextTreeIdx = parentTreeIdx
    }

    return prevWinner
  }
}

// 13 ms 64.39 mb
const mergeKLists_tournamentTree_iterator = (
  lists: Array<ListNode | null>,
): ListNode | null => {
  const mergedBase = new ListNode(0)
  let merged = mergedBase

  const tree = new TournamentTreeIterator(lists)
  for (const nextNode of tree) {
    merged.next = nextNode
    merged = merged.next
  }

  return mergedBase.next
}

// how tf is this faster than the raw version?
// when I ran it before as a closer to raw, non-has-a implementation, it was 24 ms 63.7 mb
// does node just have so much variance it's impossible to tell small differences apart?

class TournamentTreeIterator implements Iterable<ListNode> {
  [Symbol.iterator](): Iterator<ListNode> {
    return this
  }

  tournamentTree: TournamentTree

  constructor(list: Array<ListNode | null>) {
    this.tournamentTree = new TournamentTree(list)
  }

  next(): IteratorResult<ListNode> {
    const winner = this.tournamentTree.getWinner()

    return winner
      ? { value: winner, done: false }
      : { value: undefined, done: true }
  }
}
