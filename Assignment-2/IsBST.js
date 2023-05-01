import { BinarySearchTree } from "./Structures/BinarySearchTree.js";

// Given a binary tree, determine if it is a binary search tree.
// For each node will call a function to check if the left and right are lower and greater, and call the function also in that nodes

// Main function
function IsBST(binarySearchTree) {
	return nodeIsBinaryTree(binarySearchTree.root);
}

// It call per node recursive
function nodeIsBinaryTree(node) {
	// Because we have two children this variable is necesary to wait the other children callback, also it helps to dont do the other children function if is false the first one  (line 46)
	let isBinary = true;

	// If the node is null it means the parent is binary in the side node
	if (!node) {
		return true;
	}

	// Check if the right is binary, first with parent compare and then with childrens
	if (node.right) {
		if (node.right.data > node.data) {
			isBinary = nodeIsBinaryTree(node.right);
		} else {
			return false;
		}
	}

	// Check if the left is binary, first with parent compare and then with childrens
	if (node.left && isBinary) {
		if (node.left.data < node.data) {
			isBinary = nodeIsBinaryTree(node.left);
		} else {
			return false;
		}
	}

	return isBinary;
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

// myBinarySearchTree.root.right.right.right.data = 15;


//   		 10
// 		8		   16
//	 	  9    13      17
//                          15

console.log(IsBST(myBinarySearchTree));

// Time taken: 30 minutes
// Feeling: Easy-medium, it is always triky the recursive function, probably most of the time it was to find a way to return without affecting the other function
