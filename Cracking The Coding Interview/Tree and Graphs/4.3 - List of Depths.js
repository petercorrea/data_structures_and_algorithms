// Problem Statement:
// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
const { Node, dbLinkedList } = require("../../Linked Lists/LinkedList");
const { sampleBST } = require("./Sample BST");

let nLinkedLists = (tree) => {
	let queue = [tree.root];
	let head = new dbLinkedList();
	head.tail = new Node(null, null, null);
	let listPointer = head.tail;
	let treePointer;
	let level = 1;
	let count = 0;

	while (queue.length > 0) {
		treePointer = queue.shift();
		count++;

		if (treePointer.left) {
			queue.push(treePointer.left);
		}

		if (treePointer.right) {
			queue.push(treePointer.right);
		}

		if (level == count) {
			level *= 2;
			count = 0;
			listPointer.value = treePointer.value;
			newList = new dbLinkedList();
			listPointer.next = newList;
			listPointer = listPointer.next;
			listPointer.tail = new Node(null, null, null);
			listPointer = listPointer.tail;
			continue;
		}

		listPointer.value = treePointer.value;
		listPointer.next = new Node(null, null, null);
		listPointer = listPointer.next;
	}

	console.log(head);
	console.log(head.tail);
	console.log(head.tail.next);
	console.log(head.tail.next.tail);
	console.log(head.tail.next.tail.next);
	console.log(head.tail.next.tail.next.next);
	console.log(head.tail.next.tail.next.next.tail);
	console.log(head.tail.next.tail.next.next.tail.next);
	console.log(head.tail.next.tail.next.next.tail.next.next);
	console.log(head.tail.next.tail.next.next.tail.next.next.next);
	console.log(head.tail.next.tail.next.next.tail.next.next.next.next);

	return head;
};

// Test
console.log(nLinkedLists(sampleBST)); // result

// Notes after implementing:
//
