// Problem Statement:
//Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
const { Node } = require("../../Trees/Binary Search Tree");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let makeBST = (arr, start = 0, end = arr.length - 1) => {
	if (end < start) return null;

	let mid = Math.floor((start + end) / 2);
	let node = new Node(arr[mid]);
	node.left = makeBST(arr, start, mid - 1);
	node.right = makeBST(arr, mid + 1, end);
	return node;
};

// Test
let result = makeBST(arr);
console.log(result.right); // result

// Notes after implementing:
// the (end < start) works as the base case because the recursion
// will continue until a call to a single index is made
// imagine indices 0, 1, 2;
// idx: 1 as the mid would make two calls to indices 0 and 2
// the calls would be (arr, 0, 0) and (arr, 2, 2)
// these two calls will subsequently each make two more calls
// (arr, 0, -1), (arr, 1, 0) and (2, 1), (3, 2)
