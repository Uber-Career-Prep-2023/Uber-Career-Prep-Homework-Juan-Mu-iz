// Given a singly linked list, disconnect the cycle, if one exists.

// Process thinking
// The first idea is to hash the nodes and if I see a duplicate reference I know that I am in the cycle

import { LinkedList } from "./Structures/LinkedList.js";

function DisconnectCycle(linkedList) {
	let nodesSeen = {};
	let currentNode = linkedList.head;
	let previousNode = linkedList.head;

	while (currentNode) {
		if (nodesSeen[currentNode.data]) {
			previousNode.next = null;
			break;
		} else {
			nodesSeen[currentNode.data] = 1;
		}
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
}

// let myLinkedList = new LinkedList();
// myLinkedList.insertAtBack(10);
// myLinkedList.insertAtBack(18);
// myLinkedList.insertAtBack(12);
// myLinkedList.insertAtBack(9);
// myLinkedList.insertAtBack(11);
// myLinkedList.insertAtBack(4);
// myLinkedList.tail.next = myLinkedList.head.next.next;

// console.log(myLinkedList.tail);

// DisconnectCycle(myLinkedList);

// console.log(myLinkedList.tail);

let myLinkedList = new LinkedList();
myLinkedList.insertAtBack(10);
myLinkedList.insertAtBack(18);
myLinkedList.insertAtBack(12);
myLinkedList.insertAtBack(9);
myLinkedList.insertAtBack(11);
myLinkedList.insertAtBack(4);
myLinkedList.tail.next = myLinkedList.tail;

console.log(myLinkedList.tail);

DisconnectCycle(myLinkedList);

console.log(myLinkedList.tail);

myLinkedList.printLinkedList();

// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(n) n meaning the number of nodes

// Time taken: 5 minutes
// Feeling: Easy, similar to the previous ones, but with a hashtable
