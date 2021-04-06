const { expect, assert } = require("chai");
const { BST } = require("../../Trees/Binary Search Tree");

const myBST = new BST(8);
// Left side
myBST.insert(4);
myBST.insert(2);
myBST.insert(6);
myBST.insert(1);
myBST.insert(3);
myBST.insert(5);
myBST.insert(7);

// Right side
myBST.insert(12);
myBST.insert(10);
myBST.insert(9);
myBST.insert(11);
myBST.insert(14);
myBST.insert(13);
myBST.insert(15);

describe("Testing Binary Tree Implemenation", () => {
	it("tree was created", () => {
		assert.isNotNull(myBST);
	});

	it("root node returns 8", () => {
		assert.strictEqual(myBST.root.value, 8);
	});

	it("count function returns 15", () => {
		assert.equal(myBST.count(), 15);
	});

	it("dfs - preorder", () => {
		const actual = myBST.dfsPreOrder();
		const expected = [8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15];

		assert.deepEqual(actual, expected);
	});

	it("dfs - inorder", () => {
		const actual = myBST.dfsInOrder();
		const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

		assert.deepEqual(actual, expected);
	});

	it("dfs - postorder", () => {
		const actual = myBST.dfsPostOrder();
		const expected = [1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8];

		assert.deepEqual(actual, expected);
	});

	it("bfs", () => {
		const actual = myBST.bfs();
		const expected = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];

		assert.deepEqual(actual, expected);
	});

	it("removing 12 and replacing with 13", () => {
		myBST.remove(12);
		assert.equal(myBST.contains(12), false);
		assert.equal(myBST.root.right.value, 13);
	});
});
