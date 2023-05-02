import { LinkedList } from "./LinkedList.js";

export class Queue {
	constructor() {
		this.data = new LinkedList();
	}

	peek() {
		if (this.isEmpty()) {
			return "No elements in the queue";
		}
		return this.data.head;
	}

	enqueue(val) {
		this.data.insertAtBack(val);
	}

	dequeue() {
		if (this.isEmpty()) {
			return "No elements in the queue";
		}
		return this.data.deleteFront().data;
	}

	isEmpty() {
		return this.data.head == null;
	}
}
