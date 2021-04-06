const { mergeSort } = require("../../Sorting/Merge Sort");
const { quickSort } = require("../../Sorting/Quick Sort");
const { expect, assert } = require("chai");

describe("Testing Sorting Algos", () => {
	it("mergeSort works as expected with only numbers", () => {
		let testArray = [2, 3, 1, 6, 4, 5, 9, 0, 7, 10, 8];
		let expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let actual = mergeSort(testArray);
		assert.deepEqual(actual, expected);
	});

	it("mergeSort works as expected with letters and numbers", () => {
		let testArray = ["a", "A", "x", "y", "z", "1"];
		let expected = ["1", "A", "a", "x", "y", "z"];
		let actual = mergeSort(testArray);
		assert.deepEqual(actual, expected);
	});

	it("quickSort works as expected with only numbers", () => {
		let testArray = [2, 3, 1, 6, 4, 5, 9, 0, 7, 10, 8];
		let expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let actual = quickSort(testArray, 0, testArray.length - 1);
		assert.deepEqual(actual, expected);
	});

	it("quickSort works as expected with letters and numbers", () => {
		let testArray = ["a", "A", "x", "y", "z", "1"];
		let expected = ["1", "A", "a", "x", "y", "z"];
		let actual = quickSort(testArray, 0, testArray.length - 1);
		assert.deepEqual(actual, expected);
	});
});
