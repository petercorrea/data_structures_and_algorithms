import { assert } from "chai"
import { subsets } from "./subsets"

describe("Testing Subsets", () => {
  it("Test 1", () => {
    const input = [1, 2, 3]
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
    const actual = subsets(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [0]
    const expected = [[], [0]]
    const actual = subsets(input)
    assert.deepEqual(actual, expected)
  })
})
