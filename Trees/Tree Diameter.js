// Given a tree, determine the largest diameter.
// The diameter is defined as the longest path between any two paths.
// The path doesnt have to go through the root.

function binaryTreeDiameter(tree) {
	// Write your code here.
	function recurse(node) {
		if (!node) {
			return {
				maxLength: 0,
				height: 0,
			};
		}

		let left = recurse(node.left);
		let right = recurse(node.right);
		let currentHeight = Math.max(left.height, right.height) + 1;
		let length = left.height + right.height;

		return {
			height: currentHeight,
			maxLength: Math.max(Math.max(left.maxLength, right.maxLength), length),
		};
	}

	let result = recurse(tree);
	return result.maxLength;
}
