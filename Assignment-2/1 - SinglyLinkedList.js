// Implement the following methods. insertAtFront, insertAtBack, deleteFront, deleteBack, reverseIterative, reverseRecursive

// Node insertAtFront(Node head, int val) // creates new Node with data val at front; returns new head
// void insertAtBack(Node head int val) // creates new Node with data val at end
// void insertAfter(Node head, int val, Node loc) // creates new Node with data val after Node loc
// Node deleteFront(Node head) // removes first Node; returns new head
// void deleteBack(Node head) // removes last Node
// Node deleteNode(Node head, Node loc) // deletes Node loc; returns head
// int length(Node head) // returns length of the list
// Node reverseIterative(Node head) // reverses the linked list iteratively
// Node reverseRecursive(Node head) // reverses the linked list recursively (Hint: you will need a helper function)

// Keypoints: We will use a node struct (object) .
// Inputs and Outpots: Just the correct logic implementation

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

export class LinkedList {
	constructor(head = null) {
		this.head = head;
		this.tail = head;
		this.length = 0;

		// Increment if we have head in constructor
		if (this.head) {
			this.length++;
		}
	}

	// To print the linked list values
	printLinkedList() {
		// To dont modify general head
		let currentNode = this.head;
		let graph = "";
		while (currentNode) {
			graph += `${currentNode.data} -> `;
			currentNode = currentNode.next;
		}
		graph += currentNode;
		console.log(graph);
	}

	// We connect the newNode to head and convert head to the newNode
	insertAtFront(val) {
		let newNode = new Node(val)
		// Check if we dont have head
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}
	// Time Complexity: O(1) always doind the add to head
	// Space Complexity: O(1) no space

	insertAtBack(val) {
		let newNode = new Node(val)
		// Check if we dont have head
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	// Time Complexity: O(1) always doind the add to tail
	// Space Complexity: O(1) no space

	insertAfter(val, lookingNode) {
		let newNode = new Node(val)
		// Iterate the array until find it
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode === lookingNode) {
				newNode.next = currentNode.next;
				currentNode.next = newNode;
				this.length++;
				break;
			}
			currentNode = currentNode.next;
		}
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) the pointer variable

	deleteFront() {
		if (this.head) {
			let currentNode = this.head;
			this.head = this.head.next;
			this.length--;

			return currentNode;
		}
	}
	// Time Complexity: O(1) Always the same
	// Space Complexity: O(1) the pointer variable

	deleteBack() {
		// Iterate until we find the end with previous pointer
		let currentNode = this.head;
		let previousNode = null;

		// If the next node is null we find the tail
		while (currentNode.next) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		if (previousNode) {
			previousNode.next = null;
			this.tail = previousNode;
			this.length--;
		} else {
			this.head = null;
			this.tail = null;
			this.length = 0;
		}
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) the pointer variable

	deleteNode(lookingNode) {
		// Iterate until we find the end with previous pointer
		let currentNode = this.head;
		let previousNode = null;

		// If the next node is null we find the tail
		do {
			if (currentNode === lookingNode) {
				if (currentNode === this.head) {
					if (currentNode.next) {
						this.head = currentNode.next;
					} else {
						this.head = null;
						this.tail = null;
					}
				} else if (currentNode === this.tail) {
					previousNode.next = null;
					this.tail = previousNode;
				} else {
					previousNode.next = currentNode.next;
				}

				this.length--;
				break;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		} while (currentNode.next);
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) The pointers

	// It can be also done with a loop and counting
	getLength() {
		return this.length;
	}
	// If we do it iterative
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) the counter variable

	reverseIterative() {
		if (this.length < 2) {
			return this.head;
		}

		// We save the previus -> current -> next
		let previousNode = this.head;
		let currentNode = this.head.next;
		let nextNode;

		// Avoid infinite loop in print linked list by cleaning the tail
		previousNode.next = null;
		this.tail = previousNode;

		//                      TAIL      HEAD
		// We change order to previus <- current <- next
		//                               previus  current  next
		while (currentNode) {
			nextNode = currentNode.next;
			this.head = currentNode;
			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using constant memory for holders of nodes

	reverseNode(node) {
		if (node.next === null) {
			this.head = node;
			return node;
		}

		// returned
		let previousNode = this.reverseNode(node.next);
		// returned -> current
		previousNode.next = node;
		node.next = null;
		return node;
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using same space that before

	reverseRecursive() {
		this.reverseNode(this.head);
	}
}

let nodeLoc = new Node(5);
let MyLinkedList = new LinkedList(nodeLoc);
// 5
MyLinkedList.insertAtFront(4);
// 4 5
MyLinkedList.insertAtBack(7);
// 4 5 7
MyLinkedList.insertAfter(6, nodeLoc);
// 4 5 6 7
MyLinkedList.deleteBack();
// 4 5 6
MyLinkedList.deleteNode(nodeLoc);
// 4 6
console.log(MyLinkedList.getLength());
// 2
MyLinkedList.reverseIterative();
// 6 - 4
MyLinkedList.reverseRecursive();
// 4 - 6

MyLinkedList.printLinkedList();

// Time taken: 60 minutes
// Feeling: Easy-medium, easy but time consuming. Medium because the Recursive one.
