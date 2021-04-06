// Given a tree, determine the largest diameter.
// The diameter is defined as the longest path between any two paths.
// The path doesnt have to go through the root.

function binaryTreeDiameter(tree) {
	function recurse(node) {
		if (!node) {
			return {
				maxLength: 0,
				height: 0,
			};
		}

		let left = recurse(node.left);
		let right = recurse(node.right);

		return {
			height: Math.max(left.height, right.height) + 1,
			maxLength: Math.max(
				left.maxLength,
				right.maxLength,
				left.height + right.height
			),
		};
	}

	let result = recurse(tree);
	return result.maxLength;
}
