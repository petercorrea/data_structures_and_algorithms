// Problem Statement:
//Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree such that
// the heights of the two subtrees of any node never differ by more than one.

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
console.log(checkBalanced(sampleBalancedTree));
console.log(checkBalanced(sampleUnbalancedTree));

// Notes after implementing:
//

// From AlgoExpert
function heightBalancedBinaryTree(tree) {
	function maxHeight(tree) {
		if (!tree.right && !tree.left) return 1;
		let leftHeight = tree.left ? maxHeight(tree.left) : 0;
		let rightHeight = tree.right ? maxHeight(tree.right) : 0;
		return Math.max(leftHeight, rightHeight) + 1;
	}

	function isBalanced(tree) {
		if (!tree.right && !tree.left) return true;
		let leftHeight = tree.left ? maxHeight(tree.left) : 0;
		let rightHeight = tree.right ? maxHeight(tree.right) : 0;
		let balanceResult = Math.abs(leftHeight - rightHeight) > 1 ? false : true;
		return balanceResult;
	}

	function recurse(tree) {
		if (!tree) {
			return true;
		}

		let leftNode = recurse(tree.left);
		let rightNode = recurse(tree.right);

		if (!leftNode || !rightNode) {
			return false;
		}

		let isLeftBalanced = tree.left !== null ? isBalanced(tree.left) : true;
		let isRightBalanced = tree.right !== null ? isBalanced(tree.right) : true;

		if (isLeftBalanced && isRightBalanced) {
			return isBalanced(tree);
		}
		return isLeftBalanced && isRightBalanced;
	}

	return recurse(tree);
}

console.log(heightBalancedBinaryTree(sampleBalancedTree));
console.log(heightBalancedBinaryTree(sampleUnbalancedTree));
