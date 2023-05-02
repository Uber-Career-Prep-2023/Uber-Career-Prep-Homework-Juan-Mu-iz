// Given a doubly linked list, determine if it is a palindrome

// Process thinking
// The first idea is to compare the last value and the first value until they are reached.

import { DoublyLinkedList } from "./Structures/DoublyLinkedList.js";

// If the linked list have odd nodes they will reach
// If the linked list has even nodes they will pass each other, so we need to compare if the previous value is not the next one of the other one

function IsPalindrome(doubleLinkedList) {
	if (doubleLinkedList.length < 2) {
		return true;
	}

	let p1 = doubleLinkedList.head;
	let p2 = doubleLinkedList.tail;

	while (p1 !== p2) {
		// Check if are different
		if (p1.data !== p2.data) {
			return false;
		}

		// Compare if they will pass each other
		if (p1 === p2.prev) {
			break;
		}

		p1 = p1.next;
		p2 = p2.prev;
	}

	return true;
}

let myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.insertAtBack(1);
myDoublyLinkedList.insertAtBack(2);
myDoublyLinkedList.insertAtBack(2);
myDoublyLinkedList.insertAtBack(3);
myDoublyLinkedList.insertAtBack(3);
myDoublyLinkedList.insertAtBack(2);
myDoublyLinkedList.insertAtBack(2);
myDoublyLinkedList.insertAtBack(1);

myDoublyLinkedList.printLinkedList();

console.log(IsPalindrome(myDoublyLinkedList));

// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(1) always using same memory for pointers of nodes

// Time taken: 10 minutes
// Feeling: Easy, its like a string comparation
