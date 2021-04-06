class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	leftHeight() {
		if (!this.left) {
			return 0;
		}

		return this.left.height() + 1;
	}

	rightHeight() {
		if (!this.right) {
			return 0;
		}

		return this.right.height() + 1;
	}

	height() {
		return Math.max(this.leftHeight(), this.rightHeight());
	}

	balanceFactor() {
		return this.leftHeight() - this.rightHeight();
	}
}

class BST {
	constructor(value) {
		this.root = new Node(value);
		this.size = 1;
	}

	count() {
		return this.size;
	}

	insert(value) {
		this.size++;

		let newNode = new Node(value);

		const searchTree = (node) => {
			// left
			if (value < node.value) {
				if (!node.left) {
					node.left = newNode;
					newNode.parent = node;
				} else {
					searchTree(node.left);
				}
				// right
			} else if (value > node.value) {
				if (!node.right) {
					node.right = newNode;
					newNode.parent = node;
				} else {
					searchTree(node.right);
				}
			}
		};

		searchTree(this.root);
	}

	min() {
		let current = this.root;

		while (current.left) {
			current = current.left;
		}

		return current.value;
	}

	max() {
		let current = this.root;

		while (current.right) {
			current = current.right;
		}

		return current.value;
	}

	minHeight(current = this.root) {
		if (current == null) {
			return -1;
		}

		// dfs
		let left = this.minHeight(current.left);
		let right = this.minHeight(current.right);

		if (left < right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}

	maxHeight(current = this.root) {
		if (current == null) {
			return -1;
		}

		// dfs
		let left = this.maxHeight(current.left);
		let right = this.maxHeight(current.right);

		if (left > right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}

	isBalanced() {
		return this.maxHeight() - this.minHeight() <= 1;
	}

	contains(value) {
		let current = this.root;

		while (current) {
			if (value === current.value) {
				return true;
			}

			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			}
		}

		return false;
	}

	remove(value) {
		const removeNode = (current, value) => {
			if (current == null) {
				return null;
			}
			// if node is found
			if (value == current.value) {
				// node has no child
				if (current.left == null && current.right == null) {
					return null;
				}

				// node has no left child
				if (current.left == null) {
					return current.right;
				}

				// node has no right child
				if (current.right == null) {
					return current.left;
				}

				// node has both childs, go to right node, then find leftmost grandchild
				let leftmostGC = current.right;
				while (leftmostGC.left !== null) {
					leftmostGC = leftmostGC.left;
				}
				current.value = leftmostGC.value;
				// fix the right side
				current.right = removeNode(current.right, leftmostGC.value);
				return current;
			} else if (value < current.value) {
				current.left = removeNode(current.left, value);
				return current;
			} else {
				current.right = removeNode(current.right, value);
				return current;
			}
		};
		this.root = removeNode(this.root, value);
	}

	// Depth First Search - In Order
	// Left, Root, Right
	dfsInOrder() {
		let result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);

			result.push(node.value);

			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// Depth First Search - Pre Order
	// Root, Left, Right
	dfsPreOrder() {
		let result = [];

		const traverse = (node) => {
			result.push(node.value);

			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// Depth First Search - Post Order
	// Left, Right, Root
	dfsPostOrder() {
		let result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);

			result.push(node.value);
		};

		traverse(this.root);

		return result;
	}

	// Breadth First Search - uses queue
	bfs() {
		let result = [];
		let queue = [];

		if (this.root) {
			queue.push(this.root);
			while (queue.length) {
				let current = queue.shift();
				result.push(current.value);

				if (current.left) {
					queue.push(current.left);
				}

				if (current.right) {
					queue.push(current.right);
				}
			}
		}

		return result;
	}

	minHeightBfs() {
		let result = 0;
		let queue = [];

		queue.push(this.root);

		while (queue.length) {
			// console.log(queue.length)
			let loops = queue.length;
			result += 1;

			for (let i = 0; i < loops; i++) {
				let current = queue.shift();

				if (current.left == null && current.right == null) {
					return result;
				}

				if (current.right) {
					queue.push(current.right);
				}

				if (current.left) {
					queue.push(current.left);
				}
			}
		}
	}
}

const jsonToTree = (json) => {
	let nodes = {};

	json.tree.nodes.forEach((node) => {
		nodes[node.value] = new Node(node.value);
	});

	json.tree.nodes.forEach((node) => {
		nodes[node.value].left = nodes[node.left];
		nodes[node.value].right = nodes[node.right];
		nodes[node.value].parent = nodes[node.parent];
	});

	return nodes[json.tree.root];
};

module.exports = {
	Node,
	BST,
	jsonToTree,
};
