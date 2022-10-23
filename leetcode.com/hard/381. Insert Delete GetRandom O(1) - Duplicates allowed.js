// RandomizedCollection is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also removing a random element.

// Implement the RandomizedCollection class:

// RandomizedCollection() Initializes the empty RandomizedCollection object.
// bool insert(int val) Inserts an item val into the multiset, even if the item is already present. Returns true if the item is not present, false otherwise.
// bool remove(int val) Removes an item val from the multiset if present. Returns true if the item is present, false otherwise. Note that if val has multiple occurrences in the multiset, we only remove one of them.
// int getRandom() Returns a random element from the current multiset of elements. The probability of each element being returned is linearly related to the number of same values the multiset contains.
// You must implement the functions of the class such that each function works on average O(1) time complexity.

// Note: The test cases are generated such that getRandom will only be called if there is at least one item in the RandomizedCollection.



// Example 1:

// Input
// ["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
// [[], [1], [1], [2], [], [1], []]
// Output
// [null, true, false, true, 2, true, 1]

// Explanation
// RandomizedCollection randomizedCollection = new RandomizedCollection();
// randomizedCollection.insert(1);   // return true since the collection does not contain 1.
//                                   // Inserts 1 into the collection.
// randomizedCollection.insert(1);   // return false since the collection contains 1.
//                                   // Inserts another 1 into the collection. Collection now contains [1,1].
// randomizedCollection.insert(2);   // return true since the collection does not contain 2.
//                                   // Inserts 2 into the collection. Collection now contains [1,1,2].
// randomizedCollection.getRandom(); // getRandom should:
//                                   // - return 1 with probability 2/3, or
//                                   // - return 2 with probability 1/3.
// randomizedCollection.remove(1);   // return true since the collection contains 1.
//                                   // Removes 1 from the collection. Collection now contains [1,2].
// randomizedCollection.getRandom(); // getRandom should return 1 or 2, both equally likely.


// Constraints:

// -231 <= val <= 231 - 1
// At most 2 * 105 calls in total will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.

const RandomizedCollection = function () {
  this.idxs = {}
  this.itms = []
  this.count = 0
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.itms[this.count] = val

  if (this.idxs[val] !== undefined && this.idxs[val].count !== 0) {
    this.idxs[val].insert(this.count)
    this.count++
    return false
  }

  this.idxs[val] = new InsertionOrderSet()
  this.idxs[val].insert(this.count)
  this.count++
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  const itmIdxEntry = this.idxs[val]
  if (itmIdxEntry === undefined || itmIdxEntry.count === 0) {
    return false
  }

  const itmIdx = itmIdxEntry.pop()
  const lastItm = this.itms[this.count - 1]
  const lastItmIdxEntry = this.idxs[lastItm]
  this.itms[itmIdx] = lastItm
  lastItmIdxEntry.remove(this.count - 1)
  lastItmIdxEntry.insert(itmIdx)
  this.count--
  return true
}

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.itms[Math.floor(Math.random() * this.count)]
}

// just massively frustratingly, JS does have ordered sets with O(1) insert and remove, but to get the last item that was inserted, you have to iterate the set in O(n)
// if you just use a regular array, you get O(1) insert and pop, but O(n) remove
// hence this custom DS for constant time insert, remove, and pop
// JFC
const InsertionOrderSet = function () {
  this.idxs = {}
  this.itms = []
  this.count = 0
}

/**
 * @param {number} val
 */
InsertionOrderSet.prototype.insert = function (val) {
  this.idxs[val] = this.count
  this.itms[this.count] = val
  this.count++
}

/**
 * @param {number} val
 */
InsertionOrderSet.prototype.remove = function (val) {
  const itmIdx = this.idxs[val]
  const lastItm = this.itms[this.count - 1]
  this.itms[itmIdx] = lastItm
  this.idxs[lastItm] = itmIdx
  delete this.idxs[val]
  this.count--
}

/**
 * @return {number}
 */
InsertionOrderSet.prototype.pop = function () {
  const val = this.itms.pop()
  delete this.idxs[val]
  this.count--

  return val
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
