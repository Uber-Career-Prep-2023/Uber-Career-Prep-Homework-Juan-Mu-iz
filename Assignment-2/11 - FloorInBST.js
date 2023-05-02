// Given a target numeric value and a binary search tree, return the floor (greatest element less than or equal to the target) in the BST.

// Process thinking
// The first idea is search like the contains function in the binaryTree
import { BinarySearchTree } from "./Structures/BinarySearchTree.js";

function floorInBST(binaryTree, target) {
	// Save previus in case we move to a greater number
	let currentNode = binaryTree.root;
	let previusNode = binaryTree.root;

	while (currentNode) {
		// Return if is equal
		if (currentNode.data === target) {
			return currentNode.data;
			// Move to right if we have one and if target is grater than current
		} else if (target > currentNode.data && currentNode.right) {
			previusNode = currentNode;
			currentNode = currentNode.right;

			// Move to left if we have one and if target is lower than current
		} else if (target < currentNode.data && currentNode.left) {
			previusNode = currentNode;
			currentNode = currentNode.left;

			// If we have no more left / right, or does not meet the condition, we check if the current is less than the target, if not, we see if the previous is less than the target, and in case both are false we do not have something less than the target and return -1
		} else {
			if (currentNode.data < target) {
				return currentNode.data;
			} else if (previusNode.data < target) {
				return previusNode.data;
			} else {
				return -1;
			}
		}
	}
}

let myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(8);
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(16);
myBinarySearchTree.insert(13);
myBinarySearchTree.insert(17);
myBinarySearchTree.insert(20);

//   		 10
// 		8		   16
//	 	  9    13      17
//                          20

console.log(floorInBST(myBinarySearchTree, 15));
// 13

console.log(floorInBST(myBinarySearchTree, 6));
// -1

console.log(floorInBST(myBinarySearchTree, 18));
// 17

console.log(floorInBST(myBinarySearchTree, 12));
// -1

console.log(floorInBST(myBinarySearchTree, 13));
// 13

// myBinarySearchTree.printBinarySearch();

// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(1) always memory for pointers

// Time taken: 20 minutes
// Feeling: Easy, probably confusing for all the edge cases, but easy in the implementation
