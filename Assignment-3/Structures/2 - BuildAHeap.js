// Question 2: Build a Heap

///////// EXPLANATION /////////

// Write a min heap class according to the following API using an array as the underlying data structure. (A max heap has the same implementation; you simply need to flip the direction of the comparators.) For simplicity, you can assume that the heap holds integers rather than generic comparables.

///////// PROCESS THINKING /////////

// To do a heap we can use an array to represent the abstract idea. We just simulate a tree dividing to find the child and multiplying to find the parent

class Heap {
	constructor() {
		this.values = [];
	}

	// Function that insert the value at the end of the array and the it compare to the parent to make a change
	insert(value) {
		this.values.push(value);
		let idx = this.values.length - 1;

		while (idx > 0) {
			let child = this.values[idx];
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (child >= parent) break;
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

		while (this.values.length > 0) {
            swap = null;
			let childOneIdx = idx * 2 + 1;
			let childTwoIdx = idx * 2 + 2;

			if (childOneIdx < this.values.length) {
				let childOne = this.values[childOneIdx];
				if (childOne < newTop) {
					swap = childOneIdx;
				}
			}

			if (childTwoIdx < this.values.length) {
				let childTwo = this.values[childTwoIdx];
				if (
					(swap === null && childTwo < newTop) ||
					(swap !== null && childTwo < childOne)
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

let myHeap = new Heap();
myHeap.insert(2);
myHeap.insert(1);
myHeap.insert(3);
myHeap.remove();
console.log(myHeap);
console.log(myHeap.top())

// Time Complexity: Insert(log (n)) Remove(log n) Top(1)
// Space Complexity:Insert(log (1)) Remove(1) Top(1)

// Time: 25 minutes
// Feeling: Easy, it's a easy structure that follows a similar behavior when removes and adds. Something that I've done before.
