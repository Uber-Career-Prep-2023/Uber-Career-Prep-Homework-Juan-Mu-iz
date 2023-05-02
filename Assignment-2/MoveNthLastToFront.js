//Given a singly linked list, move the nth from the last element to the front of the list.

// Process thinking
// The first idea is to find the k-number node, disconnect it, save it and put it on the front end. To find it I can use the distance fixed.

import { LinkedList } from "./Structures/LinkedList.js";

// Receive linked list and k-number
function MoveNthLastToFront(linkedList, k) {
	if (k == linkedList.length) {
		return LinkedList;
	}

	// Save the value of node
	let kNode;

	// Save the previous of the first pointer for the connection
	// Find the node of k distance
	let p1Parent = linkedList.head;
	let p1 = linkedList.head;
	let p2 = linkedList.head;

	// Start p2 in k, -1 because its already starting in the first one
	for (let i = 0; i < k - 1; i++) {
		p2 = p2.next;
	}

	// Move until p2 arrives to the end
	while (p2.next) {
		p1Parent = p1;
		p1 = p1.next;
		p2 = p2.next;
	}

	// Save Knode (not necessary to make other variable)
	kNode = p1;

	// Connect p1 parent to the next of p1 and skip knode
	p1Parent.next = p1.next;

	// If its the tail make new tail
	// If the kNode is the tail, we make the parent the tail
	if (kNode === linkedList.tail) {
		linkedList.tail = p1Parent;
	}

	// Connect knode to the beginning
	kNode.next = linkedList.head;
	// Make the kNode new head
	linkedList.head = kNode;

	// Rest one to the length
	linkedList.length--;

	return linkedList;
}

let myLinkedList = new LinkedList();
myLinkedList.insertAtBack(15);
myLinkedList.insertAtBack(2);

myLinkedList.printLinkedList();

MoveNthLastToFront(myLinkedList, 1);

myLinkedList.printLinkedList();

// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(1) always using same memory for pointers of nodes

// Time taken: 10 minutes
// Feeling: Easy, probably the easiest so far
