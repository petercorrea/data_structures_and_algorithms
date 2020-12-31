const { Node } = require("./Linked Lists/LinkedList");
let node11 = new Node(1, null, null);
let num2 = new Node(1, null, node11);

let node9 = new Node(1, null, null);
let node8 = new Node(9, null, node9);
let node7 = new Node(9, null, node8);
let num1 = new Node(1, null, node7);

// Main Function
function sumLinkedList(l1, l2) {
	if (!l1 && !l2) return null;

	let L1length = length(l1);
	let L2length = length(l2);

	if (L1length > L2length) {
		l2 = pad(l2, L1length - L2length);
	} else {
		l1 = pad(l1, L2length - L1length);
	}

	const { previousSumNode, currentSum } = carry(sum(l1, l2), 0);
	return currentSum
		? append(previousSumNode, new Node(currentSum, null, null))
		: previousSumNode;
}

// Utility Functions
function length(node) {
	let len = 0;

	while (node) {
		len++;
		node = node.next;
	}

	return len;
}

function pad(node, padding) {
	while (padding != 0) {
		let newNode = new Node(0, null, null);
		newNode.next = node;
		node = newNode;
		padding--;
	}

	return node;
}

function append(head, node) {
	node.next = head;
	return node;
}

function carry(previousSumNode, currentSum) {
	if (previousSumNode.value >= 10) {
		previousSumNode.value = previousSumNode.value % 10;
		currentSum++;
	}

	return {
		previousSumNode,
		currentSum,
	};
}

function sum(l1, l2) {
	if (!l1.next && !l2.next) {
		return new Node(l1.value + l2.value, null, null);
	}

	let value = l1.value + l2.value;
	let nextSum = sum(l1.next, l2.next);

	const { previousSumNode, currentSum } = carry(nextSum, value);
	return append(previousSumNode, new Node(currentSum, null, null));
}

console.log(sumLinkedList(num1, num2));
