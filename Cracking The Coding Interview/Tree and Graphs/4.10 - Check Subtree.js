// Problem Statement:
// T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a findMatchingRoots of T1.
// A tree T2 is a findMatchingRoots of T1 if there exists a node n in T1 such that the findMatchingRoots of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

const { inOrderTree, BSTree } = require("./Sample Tree");

let contains = (root1, root2) => {
	if (root2 == null) return true;
	return findMatchingRoots(root1, root2);
};

let findMatchingRoots = (root1, root2) => {
	if (root1 == null) {
		return false;
	} else if (root1.value == root2.value && matchTree(root1, root2)) {
		return true;
	}
	return (
		findMatchingRoots(root1.left, root2) ||
		findMatchingRoots(root1.right, root2)
	);
};

let matchTree = (root1, root2) => {
	if (root1 == null && root2 == null) {
		return true;
	} else if (root1 == null || root2 == null) {
		return false;
	} else if (root1.value != root2.value) {
		return false;
	} else {
		return (
			matchTree(root1.left, root2.left) && matchTree(root1.right, root2.right)
		);
	}
};

// Test
console.log(contains(inOrderTree, inOrderTree)); // result
console.log(contains(inOrderTree, BSTree)); // result

// Notes after implementing:
//
