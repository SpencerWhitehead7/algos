// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Your implementation should support following operations:

// MyCircularQueue(k): Constructor, set the size of the queue to be k.
// Front: Get the front item from the queue. If the queue is empty, return -1.
// Rear: Get the last item from the queue. If the queue is empty, return -1.
// enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
// deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
// isEmpty(): Checks whether the circular queue is empty or not.
// isFull(): Checks whether the circular queue is full or not.

// Example:

// MyCircularQueue circularQueue = new MycircularQueue(3); // set the size to be 3
// circularQueue.enQueue(1);  // return true
// circularQueue.enQueue(2);  // return true
// circularQueue.enQueue(3);  // return true
// circularQueue.enQueue(4);  // return false, the queue is full
// circularQueue.Rear();  // return 3
// circularQueue.isFull();  // return true
// circularQueue.deQueue();  // return true
// circularQueue.enQueue(4);  // return true
// circularQueue.Rear();  // return 4

// Note:

// All values will be in the range of [0, 1000].
// The number of operations will be in the range of [1, 1000].
// Please do not use the built-in Queue library.

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.queue = new Array(k).fill(null)
  this.head = 0
  this.tail = 0
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue[this.tail] === null) {
    this.queue[this.tail] = value
    this.tail = this.tail === this.queue.length - 1 ? 0 : this.tail + 1
    return true
  } else {
    return false
  }
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue[this.head] !== null) {
    this.queue[this.head] = null
    this.head = this.head === this.queue.length - 1 ? 0 : this.head + 1
    return true
  } else {
    return false
  }
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.queue[this.head] !== null ? this.queue[this.head] : -1
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  const rear =
    this.tail === 0
      ? this.queue[this.queue.length - 1]
      : this.queue[this.tail - 1]
  return rear !== null ? rear : -1
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue[this.head] === null
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue[this.tail] !== null
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
