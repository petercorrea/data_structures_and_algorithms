// Problem Statement:
//Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//check heights
const { sampleBalancedTree, sampleUnbalancedTree } = require("./Sample Tree");

let checkBalanced = (root) => {
	if (!root.left && !root.right) {
		return 1;
	}

	let leftHeight = 0;
	let rightHeight = 0;

	if (root.left) {
		leftHeight = checkBalanced(root.left);
	}

	if (root.right) {
		rightHeight = checkBalanced(root.right);
	}

	if (Math.abs(leftHeight - rightHeight) == 1) {
		return Math.max(leftHeight, rightHeight) + 1;
	} else {
		return false;
	}
};

// Test
console.log(checkBalanced(sampleBalancedTree)); // result
console.log(checkBalanced(sampleUnbalancedTree)); // result

// Notes after implementing:
//
