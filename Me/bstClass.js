// Binary search tree class and methods

function BinarySearchTree(value) {
  this.value = value
  this.parent = null
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function(value) {
  let direction
  value < this.value ? direction = `left` : direction = `right`
  if (this[direction]) {
    this[direction].insert(value)
  } else {
    this[direction] = new BinarySearchTree(value)
    this[direction].parent = this
  }
}

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true
  }
  let direction
  target < this.value ? direction = `left` : direction = `right`
  if (this[direction]) {
    return this[direction].contains(target)
  }
  return false
}

BinarySearchTree.prototype.depthFirstForEach = function(fn, opt = `in-order`) {
  if (opt === `pre-order`) fn(this.value)
  if (this.left) this.left.depthFirstForEach(fn, opt)
  if (opt === `in-order`) fn(this.value)
  if (this.right) this.right.depthFirstForEach(fn, opt)
  if (opt === `post-order`) fn(this.value)
}

BinarySearchTree.prototype.breadthFirstForEach = function(fn) {
  const queue = [this]
  while (queue.length) {
    const current = queue.shift()
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
    fn(current.value)
  }
}

BinarySearchTree.prototype.size = function() {
  const count = 1
  if (this.left && this.right) {
    return count + this.left.size() + this.right.size()
  } else if (this.left) {
    return count + this.left.size()
  } else if (this.right) {
    return count + this.right.size()
  }
  return count
}
