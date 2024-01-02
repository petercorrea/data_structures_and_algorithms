import { assert } from "chai"
import { subset } from "./subsets_2"

describe.skip("Testing Subsets ||", () => {
  it("Test 1", () => {
    const input = [1, 2, 2]
    const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
    const actual = subset(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [0]
    const expected = [[], [0]]
    const actual = subset(input)
    assert.deepEqual(actual, expected)
  })
})
