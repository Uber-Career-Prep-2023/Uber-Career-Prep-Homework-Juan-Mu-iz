// Binary Search Tree

// int min() // returns the minimum value in the BST
// int max() // returns the maximum value in the BST
// bool contains(int val) // returns a boolean indicating whether val is present in the BST
//  For simplicity, do not allow duplicates. If val is already present, insert is a no-op
// void insert(int val) // creates a new Node with data val in the appropriate location
// int delete(int val) // deletes the Node with data val, if it exists

import { Queue } from "./Structures/Queue.js";

class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

class BinarySearchTree {
	constuctor(root = null) {
		this.root = root;
	}

	printBinarySearch() {
		// To dont modify general head
		let currentNode = this.root;
		let queue = new Queue();
		queue.enqueue(currentNode);

		while (!queue.isEmpty()) {
			currentNode = queue.dequeue();
			if (currentNode.left) {
				queue.enqueue(currentNode.left);
			}
			if (currentNode.right) {
				queue.enqueue(currentNode.right);
			}
			console.log(currentNode.data);
		}
	}

	min() {
		let currentNode = this.root;

		while (currentNode.left) {
			currentNode = currentNode.left;
		}

		return currentNode.data;
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using same space that before

	// returns the maximum value in the BST
	max() {
		let currentNode = this.root;

		while (currentNode.right) {
			currentNode = currentNode.right;
		}

		return currentNode.data;
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using same space that before

	// returns a boolean indicating whether val is present in the BST
	contains(val) {
		let currentNode = this.root;

		while (currentNode) {
			if (currentNode.data === val) {
				return true;
			} else if (val > currentNode.data) {
				currentNode = currentNode.right;
			} else {
				currentNode = currentNode.left;
			}
		}

		return false;
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using same space that before

	// For simplicity, do not allow duplicates. If val is already present, insert is a no-op
	// creates a new Node with data val in the appropriate location
	insert(val) {
		if (!this.root) {
			this.root = new Node(val);
			return;
		}

		let previuseNode = null;
		let currentNode = this.root;

		while (currentNode) {
			if (currentNode.data === val) {
				return -1;
			} else if (val > currentNode.data) {
				previuseNode = currentNode;
				currentNode = currentNode.right;
			} else {
				previuseNode = currentNode;
				currentNode = currentNode.left;
			}
		}

		if (val > previuseNode.data) {
			previuseNode.right = new Node(val);
		} else {
			previuseNode.left = new Node(val);
		}
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using same space that before

	// deletes the Node with data val, if it exists
	delete(val) {
		// First find the node with that value and remember the parent
		let previuseNode = null;
		let currentNode = this.root;

		while (currentNode) {
			if (currentNode.data === val) {
				break;
			} else if (val > currentNode.data) {
				previuseNode = currentNode;
				currentNode = currentNode.right;
			} else {
				previuseNode = currentNode;
				currentNode = currentNode.left;
			}
		}

		// If the node doesnt have child, just make null
		if (!currentNode.right && !currentNode.left) {
			// Know if is right or left previus child
			// Right
			if (currentNode.data > previuseNode.data) {
				previuseNode.right = null;
			}
			// Left
			else {
				previuseNode.left = null;
			}
		}

		// If only have one, assign the left to the previus node to the correspond node
		else if (!currentNode.right || !currentNode.left) {
			// Know if is right or left previus child
			// Right
			if (currentNode.data > previuseNode.data) {
				previuseNode.right = currentNode.left || currentNode.right;
			}
			// Left
			else {
				previuseNode.left = currentNode.left || currentNode.right;
			}
		}

		// If have both
		// Find the greater number of the left subtree and make it the new root subtree
		else {
			let previusNodeOfParent = currentNode;
			let newParent = currentNode.left;

			// We find the max value of the left subtree
			while (newParent.right) {
				previusNodeOfParent = newParent;
				newParent = newParent.right;
			}

			// We change the change the root value for this new value
			currentNode.data = newParent.data;
			currentNode = newParent;
			previuseNode = previusNodeOfParent;

			// Know we deleate the newParent data

			// No child
			// If the node doesnt have child, just make null
			if (!currentNode.right && !currentNode.left) {
				// Know if is right or left previus child
				// Right
				if (currentNode.data > previuseNode.data) {
					previuseNode.right = null;
				}
				// Left
				else {
					previuseNode.left = null;
				}
			}

			// One child
			// If only have one, assign the left to the previus node to the correspond node
			else if (!currentNode.right || !currentNode.left) {
				// Know if is right or left previus child
				// Right
				if (currentNode.data > previuseNode.data) {
					previuseNode.right = currentNode.left || currentNode.right;
				}
				// Left
				else {
					previuseNode.left = currentNode.left || currentNode.right;
				}
			}
		}
	}
	// Time Complexity: O(n) n meaning the number of nodes
	// Space Complexity: O(1) Using same space that before
}

let MyBinarySearchTree = new BinarySearchTree();
MyBinarySearchTree.insert(5);
MyBinarySearchTree.insert(3);
MyBinarySearchTree.insert(1);
MyBinarySearchTree.insert(2);
MyBinarySearchTree.printBinarySearch();
console.log(" ");
MyBinarySearchTree.delete(3);
MyBinarySearchTree.printBinarySearch();

// Time taken: 40 minutes
// Feeling: Easy, little tricky the last one, because the cases
