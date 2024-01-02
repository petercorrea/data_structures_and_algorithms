import { assert } from "chai"
import { numberOfIslands } from "../Number of Islands"

describe("Testing Number of Islands", () => {
  it("Test 1", () => {
    const input = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
    ]
    const expected = 1
    const actual = numberOfIslands(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"]
    ]
    const expected = 3
    const actual = numberOfIslands(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [
      ["1", "1", "1"],
      ["0", "1", "0"],
      ["1", "1", "1"]
    ]
    const expected = 1
    const actual = numberOfIslands(input)
    assert.deepEqual(actual, expected)
  })
})
