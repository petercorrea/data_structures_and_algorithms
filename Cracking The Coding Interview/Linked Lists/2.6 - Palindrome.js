// Problem Statement:
//Implement a function to check if a linked list is a palindrome.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
const { Node } = require("../../Linked Lists/LinkedList");
let node8 = new Node(1, null, null);
let node7 = new Node(2, null, node8);
let node6 = new Node(3, null, node7);
let node5 = new Node("x", null, node6);
let node4 = new Node("x", null, node5);
let node3 = new Node(3, null, node4);
let node2 = new Node(2, null, node3);
let node1 = new Node(1, null, node2);

let palindrome = (list) => {
	let len = length(list);

	let result = recurse(list, len);
	if (result == null) {
		return true;
	} else {
		return false;
	}
};

function length(list) {
	let len = 0;
	while (list) {
		len++;
		list = list.next;
	}

	return len;
}

function recurse(list, length) {
	if (length == 2) {
		if (list.value == list.next.value) {
			return list.next.next;
		}
	} else if (length == 1) {
		return list.next;
	}

	let value = recurse(list.next, length - 2);

	if (list.value == value.value) {
		return value.next;
	} else {
		return false;
	}
}

// Test
console.log(palindrome(node1)); // result

// Notes after implementing:
//
