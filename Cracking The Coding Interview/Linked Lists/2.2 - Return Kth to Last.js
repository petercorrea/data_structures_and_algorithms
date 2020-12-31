// Problem Statement: Implement an algorithm to find the kth to last element of a singly linked list.
//

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
let node7 = new Node(7, null, node8);
let node6 = new Node(6, null, node7);
let node5 = new Node(5, null, node6);
let node4 = new Node(4, null, node5);
let node3 = new Node(3, null, node4);
let node2 = new Node(2, null, node3);
let node1 = new Node(1, null, node2);

let kth = (head, k) => {
	let p1 = head;
	let p2 = head;

	for (let i = 0; i <= k - 1; i++) {
		if (p2 == null) return null;
		p2 = p2.next;
	}

	while (p2.next != null) {
		p1 = p1.next;
		p2 = p2.next;
	}

	return p1;
};

// Test
console.log(kth(node1, 3)); // result

// Notes after implementing:
//
