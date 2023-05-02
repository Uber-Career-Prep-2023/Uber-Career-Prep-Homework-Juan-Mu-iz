// Given a binary tree, create an array of the left view (leftmost elements in each level) of the tree.

// Process thinking
// The first idea is search in breadth First and save the first left node, this saving the level
import { BinarySearchTree } from "./Structures/BinarySearchTree.js";
import { Stack } from "./Structures/Stack.js";

function LeftView(binarySearchTree) {
	let currentNode = binarySearchTree.root;
	let stack = [currentNode];

	let result = [];
	while (stack.length > 0) {
		let lengthStack = stack.length;

		for (let i = 0; i < lengthStack; i++) {
			currentNode = stack[0];
			stack.shift();

			if (i == 0) {
				result.push(currentNode.data);
			}

			if (currentNode.left) {
				stack.push(currentNode.left);
			}
			if (currentNode.right) {
				stack.push(currentNode.right);
			}
		}
	}

	return result;
}

let myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(13);
myBinarySearchTree.insert(5);
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(7);

myBinarySearchTree.printBinarySearch();

//   		 10
// 		5		   15
//	 1	  7    13      20

console.log(LeftView(myBinarySearchTree));
// 10, 5, 1
// myBinarySearchTree.printBinarySearch();

// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(n) in worst case n could be the left number of nodes

// Time taken: 30 minutes
// Feeling: Easy-medium, it was tricky to know at which level of the tree we are
