// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

package algos

// doubly

type DMyLinkedList struct {
	head *DNode
	tail *DNode
}

type DNode struct {
	prev *DNode
	next *DNode
	val  int
}

func DConstructor() DMyLinkedList {
	return DMyLinkedList{}
}

func (this *DMyLinkedList) Get(index int) int {
	node := this.head
	for i := 0; i < index && node != nil; i++ {
		node = node.next
	}
	if node == nil {
		return -1
	}

	return node.val
}

func (this *DMyLinkedList) AddAtHead(val int) {
	newHead := &DNode{val: val, next: this.head}
	if this.head != nil {
		this.head.prev = newHead
	}
	if this.tail == nil {
		this.tail = newHead
	}
	this.head = newHead
}

func (this *DMyLinkedList) AddAtTail(val int) {
	newTail := &DNode{val: val, prev: this.tail}
	if this.tail != nil {
		this.tail.next = newTail
	}
	if this.head == nil {
		this.head = newTail
	}
	this.tail = newTail
}

func (this *DMyLinkedList) AddAtIndex(index int, val int) {
	if index == 0 {
		this.AddAtHead(val)
		return
	}

	node := this.head
	for i := 0; i < index; i++ {
		if node == nil {
			return
		}

		node = node.next
	}

	if node == nil {
		this.AddAtTail(val)
		return
	}

	newNode := &DNode{val: val, prev: node.prev, next: node}
	node.prev.next = newNode
	node.prev = newNode
}

func (this *DMyLinkedList) DeleteAtIndex(index int) {
	node := this.head
	for i := 0; i < index && node != nil; i++ {

		node = node.next
	}
	if node == nil {
		return
	}

	if node.prev == nil {
		this.head = node.next
	} else {
		node.prev.next = node.next
	}
	if node.next == nil {
		this.tail = node.prev
	} else {
		node.next.prev = node.prev
	}
}

// singly

type SMyLinkedList struct {
	head *SNode
	tail *SNode
}

type SNode struct {
	next *SNode
	val  int
}

func SConstructor() SMyLinkedList {
	return SMyLinkedList{}
}

func (this *SMyLinkedList) Get(index int) int {
	node := this.head
	for i := 0; i < index && node != nil; i++ {
		node = node.next
	}
	if node == nil {
		return -1
	}

	return node.val
}

func (this *SMyLinkedList) AddAtHead(val int) {
	newHead := &SNode{val: val, next: this.head}
	if this.tail == nil {
		this.tail = newHead
	}
	this.head = newHead
}

func (this *SMyLinkedList) AddAtTail(val int) {
	newTail := &SNode{val: val}
	if this.tail != nil {
		this.tail.next = newTail
	}
	if this.head == nil {
		this.head = newTail
	}
	this.tail = newTail
}

func (this *SMyLinkedList) AddAtIndex(index int, val int) {
	if index == 0 {
		this.AddAtHead(val)
		return
	}
	if this.head == nil {
		return
	}

	prev := this.head
	node := prev.next
	for i := 1; i < index; i++ {
		if node == nil {
			return
		}

		prev = node
		node = node.next
	}

	if node == nil {
		this.AddAtTail(val)
		return
	}

	newNode := &SNode{val: val, next: node}
	prev.next = newNode
}

func (this *SMyLinkedList) DeleteAtIndex(index int) {
	if index == 0 {
		if this.head == this.tail {
			this.tail = nil
		}
		this.head = this.head.next
		return
	}

	prev := this.head
	node := prev.next
	for i := 1; i < index && node != nil; i++ {
		prev = node
		node = node.next
	}
	if node == nil {
		return
	}

	prev.next = node.next
	if node == this.tail {
		this.tail = prev
	}
}

// lengthMemo

type MyLinkedList struct {
	head *Node
	tail *Node
	len  int
}

type Node struct {
	next *Node
	val  int
}

func Constructor() MyLinkedList {
	return MyLinkedList{}
}

func (this *MyLinkedList) Get(index int) int {
	if index >= this.len {
		return -1
	}

	node := this.head
	for index > 0 {
		node = node.next
		index--
	}

	return node.val
}

func (this *MyLinkedList) AddAtHead(val int) {
	newNode := &Node{val: val}
	if this.len == 0 {
		this.head = newNode
		this.tail = newNode
	} else {
		newNode.next = this.head
		this.head = newNode
	}
	this.len++
}

func (this *MyLinkedList) AddAtTail(val int) {
	newNode := &Node{val: val}
	if this.len == 0 {
		this.tail = newNode
		this.head = newNode
	} else {
		this.tail.next = newNode
		this.tail = newNode
	}
	this.len++
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index > this.len {
		return
	}
	if index == 0 {
		this.AddAtHead(val)
		return
	}
	if index == this.len {
		this.AddAtTail(val)
		return
	}

	prev := this.head
	node := prev.next
	for index > 1 {
		prev = node
		node = node.next
		index--
	}

	prev.next = &Node{val: val, next: node}
	this.len++
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index >= this.len {
		return
	}
	if index == 0 {
		this.head = this.head.next
		this.len--
		return
	}

	prev := this.head
	node := prev.next
	for index > 1 {
		prev = node
		node = node.next
		index--
	}

	prev.next = node.next
	if node == this.tail {
		this.tail = prev
	}
	this.len--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
