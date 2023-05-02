// Given a binary tree, create an array of the left view (leftmost elements in each level) of the tree.

// Process thinking
// The first idea is search in breadth First and save the first left node, this saving the level
import { BinarySearchTree } from "./Structures/BinarySearchTree.js";
import { Stack } from "./Structures/Stack.js";

let myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(2);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(4);


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

myBinarySearchTree.printBinarySearch();

console.log(LeftView(myBinarySearchTree));
// myBinarySearchTree.printBinarySearch();
