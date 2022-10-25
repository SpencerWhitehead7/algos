// Finding a cycle in a Linked List
// Slides

// Prompt
// Given the head of a singly linked list, determine if there is a cycle within the linked list. If there is a cycle, return true and log the length of the cycle and the first node in the cycle. If there is no cycle, return false.

// Caveat: you may not use any additional data structures, nor may you modify the existing data structure. No arrays, no objects, no maps, no linked lists, etc.

// Remember: The nodes in the linked list can have the same values.

// Setup
// See slides for diagrams and hints!

const findCycleLength = (nodeInCycle) => {
  let count = 1
  let runner = nodeInCycle.next
  while (runner !== nodeInCycle) {
    runner = runner.next
    count++
  }
  return count
}

const detectLoop = (head) => {
  const start = head
  if (start === null || start.next === null) return false
  let slow = start
  let fast = start.next

  while (fast) {
    slow = slow.next
    if (fast.next === null) {
      return false
    }
    fast = fast.next.next

    if (slow === fast) {
      const cycleLength = findCycleLength(slow)
      const startOfCycle = findStartOfCycle(start, cycleLength)
      console.log(cycleLength, startOfCycle)
      return true
    }
  }
  return false
}

const findStartOfCycle = (startNode, cycleLength) => {
  let fast = startNode
  let slow = startNode

  for (let i = 0; i < cycleLength; i++) {
    fast = fast.next
  }

  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
}

// Helper Functions to build test cases

function Node(value) {
  this.value = value
  this.next = null
}

function BuildLinkedList(linkedListLength, cycleLength) {
  if (cycleLength >= linkedListLength) {
    throw new Error(`cycleLength must be smaller than linkedListLength`)
  }
  let newNode
  const startNode = new Node(randomNum())
  this.head = startNode
  let previous = startNode

  for (let i = 1; i < linkedListLength; i++) {
    newNode = new Node(randomNum())
    previous.next = newNode
    previous = newNode
    if (i === linkedListLength - cycleLength) {
      var startingNodeOfCycle = newNode
    }
  }
  newNode.next = startingNodeOfCycle
}

function randomNum() {
  return Math.floor(Math.random() * 100) + 1
}
