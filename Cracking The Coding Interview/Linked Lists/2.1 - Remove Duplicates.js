// Problem Statement:
// 		Write code to remove duplicates from an unsorted linked list.
// 		How would you solve this problem if a temporary buffer is not allowed?

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

const { Node } = require("../../Linked Lists/LinkedList");

let node8 = new Node(8, null, null);
let node7 = new Node(3, null, node8); // dupe
let node6 = new Node(4, null, node7); // dupe
let node5 = new Node(52, null, node6);
let node4 = new Node(4, null, node5);
let node3 = new Node(3, null, node4);
let node2 = new Node(12, null, node3);
let node1 = new Node(10, null, node2);

let removeDups = (node) => {
	let map = new Map();
	let firstNode = node;
	let prev = null;

	while (node != null) {
		if (map.has(node.value)) {
			prev.next = node.next;
		} else {
			map.set(node.value, node);
		}

		prev = node;
		node = node.next;
	}

	return firstNode;
};

// Test
console.log(removeDups(node1)); // 10 -> 12 -> 3 -> 4 -> 52 -> 8

// Notes after implementing:
//
