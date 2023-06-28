// Question 3: Build a Priority Queue

///////// EXPLANATION /////////

// A priority queue functions like a queue except that elements are removed in order of priority rather than insertion. This is typically implemented as a max heap that stores pairs of elements and numeric weights, with the weights used as the values in the heap. Implement a priority queue according to the following API using a heap as the underlying data structure. For simplicity, you can assume the priority queue stores string elements with integer priorities. Start by copy-pasting your heap implementation from question 2 and making modifications.

///////// PROCESS THINKING /////////

// Change the if statements to make a max heap, and make a object with weight to order in base of that
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	// Function that insert the value at the end of the array and the it compare to the parent to make a change
	insert(value, weight) {
		let node = { value, weight };
		this.values.push(node);
		let idx = this.values.length - 1;

		while (idx > 0) {
			let child = this.values[idx];
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (child.weight <= parent.weight) break;
			this.values[parentIdx] = child;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	// Function that remove the value on the top of the array and returns it. Then we put the last addition in the top and compare to the childs to change
	remove() {
		let removeElement = this.values[0];
		let newTop = this.values.pop();
		this.values[0] = newTop;
		let idx = 0;
		let swap;
		let childOne, childTwo;

		while (this.values.length > 0) {
			swap = null;
			let childOneIdx = idx * 2 + 1;
			let childTwoIdx = idx * 2 + 2;

			if (childOneIdx < this.values.length) {
				childOne = this.values[childOneIdx];
				if (childOne.weight > newTop.weight) {
					swap = childOneIdx;
				}
			}

			if (childTwoIdx < this.values.length) {
				childTwo = this.values[childTwoIdx];
				if (
					(swap === null && childTwo.weight > newTop.weight) ||
					(swap !== null && childTwo.weight > childOne.weight)
				) {
					swap = childTwoIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = newTop;
			idx = swap;
		}

		return removeElement;
	}

	top() {
		return this.values[0];
	}
}
let myPriorityQueue = new PriorityQueue();
myPriorityQueue.insert(2, 2);
myPriorityQueue.insert(1, 1);
myPriorityQueue.insert(3, 3);
myPriorityQueue.insert(5, 4);
myPriorityQueue.insert(8, 0);
myPriorityQueue.remove();
console.log(myPriorityQueue.top())

console.log(myPriorityQueue);

// Time Complexity: Insert(log (n)) Remove(log n) Top(1)
// Space Complexity:Insert(log (1)) Remove(1) Top(1)

// Time: 10 minutes
// Feeling: Easy, It was just change the if statements and add the object with weight. This was done with the previous data structure.
