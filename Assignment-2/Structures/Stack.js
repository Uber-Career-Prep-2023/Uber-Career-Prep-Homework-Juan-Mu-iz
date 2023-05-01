import { LinkedList } from "./LinkedList.js";

export class Stack {
	constructor() {
		this.data = new LinkedList();
	}

	top() {
		if (this.isEmpty()) {
			return "No elements in the queue";
		}
		return this.data.head.data;
	}

	push(val) {
		this.data.insertAtFront(val);
	}

	pop() {
		if (this.isEmpty()) {
			return "No elements in the queue";
		}
		return this.data.deleteFront().data;
	}

	isEmpty() {
		return this.data.head == null;
	}
}
