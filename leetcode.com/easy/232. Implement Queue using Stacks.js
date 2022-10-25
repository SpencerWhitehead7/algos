// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false
// Notes:

// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

/**
 * Initialize your data structure here.
 */
const MyQueueSlow = function () {
  this.stack = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueueSlow.prototype.push = function (x) {
  this.stack.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueueSlow.prototype.pop = function () {
  const tempStack = []
  while (this.stack.length > 0) {
    tempStack.push(this.stack.pop())
  }
  const res = tempStack.pop()
  while (tempStack.length > 0) {
    this.stack.push(tempStack.pop())
  }
  return res
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueueSlow.prototype.peek = function () {
  const tempStack = []
  while (this.stack.length > 0) {
    tempStack.push(this.stack.pop())
  }
  const res = tempStack.pop()
  this.stack.push(res)
  while (tempStack.length > 0) {
    this.stack.push(tempStack.pop())
  }
  return res
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueueSlow.prototype.empty = function () {
  return this.stack.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * Initialize your data structure here.
 */
const MyQueue = function () {
  this.enqued = []
  this.dequed = []
}

/**
 * Transfer elements from enque to deque if deque is empty.
 * @return {void}
 */
MyQueue.prototype.transfer = function () {
  if (!this.dequed.length) {
    while (this.enqued.length) {
      this.dequed.push(this.enqued.pop())
    }
  }
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.enqued.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.transfer()
  return this.dequed.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.transfer()
  return this.dequed[this.dequed.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.enqued.length && !this.dequed.length
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
