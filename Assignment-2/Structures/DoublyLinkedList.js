class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

export class DoublyLinkedList {
	constructor(head = null) {
		this.head = head;
		this.tail = head;
		this.length = 0;

		if (this.head) {
			this.length++;
		}
	}

	printLinkedList() {
		let currentNode = this.head;
		let graph = "";
		// while (currentNode) {
		// 	graph += `Prev: ${
		// 		currentNode.prev ? currentNode.prev.data : null
		// 	} Data: ${currentNode.data} -> `;
		// 	currentNode = currentNode.next;
		// }
		while (currentNode) {
			graph += `${currentNode.data} -> `;
			currentNode = currentNode.next;
		}
		graph += currentNode;
		console.log(graph);
	}

	insertAtFront(val) {
		let newNode = new Node(val);
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

	insertAtBack(val) {
		let newNode = new Node(val);
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

	insertAfter(newNode, lookingNode) {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode === lookingNode) {
				currentNode.next.prev = newNode;
				newNode.next = currentNode.next;
				newNode.prev = currentNode;
				currentNode.next = newNode;
				this.length++;
				break;
			}
			currentNode = currentNode.next;
		}
	}

	deleteBack() {
		this.tail = this.tail.prev;
		this.tail.next = null;
		this.length--;
	}

	deleteNode(lookingNode) {
		let currentNode = this.head;
		let previousNode = null;

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

	getLength() {
		return this.length;
	}

	reverseIterative() {
		if (this.length < 2) {
			return this.head;
		}

		let previousNode = this.head;
		let currentNode = this.head.next;
		let nextNode;

		previousNode.next = null;
		this.tail = previousNode;

		while (currentNode) {
			nextNode = currentNode.next;
			this.head = currentNode;
			currentNode.next = previousNode;
			previousNode.prev = currentNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}
	}

	reverseNode(node) {
		if (node.next === null) {
			this.head = node;
			this.head.prev = null;
			return node;
		}

		let previousNode = this.reverseNode(node.next);
		previousNode.next = node;
		node.prev = previousNode;
		node.next = null;
		return node;
	}

	reverseRecursive() {
		this.reverseNode(this.head);
	}
}
