// Given a BST, determine the total sum of all node depths.

// TC: n
// SC: h
function nodeDepths(root) {
	const sum = (root, depth = 0, total = 0) => {
		if (root.left === null && root.right === null) {
			return depth;
		}
		const left = root.left ? sum(root.left, depth + 1) : 0;
		const right = root.right ? sum(root.right, depth + 1) : 0;
		return left + right + depth;
	};

	return sum(root);
}

module.exports = {
	nodeDepths,
};
