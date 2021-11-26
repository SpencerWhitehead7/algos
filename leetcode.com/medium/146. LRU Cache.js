// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

const LRUCache = function (capacity) {
  this.slots = capacity
  this.hash = {}
  this.head = null
  this.tail = null
}

LRUCache.prototype.insert = function (lruItem) {
  this.slots--
  this.hash[lruItem.key] = lruItem

  if (this.head === null && this.tail === null) {
    this.head = lruItem
    this.tail = lruItem
  } else {
    this.head.prev = lruItem
    lruItem.next = this.head
    this.head = lruItem
  }
}

LRUCache.prototype.remove = function (lruItem) {
  this.slots++
  delete this.hash[lruItem.key]

  if (this.head === lruItem && this.tail === lruItem) {
    this.head = null
    this.tail = null
  } else if (this.head === lruItem) {
    lruItem.next.prev = null
    this.head = lruItem.next
  } else if (this.tail === lruItem) {
    lruItem.prev.next = null
    this.tail = lruItem.prev
  } else {
    lruItem.prev.next = lruItem.next
    lruItem.next.prev = lruItem.prev
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const lruItem = this.hash[key]
  if (lruItem) {
    this.remove(lruItem)
    this.insert(lruItem)
    return lruItem.value
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const newItem = { key, value, prev: null, next: null }

  if (this.hash[key]) {
    this.remove(this.hash[key])
  }

  if (this.slots === 0) {
    this.remove(this.tail)
  }

  this.insert(newItem)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
