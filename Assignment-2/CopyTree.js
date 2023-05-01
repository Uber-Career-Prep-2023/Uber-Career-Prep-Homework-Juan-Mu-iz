import { BinarySearchTree } from "./Structures/BinarySearchTree.js";
import { Stack } from "./Structures/Stack.js";

//Given a binary tree, create a deep copy. Return the root of the new tree.
// Im going to use a stack to iterate breadth first level-order and insert in a new root copy

let myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(13);
myBinarySearchTree.insert(5);
myBinarySearchTree.insert(1);
myBinarySearchTree.insert(7);

function CopyTree(binarySearchTree) {
	let currentNode = binarySearchTree.root;
	let stack = new Stack();
	stack.push(currentNode);

	let copyBinarySearchTree = new BinarySearchTree();

	while (!stack.isEmpty()) {
		currentNode = stack.pop();
		copyBinarySearchTree.insert(currentNode.data);

		if (currentNode.left) {
			stack.push(currentNode.left);
		}
		if (currentNode.right) {
			stack.push(currentNode.right);
		}
	}

	return copyBinarySearchTree;
}

let myCopyBinarySearchTree = CopyTree(myBinarySearchTree);

//   		 10
// 		5		   15
//	 1	  7    13      20

myBinarySearchTree.printBinarySearch();

console.log(`
COPY
`);

myCopyBinarySearchTree.printBinarySearch();


// Time Complexity: O(n) n meaning the number of nodes
// Space Complexity: O(n) n meaning the number of nodes

// Time taken: 30 minutes, like, not sure, I improved the code but I had the solution before
// Feeling: Easy in theory, but in the implementation I had problems in the connection between structures. I had to change previous code.
