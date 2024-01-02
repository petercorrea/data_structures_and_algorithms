import { assert } from "chai"
import { regions } from "../Surrounded Regions"

describe("Testing Surrounded Regions", () => {
  it("Test 1", () => {
    const input = [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"]]
    const expected = [
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"]]
    const actual = regions(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [["X"]]
    const expected = [["X"]]
    const actual = regions(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]
    const expected = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]
    const actual = regions(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = [
      ["X", "O", "X", "X"],
      ["O", "X", "O", "X"],
      ["X", "O", "X", "O"],
      ["O", "X", "O", "X"],
      ["X", "O", "X", "O"],
      ["O", "X", "O", "X"]]
    const expected = [
      ["X", "O", "X", "X"],
      ["O", "X", "X", "X"],
      ["X", "X", "X", "O"],
      ["O", "X", "X", "X"],
      ["X", "X", "X", "O"],
      ["O", "X", "O", "X"]]
    const actual = regions(input)
    assert.deepEqual(actual, expected)
  })
})
