const { expect, assert } = require("chai");
const { myBST, jsonToTree } = require("../Trees/Binary Search Tree");
const { branchSums } = require("../Trees/Branch Sums");
const { nodeDepths } = require("../Trees/Node Depths");

const tests = {
	0: {
		input: {
			tree: {
				nodes: [
					{ id: "1", left: "2", right: "3", value: 1 },
					{ id: "2", left: "4", right: "5", value: 2 },
					{ id: "3", left: "6", right: "7", value: 3 },
					{ id: "4", left: "8", right: "9", value: 4 },
					{ id: "5", left: "10", right: null, value: 5 },
					{ id: "6", left: null, right: null, value: 6 },
					{ id: "7", left: null, right: null, value: 7 },
					{ id: "8", left: null, right: null, value: 8 },
					{ id: "9", left: null, right: null, value: 9 },
					{ id: "10", left: null, right: null, value: 10 },
				],
				root: "1",
			},
		},
		output: [15, 16, 18, 10, 11],
	},

	1: {
		input: {
			tree: {
				nodes: [{ id: "1", left: null, right: null, value: 1 }],
				root: "1",
			},
		},
		output: [1],
	},
};

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

	// test as only
	it.skip("removing 12 and replacing with 13", () => {
		myBST.remove(12);
		assert.equal(myBST.contains(12), false);
		assert.equal(myBST.root.right.value, 13);
	});
});

describe("Testing Branch Sum Problem", () => {
	it("test case 1", () => {
		const root = jsonToTree(tests[0].input);
		const actual = branchSums(root);
		const expected = tests[0].output;
		assert.deepEqual(actual, expected);
	});

	it("test case 2", () => {
		const root = jsonToTree(tests[1].input);
		const actual = branchSums(root);
		const expected = tests[1].output;
		assert.deepEqual(actual, expected);
	});
});
