import { assert } from "chai"
import { mergeSort } from "../Sorting/Merge Sort.js"
import { quickSort } from "../Sorting/Quick Sort.js"

describe("Testing Sorting Algos", () => {
  it("mergeSort works as expected with only numbers", () => {
    const testArray = [2, 3, 1, 6, 4, 5, 9, 0, 7, 10, 8]
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const actual = mergeSort(testArray)
    assert.deepEqual(actual, expected)
  })
  it("mergeSort works as expected with letters and numbers", () => {
    const testArray = ["a", "A", "x", "y", "z", "1"]
    const expected = ["1", "A", "a", "x", "y", "z"]
    const actual = mergeSort(testArray)
    assert.deepEqual(actual, expected)
  })
  it("quickSort works as expected with only numbers", () => {
    const testArray = [2, 3, 1, 6, 4, 5, 9, 0, 7, 10, 8]
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const actual = quickSort(testArray, 0, testArray.length - 1)
    assert.deepEqual(actual, expected)
  })
  it("quickSort works as expected with letters and numbers", () => {
    const testArray = ["a", "A", "x", "y", "z", "1"]
    const expected = ["1", "A", "a", "x", "y", "z"]
    const actual = quickSort(testArray, 0, testArray.length - 1)
    assert.deepEqual(actual, expected)
  })
})
