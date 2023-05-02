export class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

export class BinarySearchTree {
	constuctor(root = null) {
		this.root = root;
	}

	printBinarySearch() {
		let currentNode = this.root;
		let stack = [currentNode];

		while (stack.length > 0) {
			currentNode = stack[0];
			stack.shift();
			if (currentNode.left) {
				stack.push(currentNode.left);
			}
			if (currentNode.right) {
				stack.push(currentNode.right);
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

	max() {
		let currentNode = this.root;

		while (currentNode.right) {
			currentNode = currentNode.right;
		}

		return currentNode.data;
	}

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

	delete(val) {
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

		if (!currentNode.right && !currentNode.left) {
			if (currentNode.data > previuseNode.data) {
				previuseNode.right = null;
			} else {
				previuseNode.left = null;
			}
		} else if (!currentNode.right || !currentNode.left) {
			if (currentNode.data > previuseNode.data) {
				previuseNode.right = currentNode.left || currentNode.right;
			} else {
				previuseNode.left = currentNode.left || currentNode.right;
			}
		} else {
			let previusNodeOfParent = currentNode;
			let newParent = currentNode.left;

			while (newParent.right) {
				previusNodeOfParent = newParent;
				newParent = newParent.right;
			}

			currentNode.data = newParent.data;
			currentNode = newParent;
			previuseNode = previusNodeOfParent;

			if (!currentNode.right && !currentNode.left) {
				if (currentNode.data > previuseNode.data) {
					previuseNode.right = null;
				}
				// Left
				else {
					previuseNode.left = null;
				}
			} else if (!currentNode.right || !currentNode.left) {
				if (currentNode.data > previuseNode.data) {
					previuseNode.right = currentNode.left || currentNode.right;
				} else {
					previuseNode.left = currentNode.left || currentNode.right;
				}
			}
		}
	}
}
