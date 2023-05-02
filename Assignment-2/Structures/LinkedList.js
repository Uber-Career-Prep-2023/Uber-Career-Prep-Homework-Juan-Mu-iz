export class Node {
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

		if (this.head) {
			this.length++;
		}
	}

	printLinkedList() {
		let currentNode = this.head;
		let graph = "";
		while (currentNode) {
			graph += `${currentNode.data} -> `;
			currentNode = currentNode.next;
		}
		graph += currentNode;
		console.log(graph);
	}

	insertAtFront(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}


	insertAtBack(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	insertAfter(val, lookingNode) {
		let newNode = new Node(val)

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

	deleteFront() {
		if (this.head) {
			let currentNode = this.head;
			this.head = this.head.next;
			this.length--;

			return currentNode;
		}
	}

	deleteBack() {
		let currentNode = this.head;
		let previousNode = null;

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

	deleteNode(lookingNode) {
		let currentNode = this.head;
		let previousNode = null;

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
			previousNode = currentNode;
			currentNode = nextNode;
		}
	}

	reverseNode(node) {
		if (node.next === null) {
			this.head = node;
			return node;
		}


		let previousNode = this.reverseNode(node.next);
		previousNode.next = node;
		node.next = null;
		return node;
	}

	reverseRecursive() {
		this.reverseNode(this.head);
	}
}


