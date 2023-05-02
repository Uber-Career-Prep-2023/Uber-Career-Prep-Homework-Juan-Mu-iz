import { BinarySearchTree } from "./Structures/BinarySearchTree.js";
import { Queue } from "./Structures/Queue.js";
import { Node } from "./Structures/BinarySearchTree.js";

//Given a binary tree, create a deep copy. Return the root of the new tree.
// Im going to use a stack to iterate breadth first level-order and insert in a new root copy

function CopyTree(node) {
	if (!node) {
		return null;
	}

	let subtree = new Node();
	subtree.data = node.data;
	subtree.left = CopyTree(node.left);
	subtree.right = CopyTree(node.right);

	return subtree;
}

let myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(13);
myBinarySearchTree.insert(5);
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(7);

let copyTree = CopyTree(myBinarySearchTree.root);
let binarySearchTreeCopy = new BinarySearchTree();
binarySearchTreeCopy.root = copyTree;

myBinarySearchTree.printBinarySearch();

console.log("  Copy  ");

binarySearchTreeCopy.printBinarySearch();

// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(n) Using same space that before

// Time taken: 20 minutes
// Feeling: Easy, I redone this one. First attempt was with just insertion in new tree. It is like isBST but returning the tree if it is true or false.
