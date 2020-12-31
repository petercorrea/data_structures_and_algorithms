// Problem Statement:
// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// Clarifing Questions:
// 	- Do we have access to the head? - No.

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

const { Node } = require("../../Linked Lists/LinkedList");
let node8 = new Node(8, null, null);
let node7 = new Node(7, null, node8);
let node6 = new Node(6, null, node7);
let node5 = new Node(5, null, node6);
let node4 = new Node(4, null, node5);
let node3 = new Node(3, null, node4);
let node2 = new Node(2, null, node3);
let node1 = new Node(1, null, node2);

let deleteNode = (node) => {
	if (node == null || node.next == null) return false;
	node.value = node.next.value;
	node.next = node.next.next;
	return node;
};

// Test
console.log(deleteNode(node4)); // result

// Notes after implementing:
//
