//Given a sorted singly linked list, remove any duplicates so that no value appears more than once.

// Process thinking
// The first idea is to compare the value of the previous node with the current one and if it is the same connect the previous one with the next one.

import { LinkedList } from "./Structures/LinkedList.js";

// Assume we have a perfect input, more than two elements and all integers
function DedupSortedList(linkedList) {
	let previusNode = linkedList.head;
	let currentNode = previusNode.next;

	while (currentNode) {
		// If duplicate value
		// Now the next of the previus is the next of the current and the previus stay the same
		if (previusNode.data === currentNode.data) {
			previusNode.next = currentNode.next;
			// We need also to check if is the tail to modify it, and reduce the length
			// If the deleate node is the tail we update the tail to previus
			if (currentNode === linkedList.tail) {
				linkedList.tail = previusNode;
			}

			// If not duplicate value we move the previus to current
		} else {
			previusNode = currentNode;
		}
		// And we always make the currentNode the next of it
		currentNode = currentNode.next;
	}
}

let myLinkedList = new LinkedList();
myLinkedList.insertAtBack(1);
myLinkedList.insertAtBack(2);
myLinkedList.insertAtBack(2);
myLinkedList.insertAtBack(4);
myLinkedList.insertAtBack(5);
myLinkedList.insertAtBack(5);
myLinkedList.insertAtBack(5);
myLinkedList.insertAtBack(10);
myLinkedList.insertAtBack(10);

myLinkedList.printLinkedList();
DedupSortedList(myLinkedList);
myLinkedList.printLinkedList();

// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(1) always using same memory for pointers of nodes

// Time taken: 15 minutes
// Feeling: Easy, it was as I thought at the beginning
