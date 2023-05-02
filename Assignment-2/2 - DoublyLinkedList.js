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
		this.prev = null;
	}
}

class DoublyLinkedList {
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
			graph += `Prev: ${currentNode.prev ? currentNode.prev.data : null} Data: ${currentNode.data} -> `;
			currentNode = currentNode.next;
		}
		graph += currentNode;
		console.log(graph);
	}

	// We connect the newNode to head and convert head to the newNode
	// Only we add that the second will have the head as prev
	insertAtFront(newNode) {
		// Check if we dont have head
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
	}
	// Time Complexity: O(1) always doind the add to head
	// Space Complexity: O(1) no space

	// Only we add that the new tail will have prev the before tail
	insertAtBack(newNode) {
		// Check if we dont have head
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
	}
	// Time Complexity: O(1) always doind the add to tail
	// Space Complexity: O(1) no space

	// Only we add that prev to the next one and the newOne
	insertAfter(newNode, lookingNode) {
		// Iterate the array until find it
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode === lookingNode) {
				// The next node will have the new node as prev
				currentNode.next.prev = newNode;
				// The next node is going to be next after the new node
				newNode.next = currentNode.next;
				// The new node will have the currentNode as prev
				newNode.prev = currentNode;
				// The next node of current will be the new node
				currentNode.next = newNode;
				this.length++;
				break;
			}
			currentNode = currentNode.next;
		}
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) the pointer variable

	deleteBack() {
		// We make the tail the before one
		this.tail = this.tail.prev;
		// We disconnect the tail of the before tail
		this.tail.next = null;
		this.length--;
	}
	// Time Complexity: O(1) constant time to deleate having reference to end
	// Space Complexity: O(1) the pointer variable

	// We only modify prev
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
						this.head.prev = null;
					} else {
						this.head = null;
						this.tail = null;
					}
				} else if (currentNode === this.tail) {
					previousNode.next = null;
					this.tail = previousNode;
				} else {
					// The next node will have the prev of the previous
					currentNode.next.prev = previousNode;
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

	// We only change that the prev is going to assign
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
			previousNode.prev = currentNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using constant memory for holders of nodes

	// We only add that the prev is the previousNode
	reverseNode(node) {
		if (node.next === null) {
			this.head = node;
			this.head.prev = null;
			return node;
		}

		// returned
		let previousNode = this.reverseNode(node.next);
		// returned -> current
		previousNode.next = node;
		node.prev = previousNode;
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
let MyLinkedList = new DoublyLinkedList(nodeLoc);
// 5
MyLinkedList.insertAtFront(new Node(4));
// 4 5
MyLinkedList.insertAtBack(new Node(7));
// // 4 5 7
MyLinkedList.insertAfter(new Node(6), nodeLoc);
// // 4 5 6 7
MyLinkedList.deleteBack();
// // 4 5 6
MyLinkedList.deleteNode(nodeLoc);
// 4 6
console.log(MyLinkedList.getLength());
// 2
MyLinkedList.reverseIterative();
// 6 - 4
MyLinkedList.reverseRecursive();
//  4 - 6

MyLinkedList.printLinkedList();

// Time taken: 20 minutes
// Feeling: Easy, just need to add the prev to the functions. Maybe I could modify to be more simple to read, like the reverse only swap prev for next. 
